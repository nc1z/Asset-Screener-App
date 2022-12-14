import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const router = express.Router();

router.post(
"/signup",
body("email").isEmail().withMessage("Invalid email"),
body("password").isLength({min: 8}).withMessage("Password is too short"),
async (req,res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map(error => {
            return {
                msg: error.msg
            }
        });
        return res.json({errors, data:""})
    };

    const { email, password } = req.body;

    const user = await User.findOne({email});

    if (user) {
        return res.json({
            errors: [
                {
                    msg: "Email already in use",
                },
            ],
            data:"",
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
        email,
        password: hashedPassword
    });

    const token = await JWT.sign(
        {email: newUser.email},
        process.env.JWT_SECRET,
        {
            expiresIn: "3h"
        }
    )

    res.json({
        errors: "",
        data: {
            token,
            user: {
                id: newUser.id,
                email: newUser.email
            }
        }
    });
});
export default router;
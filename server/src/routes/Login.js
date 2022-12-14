import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import Signup from "./Signup.js";

const router = express.Router();

router.post("/login", async(req,res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});

    if (!user) {
        return res.json({
            errors: [
                {
                    msg: "Invalid Credentials"
                }
            ],
            data: ""
        })
    }

    const ifMatch = await bcrypt.compare(password, user.password);

    if (!ifMatch) {
        return res.json({
            errors: [
                {
                    msg: "Invalid Credentials"
                }
            ],
            data: ""
        })
    }

    const token = await JWT.sign(
        {email: user.email},
        process.env.JWT_SECRET,
        {
            expiresIn: "3h"
        }
    );

    return res.json({
        errors: "",
        data: {
            token,
            user: {
                id: user.id,
                email: user.email
            }
        }
    });
});
export default router;
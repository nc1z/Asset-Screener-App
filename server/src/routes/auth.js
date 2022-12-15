import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import checkAuth from "../middleware/checkAuth.js";

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

router.get("/user", checkAuth, async (req,res) => {
    const user = await User.findOne({email: req.user});

    return res.json({
        errors: "",
        data: {
            user: {
                id: user.id,
                email: user.email
            }
        }
    });
});

export default router;
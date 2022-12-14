import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";

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

    res.json(user);
});
export default router;
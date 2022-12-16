import JWT from "jsonwebtoken";
import express from "express";

const checkAuth = async (req, res, next) => {
    let token = req.header("authorization");

    if (!token) {
        return res.status(403).json({
            data: "",
            error: [
                {
                    msg: "Unauthorized"
                }
            ],
        });
    };

    token = token.split(" ")[1];

    try {
        const user = await JWT.verify (
            token,  
            process.env.JWT_SECRET,
        );
        req.user = user.email;
        next()
    } catch (error) {
        return res.status(403).json({
            data: "",
            error: [
                {
                    msg: "Unauthorized",
                }
            ],
        });
    };
};
export default checkAuth;
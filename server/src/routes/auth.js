import express from "express";

const router = express.Router();

router.post("/signup", async (req,res) => {
    const { email, password } = req.body;
    res.json({
        email,
        password
    })
});
export default router;
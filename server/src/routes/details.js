import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import Portfolio from "../models/portfolio.js";
import Watchlist from "../models/watchlist.js";

const router = express.Router();
// rmb to add checkAuth here

router.get("/watchlist", async(req,res) => {
    try {
        // const userWatchlist = await Watchlist.findOne({email: req.user})
        const userWatchlist = await Watchlist.findOne({email: req.user})
        if (!userWatchlist) {
            return res.status(400).json({
                data: "",
                error: "No Watchlist Found"
            })
        }
        return res.status(200).json({
            data: userWatchlist,
            error: "",
        })
    } catch (error) {
        return res.status(400).json({
            data: "",
            error: error.message,
        });
    }
});
export default router;
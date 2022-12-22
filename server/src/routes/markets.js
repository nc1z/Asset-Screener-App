import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import axios from "axios";

const router = express.Router();

router.get("/crypto", checkAuth, async (req, res) => {
  let selectedPage = req.query.page;
  if (!selectedPage || selectedPage < 2) {
    selectedPage = "1";
  }
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=${selectedPage}&sparkline=false`,
      {
        headers: {
          "Accept-Encoding": "gzip,deflate,compress",
        },
      }
    );
    if (!response.data) {
      return res.status(400).json({
        data: "",
        error: "No Response Found",
      });
    }
    return res.status(200).json({
      data: response.data,
      error: "",
    });
  } catch (error) {
    return res.status(400).json({
      data: "",
      error: error.message,
    });
  }
});
export default router;

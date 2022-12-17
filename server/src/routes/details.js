import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import Portfolio from "../models/portfolio.js";
import Watchlist from "../models/watchlist.js";
import { v4 as uuid } from "uuid";
import moment from "moment";

const router = express.Router();

router.get("/watchlist", checkAuth, async (req, res) => {
  try {
    const userWatchlist = await Watchlist.findOne({ email: req.user });
    if (!userWatchlist) {
      return res.status(400).json({
        data: "",
        error: "No Watchlist Found",
      });
    }
    return res.status(200).json({
      data: userWatchlist,
      error: "",
    });
  } catch (error) {
    return res.status(400).json({
      data: "",
      error: error.message,
    });
  }
});

router.get("/portfolio", checkAuth, async (req, res) => {
  try {
    const userPortfolio = await Portfolio.findOne({ email: req.user });
    if (!userPortfolio) {
      return res.status(400).json({
        data: "",
        error: "No Portfolio Found",
      });
    }
    return res.status(200).json({
      data: userPortfolio,
      error: "",
    });
  } catch (error) {
    return res.status(400).json({
      data: "",
      error: error.message,
    });
  }
});

router.put("/watchlist", checkAuth, async (req, res) => {
  try {
    const userWatchlist = await Watchlist.findOne({ email: req.user });
    if (!userWatchlist) {
      return res.status(400).json({
        data: "",
        error: "No Watchlist Found",
      });
    }
    const ifDuplicate = userWatchlist.items.some(
      (asset) => asset.coin == req.body.coin
    );
    if (ifDuplicate) {
      return res.status(400).json({
        data: "",
        error: "Asset Already in Watchlist",
      });
    }
    const watchlist = {
      symbol: req.body.symbol,
      coin: req.body.coin,
      image: req.body.image,
    };
    const updatedWatchlist = await Watchlist.findOneAndUpdate(
      { email: req.user },
      {
        $push: {
          items: watchlist,
        },
        new: true,
      }
    );
    if (!updatedWatchlist) {
      return res.status(400).json({
        data: "",
        error: "Watchlist Update Failed",
      });
    }
    return res.status(200).json({
      data: updatedWatchlist,
      error: "",
    });
  } catch (error) {
    return res.status(400).json({
      data: "",
      error: error.message,
    });
  }
});

router.put("/portfolio", checkAuth, async (req, res) => {
  try {
    const userPortfolio = await Portfolio.findOne({ email: req.user });
    if (!userPortfolio) {
      return res.status(400).json({
        data: "",
        error: "No Portfolio Found",
      });
    }
    const selectedAsset = userPortfolio.currentAssets.filter(
      (asset) => asset.name == req.body.asset
    );

    if (
      (selectedAsset[0].value === 0 && req.body.order === "Remove") ||
      (req.body.order === "Remove" &&
        selectedAsset[0].value - req.body.amount < 0)
    ) {
      return res.status(400).json({
        data: "",
        error: "Invalid Transaction - Negative Balance",
      });
    }

    let updatedAmount;
    if (req.body.order === "Remove") {
      updatedAmount = req.body.amount * -1;
    } else {
      updatedAmount = req.body.amount;
    }

    const ticket = {
      ticketid: uuid(),
      datetime: moment().format("MMMM Do YYYY, h:mm:ss a"),
      asset: req.body.asset,
      order: req.body.order,
      amount: updatedAmount,
    };

    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { email: req.user },
      {
        $push: {
          tickets: ticket,
        },
        $inc: {
          "currentAssets.$[asset].value": ticket.amount,
        },
      },
      {
        arrayFilters: [
          {
            "asset.name": ticket.asset,
          },
        ],
        new: true,
      }
    );
    if (!updatedPortfolio) {
      return res.status(400).json({
        data: "",
        error: "Update Failed",
      });
    }
    return res.status(200).json({
      data: updatedPortfolio,
      error: "",
    });
  } catch (error) {
    return res.status(400).json({
      data: "",
      error: error.message,
    });
  }
});

router.delete("/watchlist", checkAuth, async (req, res) => {
  try {
    const userWatchlist = await Watchlist.findOne({ email: req.user });
    if (!userWatchlist) {
      return res.status(400).json({
        data: "",
        error: "No Watchlist Found",
      });
    }
    const watchlist = {
      symbol: req.body.symbol,
      coin: req.body.coin,
      image: req.body.image,
    };
    const updatedWatchlist = await Watchlist.findOneAndUpdate(
      { email: req.user },
      {
        $pull: {
          items: watchlist,
        },
        new: true,
      }
    );
    if (!updatedWatchlist) {
      return res.status(400).json({
        data: "",
        error: "Watchlist Update Failed",
      });
    }
    return res.status(200).json({
      data: updatedWatchlist,
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

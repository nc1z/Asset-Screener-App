import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import checkAuth from "../middleware/checkAuth.js";
import Portfolio from "../models/portfolio.js";
import Watchlist from "../models/watchlist.js";

const router = express.Router();

router.post(
  "/signup",
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password should be at least 8 characters"),
  async (req, res) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });
      return res.status(400).json({ data: "", error: errors });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        data: "",
        error: [
          {
            msg: "Email already in use",
          },
        ],
      });
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        email,
        password: hashedPassword,
      });

      const token = await JWT.sign(
        { email: newUser.email },
        process.env.JWT_SECRET,
        {
          expiresIn: 86400,
        }
      );

      await Portfolio.create({
        email,
        currentAssets: [
          { name: "BTC", value: 0 },
          { name: "ETH", value: 0 },
          { name: "USDT", value: 0 },
        ],
        tickets: [],
      });

      await Watchlist.create({
        email,
        items: [],
      });

      return res.status(200).json({
        data: {
          token,
          user: {
            id: newUser.id,
            email: newUser.email,
          },
        },
        error: "",
      });
    } catch (error) {
      return res.status(400).json({
        data: "",
        error: error.message,
      });
    }
  }
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(403).json({
      data: "",
      error: [
        {
          msg: "Invalid Credentials",
        },
      ],
    });
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(403).json({
        data: "",
        error: [
          {
            msg: "Invalid Credentials",
          },
        ],
      });
    }

    const token = await JWT.sign(
      { email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: 86400,
      }
    );

    return res.status(200).json({
      data: {
        token,
        user: {
          id: user.id,
          email: user.email,
        },
      },
      error: "",
    });
  } catch (error) {
    return res.status(400).json({
      data: "",
      error: [
        {
          msg: error.message,
        },
      ],
    });
  }
});

router.get("/user", checkAuth, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user });

    return res.status(200).json({
      data: {
        user: {
          id: user.id,
          email: user.email,
        },
      },
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

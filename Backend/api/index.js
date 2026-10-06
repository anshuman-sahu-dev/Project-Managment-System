import dotenv from "dotenv";
import app from "../src/app.js";
import connectDB from "../src/db/db.js";

dotenv.config();

let isConnected = false;

async function handler(req, res) {
  try {
    if (!isConnected) {
      await connectDB();
      isConnected = true;
    }

    return app(req, res);
  } catch (error) {
    console.error("Database connection error:", error);

    return res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
}

export default handler;
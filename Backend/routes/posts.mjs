import express from "express";
import { Card } from "../db/models.mjs";
import {  verifyCloudProof } from '@worldcoin/idkit'


const router = express.Router();

// Fetch all card details, including episodes
router.get("/cards", async (req, res) => {
  try {
      const cards = await Card.find({});
      res.json(cards);  // This will include the episodes as well
  } catch (error) {
      res.status(500).json({ message: "Error fetching cards", error });
  }
});

// Fetch all card details but without episodes
router.get("/cards/header", async (req, res) => {
  try {
      const cards = await Card.find({}, 'title imageURL date time rating');
      res.json(cards);  // This will only include card attributes and exclude episodes
  } catch (error) {
      res.status(500).json({ message: "Error fetching cards without episodes", error });
  }
});

router.get("/cards/:_id", async (req, res) => {
  const { _id } = req.params;

  try {
      const card = await Card.findById(_id, 'title imageURL date time rating episodes marketItems eventItems');
      if (!card) {
          return res.status(404).json({ message: "Card not found" });
      }
      res.json(card);
  } catch (error) {
      res.status(500).json({ message: "Error fetching card details", error });
  }
});

router.post("/api/verify", async (req, res) => {
    console.log("Verification endpoint hit");
    
    // Extracting proof data from the request body
    const proof = req.body;
    const app_id = "app_staging_bc5a5eb38834b5595b79f3b6691d8c20"
    const action = "verify-id"

    try {
        // Call your verification function with the proof, app ID, and action
        const verifyRes = await verifyCloudProof(proof, app_id, action);

        if (verifyRes.success) {
            // Handle successful verification logic (e.g., update user status in the database)
            res.status(200).send(verifyRes);
        } else {
            // Handle verification failure (e.g., user already verified)
            res.status(400).send(verifyRes);
        }
    } catch (error) {
        console.error("Verification error:", error);
        // Handle unexpected errors
        res.status(500).send({ error: "Internal Server Error" });
    }
});

export default router;

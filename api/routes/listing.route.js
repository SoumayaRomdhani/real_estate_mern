import express from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
//we_deleted_verifytoken_because_the_listing_wil_b_shown_later_so_we_dont_need_to_verify_to_see_it
router.get("/get/:id", getListing);
export default router;

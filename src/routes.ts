import express from "express";
import { deleteLink, shorten } from "./controller";

const router = express.Router();

// @ts-ignore
router.post("/shorten", shorten);

// @ts-ignore
router.delete("/delete/:id", deleteLink);

export default router;

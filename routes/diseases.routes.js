import express from "express";
import {
	index,
	show,
	store,
	update,
	destroy,
} from "../controllers/diseases.controller.js";
import authenticateJWT from "../middlewares/auth.js";
import cache from "../middlewares/cache.js";

const router = express.Router();

router.get("/", cache(600), authenticateJWT, index);
router.get("/:id", cache(600), authenticateJWT, show);
router.post("/", authenticateJWT, store);
router.patch("/:id", authenticateJWT, update);
router.delete("/:id", authenticateJWT, destroy);

export default router;

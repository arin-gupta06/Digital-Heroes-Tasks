import express from "express"
import {
    createLead
} from "../controllers/lead.controllers.js"
const router = express.Router();

router.post("/", createLead);

export default router;


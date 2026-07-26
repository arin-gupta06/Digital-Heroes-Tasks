import express from "express"
import { getAllLeads, updateLead } from "../controllers/lead.controllers.js";
const router = express.Router();

router.get("/", getAllLeads);
router.patch("/:id", updateLead)
export default router;
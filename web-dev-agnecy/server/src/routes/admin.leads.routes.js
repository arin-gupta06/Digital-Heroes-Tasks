import express from "express"
import { getAllLeads, updateLead } from "../controllers/lead.controllers.js";
import { verifyAdmin } from "../middlewares/auth.middlewares.js";
import {loginAdmin} from "../controllers/admin.controllers.js";
import { logoutAdmin } from "../controllers/admin.controllers.js";
const router = express.Router();

router.get("/lead", verifyAdmin, getAllLeads);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);

router.patch("/lead/:id", verifyAdmin, updateLead)
export default router;
import express from "express"
import cors from "cors"
import CookieParser from "cookie-parser";
import PublicRouter from "./routes/lead.routes.js"
import AdminRouter from "./routes/admin.leads.routes.js"
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json())
app.use(CookieParser())
app.use("/api/lead", PublicRouter);
app.use("/api/admin", AdminRouter);



export default app;
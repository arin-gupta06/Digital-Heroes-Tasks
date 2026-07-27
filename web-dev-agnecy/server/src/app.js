import express from "express"
import cors from "cors"
import CookieParser from "cookie-parser";
import PublicRouter from "./routes/lead.routes.js"
import AdminRouter from "./routes/admin.leads.routes.js"
const app = express();

const allowedOrigins = [
    process.env.CLIENT_URL,
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    process.env.CLIENT_URL,
].filter(Boolean);

app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
            return;
        }

        callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));
app.use(express.json())
app.use(CookieParser())
app.use("/api/lead", PublicRouter);
app.use("/api/admin", AdminRouter);



export default app;

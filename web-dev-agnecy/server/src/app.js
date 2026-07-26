import express from "express"
import cors from "cors"
import PublicRouter from "./routes/lead.routes.js"
import AdminRouter from "./routes/admin.leads.routes.js"
const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/lead", PublicRouter);
app.use("/api/admin/lead", AdminRouter);


export default app;
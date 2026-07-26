import dotenv from "dotenv";
dotenv.config();
import dns from "dns";
dns.setServers(['8.8.8.8', '1.1.1.1']);

// console.log(process.env.MONGODB_URI); // or MONGODB_URI
import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

await connectDB();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

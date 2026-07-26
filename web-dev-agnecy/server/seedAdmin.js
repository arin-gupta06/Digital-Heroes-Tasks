import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import { Admin } from "./src/models/admin.models.js";


dotenv.config()
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const seedAdmin = async () => {
    try {
        await connectDB();
        const hashedPassword = await bcrypt.hash("admin2244", 10);


        await Admin.create({
            email: "admin@webcraft.com",
            password: hashedPassword,
        });

        console.log("Admin created successfully .")

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
        
    }
};

seedAdmin();
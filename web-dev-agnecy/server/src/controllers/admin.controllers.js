import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {Admin} from "../models/admin.models.js";


export const loginAdmin = async (req, res) => {
    try {
        const {email, password} = req.body;

        const admin = await Admin.findOne({email})

        if(!admin) return res.status(401).json({
            message: "Invalid email or password",
            success: false,
        });

        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch) return res.status(401).json({
            message: "Invalid email or password",
            success: false,
        })

        const token = jwt.sign(
            {adminId: admin._id},
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN_DAYS,
            }
        )
        const isLocalhost = ["localhost", "127.0.0.1"].includes(req.hostname);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" && !isLocalhost,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60* 1000,
        });

        return res.status(200).json({
            success: true,
            message: "Login successfully",
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server error",
            success: false,
        })
        
    }
}

export const logoutAdmin = async(req, res) => {
    const isLocalhost = ["localhost", "127.0.0.1"].includes(req.hostname);

    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" && !isLocalhost,
        sameSite: "strict",
    });

    return res.status(200).json({
        success: true,
        message: "Logged out successfully",
    })
}

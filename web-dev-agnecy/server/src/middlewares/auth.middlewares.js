import jwt from "jsonwebtoken";


export const verifyAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) return res.status(401).json({
            message: "Unauthorized",
            success: false,
        })

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.admin = decoded;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({
            success: false,
            message: "expired or invalid token"
        });
    }
}
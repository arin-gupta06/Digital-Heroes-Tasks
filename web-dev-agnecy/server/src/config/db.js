import mongoose from "mongoose"


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected!!")
    } catch (error) {
        console.error("DB connection failed!!", error.message)
        console.error(error.stack);
        process.exit(1)
    }
}

export default connectDB;
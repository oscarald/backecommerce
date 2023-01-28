import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            process.env.MONGODB_URI
        )
        console.log("MongoDB is connected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export default connectDB
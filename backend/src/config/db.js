
import mongoose from "mongoose";

export const connectDB = async () => {


    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("MONGOOSE CONNECTED SUCCESSS")
    } catch (error) {
        console.error("ERROR CONNECTING TO MONGOOSE",error)
        process.exit(1)//exit means failure
    }

}
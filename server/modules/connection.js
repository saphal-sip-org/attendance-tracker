import mongoose from "mongoose";

async function connectMongoDB(URL) {
    return (
        mongoose.connect(URL)
        .then(() => console.log("Database connected successfully"))
        .catch(error => console.log("Error connecting database", error))
    )
}
export default connectMongoDB;
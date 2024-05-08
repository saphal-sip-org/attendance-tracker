import mongoose from "mongoose";

async function connectMongoDB(url) {
    return (
        mongoose.connect(url)
        .then(() => console.log("Database connected successfully"))
        .catch(error => console.log("Error connecting database", error))
    )
}
export default connectMongoDB;
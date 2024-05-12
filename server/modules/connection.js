import mongoose from "mongoose";

function connectMongoDB(URL) {
    return (
        mongoose.connect(URL)
        .then(() => console.log("Database connected successfully"))
        .catch(error => console.log("Error connecting database", error))
    )
}
export default connectMongoDB;
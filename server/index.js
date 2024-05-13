import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectMongoDB from "./modules/connection.js";
import authRouter from "./routers/authRouter.js";
import adminRouter from "./routers/adminRouter.js";

const app = express();

//middleware setup
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

dotenv.config();

//connection to dotenv
const PORT = process.env.PORT || 5001;
const URL = process.env.MONGO_URL;

//connecting Database
connectMongoDB(URL);



function main() {

    // api router
    //auth router
    app.use("/api", authRouter);
    //admin router
    app.use("/api/admin", adminRouter);

    
    //listening at the port
    app.listen(PORT, () => console.log("Server listen at port", PORT));

}
main();
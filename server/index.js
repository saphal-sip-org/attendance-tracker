import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectMongoDB from "./modules/connection.js";
import authRouter from "./routers/authRouter.js";
import adminRouter from "./routers/adminRouter.js";
import courseRouter from "./routers/courseRouter.js";
import studentRouter from "./routers/studentRouter.js";
import attendanceRouter from "./routers/attendanceRouter.js";



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
    //common router
    app.use("/api", courseRouter);
    //student router
    app.use("/api", studentRouter);
    //attendance router
    app.use("/api", attendanceRouter);




    
    //listening at the port
    app.listen(PORT, () => console.log("Server listen at port", PORT));

}
main();
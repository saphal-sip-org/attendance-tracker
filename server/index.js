import express from "express";
import cors from "cors";
import teacherRouter from "./routers/teacherRouter.js"
import connectMongoDB from "./modules/connection.js";
import dotenv from "dotenv";

const app = express();

//middleware setup
app.use(express.json());
app.use(cors());

dotenv.config();

//connection to dotenv
const PORT = process.env.PORT || 5001;
const URL = process.env.MONGO_URL;

//connecting Database
connectMongoDB(URL);



async function main() {

    // api teacher router
    app.use("/api/teacher", teacherRouter);
    
    //listening at the port
    app.listen(PORT, () => console.log("Server listen at port", PORT));

}
main();
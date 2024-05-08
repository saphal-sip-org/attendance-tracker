import express from "express";
import cors from "cors";
import teacherRouter from "./routers/teacher"
import connectMongoDB from "./modules/connection";

const PORT = 5001;
const app = express();

//connecting Database
connectMongoDB("mongodb://localhost:27017/attendance_mgmt");

app.use(express.json())
app.use(cors());

async function main() {

    // teacher router
    app.use("/teacher", teacherRouter);
    
    //listening at the port
    app.listen(PORT, () => console.log("Server listen at port", PORT));

}
main();
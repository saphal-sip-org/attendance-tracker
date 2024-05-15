import express from "express";


const router = express.Router();

//create/add new student to the list
router.post("/", async (req, res) => {
    try {
        //receive student data from body where teacher request for new student
        const { } = req.body;

          // Check if userName is provided
          if (!userName || !name || !contact) {
            return res.status(400).send({
                err_code: "STUDENT_INPUTS_REQUIRED",
                message: "Student inputs are required",
            });
        }



        
    } catch (error) {
        console.error("errors occurs", error);
    }
})

export {router};
export default router;
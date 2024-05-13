import express from "express";
import User from "../../models/schemas/user.js";

export const getProfile = express.Router();

getProfile.get("/", async(req, res) => {
    try {

        const user_id = req.user._id;
        console.log(req.user)

        const userData = await User.findOne({_id: user_id});

        if (!userData) {
            return res.status(404).send({
                success: false,
                err_code : "USER_NOT_FOUND",
                message: "User not found",
            });
        };

        res.status(200).send({
                success : true,
                message : "Profile Data",
                data : userData
        });
        
    } catch (error) {
        console.log("Errors occurs: ", error);
        return res.status(400).send({
            success : false,
            message : error.message
        });
    }

});

export default getProfile;
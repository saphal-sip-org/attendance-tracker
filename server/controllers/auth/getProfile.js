import express from "express";

export const getProfile = express.Router();

getProfile.get("/",(req, res) => {
    try {

        if(req) {
            return res.status(200).send({
                success : true,
                message : "success",
            })
        };
        
    } catch (error) {
        console.log("Errors occurs: ", error);
        return res.status(400).send({
            success : false,
            message : error.message
        });
    }

});

export default getProfile;
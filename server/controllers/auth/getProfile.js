import express from "express";
import User from "../../models/schemas/user.js";
import mongoose from "mongoose";

export const getProfile = express.Router();

getProfile.get("/", async(req, res) => {
    try {

        // const user_id = req.user._id;
        // console.log(req.user)

        // const userData = await User.findOne({_id: user_id});

        // if (!userData) {
        //     return res.status(404).send({
        //         success: false,
        //         err_code : "USER_NOT_FOUND",
        //         message: "User not found",
        //     });
        // };



          //get user data with all permissions
          const userData =await User.aggregate([
            {
                $match : { 
                    _id: {
                        $ne : new mongoose.Types.ObjectId(req.user_id)
                    }
                }
            },
            { 
                $lookup : {
                    from : "userpermissions",
                    localField : "_id",
                    foreignField : "user_id",
                    as : "permissions"
                }
            },
            {
                $project : {
                    _id : 1,
                    name : 1,
                    userName : 1,
                    role : 1,
                    permissions : {
                        $cond : {
                            if : { $isArray : "$permissions" },
                            then : { $arrayElemAt : ["$permissions", 0]},
                            else : null
                        }
                    }
                }
            },
            {
                $addFields : {
                    "permission" : {
                        "permissions" : "$permissions.permissions"
                    }
                }
            }
        ]);


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
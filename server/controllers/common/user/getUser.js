        //   //get user data with all permissions
        //   const userData =await User.aggregate([
        //     {
        //         $match : { 
        //             _id: {
        //                 $ne : new mongoose.Types.ObjectId(req.user_id)
        //             }
        //         }
        //     },
        //     { 
        //         $lookup : {
        //             from : "userpermissions",
        //             localField : "_id",
        //             foreignField : "user_id",
        //             as : "permissions"
        //         }
        //     },
        //     {
        //         $project : {
        //             _id : 1,
        //             name : 1,
        //             userName : 1,
        //             role : 1,
        //             permissions : {
        //                 $cond : {
        //                     if : { $isArray : "$permissions" },
        //                     then : { $arrayElemAt : ["$permissions", 0]},
        //                     else : null
        //                 }
        //             }
        //         }
        //     },
        //     {
        //         $addFields : {
        //             "permission" : {
        //                 "permissions" : "$permissions.permissions"
        //             }
        //         }
        //     }
        // ]);


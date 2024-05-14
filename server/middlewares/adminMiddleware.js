export const onlyAdminAccess = async(req, res) => {
    try {
          //check if role is admin(1).if not throw error message
        if(req.user.role != 1){
            return res.status(404).send({
                seccess : false,
                err_code : "PERMISSION_NOT_ALLOWED",
                message : "Permission is not allowed to access !!!"
            })
        }
    } catch (error) {
        return res.status(403).send({
            success : false,
            err_code : "SOMETHING_IS_WRONG",
            message : "Something is wrong !!!"
        })
    }
    //process to next work/move forward
    return next();
}

export default onlyAdminAccess;
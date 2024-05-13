import { configDotenv } from "dotenv";
import Jwt from "jsonwebtoken";

configDotenv();

export const verifyToken = async(req, res, next) => {

    //receive token from req
    const userToken = req.body.token || req.query.token || req.headers["authorization"];

    //check if token not provide through some error message
    if (!userToken) {
        return res.status(403).send({
            success : false,
            err_code : "TOKEN_REQUIRED",
            message : "Token is required for Authentication !!!"
        });
    }

    try {
        //split bearer & token
        const bearerToken = userToken.split(" ");
        //access user token
        const token = bearerToken[1];

        //verify token provided
        const tokenVerify = Jwt.verify(token, process.env.USER_JWT_TOKEN);
        req.user = tokenVerify.user;

    } catch (error) {
        return res.status(403).send({
            success : false,
            err_code : "INVALID_TOKEN",
            message : error.message
        });
    };

    //process to next work/move forward
    return next();

};

export default verifyToken;
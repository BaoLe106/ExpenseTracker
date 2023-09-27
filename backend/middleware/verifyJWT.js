const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = async (req, res, next) => {
    try {
        let authHeader = req.headers.authorization || req.headers.Authorization;
        console.log(req, req.headers);
        if (authHeader?.startsWith('Bearer ')) {
            var token = authHeader.split(' ')[1];
        }
        // console.log(token, process.env.ACCESS_TOKEN_SECRET);
        token = process.env.ACCESS_TOKEN_SECRET;
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(verified);
        req.user = verified;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message })
    }
    // console.log(token)
    // jwt.verify(
    //     token,
    //     process.env.ACCESS_TOKEN_SECRET,
    //     (err, decoded) => {
    //         if (err) return res.sendStatus(403); //invalid token
    //         // console.log(decoded);
    //         req.id = decoded.UserInfo.id;
    //         req.roles = decoded.UserInfo.roles;

    //         // req.roles = decoded.roles;
    //         // console.log(req._id);
    //         next();
    //     }
    // );
}

module.exports = verifyJWT;
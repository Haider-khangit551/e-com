const jwt = require('jsonwebtoken')


const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization']
    if (!auth) {
        return res.status(403).json({
            message: "Unauthorize access.",
            success: false
        })
    }

    try {
        const decode = jwt.verify(auth, process.env.JWT_SECRET);

        req.user = decode;

        next();
    } catch (error) {
        console.log("Error in JWT: ", error);
        return res.status(403).json({
            message: "Unauthorize access",

        })
    }

}

module.exports = ensureAuthenticated
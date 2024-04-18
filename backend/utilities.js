const jwt = require('jsonwebtoken');

function authenticatetoken(req, res, next) {
    const authheader = req.headers["authorization"];
    const token = authheader && authheader.split(" ")[1]; // Corrected splitting

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => { // Changed variable name
        if (err) {
            return res.sendStatus(401);
        }
        
        req.user = user; // Assuming user data is stored in the decoded token
        next();
    });
}

module.exports = {
    authenticatetoken
};

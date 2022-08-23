import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(404).json({message: "Token not found"})
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
            return res.status(404).json({message: "Invalid token"})
        }
        req.user = user;
        next();
    })
};
const authenticate = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization != process.env.BEARER_TOKEN) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    return next();
}

export default authenticate
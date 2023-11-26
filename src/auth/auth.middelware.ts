const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  // Extract the token from the request headers or cookies
  const token = req.headers.authorization?.replace('Bearer ', '');

  // Verify the token
  jwt.verify(token, secretKey, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: 'Unauthorized' });
    } else {
      // Attach the user information to the request object
      req.user = decodedToken;
      next();
    }
  });
};

module.exports = authMiddleware;
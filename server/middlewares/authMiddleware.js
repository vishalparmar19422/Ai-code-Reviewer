import jwt from "jsonwebtoken";

const ProtectedRoute = (req, res, next) => {
  const authHeader = req.headers.authorization;

  

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "Unauthorized, no token provided" });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized, no token found" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verified.userId;
    next();
  } catch (error) {
    console.error("error in auth-middleware ", error);
    return res.status(401).json({ message: "Unauthorized, invalid token" });
  }
};

export default ProtectedRoute;
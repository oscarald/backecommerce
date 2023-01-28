import jwt from "jsonwebtoken";
import User from "../server/models/User.js"

const authUser = async (req, res, next) =>{
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select(
        "-password -createdAt -updatedAt -__v -isadmin"
      );

      return next();
    } catch (error) {
      return res.status(404).json({ error: "Hubo un error" });
    }
  }

  if (!token) {
    return res.status(401).json({ error: "Token no válido" });
  }

  next();
};

export default authUser
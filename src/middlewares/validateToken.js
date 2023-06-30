import Jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(400).json(["no token,authoprization denied"]);

  Jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json(["invalid token"]);
  });
  req.user = user;
  next();
};

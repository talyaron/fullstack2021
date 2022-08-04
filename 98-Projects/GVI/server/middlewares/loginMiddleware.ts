//need to check cookie and decode and check if admin 

import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export function isAdmin(req, res, next) {
  try {
    const { userInfo } = req.cookies;

    if (!userInfo)
      throw new Error('"userInfo" cookie is missing in client request');
    
    if (!secret) throw new Error("No secert in server");
    const decoded = jwt.decode(userInfo, secret);

    if (decoded.type === "admin") {
      req.type = "admin";
    
      next();
    } else {
      res.status(403).send({ error: "User is not authorized for this path" });
    }
  } catch (error) {
    console.log("error in isAdmin", error.message);
    res.send({ error: error.message });
  }
}
import jwt from "jwt-simple";

export function isAdmin(req, res, next) {
  try {
   
    const { userInfo } = req.cookies;

    if (!userInfo)
      throw new Error('"userInfo" cookie is missing in client request');
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("No secert in server");
    const decoded = jwt.decode(userInfo, secret);

    if(decoded.role === 'admin'){
        req.role = 'admin'
        req.id = decoded.id
        next();
    } else{
        res.status(403).send({error: 'User is not authorized for this path'})
    }

  } catch (error) {
    console.log("error in isAdmin", error.message);
    res.send({ error: error.message });
  }
}

import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const requireAuth = (req, res, next) => {
  const { currentUsersInfo } = req.cookies;

  try {
    console.log(currentUsersInfo);

    if (currentUsersInfo) {
      jwt.verify(currentUsersInfo, secret, (err, decodedToken) => {
        if (err) {
          console.log("were not here");
          console.log(err.message);
        } else {
          decodedToken = res.decodedToken;
          console.log("were here");
          next();
        }
      });
    } else if (currentUsersInfo === undefined) {
      console.log("were done");
    }
  } catch (error) {
    res.redirect("/");
    console.log(error);
    res.send({ error: error.message });
  }
};

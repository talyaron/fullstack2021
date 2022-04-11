
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export const requireAuth = (req, res, next) => {
  
  const token = req.cookies.currentUsersInfo;
  
  
    try {
    if (token) {
      jwt.verify(token, secret, (err, decodedToken) => {
        if(err){
          console.log('were not here');
          console.log(err.message);
          res.redirect('/index.html')
        } else{
          console.log('were here');
          next();
        }
      });
    } else if (token === undefined){
      console.log('were done');
      res.redirect('/')

      }

    
  } catch (error) {
    res.redirect("/");
    console.log(error);
    res.send({ error: error.message });
  }
};

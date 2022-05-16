import { User } from "../models/userModel";
import jwt from 'jwt-simple';
import { CLIENT_RENEG_WINDOW } from "tls";
const secret = process.env.JWT_SECRET; // 24/4/2022

// export const handleGetUsers = async (req, res) => {

//   let name = req.query;

//   const { userInfo } = req.cookies//deconstractor // it's also important to add securety /24/4/2022

//   const users = await User.find({});
//   res.send({ users, name , userInfo })

// }
export const handleAddUser = async (req, res) => {
  try {
    let { username, password } = req.body; // if we want to get the element by the body we need app.use(express.json());

    if (username && password) {

      // booksSite.user.push(username, password);//add user everytime you add user
      const newUser = new User({ username, password });//here we crate a new user (like a object we use a "User")

      const result = await newUser.save();//important%%% if you want that this variables will save in the DB you to write exactly like a Schema if won't it won't be save;
      res.send({ result, ok: true });
    }
    else {
      throw new Error("username or password are unfedined");
    }
  } catch (error) {
    console.error(res.send(error.message))
  }
}

export const handleReg = async (req, res) => { //reqister
  try {
    let { username, password } = req.body;

    if (username && password) {
      let user = await User.find({ username })// not work

      
      console.log(user[0].password);
      const userPassword = await user[0].password;
      
      if (user.length > 0 && userPassword === password)  {
      
        res.send({ error: 'user existed' })

      } else {
        const users = new User({ username, password })
        await users.save();

        const payload = users;

        // const token = jwt.encode(payload, secret)// no decode in the middleware so I off that 
        res.cookie(
          'userInfo ',
          users,
          { maxAge: 800000, httpOnly: true }
        )

        res.send({ users, ok: true })
        return;
      }
    } else {
      throw new Error("username or password is und")
    }
  } catch (error) {
    res.send(error.message)
  }

}
export const handleSign = async (req, res) => {
  try {
    let { username, password } = req.body;
    if (username && password) {
      //const users = new User({ username, password })//without this it's not worked 
      const user = await User.findOne({ username })//what is the different (find//findone ) // ask Katya //25/4/2022
      // he will locking for username in the MongoDB that have the same username that we send to him 
      //and he will return the "ALL" "object" 
      if (user) {
        if (user.password === password) {
          // const payload = { user };//24/4/2022 
          //24/4/2022 //only with them we can change in the JWT
          //  const token = jwt.encode(payload, secret)//24/4/2022 // we encode our code "hide"
          res.cookie('userInfo', user, { maxAge: 70000000, httpOnly: true })//24/4/2022 
          res.send({ ok: true, user })
          return;
        }
      }
      else {
        res.send({ error: 'user not exist' })
      }
    } else {
      throw new Error("username or password is und")
    }

  } catch (error) {
    res.send(error.message)
  }
}
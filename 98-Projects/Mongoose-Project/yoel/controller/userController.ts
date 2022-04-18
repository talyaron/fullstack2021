import { domainToUnicode } from "url";
import { toUSVString } from "util";
import { User } from "../models/userModel";

export const handleGetUsers = async (req, res) => {

  let name = req.query;

  //const users = await User.find({username:'q'});// it will return me the data that contain key:username, value:q
  const users = await User.find({});
  res.send({ users, name })

}
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
// export const handleUpdateUser =  async (req, res) => {
//   try {
//     let { value, userId } = req.body;

//     if (value && userId) {
//       const users = await User.updateOne({ id: userId }, { username: value });// {who you want to change},{with what you want to change}
//       //  const newUser = new User({username , password})
//       // const result = await newUser.save()
//       res.send({ ok: true, users });
//     } else {
//       throw new Error('id or value is missing');
//     }
//   } catch (error) {
//     console.log(error.error);
//     res.send({ error: error.message })
//   }
// }
export const handleReg = async (req, res) => { //reqister
  try {
    let { username, password } = req.body;

    if (username && password) {
      let user = await User.find({ username })// not work
      

      if (user.length > 0) {

        res.send({ error: 'user existed' })
      } else {
        const newUser = new User({ username, password })
        let name = await newUser.save();

        res.send({ name, ok: true })
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
    console.log(username, password);


    if (username && password) {
      let user: any = await User.find({ username })//what is the different (find//findone )
      console.log(user);

      if (user.length > 0) {
        if (password == user.password) {
          res.send({ user, ok: true })
        } else {
          res.send({ error: 'the password is not correct' })

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
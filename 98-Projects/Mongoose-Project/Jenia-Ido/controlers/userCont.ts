import jwt from "jwt-simple"
import User from "../models/userModel";

const secret = process.env.JWT_SECRET

export const getUser = async (req, res) => {
    try {
        const email = req.query.email;
        const password = req.query.password;
        const result = await User.find({ email: email });
        // console.log(result);
        const role = result[0].role;
        if (password === result[0].password) {
            const payload = { email: email, role: role }
            const token = jwt.encode(payload, secret);
            res.cookie('user', token,{ maxAge: 300000, httpOnly: true })
            res.send({ result });
        }


        else throw new Error("password or email incorrect")
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });
    }

    //     try {
    //       //check if user role is admin
    //       console.log(req.cookies);
    //       const { userInfo } = req.cookies;

    //       if (userInfo && userInfo.role === "admin") {
    //         const users = await User.find({});
    //         res.send({ ok: true, users });
    //         return;
    //       }
    //       throw new Error("user is not allowed");
    //     } catch (error) {
    //       console.log("Error on getAllUsers:", error.message);
    //       res.send({ error: error.message });
    //     }
    //   }
}
export const addUser = async (req, res) => {
    try {
        const { newUser } = req.body;
        if (newUser.email === "davegino220@gmail.com") {
            newUser.role = "admin"
        } else {
            newUser.role = "user"
        }
        console.log(newUser);
        const user = new User(newUser)
        const result = await user.save()
        res.send({ result });
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false })
    }
}
export const deleteUser = async (req, res) => {
    try {

        const { email } = req.body;
        // console.log(email);

        if (email) {
            const userDelete = await User.deleteOne({ email: email })
            // if (!email) throw new Error("Didnt find user with such an email");
            res.send({ results: "user deleted" });
        } else {
            throw new Error("Email was not found in request");
        }
    } catch (err) {
        console.error(`In delete-user: ${err.message}`);
        res.send({ error: err.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser = req.body;
        const result = await User.updateOne({ email: updatedUser.email }, updatedUser);
        if (updatedUser) {
            res.send({ ok: true });
        }
        else throw new Error("user didnt update")


    } catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false })
    }

}

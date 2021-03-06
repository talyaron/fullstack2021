import User from "../models/userModel";

export const getUser = async (req, res) => {
    try {
        // res.cookie(
        //     "userInfo",
        //     { username, id: user._id, role: user.role },
        //     { maxAge: 120000 }
        const email = req.query.email;
        const password = req.query.password;

        const result = await User.find({ email: email });
        if (password === result[0].password) {
            if (email === "davegino220@gmail.com") {
                res.cookie("adminEmail", { email:email, role: "admin" },{ maxAge: 120000 })
            }
            res.send({ result });
        }
        else throw new Error("password not correct")
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
        if (email) {
            const userDelete = await User.deleteOne({ email: email })
            if (!email) throw new Error("Didnt find user with such an email");
            res.send({ results: "user deleted" });
        } else {
            throw new Error("Id was not found in request");
        }
    } catch (err) {
        console.error(`In delete-user: ${err.message}`);
        res.send({ error: err.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser = req.body;

        await User.updateOne({ email: updatedUser.email }, updatedUser);

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
import User from "../models/userModel";

export const getUser = async (req, res) => {
    try {
        const email = req.query.email;
        console.log(email);
        const password = req.query.password;
        console.log(password);


        const userData = await User.find({ email: email });
        if (password === userData[0].password) {
            res.send({ ok: true, userData });
        }
        else throw new Error("password not correct")

    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }

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
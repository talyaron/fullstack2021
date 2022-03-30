import User from "../models/userModel";

export const getUser = async (req, res) => {
    try {
        const email = req.query.email;
        const password = req.query.password;



        const result = await User.find({ email: email });
        if (password === result[0].password) {
            res.send({ result });
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
// export const updateUser = async (req, res) =>{
//     try{
//         const {updatedUser} = req.body;

//     }
// }
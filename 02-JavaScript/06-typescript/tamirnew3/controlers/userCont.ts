import User from "../model/userModel";

export const adduser = async (req, res) => {
    try {
        const { name, password } = req.body
        if (!name || !password) throw new Error('no name or password')
        const newUser = new User({ name, password })
        const userDb = await newUser.save()
        res.send({ userDb })
    } catch (error) {

    }
}
import User from "../models/UsersModel"

export const getUsers = async (req, res) => {
    const allUsers = await User.find({})
    try {
        res.send({ allUsers, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}

export const addUser = async (req, res) => {
    let { name, age, username, occupation, password, image } = req.body
    const newUser = new User({})
    const result = await newUser.save()
    res.send({result})
}

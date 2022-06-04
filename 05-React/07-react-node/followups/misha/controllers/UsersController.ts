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

    let userForm = req.body

    let newUser = new User(userForm)

    const result = await newUser.save()

    res.send({ result })

}

export const deleteUser = async (req,res) => {

    const {id} = req.body;

    console.log(id)

    const userToDelete = await User.deleteOne({ _id: id });

    res.send(userToDelete)

}

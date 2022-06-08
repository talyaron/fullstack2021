
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

export const getLoginUser = async (req, res) => {

    const loginUser = req.body;

    const userFound = await User.find({ username: loginUser.username });

    if (userFound) {
        if (userFound[0].password === loginUser.password) {
            res.send(userFound[0])
        }
        else {
            res.send("Password doesn't match")
        }
    }

}

export const addUser = async (req, res) => {

    let userForm = req.body

    const userFound: any = await User.findOne({ username: userForm.username });

    if (userFound) {
        res.send('AlreadyExists')
    }

    else {
        let newUser = new User(userForm)

        const result = await newUser.save()

        res.send({ result })
    }

}

export const deleteUser = async (req, res) => {

    const { id } = req.body;

    const userToDelete = await User.deleteOne({ _id: id });

    res.send(userToDelete)

}

export const updateUser = async (req, res) => {

    const {userToUpdate, id} = req.body;
    const mongoResponse = await User.updateOne({ _id: id }, userToUpdate)

    res.send(mongoResponse)
}

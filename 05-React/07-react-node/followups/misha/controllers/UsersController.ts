
import User from "../models/UsersModel"

export const getUsers = async (req, res) => {

    try {
        const allUsers = await User.find({})
        res.send({ allUsers, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}

export const getOneUser = async (req, res) => {

    const { idToUpdate } = req.body

    console.log('my body is+ ', req.body)

    try {
        const oneUser = await User.findOne({ _id: idToUpdate })
        res.send(oneUser)

    } catch (error) {
        res.send({ error: error.message })
    }
}

export const getLoginUser = async (req, res) => {

    try {

        const loginUser = req.body;

        console.log(loginUser)

        const userFound = await User.findOne({ username: loginUser.username });

        console.log(userFound)

        if (userFound) {
            if (userFound.password === loginUser.password) {
                return res.status(200).send({ user: userFound, test: 'ok' })
            }
        }

        res.send({ user: null, test: 'error' })


    } catch (error) {

        res.send({ error: error.message })

    }

}

export const addUser = async (req, res) => {

    try {
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

    } catch (error) {
        res.send({ error: error.message })
    }

}

export const deleteUser = async (req, res) => {

    try {

        const { id } = req.body;

        const userToDelete = await User.deleteOne({ _id: id });

        res.send(userToDelete)

    } catch (error) {
        res.send({ error: error.message })
    }

}

export const updateUser = async (req, res) => {

    try {

        const { userToUpdate, idToUpdate } = req.body;

        const mongoResponse = await User.updateOne({ _id: idToUpdate }, userToUpdate)

        res.send(mongoResponse)
    } catch (error) {
        res.send({ error: error.message })
    }

}

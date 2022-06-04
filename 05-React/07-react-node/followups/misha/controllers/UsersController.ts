import { userInfo } from "os"
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
    const username = loginUser.username
    console.log(username)
    const userFound = await User.find({ username: username}).exec();
    

    console.log(userFound)


    // const allUsers = await User.find({})

    // try {
    //     res.send({ allUsers, ok: true })
    // } catch (error) {
    //     console.log(error.error)
    //     res.send({ error: error.message })
    // }

    res.send('hello')
}

export const addUser = async (req, res) => {

    let userForm = req.body

    let newUser = new User(userForm)

    const result = await newUser.save()

    res.send({ result })

}

export const deleteUser = async (req,res) => {

    const {id} = req.body;

    const userToDelete = await User.deleteOne({ _id: id });

    res.send(userToDelete)

}

import User from '../models/UsersModel'

export const getUsers = async (req, res) => {
    const allUsers = await User.find({})

    try {
        res.send({ allUsers, ok: true })
    } catch (error) {
        console.log(error.error)
        res.send({ error: error.message })
    }
}

export const getUser = async (req: any, res: any) => {
    const { id } = req.body
    const oneUser = await User.findById(id)

    res.send({ oneUser, ok: true })
    console.log(oneUser)
}

export const addUser = async (req, res) => {

    let userForm = req.body
    const userFound: any = await User.findOne({ username: userForm.username })

    if (userFound) {
        res.send('Already exists')
    } else {
        let newUser = new User(userForm)
        const result = await newUser.save()
        res.send({ result })
    }
}

export const getLoginUser = async (req, res) => {
    const loginUser = req.body
    const userFound = await User.find({ username: loginUser.username })
    console.log(userFound)
    console.log(loginUser)

    if (userFound) {
        if (userFound[0].password === loginUser.password) {
            res.send(userFound[0])
        } else {
            console.log('not logedin!')
            res.send("Password not match")
        }
    }
}

// function _id(_id: any, arg1: string) {
//     throw new Error('Function not implemented.')
// }


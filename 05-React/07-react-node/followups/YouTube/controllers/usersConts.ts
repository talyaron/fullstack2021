import User from '../models/userModels';
import jwt from 'jwt-simple';

const secret = process.env.JWT_SECRET

export const login = async (req, res) => {

    try {

        const { name, password } = req.body
     
        const logedUser = await User.findOne({ name, password })

        if (!logedUser) throw new Error("No username or password in login in usersConts");

        const userLogedObjectToCookies = {
            name: logedUser.name,
            lastName: logedUser.lastName,
            ownerId: logedUser._id
        }        

        const encodedLogedUser = jwt.encode(userLogedObjectToCookies, secret)
        res.cookie('userInformation', encodedLogedUser)

        res.send({ ok: true, logedUser })

    } catch (error) {

        console.error(error.message);
        res.send({ ok: false })

    }


}
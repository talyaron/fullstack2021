import User from '../Models/usersModel';
import jwt from 'jwt-simple';

const secret = process.env.JWT_SECRET

export const login = async (req, res) => {

    try {

        console.log(req.body);

        const { name, password } = req.body;


        if (!name) throw new Error("no name");
        const userLogin = await User.findOne({ name, password })

        const token = jwt.encode(userLogin, secret);
        res.cookie('userLogin', token)
        res.send({ ok: true, userLogin })

    } catch (error) {
        console.error(error.message);
        res.send({ ok: false, error: error.message })

    }

}
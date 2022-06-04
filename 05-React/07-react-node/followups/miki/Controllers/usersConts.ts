import User from '../Models/usersModels'
import jwt from 'jwt-simple';


const secret = process.env.JWT_SECRET;


export async function login(req, res) {

    try {

        const { name, password } = req.body;

        if (!req.body) throw new Error("no req.body in login in usersConts");


        const result = await User.findOne({ name, password })

        if (!result) throw new Error("no result in login in usersConts");

        const payload = {name: result.name, role: result.role}

        console.log(payload);

        const token = jwt.encode(payload, secret);
        res.cookie('login', token)

        if (result.role === 'admin' && result) {

            res.send({ login: true, admin: 'admin' })

        } else if (result) {

            res.send({ login: true, admin: 'false' })

        }

        





    } catch (error) {

        console.error(error.message);
        res.send({ login: false })

    }




}
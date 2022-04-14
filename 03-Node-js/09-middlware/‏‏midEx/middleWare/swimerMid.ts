import jwt from 'jwt-simple'
import Swimer from '../models/swimModels'

const secert = process.env.JWT_SECRET

export const userInputEvent = (req, res, next) => {

    try {

        const { userName, password } = req.body
        req.name = userName; req.password = password;

        if (!req.name || !req.password) throw new Error("no name or password in req.body in userInputEvent middleware");

        console.log('swimer in middware is: ', `${req.name} ${req.password}`);

        next()

    } catch (error) {

        console.error(error.message);
        res.send({ error: error.message })

        next();

    }

}


export async function isAdmin(req, res, next) {

    const { userName, password } = req.body;
    const result = await Swimer.findOne({ userName, password })

    if (result) {

        console.log(result.userName);

        if (result.userName === userName) {

            if (result.role === 'admin') {

                const payload = { name: userName, password, role: result.role }
                const token = jwt.encode(payload, secert)
                res.cookie('swimers', token, { maxAge: 180000, httpOnly: true })

                next()

            }

        } else {

            res.send({ error: 'name or password are not found in login' })

        }

    } else {

        res.send({ error: 'name or password are not found in login' })

    }

}

export const decodeAdmin = (req, res, next) => {

    const { swimers } = req.cookies;
    const decoded = jwt.decode(swimers, secert)
    const {name, role, password} = decoded

    if (role === 'admin'){
        
        req.name = decoded.name
        req.password = decoded.password
        req.role === 'admin'
        next()

    }



}



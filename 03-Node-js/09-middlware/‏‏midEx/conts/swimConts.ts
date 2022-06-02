import Swimer from '../models/swimModels'
import jwt from 'jwt-simple'

const secret = process.env.JWT_SECRET

export const addSwimer = async (req, res) => {

    try {

        const { email } = req.body;

        console.log('swimer in addSwimer controller is: ', `${req.name} ${req.password} ${email}`);

        if (!email) throw new Error ("no email in req.body in log-up controller");
        
        const newSwimer = new Swimer({name: req.name, email, password: req.password})
        const result = await newSwimer.save()

        const payload = {name: req.name, email, password: req.password}
        const token = jwt.encode(payload, secret)
        res.cookie('swimers', token, {maxAge: 60000, httpOnly: true}) 
        res.send({ ok: true, result });    
        
    } catch (error) {

        console.error(error.message);
        res.send({error: error.message})
        
    }
    
}

export async function login(req, res) {

    try {        

        console.log('swimer in login controller is: ', `${req.name} ${req.password}`);
        if (!req) throw new Error("no req in login controller");

        res.send({ok:true})
        
    } catch (error) {

        console.error(error.message);
        res.send({error:error.message})
        
    }
    
}

export const getAllSwimers = async (req, res) => {
    
    console.log('swimer in getAllSwimers controller is: ', `${req.name} the ${req.role}`);

    const {userName, password} = req.body;

    if (req.password === password && req.name === userName) {

        const  result = await Swimer.find({})
        res.send({ok:true, result})

    } else {

        res.send({error: 'User Is not admin'})
    }



}


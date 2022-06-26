import User from '../models/userModel';
import jwt from 'jwt-simple';
const secret = process.env.JWT_SECRET;
import ObjectId from 'mongodb';
import userSchema from '../models/userModel';

interface userResults {
    public: {
        firstName: String;
        lastName: String;
        gender: String;
    };
    email: String;
    password: String;
    _id: typeof ObjectId;
    __v: Number;
}

export async function checkCookies(req: any, res: any) {
    try {
        const cookies = await req.cookies.socketChatCookie;
        if (!cookies) throw new Error(`login`);
        const decoded = jwt.decode(cookies, secret);
        if (!decoded) throw new Error(`problem decoding the cookie`);
        res.send({ok: true, id: decoded.id});
    } catch (error) {
        console.log(error);
        res.send({error: error.message});
    }
}
export const register = async (req: any, res: any) => {
    try {
        const {registrationData} = req.body;
        if (!registrationData) throw new Error('no newUser register -userCont');
        const isAUser = await User.findOne({email: registrationData.email});
        const {firstName, lastName, email, password, gender} = registrationData;
        if (isAUser) throw new Error(`${registrationData.email} is already registered`);
        const newUser = new User({
            public: {
                firstName,
                lastName,
                gender,
            },
            email,
            password,
        });
        const result = await newUser.save();
        const publicResult = {firstName: result.public.firstName, lastName: result.public.lastName, gender: result.public.gender, id: result._id};
        const encrypted = jwt.encode(publicResult, secret);
        res.cookie('socketChatCookie', encrypted);
        res.send({ok: true});
    } catch (error) {
        console.log(error);
        res.send({error: error.message});
    }
};
export const login = async (req: any, res: any) => {
    try {
        const {loginData} = req.body;
        console.log(loginData);

        if (!loginData) throw new Error('no loginData login -userCont');
        const isAUser = await User.findOne({email: loginData.email}).collation({
            locale: 'en_US',
            strength: 1,
        });
        if (!isAUser) throw new Error(`${loginData.email} is not registered, please register`);
        console.log(isAUser);
        console.log(loginData.email);
        const verified: userResults = await User.findOne({email: isAUser.email, password: loginData.password});
        console.log(verified, 'verified');
        if (!verified) throw new Error(`Thats the wrong password for ${loginData.email}`);
        const publicResult = {firstName: verified.public.firstName, lastName: verified.public.lastName, gender: verified.public.gender, id: verified._id};
        const encrypted = jwt.encode(publicResult, secret);
        res.cookie('socketChatCookie', encrypted);
        res.send({ok: true});
    } catch (error) {
        console.log(error);
        res.send({error: error.message});
    }
};

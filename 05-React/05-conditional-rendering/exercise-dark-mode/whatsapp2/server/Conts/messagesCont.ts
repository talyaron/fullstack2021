import Message from '../Models/messagesModel';
import jwt from 'jwt-simple';

const secret = process.env.JWT_SECRET

export const addMessage = async (req, res) => {

    try {

        console.log(req.body);

        const { userLogin } = req.cookies;

        const decoded= jwt.decode(userLogin, secret);
        const {_id, name, password} = decoded;
        

        const { text, id, date } = req.body;
        const message = new Message({ownerId: _id, ownerName: name, content: text, messageId: id, date})
        await message.save()
        console.log(message);
        

        res.send({ ok: true, message})

    } catch (error) {
        console.error(error.message);
        res.send({ ok: false, error: error.message })

    }

}


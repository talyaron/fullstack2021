import jwt from "jwt-simple"
import Images from "../models/imagesModel";

const secret = process.env.JWT_SECRET

export const getImages = async (req, res) => {
    try {
        const email = req.query.email;
        // console.log(email);
        const result = await Images.find({ email: email });

        res.send({ ok: true, result });
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }
}
export const addImages = async (req, res) => {
    try {
        const { email, password , firstName , lastName } = req.body;
        const newImgs = { firstName:firstName , lastName:lastName ,email: email, password: password, profileUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4klHXuPMAaVeQs1vFZl-fIG1mnux026heg&usqp=CAU' }
        const userImgs = new Images(newImgs)
        const result = await userImgs.save()
        res.send({ result });
    }
    catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });

    }
}
export const updateProfilePiC = async (req, res) => {
    try {
        const { email, newImg } = req.body;
        // console.log(email);
        // console.log(newImg);

        const images = await Images.updateOne({ email: email }, { profileUrl: newImg });
        res.send({ images, ok: true });
    } catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
}
export const addPost = async (req, res) => {
    try {
        const { email, url } = req.body;
        const result = await Images.updateOne({ email: email }, { $push: { url: url } })
        if (email) {
            res.send({ ok: true })
        }
        else throw new Error("err");


    } catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
}
export const getUsersImgs = async (req, res) => {
    try {
        let profileImgs = [];
        // const { email } = req.body;
        const { user } = req.cookies;
        console.log(user);
        const decoded = jwt.decode(user, secret);
        console.log(decoded);
        const email = decoded.email
        const usersList = await Images.find({})
           console.log(usersList);
        usersList.forEach(user => {
            if (user.email !== email) {
                const img = user.profileUrl;
                const userEmail = user.email;
                const firstName = user.firstName
                const lastName = user.lastName
                profileImgs.push({ img, userEmail ,firstName , lastName})
            }
        })
        //    console.log(profileImgs); 
        if (email) {
            res.send({ ok: true, profileImgs })
        }
        else throw new Error("cant get email in browse page");
    } catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
}
export const deleteImages = async (req, res) => {
    try {

        const { email } = req.body;
        // console.log(email);

        if (email) {
            const imagesDelete = await Images.deleteOne({ email: email })
            // if (!email) throw new Error("Didnt find user with such an email");
            res.send({ results: "user deleted" });
        } else {
            throw new Error("Email was not found in request");
        }
    } catch (err) {
        console.error(`In delete-user: ${err.message}`);
        res.send({ error: err.message });
    }
}
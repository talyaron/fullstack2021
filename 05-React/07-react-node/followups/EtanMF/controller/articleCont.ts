import Article from "../model/articleModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;

export const createArticle = async (req, res) => {
    try {

        const { userInformation } = req.cookies;
        const { title, content } = req.body;

        if (title.length < 2) throw new Error("Please insert a title longer than 2 characters");
        if (!userInformation) throw new Error("no userInformation in createArticle in articleCont")

        const decodedInformation = jwt.decode(userInformation, secret);
        console.log(decodedInformation);

        const articleParams = {
            title,
            content,
            ownerId: decodedInformation.id,
            firstName: decodedInformation.firstName,
            lastName: decodedInformation.lastName,
            position: decodedInformation.position,
            workSpace: decodedInformation.workSpace,

        }

        console.log(articleParams);

        const newArticle = new Article(articleParams);
        const articleInformation = await newArticle.save();

        res.send({ ok: true, article: articleInformation })


    } catch (error) {
        console.error(error.message);
        res.send({ ok: false, error: error.message });

    }
}

export async function getArticles(req, res) {

    try {

        const { ownerId } = req.body

        if (!ownerId) {
            const result = await Article.find({})
            res.send({ ok: true, result})
            return;
        } 
        if (ownerId) {
            const result = await Article.find({ownerId})
            res.send({ ok: true, result})
            return;
        } 

    } catch (error) {

        console.error(error.message);
        res.send({ ok: false, error: error.message });


    }

}
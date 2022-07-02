// i need model for this 
import Article from '../model/articleModel';

export const saveArticle = async (req, res) => {
    try {


        const { title, articleText } = req.body;
        // console.log(title , articleText);

        const { yoel } = req.cookies;
        if (yoel) {
            //now I need to userItself because I want to copy his Id to the article that would be the same id that I can take his article and it will be not a the same collection 
            const { existUser } = yoel;
            const { _id , username} = existUser;
            const ownerId = _id
            // console.log(ownerId, title, articleText);

            
            

            // const article = new Article([title, articleText], ownerId);
            const article = new Article({ title, articleText, ownerId })

            await article.save();

            res.send({ ok: true, article , username})
        } else {
            res.send({ error: false, message: "we don't get the cookies" })
        }




    } catch (error) {
        console.error(error.message);
        res.send({ error })
    }
}
export const getArticle = async (req, res) => {
    const existUser = req.body;
    const allArticle = await Article.find({ ownerId: existUser._id })// I think he will return all the

    if (allArticle) {
        res.send({ allArticle , ok:true});
    }
}

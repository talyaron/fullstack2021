import Article from '../model/articleModel';
import jwt from 'jwt-simple';
const secret = process.env.JWT_SECRET;

export const createArticle = async (req, res) => {
    try {
        const {userInformation} = req.cookies;
        const {title, content} = req.body;

        if (title.length < 2) throw new Error('Please insert a title longer than 2 characters');
        if (!userInformation) throw new Error('no userInformation in createArticle in articleCont');

        const decodedInformation = jwt.decode(userInformation, secret);

        const articleParams = {
            title,
            content,
            ownerId: decodedInformation.id,
            firstName: decodedInformation.firstName,
            lastName: decodedInformation.lastName,
            position: decodedInformation.position,
            workSpace: decodedInformation.workSpace,
        };

        const newArticle = new Article(articleParams);
        const articleInformation = await newArticle.save();

        res.send({ok: true, article: articleInformation});
    } catch (error) {
        console.error(error.message);
        res.send({ok: false, error: error.message});
    }
};

export async function getArticles(req, res) {
    try {
        const {ownerId} = req.body;

        if (!ownerId) {
            const result = await Article.find({});
            res.send({ok: true, result});
            return;
        }
        if (ownerId) {
            const result = await Article.find({ownerId});
            res.send({ok: true, result});
            return;
        }
    } catch (error) {
        console.error(error.message);
        res.send({ok: false, error: error.message});
    }
}

export async function updateArticle(req, res) {
    try {
        const {updateArticleTitle, updateArticleContent, articleId} = req.body;
        if (!updateArticleTitle || !updateArticleContent || !articleId) throw new Error('something is missing at updateArticle -articleCont');
        const updatedArticle = await Article.updateOne({_id: articleId}, {title: updateArticleTitle, content: updateArticleContent});
        console.log(updatedArticle);
        res.send({ok: true, updatedArticle});
    } catch (error) {
        console.log(error);
        res.send({ok: false, error: error.message});
    }
}
export async function deleteArticle(req, res) {
    try {
        const {articleId, ownerId} = req.body;
        const loggedInUser = req.cookies;
        const {userInformation} = loggedInUser;
        const loggedInUserId = jwt.decode(userInformation, secret).id;
        if(!loggedInUser || !ownerId) throw new Error('Login and try again deleteArticle -articleCont')
        if(ownerId === loggedInUserId){
            const deletedArticle = await Article.findOneAndDelete({_id:articleId});
            console.log(deletedArticle);
            
            res.send({ok: true, deletedArticle:deletedArticle});
        }
    } catch (error) {
        console.log(error);
        res.send({ok: false, error: error.message});
    }
}

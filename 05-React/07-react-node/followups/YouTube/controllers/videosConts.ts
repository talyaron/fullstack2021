import Video from '../models/videoModels';
import jwt from 'jwt-simple';
const secret = process.env.JWT_SECRET

export const getAllVideos = async (req, res) => {

    const allVideos = await Video.find({})
    res.send({ ok: true, allVideos })

}

export async function getVideosOfUser(req, res) {

    try {

        const { id } = req.query;

        const { userInformation } = req.cookies;        

        if (!userInformation || !id) throw new Error('No userInformation or id provided in getVideosOfUser');

        const decodedInformation = jwt.decode(userInformation, secret);

        if (!decodedInformation) throw new Error('No decodedInformation provided in getVideosOfUser');

        const decodedId = decodedInformation.ownerId;


        if (id === decodedId) {

            const videosOfOneUser = await Video.find({ uploaderId: decodedId })
            res.send({ ok: true, videosOfOneUser })
        }

    } catch (error) {
        console.error(error.message);
        res.send({ ok: false })


    }



}
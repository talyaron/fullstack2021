import MatchingModel from '../Models/matchingModel'

export const getMatches = async (req,res) => {
    const matchings = await MatchingModel.find();
    res.send({ok:true,matchings})
}
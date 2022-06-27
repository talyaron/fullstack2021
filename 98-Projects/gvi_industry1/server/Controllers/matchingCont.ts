import MatchingModel from '../Models/matchingModel'

export const getMatches = async (req,res) => {
    const matchings = await MatchingModel.find({countries:{$regex: /rus/i}});
    res.send({ok:true,matchings})
}

{$regex: /canada/gi}
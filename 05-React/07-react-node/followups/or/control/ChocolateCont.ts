import ChocolateFlavours from "../model/ChocolateModel";

export const getFlavour = async (req,res) => {
    
    const result = await ChocolateFlavours.find({})
    res.send({ok:true, result})
    
    
}
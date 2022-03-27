import Market from "../model/marketModel";
import User from "../model/userModel";

export async function getItems(req, res) {
    try {
        const marketItems = await Market.find({});
        const userItems = await User.find({});
        res.send({ok:true, marketItems, userItems});
    } catch (error) {
        console.log(error.error);
        res.send({error:error.message});
    }
}
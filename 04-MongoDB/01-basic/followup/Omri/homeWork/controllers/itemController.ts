import Market from "../model/marketModel";
import User from "../model/userModel";

export async function getItems(req, res) {
    try {
        const marketItems = await Market.find({});
        const userItems = await User.find({});
        // console.log(marketItems);
        res.send({ok:true, marketItems, userItems});
    } catch (error) {
        console.log(error.error);
        res.send({error:error.message});
    }
}
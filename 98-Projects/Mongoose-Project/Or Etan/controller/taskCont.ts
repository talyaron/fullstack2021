import task from "../model/taskModel";



export const getUsersTasks = async (req,res) => {
    const {ownerId} = req.query;
    console.log(ownerId);
    const currentUsersTasks = await task.find({ ownerId: ownerId });
    res.send(currentUsersTasks)
    }

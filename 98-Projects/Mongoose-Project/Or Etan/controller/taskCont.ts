import task from "../model/taskModel";




export const getUsersTasks = async (req,res) => {
    const {ownerId} = req.query;
    console.log(ownerId);
    let currentUsersTasks = await task.find({ ownerId: ownerId });
    
    res.send(currentUsersTasks)
    }

export const addNewTask = async (req, res) => {
    try{
    const {color, title, description, urgency, location, date, userId} = req.body;
    if(userId && color && title && description && urgency && location && date) {

        const newTask = new task({color: color, title: title, description: description, urgency: urgency, location: location, date: date, ownerId: userId})
        console.log(newTask);
        await newTask.save();
        res.send({currentUsersTasks: await task.find ({ownerId: userId})})
    }}catch(error){
        console.error(error);
        res.send({error: error.message})
    }
    
    }
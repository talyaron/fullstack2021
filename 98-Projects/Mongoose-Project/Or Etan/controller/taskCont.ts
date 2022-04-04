import task from "../model/taskModel";

export const getUsersTasks = async (req, res) => {
  const { ownerId } = req.query;

  let currentUsersTasks = await task.find({ ownerId: ownerId });

  res.send(currentUsersTasks);
};

export const addNewTask = async (req, res) => {
  try {
    const { color, title, description, urgency, location, date, userId } =
      req.body;
    if (
      userId &&
      color &&
      title &&
      description &&
      urgency &&
      location &&
      date
    ) {
      const newTask = new task({
        color: color,
        title: title,
        description: description,
        urgency: urgency,
        location: location,
        date: date,
        ownerId: userId,
      });

      await newTask.save();
      res.send({ currentUsersTasks: await task.find({ ownerId: userId }) });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { _id, ownerId, color, title, urgency, description, location, date } =
      req.body;
    if (_id && ownerId) {
      const updatedTask = await task.findOneAndUpdate(
        { _id: _id, ownerId: ownerId },
        {
          color: color,
          title: title,
          urgency: urgency,
          description: description,
          location: location,
          date: date,
        }
      );
      const currentUsersTasks = await task.find({ ownerId: ownerId });
      res.send({ updatedTask, currentUsersTasks });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const checkTask = async (req, res) => {
  try{
    const {_id, ownerId, timeChecked} = req.body;
    const taskCheck = await task.findOne({_id, ownerId});
    console.log(taskCheck);
    
if(taskCheck?.checked === true) {
  console.log('ho');
  
await task.updateOne({_id: _id, ownerId: ownerId}, {timeChecked:timeChecked, checked: false});
const currentUsersTasks = await task.find({ ownerId: ownerId})
res.send({currentUsersTasks });
return
}
console.log('wo');
    const checkTask = await task.findOneAndUpdate({_id: _id, ownerId: ownerId}, {timeChecked:timeChecked, checked: true});
console.log(_id, ownerId);

    const currentUsersTasks = await task.find({ ownerId: ownerId})
    res.send({currentUsersTasks });
}catch (error) {
  console.log(error);
  console.log(error.message)
  res.send({error: error.message});
}
    
}

export const deleteTask = async (req, res) => {
  try {
    const { taskId, userURL } = req.body;
    const userId = userURL.split("=")[1];
    const currentPage = userURL.split("/")[3].split(".")[0];

    await task.findOneAndDelete({ _id: taskId, ownerId: userId });
    const currentUsersTasks = await task.find({ ownerId: userId });
    res.send({ currentUsersTasks, currentPage });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const { taskId } = req.body;
    const currentTask = await task.findOne({ _id: taskId });


    res.send(currentTask);
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
export const getUrgencies = async (req,res)=>{
  const {userId} = req.query;
  const lowUrgency = await task.find({ownerId:userId, urgency:'low'})
  const mediumUrgency = await task.find({ownerId:userId, urgency:'medium'})
  const highUrgency = await task.find({ownerId:userId, urgency:'high'})

  res.send({lowUrgency, mediumUrgency, highUrgency})

  

}

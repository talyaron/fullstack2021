import task from "../model/taskModel";

export const renderPage = async (req, res) => {
  const { userURL, requestedPage } = req.body;
//   console.log( userURL, requestedPage);
  
  const appURL = userURL.split("/")[2];
  const userId = userURL.slice(-24);
  const currentUsersTasks = await task.find({ ownerId: userId });
  const newURL = `/${requestedPage}.html?id=${userId}`;
//   console.log(currentUsersTasks, requestedPage);
//   let { title, description, urgency, location, date } = currentUsersTasks[0];
  if (requestedPage === "RecentlyCreated") {
      try {
          res.send({
              newURL: newURL, currentUsersTasks: currentUsersTasks
            });
        } catch (error) {
            console.log("error in renderPage:");
            console.log(error.message);
            res.send({ error: error.message });
            // }
        }
        return;
    }
};

export const getUsersTasks = async (req,res) => {
    const userId = req.query;
    console.log(userId);


    

    const currentUsersTasks = await task.find({ ownerId: userId });
    
    // res.send({ok: true, newUserURL: userURL})
    
    // console.log(currentUsersTasks);
    }

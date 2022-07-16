import InitiativeModel from '../models/initiativeModel'

export const addInitiative = async (req, res) => {
    try {
        const { initiative } = req.body;
       
        let newInitiative = new InitiativeModel(initiative)
        const result = await newInitiative.save()
        console.log(newInitiative)
        res.send(result)


    } catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
}

export const getInitiative = async (req, res) => {
    try {
        
        const { userId } = req.body;
               
        const userInitiative = await InitiativeModel.findOne({ownerUserId:userId})
        console.log(userInitiative);
        
        res.send({userInitiative})


    } catch (err) {
        console.error(err);
        res.send({ error: err.message, ok: false });
    }
}
export const updateInitiative = async (req, res) => {
    try {
      const {newDetails , userId } = req.body;

      const user = await InitiativeModel.findOne({ownerUserId:userId})

      if(newDetails.companyName !== " ") user.companyName = newDetails.companyName
      if(newDetails.description !== " ") user.description = newDetails.description
      if(newDetails.sector !== " ") user.sector = newDetails.sector
      if(newDetails.stage !== " ") user.stage = newDetails.stage
      if(newDetails.linkToOnePager !== " ") user.linkToOnePager = newDetails.linkToOnePager

      await InitiativeModel.updateOne({ ownerUserId:userId}, user);
      
      res.send({user, ok: true})
      
      } catch (err) {
          console.error(err);
          res.send({ error: err.message, ok: false });
      }
    }
updateInitiative

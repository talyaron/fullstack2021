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

export const getAllRecipients = async (req, res) => {
    try {
        const {id} = req.body.user;
        const currentUsersInitiative = await InitiativeModel.findOne({ownerUserId:id});
        const recipients = currentUsersInitiative.mentors;
        res.send(recipients);
    } catch (error) {
        console.log(error);
        res.send({ error: error.message, ok: false });

        
    }
}
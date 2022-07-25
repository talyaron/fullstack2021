import InitiativeModel from '../models/initiativeModel';

export const addInitiative = async (req, res) => {
    try {
        const {initiative} = req.body;

        let newInitiative = new InitiativeModel(initiative);
        const result = await newInitiative.save();
        console.log(newInitiative);
        res.send(result);
    } catch (err) {
        console.error(err);
        res.send({error: err.message, ok: false});
    }
};

export const getAllRecipients = async (req, res) => {
    try {
        const {id} = req.body.user;
        const currentUsersInitiative = await InitiativeModel.findOne({ownerUserId: id});
        let recipients:any = currentUsersInitiative.mentors;
        let localArr: Array<any> = [];
        const getRecipientsList = async () => {
            for (let recipient of recipients) {
                let rec = {userId: recipient.userId, name: recipient.name};
                localArr.push(rec);
            }
            return localArr;
        };
        recipients = await getRecipientsList();
        res.send(recipients);
    } catch (error) {
        console.log(error);
        res.send({error: error.message, ok: false});
    }
};


export const getInitiative = async (req, res) => {
    try {
        const {userId} = req.body;

        const userInitiative = await InitiativeModel.findOne({ownerUserId: userId});
        
        
        res.send({userInitiative});

    } catch (err) {
        console.error(err);
        res.send({error: err.message, ok: false});
    }
};
export const updateInitiative = async (req, res) => {
    try {
        const {newDetails, userId} = req.body;

        const user = await InitiativeModel.findOne({ownerUserId: userId});

        if (newDetails.companyName) {
            user.companyName = newDetails.companyName;
        } else {
            user.companyName = user.companyName;
        }
        if (newDetails.description) {
            user.description = newDetails.description;
        } else {
            user.description = user.description;
        }
        if (newDetails.sector) user.sector = newDetails.sector;
        if (newDetails.stage) user.stage = newDetails.stage;
        if (newDetails.linkToOnePager) user.linkToOnePager = newDetails.linkToOnePager;

        await InitiativeModel.updateOne({ownerUserId: userId}, user);

        res.send({user, ok: true});
    } catch (err) {
        console.error(err);
        res.send({error: err.message, ok: false});
    }
};

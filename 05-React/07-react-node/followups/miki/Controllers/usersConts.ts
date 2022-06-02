import User from '../Models/usersModels'


export async function login (req, res) {

    try {

        const { name, password } = req.body;

        if (!req.body) throw new Error("no req.body in login in usersConts");
        
        
        const result = await User.findOne({name, password})
        console.log(result);
        
        if (!result) throw new Error("no result in login in usersConts");

        res.send({login: true})
        
    } catch (error) {

        console.error(error.message);
        res.send({login: false})
        
    }


    

}
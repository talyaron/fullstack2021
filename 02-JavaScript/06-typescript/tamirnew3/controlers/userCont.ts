// לוקח את המשתמש מהתייקיה של המודל 
import User from "../model/userModel";


// import- מייבא 
// export- מייצא




// מייצא את הקוד החוצה 
export const adduser = async (req, res) => {
    try {
        const { name, password } = req.body
        if (!name || !password) throw new Error('no name or password')
        const newUser = new User({ name, password })
        const userDb = await newUser.save()
        res.send({ userDb })
    } catch (error) {

    }
}

// מייצא את הקוד החוצה 
export const login = async (req, res) => {
    try {
        const { name, password } = req.body
        
        if (typeof name === 'string') {
            const user = await User.findOne({ name })
            if (user) {
                if (user.password === password) {
                   res.cookie('userInfo',{name,password},{maxAge:50000})
                    res.send({ ok: true, login: true })
                    return
                }
            }
        }
    } catch (error) {
        console.log(error.message);


    }
}
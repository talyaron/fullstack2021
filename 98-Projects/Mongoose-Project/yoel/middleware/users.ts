import jwt from 'jwt-simple';//because we need to decode the cookies.

//first of all we need to "deconstacor" the cookies out //26/4/22
export function example(req, res, next) {//26/04/2022
    try {
        const { userInfo } = req.cookie
        const secret = process.env.JWT_SECRET;// if I want to use something in the .ENV I need to write "process.env.___"
        if (!secret) throw new Error('there is not secret in the server')
        if (!userInfo) throw new Error('userInfo cookie is missing') // it's important to add that

        const decode = jwt.decode(userInfo, secret)
        if (decode.role === 'admin') {//?
            req.role = 'admin';//if I want to use it in the following function 
            next();
        }
    } catch (error) {
        res.send({ error: error.message })
    }

}
export function isAdmin(req , res , next){
try {
    const { userInfo } = req.cookies

    const secret = process.env.JWT_SECRET;// if I want to use something in the .ENV I need to write "process.env.___"
    const decode = jwt.decode(userInfo, secret)
    
    if (decode.role === 'admin') {
        req.role = 'admin';//if I want to use it in the next function 
        next();
    }
} catch (error) {
    res.send({err:error})
}


}
export function getId(req, res, next) {//26/04/2022
    try {
        const { userInfo } = req.cookies;
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error(' secret  is missing') // it's important to add that
        const decode = jwt.decode(userInfo, secret);
        const { id } = decode // important!! I dont think I save it so it's only for Example 
        if (id) {
            req.id = id // after that the next function can use it too
        }
        next()//impotant!! beacuse only after that he can move on // without that he won't move on    
    } catch (error) {
        console.log(error.message);

        next();// because we won't destroy everything if won't get the id // we don't have a problem if we not get it 
    }

}
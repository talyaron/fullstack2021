import jwt from 'jwt-simple'

export function hasFunds(req, res, next){
    const secret = process.env.JWT_SECRET;
    
    const { price } = req.body;
    let { userInfo } = req.cookies;
    
    userInfo = jwt.decode(userInfo, secret);
    console.log(`userFUnds:${userInfo.funds} price:${price}`);
    
    if(userInfo.funds >= price){
        console.log("buy");
        
        next();
    } 
    else res.send("no funds")

}
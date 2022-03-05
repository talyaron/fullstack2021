

// const game={
//     getNewGame: async function () {
//     try{
//        const {data} = await axios.get("/new-game");  
//        console.log(data);
//        if(Array.isArray(data)) return data;
//        throw new Error ("data is not an array");
//     }catch(err){
//         console.error(err);
//         return[]
//     }
    
//     }
    
// }

async function getNewGame(){
    const { data } = await axios.get("/new-game"); 
    console.log(data); 

}



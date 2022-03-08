

async function getAdvice(){

 const {data}=await axios.get('https://api.adviceslip.com/advice');
 console.log(data)

}

getAdvice()
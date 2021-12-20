const singers = [ "eyal" ,"omer adam" ,"maroon5", "eden"]
for (let i=0;i<singers.length;i++){
    console.log(singers[i])
}

for (let i in singers){
    console.log(singers[i])
}
 
for (let singer of singers){
    console.log(singer)
}

singers.forEach(singer=>{
    console.log(singer)
 } )
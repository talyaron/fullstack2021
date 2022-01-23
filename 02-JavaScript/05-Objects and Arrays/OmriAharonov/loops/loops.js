const singers = ['Adele', 'Bon Jovi', 'Shlomo Artzi'];

for(let i = 0; i < singers.length; i++){
    console.log(singers[i]);
}
 console.log('--------------------------')

for( let i in singers){
    console.log(singers[i])
}

console.log('--------------------------')

for(let singer of singers){
    console.log(singer)
}

console.log('--------------------------')

singers.forEach(singer => {
    console.log(singer)
})
const artists = [{name: 'Denis'}, {name: 'Avihu'}, {name:'Eminem'}]

for( i=0; i<artists.length; i++){
console.log(artists[i].name)
}

for(let i in artists){
    console.log(artists[i].name)
}

for(let artist of artists){
    console.log(artist.name)
}

artists.forEach(artist =>{
    console.log(artist.name)
})
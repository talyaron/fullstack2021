const heros=[{name:'tamir',score:[20,40,50]},{name:'aviel',score:[30,10,15]}]
 
for(let i=0; i<heros.langth; i++){
     console.log(heros[i])
 }

 for(let i in heros){
     console.log(heros[i])
 }

 for(let hero of heros){
     console.log(hero)
 }

 
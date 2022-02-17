
const movies: Array<string> = 
["Reacher", "Dont Look Up", "Attack on Titan", "Nightmare Alley"]

let i=0;
if (movies[i]) {
    console.log(movies[i]);
    
}
function handleSearch(event):void{
    try{ 
        const search = /o/;

        const sound = event.target.value
    if (movies[i]){
        console.log(sound,search.test(search,movies[i]));
        
    }
    }catch(error){
        console.error(error);
        
    }

   
}
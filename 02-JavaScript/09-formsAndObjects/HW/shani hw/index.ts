interface thePaintings{
    listOfPaintings:Array<painting>;
    sortByAscending(type:string);
    sortByDescending:any;
    addPainting:any;
    removePaintingByName?:any;
    removePaintingById?:any;
    renderListOfPaintings(list: Array<painting>);
    
}

interface painting{
    nameOfPainting:string;
    artist:string;
    madeIn:number;
    id?:string;

}

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};


const myPaintings:thePaintings ={
 listOfPaintings:[
     {nameOfPainting:'The Waterlily Pond:Green Harmony',artist:"Claude Monet",madeIn:1899},
     {nameOfPainting:"Wheat Field with Cypresses",artist:" Vincent van Gogh",madeIn:1889 }
     
 ],
 sortByAscending(type){
     document.getElementById('ascending').addEventListener("click",()=>{
        this.listOfPaintings.sort(function(a, b) {
            return a[type] - b[type];
        });
        myPaintings.renderListOfPaintings(myPaintings.listOfPaintings);

    })
    
    
 },
 sortByDescending(){


    document.getElementById('descending').addEventListener("click",()=>{
        this.listOfPaintings.sort(function(a, b) {
            return b.madeIn-a.madeIn ;
            
           
        });
        myPaintings.renderListOfPaintings(myPaintings.listOfPaintings);


    })
    
         
   
 },
 addPainting(nameOfPainting,artist,madeIn){

    const id=uid();
    
     
    this.listOfPaintings.push({nameOfPainting,artist,madeIn,id})

 },
 removePaintingByName(nameOfPainting){
//const newArray=this.listOfPaintings.filter(painting=>painting.nameOfPainting!==nameOfPainting)   
//return newArray
//console.log(newArray)
        //or i use what i did up there without the return to show the list of the new array after stuff were removed.
        //here i did that it will update the original array i made
    this.listOfPaintings=this.listOfPaintings.filter(painting=>painting.nameOfPainting !==nameOfPainting)   
    

 },
 removePaintingById(id){
    this.listOfPaintings=this.listOfPaintings.filter(painting=>painting.id !==id)   
 },
 renderListOfPaintings(array){
     let html=""
    array.forEach(painting=>{
        html+=`<div class="painting">
        <p>Name of painting:${painting.nameOfPainting}</p>
        <p>Artist:${painting.artist}</p>
        <p>Year:${painting.madeIn}</p>
        <button onclick="handleDelete('${painting.id}')">DELETE</button>      
        
        </div>`
       
    })
    document.getElementById('root').style.backgroundImage="url('img/frame.png')" ;
    document.getElementById('root').style.backgroundSize= "60vw 110vh";
    document.getElementById('root').style.backgroundRepeat= "no-repeat"; 
    document.getElementById('root').style.backgroundPosition="center";



    document.getElementById('root').innerHTML = html
      
    
 },

}

// myPaintings.sortByAscending(myPaintings);
// myPaintings.sortByDescending(myPaintings);
        //moved them to the bottom so it sort also the added paintings
myPaintings.addPainting("The Mona Lisa","Leonardo Da Vinci",1503)
myPaintings.addPainting("Viva la Vida, Watermelons","Frida Kahlo",1954)
myPaintings.sortByAscending("madeIn");
myPaintings.sortByDescending(myPaintings);
myPaintings.removePaintingByName("Wheat Field with Cypresses")
//myPaintings.removePaintingById("kyumjh549hdf5s03hab")
            //wont work at the moment cause the id is always changing

myPaintings.renderListOfPaintings(myPaintings.listOfPaintings);

console.log(myPaintings)

function handleSubmit(ev){
    ev.preventDefault();
    

    const nameOfPainting=ev.target.elements.nameOfPainting.value;
    const artist=ev.target.elements.artist.value;
    const madeIn=ev.target.elements.madeIn.valueAsNumber;

   
   
    myPaintings.addPainting(nameOfPainting,artist,madeIn);
    //makes that the items that the user adds goes into the function of addPainting and each inputs value is taken and taken into the adding function
    myPaintings.renderListOfPaintings(myPaintings.listOfPaintings);
    //i do this in order to print the new list that is printed through the render and is taking the new list changed after the addPainting
    

    ev.target.reset();

}

//i dont understand how by me writing the renderlistpaintings it is updated with the item i erased
function handleDelete(id){
    
    myPaintings.removePaintingById(id)
    myPaintings.renderListOfPaintings(myPaintings.listOfPaintings);


}






interface thePaintings{
    listOfPaintings:Array<painting>;
    sortByAscending:any;
    sortByDescending:any;
    addPainting:any;
    removePainting?:any;

}

interface painting{
    nameOfPainting:string;
    artist:string;
    madeIn:number;
    id:any;

}

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36);
};
const id=uid();

const myPaintings:thePaintings ={
 listOfPaintings:[
     {nameOfPainting:'The Waterlily Pond: Green Harmony',artist:"Claude Monet",madeIn:1899,id},
     {nameOfPainting:"Wheat Field with Cypresses",artist:" Vincent van Gogh",madeIn:1889,id }
     
 ],
 sortByAscending(){
   this.listOfPaintings.sort(function(a, b) {
        return a.madeIn - b.madeIn;
    });
    
 },
 sortByDescending(){
    this.listOfPaintings.sort(function(a, b) {
        return b.madeIn-a.madeIn ;
       
    });       

 },
 addPainting(nameOfPainting,artist,madeIn,id){
     
     this.listOfPaintings.push({nameOfPainting,artist,madeIn,id})

 },
 

}
console.log(myPaintings)
myPaintings.sortByAscending(myPaintings);
myPaintings.sortByDescending(myPaintings);
//moved them to the bottom so it sort also the added paintings
myPaintings.addPainting("The Mona Lisa","Leonardo Da Vinci",1503,id)
myPaintings.sortByAscending(myPaintings);
myPaintings.sortByDescending(myPaintings);





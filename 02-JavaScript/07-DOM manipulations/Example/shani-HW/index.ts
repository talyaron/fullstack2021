let greetings:any=document.querySelector("#Greetings");
greetings.style.fontFamily="Impact,Charcoal,sans-serif";

//how do i do upper case



let pathway:any=document.querySelector("#path");
pathway.style.width="100%"
pathway.style.height="3rem"
pathway.style.backgroundColor="black";
pathway.style.marginTop="5rem";
pathway.style.display="flex";
pathway.style.flexDirection="row"; 
pathway.style.justifyContent=" space-between";

let pacman:any=document.querySelector(".pacman")
pacman.style.backgroundColor="yellow";
pacman.style.width="3rem";
pacman.style.height="3rem";
pacman.style.borderRadius="50%";


//why wont my white dots showw????

let dots:any=document.querySelector(".dot");
for(let i=0;i<=dots.length;i++){
    function type() {
        
        dots.style.backgroundColor="white";
        dots.style.width="1rem";
        dots.style.height="1rem";
        dots.style.borderRadius="50%";
        dots.style.margin="15px";
        
    
    }
    
  //or  
let dots:any=document.querySelector(".dot");
dots.style.backgroundColor="white";
dots.style.width="1rem";
dots.style.height="1rem";
dots.style.borderRadius="50%";
dots.style.margin="15px";

let dot2:any=document.querySelector(".2");
dot2.style.backgroundColor="red";
dot2.style.width="1rem";
dot2.style.height="1rem";
dot2.style.borderRadius="50%";
dot2.style.margin="15px";



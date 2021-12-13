//var num1, num2;
//num1 = window.prompt("Input the First integer", "0");
//num2 = window.prompt("Input the second integer", "0");
//if(parseInt(num1,10)>parseInt(num2,10)){
//console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".")
//}
//else if(parseInt(num2,10)>parseInt(num1,10)){
  //  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".")
//}
//else{
  //  console.log("The values "+ num1+ " and "+num2+ " are equal.");
//}
//var numa, numb, numc;
//numa = window.prompt("Input the First integer", "0");
//numb = window.prompt("Input the second integer", "0");
//numc = window.prompt("Input the second integer", "0");
//if(numa>0 && numb>0 && numc>0){
 //   console.log('the sign is +')
//}
//else if(numa>0 && numb<0 && numc>0){
  //  console.log('the sign is +')
//}
//else if(numa>0 && numb<0 && numc<0){
  //  console.log('the sign is +')
//}
//else{
  //  console.log('the sign is -')
//}
//if(numa<numb && numa<numc){
 //   if(numb<numc){
   //  console.log(numa+', '+numb+', '+numc);  
    //}
    //else{
      //  console.log(numa+', '+numc+', '+numb); 
    //}
 
///\}
//else if(numb<numa && numb<numc){
  //  if(numa<numc){
    //    console.log(numb+', '+numa+', '+numc);  
    //}
    //else{
      //  console.log(numb+', '+numc+', '+numa); 
   // }
//}
//else if(numc<numa && numc<numb){
  //  if(numa<numb){
    //    console.log(numc+', '+numa+', '+numb);  
   // }
    //else{
      //  console.log(numc+', '+numb+', '+numa);  
    //}
//}
//var numa, numb, numc, numd, nume;
//numa = window.prompt("Input the First integer", "0");
//numb = window.prompt("Input the second integer", "0");
//numc = window.prompt("Input the third integer", "0");
//numd = window.prompt("Input the fourth integer", "0");
//nume = window.prompt("Input the fifth integer", "0");

//if(numa>numb && numa>numc && numa>numd && numa>nume){
  //  console.log(numa);
//}
//else if(numb>numa && numb>numc && numb>numd && numb>nume){
  //  console.log(numb);
//}
//else if(numc>numa && numc>numb && numc>numd && numc>nume){
  //  console.log(numc);
//}
//else if(numd>numa && numd>numc && numd>numb && numd>nume){
  //  console.log(numd);
//}
//else{
  //  console.log(nume);
//}
//for(let i=0; i<15; i++){
  //  if(i%2 ===0){
    //    console.log(i + ' is even'); 
    //}
    //else{
      //  console.log(i + ' is odd'); 
    //}
//}
//let david = 80, vinoth=77, divya=88, ishitha=95, thomas=68;
//let a=(david+vinoth+divya+ishitha+thomas)/5
//for(let i=0; i<100; i+=10){
  //  if(a<60){
    //    console.log('Grade : f');
    //}
    //else if(a<70 && a>60){
     //   console.log('Grade : d');
    //}
    //else if(a<80 && a>70){
     //   console.log('Grade : c');
    //}
    //else if(a<90 && a>80){
     //   console.log('Grade : b');
    //}
    //else{
      //  console.log('Grade : a');
   // }
//}

//for(let i=1; i<100; i++){
  //   if(i%3===0 && i%5===0){
    // console.log(i+' FizzBuzz');
   //}
   //else if(i%3===0){
     //console.log(i +' Fizz');
   //}
   //else if(i%5===0){
     //console.log(i+' Buzz');
   //}
//else{
 // console.log(i);
//}
//}
//for (var i = 1; i < 10; ++i) 
//{
  //for (var j = 0; j < 10; ++j) 
    //{
      // for (var k = 0; k < 10; ++k)
       //{
         //var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
         //var plus = (i * 100 + j * 10 +  k);
         //if (pow == plus) 
          //{     
           // console.log(pow);
           //}
        //}
      //}
   //}
   //let x;
   
   //for(let i=1; i<=6; i++){
    //for(let y=1; y<i; y++){
      //x=x+('*');
       
    //}
   //console.log(x+' ');
   //}
   //11?
 let sum=0;
  for(let i=0; i<1000; i++){
   if(i%3===0 || i%5===0){
    sum+=i
   }
   
  }
   console.log(sum);
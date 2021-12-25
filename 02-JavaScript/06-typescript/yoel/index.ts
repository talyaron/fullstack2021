function avg(a:number , b:number):string{
    try{
        let avg2= (a+b)/2;
        return 'the average is '+ avg2 
       }
    catch(error){
        console.log(error);
    }

}

console.log(avg(7,6));
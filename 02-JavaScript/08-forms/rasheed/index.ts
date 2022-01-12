function formInput(ev:any):void {
    ev.preventDefault();
    


    const formObject = {}
    

    for (let i of ev.target){
        console.log(i.name, i.value)
    }
    console.log(formObject)


   


}
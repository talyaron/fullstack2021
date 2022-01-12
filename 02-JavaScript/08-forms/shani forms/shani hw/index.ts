function handleSubmit1(e:any):void {
    e.preventDefault();

    console.log(e)

    const name=e.target.children.firstname.value

    console.log(name)
}
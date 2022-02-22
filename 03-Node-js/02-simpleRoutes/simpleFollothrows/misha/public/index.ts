axios
.get('./getUsers')
.then(({data}) => {
    console.log(data);
})
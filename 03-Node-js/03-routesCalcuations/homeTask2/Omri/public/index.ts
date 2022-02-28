function handleSearch(ev){
    try {
        const searchTerm = ev.target.value;
        axios.get(`/getArticels?article=${searchTerm}`).then(({data}) => {
            if(Array.isArray(data)){
                console.log(data)
            }
          
        })    
    } catch (error) {
        console.error(error);
    }
}
axios.get("/player").then(({ data }) => { console.log(data)})

const btns = document.querySelectorAll('.main_form-btns')

btns.forEach(btn => {
    btn.addEventListener('click' , displayPlayer)
})

function displayPlayer(ev){
    ev.preventDefault()
    

    try{ 
        const year = ev.target.value
        const display = document.querySelector('.main_display') as HTMLDivElement
        let html = '';
        if(year){
            axios.get(`/get-player?year=${year}`).then(({data}) => { 
                console.log(data);
                html = `<h3 class="main_display_playerName">${data[0].name}</h3>
                <span class="main_display-year">Winner Ballon d'Or in ${data[0].year} </span><br>
                <span class="main_display-national">Nationality : ${data[0].nationality} </span>`
                
                display.style.backgroundImage = `url(${data[0].url})`
                display.innerHTML = html
            })
            
        }
    
        
    } 
        
}  
   


    









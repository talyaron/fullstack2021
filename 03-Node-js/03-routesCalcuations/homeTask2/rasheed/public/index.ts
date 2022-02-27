axios.get("/get-users").then(({ data }) => {
    
  });
  

let search = (<HTMLInputElement>document.querySelector("search"));
const matchList = document.querySelector("match-list");

function searchCountry(searchText) {
    
    axios.get("/get-users").then(({ data }) => {
       


     let matches = data.filter(country => {
         const regex = new RegExp(`${searchText}`, "gi")
         return country.name.match(regex)
     });
     if(search.value === ""){
         matches = ""
     }
     console.log (matches)
    //  theHtml(matches)
     
    });
}

// function theHtml(matches) {
//     if(matches.length > 0){
//         const html = matches.map(match => `
//         <ul>
//         <li>${match.name}</li>
//         </ul>
//         `).join("")
//         matchList.innerHTML = html
//     };
// } 
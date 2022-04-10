
// async function loadPlaces(data) {
// //   const { data } = await axios.get("/places/getPlaces");
// //   console.log(data);
//  console.log(data)
//   renderAirbnbOptions(data)



 
// }
//loadPlaces()

async function handleLoadPlace() {
  try {
    const { data } = await axios.get("/places/getToPlace");

    console.log(data);
    renderPlace(data);
  } catch (error) {
    console.error(error.message);
  }
}
async function handleGoToPlace(placeId) {
  const { data } = await axios.get("/goToPlace", { data: { placeId } });
  renderPlace(data);
}
function renderPlace(data: Array<any>) {
  try {
    const html = data
      .map((place) => {
        return `<div class="mainUpper">
    <div class="maiUpper__title">
        <h1>${place.name}</h1>
       <h3>${place.price}$</h3>
    </div>
    <div class="mainUpper__photoGrid">
        <div class="mainUpper__photoGrid--bigPhoto"><img src="${place.images}" alt=""></div>
        <div class="mainUpper__photoGrid--photo"><img src="${place.images}" alt=""></div>
        <div class="mainUpper__photoGrid--photo"><img src="${place.images}" alt=""></div>
            <div class="mainUpper__photoGrid--photo"><img src="${place.images}" alt=""></div>
    </div>

</div>
<div class="mainMiddle">
    <div class="mainMiddle__left">
        <div class="mainMiddle__left--up">
            <div class="mainMiddle__left--up--title">   
            <h2>entire rental unit hosted by ${place.host}</h2>
        <h6>${place.accommodates} <span>&#8226;</span> ${place.bedrooms} <span>&#8226;</span> ${place.beds} <span>&#8226;</span>${place.bathrooms}</h6></div>
        <div class="mainMiddle__left--up--profile">
            <img src="${place.host}">
        </div>
    </div>
    <div class="mainMiddle__left--great">
        <h5>${place.description}</h5>
    </div>
    <div class="mainMiddle__left--bed">
        <h2>where you'll sleep</h2>
        <div class="mainMiddle__left--bed--box">
            <i class="fa-thin fa-bed-front"></i>
            <h5>${place.bed_type}</h5>
        </div>
    </div>
    <div class="mainMiddle__left--list">
        <h2>what this place offers</h2>
        <ul>
      
        ${place.amenities}
        </ul>
        <button>show all 12 amenities</button>
    </div>
    <div class="mainMiddle__left--date">
        <input type="date" id="birthday" name="birthday">
    </div>
    </div>
   
</div>
<div class="reviews">
     <h3>review</h3>
   <div class="reviews__review">
      <div class="name">
      <h5>
        ${place.reviews.reviewer_name}
        </h5>
      </div>
      <div class="year">
      <h6>
      ${place.reviews.date}
      </h6>
      </div>
      <div class="theReview">
          <p>${place.reviews.comments}
            </p>
        </div>
 </div> 
 <div class="reviews__review">
 <div class="name">
 <h5>
   ${place.reviews.reviewer_name}
   </h5>
 </div>
 <div class="year">
 <h6>
 ${place.reviews.date}
 </h6>
 </div>
 <div class="theReview">
     <p>${place.reviews.comments}
       </p>
   </div>
</div> 
<div class="reviews__review">
      <div class="name">
      <h5>
        ${place.reviews.reviewer_name}
        </h5>
      </div>
      <div class="year">
      <h6>
      ${place.reviews.date}
      </h6>
      </div>
      <div class="theReview">
          <p>${place.reviews.comments}
            </p>
        </div>
 </div> 
 <div class="reviews__review">
      <div class="name">
      <h5>
        ${place.reviews.reviewer_name}
        </h5>
      </div>
      <div class="year">
      <h6>
      ${place.reviews.date}
      </h6>
      </div>
      <div class="theReview">
          <p>${place.reviews.comments}
            </p>
        </div>
 </div> 
</div>
<div id="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2s!4v1648657793371!5m2!1siw!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<div class="aboutHost">
    <div class="aboutHost--left">
        <div class="aboutHost--left--profileHost">
            <img src="${place.host}" alt="" style="width:50px; height:50px; border-radius:100%;">
        </div>
        <div class="aboutHost--left--title">
            <h2>
                hosted by ${place.host}
            </h2>
        </div>
        <div class="aboutHost--left--review">
            <p><span><i class="fa-solid fa-star"></i></span>${place.number_of_reviews} reviews</p>
            <p><span><i class="fa-solid fa-square-check"></i></span> host is verified: ${place.host.host_identity_verified}</p>
        </div>
        <div class="aboutHost--left--about">
            <p>
               ${place.host.host_about}
            </p>
        </div>
    </div>
    <div class="aboutHost--right">
        <h5>
            languages: english, francais, hebrew
        </h5>
        <h5>
            response rate: ${place.reviews_rating}
        </h5>
        <h5>
            response time: ${place.reviews_rating}
        </h5>
        <button>
            contact host
        </button>
        <p class="payment">
            To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
        </p>
    </div>
</div>
<div class="toKnow">
    <h2>things to know</h2>
    <ul>
        <p>house rule</p>
        <li>
            Check-in: 4:00 PM - 10:00 PM
        </li>
        <li>
            Checkout: 11:00 AM
        </li>
        <li>
            No smoking
        </li>
        <li>
            No pets
        </li>
        <li>
            No parties or events
        </li>
        <button>shoe more</button>
    </ul>
    <ul>
        <p>health &safety</p>
        <li>
            Airbnb's social-distancing and other COVID-19-related guidelines apply 
        </li>
        <li>
            
Carbon monoxide alarm not reported Show more
        </li>
        <li>
            Smoke alarm not reported Show more
        </li>
        <li>
            Security Deposit - if you damage the home, you may be charged up to ₪2500
        </li>
        <button>show more</button>
    </ul>
    <div class="toKnow__cancle">
        <h5>cancellation policy</h5>
        <p>${place.cancel}</p>
        <button>add dates</button>
    </div>
    
</div>`;
      })
      .join("");
    // console.log(html)

    document.querySelector("#rootPlace").innerHTML = html;
  } catch (error) {
    console.error(error.message);
  }
}

async function handleFindAirbnb(ev) {
  ev.preventDefault();
  
  const search = ev.target.elements.searchLocation.value;
  const checkIn = ev.target.elements.checkIn.value;
  const checkOut = ev.target.elements.checkOut.value;
  const adults = ev.target.elements.adults.value;
  const children = ev.target.elements.children.value;
  const infants = ev.target.elements.infants.value;
  const pets = ev.target.elements.pets.value;

  console.log(search, checkIn, checkOut, adults, children, infants, pets);

  const { data } = await axios.get(
    `/places/search-airbnb?search=${search}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&infants=${infants}&pets=${pets} `
  );
  console.log(data)

   renderAirbnbOptions(data.places);
   //  const {options}=data
   //loadPlaces(data.places)
    // console.log(options)
 
  // ev.target.reset();
 
}

async function handleCities(ev) {
  
  const city = ev.target.dataset.card;
  console.log(city);

  const { data } = await axios.post("/places/search-city", { city });
  console.log(data);
}



async function handleFilter(ev) {
  const price = ev.target.elements.price.valueAsNumber;
  //console.log(price);
  const { data } = await axios.get("/places/getFiltered", { data: { price } });
}

function renderAirbnbOptions(places:Array<any>) {
    
    try{
        console.log(places);
        if(!Array.isArray(places)) throw new Error('sata is not an array');

        const root:HTMLElement=document.querySelector('#rootPlaces');
        let html="";
        
        places.forEach((place) => {   
        html+= `<div class="card-grid__card" onclick="handleGoToPlace(${place._id}) " onclick="location.href='place.html'"> 
                        <div class="card-header card-img">
                            <img src="${place.images}" alt="">   
                        </div>
                    <div class="content">
                        <div class="card-grid__card__card-header">
                            <button class="btn"><img src="images/icons-heart.png" alt=""></button>
                            <button class="btn btn-outline">${place.name}</button>
                            <p>${place.address_country_code},${place.address_country}</p>
                        </div>
                        <div class="card-grid__card__card-body">
                            <p>${place.description}</p>
                        </div>
                        <div class="card-grid__card__card-footer">
                            <button class="btn"><p>${place.price}</p>/night</button>
                            <button class="btn btn-outline"><p>${place.reviews_rating}</p></button>
                        </div>
                    </div>
                </div>`        
    
        });
        // let html=data.map(airbnb=>{
        //     return `<p>${airbnb.name} </p>`
        // }).join("");
        root.innerHTML = html;
        
    }catch(error){
        console.error(error.message)
    }
    
    
}

function handlePopup() {
    var popup = document.getElementById("myPopup");
    //popup.classList.toggle("show");
   
    const showPopupText:any=document.querySelector('.popuptext');
    showPopupText.style.visibility="visible";
} 

// async function handleLogin(ev) {
//     ev.preventDefault()
//     let {username,password,role}=ev.target.elements;
//     username=username.value
//     password=password.value
//     role=role.value
    

//     console.log(username,password,role)
//    //console.log(username,password)
//     const { data } = await axios.post("/users/login", {username,password,role});
//     //console.log(data)

//     if(data.login){
//         const showPopupText:any=document.querySelector('.popuptext');
//         showPopupText.style.visibility="hidden";
//         //document.body.style.backgroundColor="red";
//         if(role==="admin"){
//             document.body.style.backgroundColor="red";
//         }else if(role==="host"){
//             document.body.style.backgroundColor="blue";
//         }else{
//             document.body.style.backgroundColor="green";
//         }
       
      
      
//     }
// }



async function handleRegister(ev) {
    ev.preventDefault()
    
    let {username,password,role}=ev.target.elements;
    username=username.value
    password=password.value
    role=role.value
   
    const { data } = await axios.post("/users/add-User",  { username,password,role } );
    console.log(data)
    if(data.register){
        const showPopupText:any=document.querySelector('.popuptext');
        showPopupText.style.visibility="hidden";
        //document.body.style.backgroundColor="red";
        if(role==="admin"){
            document.body.style.backgroundColor="red";
        }else if(role==="host"){
            document.body.style.backgroundColor="blue";
        }else{
            document.body.style.backgroundColor="green";
        }
       
      
      
    }
}




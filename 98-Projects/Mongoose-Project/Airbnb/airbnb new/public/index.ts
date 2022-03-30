``

async function loadPlaces(){
    const {data} = await axios.get('/places/getPlaces')
    console.log(data);
    
  //  renderAirbnb(data);
}
//loadPlaces()
async function handleLoadPlace(){
    try{

  
   const {data} = await axios.get('/places/getToPlace');
   
   console.log(data);
   renderPlace(data);
   
}catch (error) {
    console.error(error.message);
  
}}
async function handleGoToPlace(placeId){
  const {data} = await axios.get('/goToPlace',{data:{placeId}})
  renderPlace(data)
}
function renderPlace(data:Array<any>){
try{
  const html = data.map(place=>{
    return`<div class="mainUpper">
    <div class="maiUpper__title">
        <h1>${place.name}</h1>
       <h3>${place.price}$</h3>
    </div>
    <div class="mainUpper__photoGrid">
        <div class="mainUpper__photoGrid--bigPhoto"><img src="${place.images.xl_picture_url}" alt=""></div>
        <div class="mainUpper__photoGrid--photo"><img src="${place.images.medium_url}" alt=""></div>
        <div class="mainUpper__photoGrid--photo"><img src="${place.images.picture_url}" alt=""></div>
            <div class="mainUpper__photoGrid--photo"><img src="${place.images.thumbnail_url}" alt=""></div>
    </div>

</div>
<div class="mainMiddle">
    <div class="mainMiddle__left">
        <div class="mainMiddle__left--up">
            <div class="mainMiddle__left--up--title">   
            <h2>entire rental unit hosted by ${place.host.host_name}</h2>
        <h6>${place.accommodates} <span>&#8226;</span> ${place.bedrooms} <span>&#8226;</span> ${place.beds} <span>&#8226;</span> 1 bath</h6></div>
        <div class="mainMiddle__left--up--profile">
            <img src="${place.host.host_picture_url}">
        </div>
    </div>
    <div class="mainMiddle__left--great">
        <h5>${place.space}</h5>
        <h5>${place.description}</h5>
    </div>
    <div class="mainMiddle__left--aboutUs">
        <p>${place.summary}
            </p>
            <a href="#">show more</a>
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
    <div class="mainMiddle__stiky">
    <form class="form">
    <div class="form--searchLocation">
        <label for="searchLocation">Location <br>
            <input id="searchLocation" type="text" placeholder="Where are you going?">
        </label>
        <div class="dropdown">
            <p>Adults
                Ages 13 or above</p>
            <p>Children
                Ages 2–12</p>
            <p>Infants
                Under 2</p>
            <p>
                Pets
                Bringing a service animal?
            </p>

        </div>
    </div>

    <div class="form--checkIn">
        <label for="checkIn">Check in <br>
            <button id="checkIn">Add dates</button>
        </label>
        <div class="dropdown">
            <p>Adults
                Ages 13 or above</p>
            <p>Children
                Ages 2–12</p>
            <p>Infants
                Under 2</p>
            <p>
                Pets
                Bringing a service animal?
            </p>

        </div>
    </div>

    <div class="form--checkOut">
        <label for="checkOut">Check out<br>
            <button id="checkOut">Add dates</button>
        </label>
        <div class="dropdown">
            <p>Adults
                Ages 13 or above</p>
            <p>Children
                Ages 2–12</p>
            <p>Infants
                Under 2</p>
            <p>
                Pets
                Bringing a service animal?
            </p>

        </div>
    </div>

    <div class="form--guests">
        <label for="guests">Guests<br>
            <button id="guests">Add guests</button>
        </label>
        <div class="dropdown">
            <p>Adults
                Ages 13 or above</p>
            <p>Children
                Ages 2–12</p>
            <p>Infants
                Under 2</p>
            <p>
                Pets
                Bringing a service animal?
            </p>

        </div>
    </div>


    <a href="" class="form--searchIcon"><input type="image" src="images/searchIcon.png" ></a>


</form>
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

</div>
<div class="aboutHost">
    <div class="aboutHost--left">
        <div class="aboutHost--left--profileHost">
            <img src="${place.hosthost_picture_url}" alt="" style="width:50px; height:50px; border-radius:100%;">
        </div>
        <div class="aboutHost--left--title">
            <h2>
                hosted by ${place.host.host_name}
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
            response rate: ${place.host.host_response_rate}
        </h5>
        <h5>
            response time: ${place.host_host_response_time}
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
        <p>${place.cancellation_policy}</p>
        <button>add dates</button>
    </div>
    
</div>`
  })
  .join('');
  // console.log(html)

  document.querySelector('#rootPlace').innerHTML = html;
}
catch (error) {
  console.error(error.message);

}
}
     


               // ---- search in navigation bar---------


// async function handleSearchCity(ev){
//     const search=ev.target.value;
//     console.log(search);
//     const {data}= await axios.get(`/search-city?search=${search}`);
//     //renderToGameStore(data);
//     console.log(data)

// }
async function handleFindAirbnb(ev){
    ev.preventDefault();
    const search=ev.target.elements.searchLocation.value;
    const checkIn=ev.target.elements.checkIn.value;
    const checkOut=ev.target.elements.checkOut.value;
    const adults=ev.target.elements.checkOut.value;
    const children=ev.target.elements.children.value;
    const infants=ev.target.elements.infants.value;
    const pets=ev.target.elements.pets.value;

    const {data}= await axios.get('/places/search-airbnb', {
        search,checkIn,checkOut,adults,children,infants,pets
    })
    console.log(data)
    ev.target.reset();
  

}
async function handleSearch(ev){
    const search=ev.target.value;
    console.log(search);
    const {data}=await axios.get(`'/places/search'?search=${search}`);
    const{city}=data;
    console.log({city})



}

// async function handleSearchCity(ev){
//     const search=ev.target.value;
//     console.log(search);
//     const {data}=await axios.get(`'/search-airbnb'?search=${search}`);
//     const{city}=data;
//     console.log({city})



// }


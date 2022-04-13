function handleLoadPlaces() {
  const data = getData();
  //getData()
  // renderAirbnbOptions(data)
  console.log(getData());
  renderAirbnbOptions(data);
  // window.location.href="places.html"
}

async function handleLoadPlace() {
  try {
    const data = getData();
    console.log(data);
    renderPlace(data);
  } catch (error) {
    console.error(error.message);
  }
}

async function handleGoToPlace( placeId) {
 
  try {
    
      const { data } = await axios.get("/places/goToPlace", {data: { placeId }});
      storeData(data);
      console.log(placeId);
      if (data) {
        window.location.href = "place.html";
        handleLoadPlace();
      }
    
  } catch (error) {
    console.error(error.message);
  }
}

function renderPlace(data: Array<any>) {
  try {
    const html = data
      .map((place) => {
        return ` <div class="mainUpper">
        <div class="maiUpper__title">
            <h1>${place.name}</h1>
            <h3>${place.price}$</h3>
        </div>
        <div class="mainUpper__photoGrid">
            <div class="mainUpper__photoGrid--bigPhoto"><img src="${place.images}" alt=""></div>

        </div>

    </div>
    <div class="mainMiddle">
        <div class="mainMiddle__left">
            <div class="mainMiddle__left--up">
                <div class="mainMiddle__left--up--title">
                    <h2>entire rental unit hosted by ${place.host_name}</h2>
                </div>
                <h6>${place.accommodates} <span>&#8226;</span> ${place.bedrooms} <span>&#8226;</span> ${place.beds}<span>&#8226;</span>${place.bathrooms}</h6>
            </div>
            <div class="mainMiddle__left--up--profile">
                <img src="${place.host_picture_url}">
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

        </div>

    </div>

    
    <div class="reviews">
        <h3>review</h3>
        <div class="reviews__review">
            <p>${place.reviews}</p>
        </div>

    </div>
    <div id="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2s!4v1648657793371!5m2!1siw!2s"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="aboutHost">
        <div class="aboutHost--left">
            <div class="aboutHost--left--profileHost">
                <img src="${place.host_picture_url}" alt="" style="width:50px; height:50px; border-radius:100%;">
            </div>
            <div class="aboutHost--left--title">
                <h2>
                    hosted by ${place.host_name}
                </h2>
            </div>

        </div>
        <div class="aboutHost--right">
            <h5>
                languages: english, francais, hebrew
            </h5>
            <h5>
                response rate: ${place.reviews_rating}
            </h5>


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

        </ul>
        <div class="toKnow__cancle">
            <h5>cancellation policy</h5>
            <p>${place.cancle}</p>

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

function storeData(data) {
  try {
    if (data) {
      localStorage.setItem("airbnbData", JSON.stringify(data));
    }
  } catch (error) {
    console.error(error.message);
  }
}

function getData() {
  try {
    const airbnbNavFiltered = JSON.parse(localStorage.getItem("airbnbData"));
    console.log(airbnbNavFiltered.getplaces);

    if (Array.isArray(airbnbNavFiltered.getplaces)) {
      return airbnbNavFiltered.getplaces;
    } else {
      return [];
    }
  } catch (err) {
    console.log(err.message);
  }
}

async function handleFindAirbnb(ev) {
  ev.preventDefault();

  const searchLocation = ev.target.elements.searchLocation.value;
  const checkIn = ev.target.elements.checkIn.value;
  const checkOut = ev.target.elements.checkOut.value;
  const adults = ev.target.elements.adults.value;
  const children = ev.target.elements.children.value;
  const infants = ev.target.elements.infants.value;
  const pets = ev.target.elements.pets.value;

  // console.log(
  //   searchLocation,
  //   checkIn,
  //   checkOut,
  //   adults,
  //   children,
  //   infants,
  //   pets
  // );

  const { data } = await axios.get(
    `/places/search-airbnb?searchLocation=${searchLocation}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&infants=${infants}&pets=${pets} `
  );
  //console.log(data)
  //console.log(data.getplaces); it shows that is has the array of objects

  storeData(data);
  if (data) {
    window.location.href = "places.html";

    handleLoadPlaces();
  }
}

async function handleCities(ev) {
  const city = ev.target.dataset.card;
  console.log(city);

  const { data } = await axios.post("/places/search-city", { city });
  console.log(data);
  storeData(data);
  if (data) {
    window.location.href = "places.html";

    handleLoadPlaces();
  }
}

async function handleFilter(ev) {
  const price = ev.target.elements.price.valueAsNumber;
  //console.log(price);
  const { data } = await axios.get("/places/getFiltered", { data: { price } });
}

function renderAirbnbOptions(data: Array<any>) {
  try {
    if (!Array.isArray(data)) throw new Error("data is not an array");

    const root = document.querySelector("#rootPlaces");
    let html = "";

    data.forEach((place) => {
      html += ` <div class="airbnbOptions__container" onclick="handleGoToPlace(${place._id})">
                      <div class="airbnbOptions__container__img">
                          <img src="${place.images}">
                      </div>
                      <div class="airbnbOptions__container__content">
                          <div class="airbnbOptions__container__content__namePlace">                                
                              
                                  <h3>${place.name} </h3>
                                  <h5>accommodates:${place.accommodates} </h5>
                             
                              <p>
                              ${place.address_country_code} ,  ${place.address_country}
                              </p>
                          </div>
                          <div class="airbnbOptions__container__content__description">
                              <p>
                              ${place.description}
                              </p>
                          </div>
                          <div class="airbnbOptions__container__content__priceRating">
                              <button class="btn btn-outline">
                              ${place.price}
                              </button>
                              <button class="btn btn-outline">
                                 
                              ${place.reviews_rating}
                                  

                              </button>
                          </div>

                      </div>
                  </div>`;
      root.innerHTML = html;
    });
  } catch (error) {
    console.error(error.message);
  }
}

function handlePopup() {
  var popup = document.getElementById("myPopup");
  //popup.classList.toggle("show");

  const showPopupText: any = document.querySelector(".popuptext");
  showPopupText.style.visibility = "visible";
}

async function handleLogin(ev) {
  ev.preventDefault();
  let { username, password, role } = ev.target.elements;
  username = username.value;
  password = password.value;
  role = role.value;

  console.log(username, password, role);

  const { data } = await axios.post("/users/login", {
    username,
    password,
    role,
  });

  if (data.login) {
    const showPopupText: any = document.querySelector(".popuptext");
    const userProfileButton: any = document.querySelector(".navigation--user");
    showPopupText.style.visibility = "hidden";
    const showUsersName: any = document.querySelector("#theUsersName");

    // window.location.href = 'owner.html';

    if (role === "admin") {
      window.location.href = "owner.html";

      userProfileButton.style.backgroundColor = "red";
    } else if (role === "host") {
      showPopupText.style.visibility = "hidden";
      showUsersName.innerHTML = `${username}`;
      userProfileButton.style.backgroundColor = "blue";

      //window.location.href = `/index.html?username=${username}`;
    } else {
      showPopupText.style.visibility = "hidden";
      showUsersName.innerHTML = `${username}`;
      userProfileButton.style.backgroundColor = "green";
    }
  } else {
    console.log("HA you got it wrong");
  }
}

async function handleRegister(ev) {
  ev.preventDefault();

  let { username, password, role } = ev.target.elements;
  username = username.value;
  password = password.value;
  role = role.value;

  const { data } = await axios.post("/users/add-User", {
    username,
    password,
    role,
  });
  console.log(data);
  if (data.register) {
    const showPopupText: any = document.querySelector(".popuptext");
    showPopupText.style.visibility = "hidden";
    //document.body.style.backgroundColor="red";
    if (role === "admin") {
      document.body.style.backgroundColor = "red";
    } else if (role === "host") {
      document.body.style.backgroundColor = "blue";
    } else {
      document.body.style.backgroundColor = "green";
    }
  }
}

async function handleGetUsers() {
  try {
    const result = await axios.get("/users/get-Users");

    const { data } = result;
    const { users } = data;
    if (users) {
      renderUsersToOwnerPage(users);
    }
  } catch (err) {
    console.error(err.message);
    // console.error(err.status)
  }
}
function renderUsersToOwnerPage(users: Array<any>) {
  //console.log(users)

  try {
    console.log(users);

    if (!Array.isArray(users)) throw new Error("data is not an array");

    const root: HTMLElement = document.querySelector("#user");
    let html = "";

    users.forEach((user) => {
      html += `<div class="airbnbUser" >
                       <h3>${user.username}</h3>
                       <p>${user._id}</p>
                       <input type="text" value=${user.username} name="username" onblur="handleUpdateUsers(event,'${user._id}')" >                       
                       <p>${user.role}</p> 
                       <button onclick='handleDeleteUsers("${user._id}")'>Delete User</button>                  
                       
                       

                    </div>`;
      root.innerHTML = html;
    });
  } catch (error) {
    console.error(error.message);
  }
}

async function handleUpdateUsers(ev, userId) {
  const username = ev.target.value;
  //const role=ev.target.role.value;

  const { data } = await axios.patch("/users/update-user", {
    userId,
    username,
  });
  console.log(data);
  //renderUsersToOwnerPage(data.users)
}
async function handleDeleteUsers(userId) {
  const { data } = await axios.delete("/users/delete-user", {
    data: { userId },
  });
  console.log(data);
}

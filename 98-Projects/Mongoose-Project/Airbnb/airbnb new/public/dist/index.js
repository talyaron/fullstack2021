var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function loadPlaces() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/places/getPlaces')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleLoadPlace() {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/places/getToPlace')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// async function handleGoToPlace(placeId) {
//     const { data } = await axios.get('/goToPlace', { data: { placeId } })
//     renderPlace(data)
// }
// function renderPlace(data: Array<any>) {
//     try {
//         const html = data.map(place => {
//             return `<div class="mainUpper">
//     <div class="maiUpper__title">
//         <h1>${place.name}</h1>
//        <h3>${place.price}$</h3>
//     </div>
//     <div class="mainUpper__photoGrid">
//         <div class="mainUpper__photoGrid--bigPhoto"><img src="${place.images.xl_picture_url}" alt=""></div>
//         <div class="mainUpper__photoGrid--photo"><img src="${place.images.medium_url}" alt=""></div>
//         <div class="mainUpper__photoGrid--photo"><img src="${place.images.picture_url}" alt=""></div>
//             <div class="mainUpper__photoGrid--photo"><img src="${place.images.thumbnail_url}" alt=""></div>
//     </div>
// </div>
// <div class="mainMiddle">
//     <div class="mainMiddle__left">
//         <div class="mainMiddle__left--up">
//             <div class="mainMiddle__left--up--title">   
//             <h2>entire rental unit hosted by ${place.host.host_name}</h2>
//         <h6>${place.accommodates} <span>&#8226;</span> ${place.bedrooms} <span>&#8226;</span> ${place.beds} <span>&#8226;</span> 1 bath</h6></div>
//         <div class="mainMiddle__left--up--profile">
//             <img src="${place.host.host_picture_url}">
//         </div>
//     </div>
//     <div class="mainMiddle__left--great">
//         <h5>${place.space}</h5>
//         <h5>${place.description}</h5>
//     </div>
//     <div class="mainMiddle__left--aboutUs">
//         <p>${place.summary}
//             </p>
//             <a href="#">show more</a>
//     </div>
//     <div class="mainMiddle__left--bed">
//         <h2>where you'll sleep</h2>
//         <div class="mainMiddle__left--bed--box">
//             <i class="fa-thin fa-bed-front"></i>
//             <h5>${place.bed_type}</h5>
//         </div>
//     </div>
//     <div class="mainMiddle__left--list">
//         <h2>what this place offers</h2>
//         <ul>
//         ${place.amenities}
//         </ul>
//         <button>show all 12 amenities</button>
//     </div>
//     <div class="mainMiddle__left--date">
//         <input type="date" id="birthday" name="birthday">
//     </div>
//     </div>
//     <div class="mainMiddle__stiky">
//     <form class="form">
//     <div class="form--searchLocation">
//         <label for="searchLocation">Location <br>
//             <input id="searchLocation" type="text" placeholder="Where are you going?">
//         </label>
//         <div class="dropdown">
//             <p>Adults
//                 Ages 13 or above</p>
//             <p>Children
//                 Ages 2–12</p>
//             <p>Infants
//                 Under 2</p>
//             <p>
//                 Pets
//                 Bringing a service animal?
//             </p>
//         </div>
//     </div>
//     <div class="form--checkIn">
//         <label for="checkIn">Check in <br>
//             <button id="checkIn">Add dates</button>
//         </label>
//         <div class="dropdown">
//             <p>Adults
//                 Ages 13 or above</p>
//             <p>Children
//                 Ages 2–12</p>
//             <p>Infants
//                 Under 2</p>
//             <p>
//                 Pets
//                 Bringing a service animal?
//             </p>
//         </div>
//     </div>
//     <div class="form--checkOut">
//         <label for="checkOut">Check out<br>
//             <button id="checkOut">Add dates</button>
//         </label>
//         <div class="dropdown">
//             <p>Adults
//                 Ages 13 or above</p>
//             <p>Children
//                 Ages 2–12</p>
//             <p>Infants
//                 Under 2</p>
//             <p>
//                 Pets
//                 Bringing a service animal?
//             </p>
//         </div>
//     </div>
//     <div class="form--guests">
//         <label for="guests">Guests<br>
//             <button id="guests">Add guests</button>
//         </label>
//         <div class="dropdown">
//             <p>Adults
//                 Ages 13 or above</p>
//             <p>Children
//                 Ages 2–12</p>
//             <p>Infants
//                 Under 2</p>
//             <p>
//                 Pets
//                 Bringing a service animal?
//             </p>
//         </div>
//     </div>
//     <a href="" class="form--searchIcon"><input type="image" src="images/searchIcon.png" ></a>
// </form>
//     </div>
// </div>
// <div class="reviews">
//      <h3>review</h3>
//    <div class="reviews__review">
//       <div class="name">
//       <h5>
//         ${place.reviews.reviewer_name}
//         </h5>
//       </div>
//       <div class="year">
//       <h6>
//       ${place.reviews.date}
//       </h6>
//       </div>
//       <div class="theReview">
//           <p>${place.reviews.comments}
//             </p>
//         </div>
//  </div> 
//  <div class="reviews__review">
//  <div class="name">
//  <h5>
//    ${place.reviews.reviewer_name}
//    </h5>
//  </div>
//  <div class="year">
//  <h6>
//  ${place.reviews.date}
//  </h6>
//  </div>
//  <div class="theReview">
//      <p>${place.reviews.comments}
//        </p>
//    </div>
// </div> 
// <div class="reviews__review">
//       <div class="name">
//       <h5>
//         ${place.reviews.reviewer_name}
//         </h5>
//       </div>
//       <div class="year">
//       <h6>
//       ${place.reviews.date}
//       </h6>
//       </div>
//       <div class="theReview">
//           <p>${place.reviews.comments}
//             </p>
//         </div>
//  </div> 
//  <div class="reviews__review">
//       <div class="name">
//       <h5>
//         ${place.reviews.reviewer_name}
//         </h5>
//       </div>
//       <div class="year">
//       <h6>
//       ${place.reviews.date}
//       </h6>
//       </div>
//       <div class="theReview">
//           <p>${place.reviews.comments}
//             </p>
//         </div>
//  </div> 
//  <div class="reviews__review">
//       <div class="name">
//       <h5>
//         ${place.reviews.reviewer_name}
//         </h5>
//       </div>
//       <div class="year">
//       <h6>
//       ${place.reviews.date}
//       </h6>
//       </div>
//       <div class="theReview">
//           <p>${place.reviews.comments}
//             </p>
//         </div>
//  </div> 
//  <div class="reviews__review">
//       <div class="name">
//       <h5>
//         ${place.reviews.reviewer_name}
//         </h5>
//       </div>
//       <div class="year">
//       <h6>
//       ${place.reviews.date}
//       </h6>
//       </div>
//       <div class="theReview">
//           <p>${place.reviews.comments}
//             </p>
//         </div>
//  </div> 
// </div>
// <div id="map">
// <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2s!4v1648657793371!5m2!1siw!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// </div>
// <div class="aboutHost">
//     <div class="aboutHost--left">
//         <div class="aboutHost--left--profileHost">
//             <img src="${place.hosthost_picture_url}" alt="" style="width:50px; height:50px; border-radius:100%;">
//         </div>
//         <div class="aboutHost--left--title">
//             <h2>
//                 hosted by ${place.host.host_name}
//             </h2>
//         </div>
//         <div class="aboutHost--left--review">
//             <p><span><i class="fa-solid fa-star"></i></span>${place.number_of_reviews} reviews</p>
//             <p><span><i class="fa-solid fa-square-check"></i></span> host is verified: ${place.host.host_identity_verified}</p>
//         </div>
//         <div class="aboutHost--left--about">
//             <p>
//                ${place.host.host_about}
//             </p>
//         </div>
//     </div>
//     <div class="aboutHost--right">
//         <h5>
//             languages: english, francais, hebrew
//         </h5>
//         <h5>
//             response rate: ${place.host.host_response_rate}
//         </h5>
//         <h5>
//             response time: ${place.host_host_response_time}
//         </h5>
//         <button>
//             contact host
//         </button>
//         <p class="payment">
//             To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
//         </p>
//     </div>
// </div>
// <div class="toKnow">
//     <h2>things to know</h2>
//     <ul>
//         <p>house rule</p>
//         <li>
//             Check-in: 4:00 PM - 10:00 PM
//         </li>
//         <li>
//             Checkout: 11:00 AM
//         </li>
//         <li>
//             No smoking
//         </li>
//         <li>
//             No pets
//         </li>
//         <li>
//             No parties or events
//         </li>
//         <button>shoe more</button>
//     </ul>
//     <ul>
//         <p>health &safety</p>
//         <li>
//             Airbnb's social-distancing and other COVID-19-related guidelines apply 
//         </li>
//         <li>
// Carbon monoxide alarm not reported Show more
//         </li>
//         <li>
//             Smoke alarm not reported Show more
//         </li>
//         <li>
//             Security Deposit - if you damage the home, you may be charged up to ₪2500
//         </li>
//         <button>show more</button>
//     </ul>
//     <div class="toKnow__cancle">
//         <h5>cancellation policy</h5>
//         <p>${place.cancellation_policy}</p>
//         <button>add dates</button>
//     </div>
// </div>`
//         })
//             .join('');
//         // console.log(html)
//         document.querySelector('#rootPlace').innerHTML = html;
//     }
//     catch (error) {
//         console.error(error.message);
//     }
// }
function handleFindAirbnb(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var search, checkIn, checkOut, adults, children, infants, pets, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    search = ev.target.elements.searchLocation.value;
                    checkIn = ev.target.elements.checkIn.value;
                    checkOut = ev.target.elements.checkOut.value;
                    adults = ev.target.elements.adults.value;
                    children = ev.target.elements.children.value;
                    infants = ev.target.elements.infants.value;
                    pets = ev.target.elements.pets.value;
                    console.log(search, checkIn, checkOut, adults, children, infants, pets);
                    return [4 /*yield*/, axios.get("/places/search-airbnb?search=" + search + "&checkIn=" + checkIn + "&checkOut=" + checkOut + "&adults=" + adults + "&children=" + children + "&infants=" + infants + "&pets=" + pets + " ")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderAirbnbOptions(data.places);
                    return [2 /*return*/];
            }
        });
    });
}
function handleTelaviv() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/places/search-telaviv')];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleFilter(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var price, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    price = ev.target.elements.price.valueAsNumber;
                    console.log(price);
                    return [4 /*yield*/, axios.get('/places/getFiltered', { data: { price: price } })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/];
            }
        });
    });
}
function renderAirbnbOptions(places) {
    try {
        console.log(places);
        if (!Array.isArray(places))
            throw new Error('sata is not an array');
        var root = document.querySelector('#rootPlaces');
        var html_1 = "";
        places.forEach(function (place) {
            html_1 += "<div class=\"card-grid__card\" onclick=\"handleGoToPlace(" + place._id + ") \" onclick=\"location.href='place.html'\"> \n                        <div class=\"card-header card-img\">\n                            <img src=\"" + place.images + "\" alt=\"\">   \n                        </div>\n                    <div class=\"content\">\n                        <div class=\"card-grid__card__card-header\">\n                            <button class=\"btn\"><img src=\"images/icons-heart.png\" alt=\"\"></button>\n                            <button class=\"btn btn-outline\">" + place.name + "</button>\n                            <p>" + place.address_country_code + "," + place.address_country + "</p>\n                        </div>\n                        <div class=\"card-grid__card__card-body\">\n                            <p>" + place.description + "</p>\n                        </div>\n                        <div class=\"card-grid__card__card-footer\">\n                            <button class=\"btn\"><p>" + place.price + "</p>/night</button>\n                            <button class=\"btn btn-outline\"><p>" + place.reviews_rating + "</p></button>\n                        </div>\n                    </div>\n                </div>";
        });
        root.innerHTML = html_1;
    }
    catch (error) {
        console.error(error.message);
    }
}
function handlePopup() {
    var popup = document.getElementById("myPopup");
    //popup.classList.toggle("show");
    var showPopupText = document.querySelector('.popuptext');
    showPopupText.style.visibility = "visible";
}
function handleLogin(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, userName, password, role, data, showPopupText;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, userName = _a.userName, password = _a.password, role = _a.role;
                    userName = userName.value;
                    password = password.value;
                    role = role.value;
                    console.log(userName, password, role);
                    return [4 /*yield*/, axios.post("/users/login", { userName: userName, password: password, role: role })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    if (data.login) {
                        showPopupText = document.querySelector('.popuptext');
                        showPopupText.style.visibility = "hidden";
                        //document.body.style.backgroundColor="red";
                        if (role === "admin") {
                            document.body.style.backgroundColor = "red";
                        }
                        else if (role === "host") {
                            document.body.style.backgroundColor = "blue";
                        }
                        else {
                            document.body.style.backgroundColor = "green";
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function handleRegister(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, newUserName, newPassword, newRole, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, newUserName = _a.newUserName, newPassword = _a.newPassword, newRole = _a.newRole;
                    newUserName = newUserName.value;
                    newPassword = newPassword.value;
                    newRole = newRole.value;
                    return [4 /*yield*/, axios.post("/users/add-User", { newUserName: newUserName, newPassword: newPassword, newRole: newRole })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}

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
function handleLoadPlaces(data) {
    try {
        getData();
        renderAirbnbOptions(data.getplaces);
    }
    catch (error) {
        console.error(error.message);
    }
}
function handleLoadPlace(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                //const { data } = await axios.get("/getToPlace");
                console.log(data);
                renderPlace(data);
            }
            catch (error) {
                console.error(error.message);
            }
            return [2 /*return*/];
        });
    });
}
function handleGoToPlace(placeId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/places/goToPlace", { data: { placeId: placeId } })];
                case 1:
                    data = (_a.sent()).data;
                    storeData(data.getplaces);
                    if (data) {
                        window.location.href = "place.html";
                    }
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
function renderPlace(data) {
    try {
        getData();
        var html = data
            .map(function (place) {
            return "<div class=\"mainUpper\">\n      <div class=\"maiUpper__title\">\n          <h1>" + place.name + "</h1>\n         <h3>" + place.price + "$</h3>\n      </div>\n      <div class=\"mainUpper__photoGrid\">\n          <div class=\"mainUpper__photoGrid--bigPhoto\"><img src=\"" + place.images + "\" alt=\"\"></div>\n          <div class=\"mainUpper__photoGrid--photo\"><img src=\"" + place.images + "\" alt=\"\"></div>\n          <div class=\"mainUpper__photoGrid--photo\"><img src=\"" + place.images + "\" alt=\"\"></div>\n              <div class=\"mainUpper__photoGrid--photo\"><img src=\"" + place.images + "\" alt=\"\"></div>\n      </div>\n  \n  </div>\n  <div class=\"mainMiddle\">\n      <div class=\"mainMiddle__left\">\n          <div class=\"mainMiddle__left--up\">\n              <div class=\"mainMiddle__left--up--title\">   \n              <h2>entire rental unit hosted by " + place.host + "</h2>\n          <h6>" + place.accommodates + " <span>&#8226;</span> " + place.bedrooms + " <span>&#8226;</span> " + place.beds + " <span>&#8226;</span>" + place.bathrooms + "</h6></div>\n          <div class=\"mainMiddle__left--up--profile\">\n              <img src=\"" + place.host + "\">\n          </div>\n      </div>\n      <div class=\"mainMiddle__left--great\">\n          <h5>" + place.description + "</h5>\n      </div>\n      <div class=\"mainMiddle__left--bed\">\n          <h2>where you'll sleep</h2>\n          <div class=\"mainMiddle__left--bed--box\">\n              <i class=\"fa-thin fa-bed-front\"></i>\n              <h5>" + place.bed_type + "</h5>\n          </div>\n      </div>\n      <div class=\"mainMiddle__left--list\">\n          <h2>what this place offers</h2>\n          <ul>\n        \n          " + place.amenities + "\n          </ul>\n          <button>show all 12 amenities</button>\n      </div>\n      <div class=\"mainMiddle__left--date\">\n          <input type=\"date\" id=\"birthday\" name=\"birthday\">\n      </div>\n      </div>\n     \n  </div>\n  <div class=\"reviews\">\n       <h3>review</h3>\n     <div class=\"reviews__review\">\n        <div class=\"name\">\n        <h5>\n          " + place.reviews.reviewer_name + "\n          </h5>\n        </div>\n        <div class=\"year\">\n        <h6>\n        " + place.reviews.date + "\n        </h6>\n        </div>\n        <div class=\"theReview\">\n            <p>" + place.reviews.comments + "\n              </p>\n          </div>\n   </div> \n   <div class=\"reviews__review\">\n   <div class=\"name\">\n   <h5>\n     " + place.reviews.reviewer_name + "\n     </h5>\n   </div>\n   <div class=\"year\">\n   <h6>\n   " + place.reviews.date + "\n   </h6>\n   </div>\n   <div class=\"theReview\">\n       <p>" + place.reviews.comments + "\n         </p>\n     </div>\n  </div> \n  <div class=\"reviews__review\">\n        <div class=\"name\">\n        <h5>\n          " + place.reviews.reviewer_name + "\n          </h5>\n        </div>\n        <div class=\"year\">\n        <h6>\n        " + place.reviews.date + "\n        </h6>\n        </div>\n        <div class=\"theReview\">\n            <p>" + place.reviews.comments + "\n              </p>\n          </div>\n   </div> \n   <div class=\"reviews__review\">\n        <div class=\"name\">\n        <h5>\n          " + place.reviews.reviewer_name + "\n          </h5>\n        </div>\n        <div class=\"year\">\n        <h6>\n        " + place.reviews.date + "\n        </h6>\n        </div>\n        <div class=\"theReview\">\n            <p>" + place.reviews.comments + "\n              </p>\n          </div>\n   </div> \n  </div>\n  <div id=\"map\">\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2s!4v1648657793371!5m2!1siw!2s\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n  </div>\n  <div class=\"aboutHost\">\n      <div class=\"aboutHost--left\">\n          <div class=\"aboutHost--left--profileHost\">\n              <img src=\"" + place.host + "\" alt=\"\" style=\"width:50px; height:50px; border-radius:100%;\">\n          </div>\n          <div class=\"aboutHost--left--title\">\n              <h2>\n                  hosted by " + place.host + "\n              </h2>\n          </div>\n          <div class=\"aboutHost--left--review\">\n              <p><span><i class=\"fa-solid fa-star\"></i></span>" + place.number_of_reviews + " reviews</p>\n              <p><span><i class=\"fa-solid fa-square-check\"></i></span> host is verified: " + place.host.host_identity_verified + "</p>\n          </div>\n          <div class=\"aboutHost--left--about\">\n              <p>\n                 " + place.host.host_about + "\n              </p>\n          </div>\n      </div>\n      <div class=\"aboutHost--right\">\n          <h5>\n              languages: english, francais, hebrew\n          </h5>\n          <h5>\n              response rate: " + place.reviews_rating + "\n          </h5>\n          <h5>\n              response time: " + place.reviews_rating + "\n          </h5>\n          <button>\n              contact host\n          </button>\n          <p class=\"payment\">\n              To protect your payment, never transfer money or communicate outside of the Airbnb website or app.\n          </p>\n      </div>\n  </div>\n  <div class=\"toKnow\">\n      <h2>things to know</h2>\n      <ul>\n          <p>house rule</p>\n          <li>\n              Check-in: 4:00 PM - 10:00 PM\n          </li>\n          <li>\n              Checkout: 11:00 AM\n          </li>\n          <li>\n              No smoking\n          </li>\n          <li>\n              No pets\n          </li>\n          <li>\n              No parties or events\n          </li>\n          <button>shoe more</button>\n      </ul>\n      <ul>\n          <p>health &safety</p>\n          <li>\n              Airbnb's social-distancing and other COVID-19-related guidelines apply \n          </li>\n          <li>\n              \n  Carbon monoxide alarm not reported Show more\n          </li>\n          <li>\n              Smoke alarm not reported Show more\n          </li>\n          <li>\n              Security Deposit - if you damage the home, you may be charged up to \u20AA2500\n          </li>\n          <button>show more</button>\n      </ul>\n      <div class=\"toKnow__cancle\">\n          <h5>cancellation policy</h5>\n          <p>" + place.cancel + "</p>\n          <button>add dates</button>\n      </div>\n      \n  </div>";
        })
            .join("");
        // console.log(html)
        document.querySelector("#rootPlace").innerHTML = html;
    }
    catch (error) {
        console.error(error.message);
    }
}
function storeData(data) {
    try {
        if (data) {
            localStorage.setItem("airbnbData", JSON.stringify(data));
        }
    }
    catch (error) {
        console.error(error.message);
    }
}
function getData() {
    try {
        var airbnbNavFiltered = JSON.parse(localStorage.getItem("airbnbData"));
        if (Array.isArray(airbnbNavFiltered)) {
            return airbnbNavFiltered;
        }
        else {
            return [];
        }
    }
    catch (err) {
        console.log(err.message);
    }
}
function handleFindAirbnb(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var searchLocation, checkIn, checkOut, adults, children, infants, pets, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    searchLocation = ev.target.elements.searchLocation.value;
                    checkIn = ev.target.elements.checkIn.value;
                    checkOut = ev.target.elements.checkOut.value;
                    adults = ev.target.elements.adults.value;
                    children = ev.target.elements.children.value;
                    infants = ev.target.elements.infants.value;
                    pets = ev.target.elements.pets.value;
                    console.log(searchLocation, checkIn, checkOut, adults, children, infants, pets);
                    return [4 /*yield*/, axios.get("/places/search-airbnb?searchLocation=" + searchLocation + "&checkIn=" + checkIn + "&checkOut=" + checkOut + "&adults=" + adults + "&children=" + children + "&infants=" + infants + "&pets=" + pets + " ")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    storeData({ data: data });
                    if (data) {
                        window.location.href = "places.html";
                    }
                    handleLoadPlaces(data.getplaces);
                    return [2 /*return*/];
            }
        });
    });
}
function handleCities(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var city, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    city = ev.target.dataset.card;
                    console.log(city);
                    return [4 /*yield*/, axios.post("/places/search-city", { city: city })];
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
                    return [4 /*yield*/, axios.get("/places/getFiltered", { data: { price: price } })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/];
            }
        });
    });
}
function renderAirbnbOptions(data) {
    try {
        getData();
        if (!Array.isArray(data))
            throw new Error("data is not an array");
        var root_1 = document.querySelector("#rootPlaces");
        var html_1 = "";
        data.forEach(function (place) {
            html_1 += "            \n                  <div class=\"airbnbOptions__container\" onclick=\"handleGoToPlace(" + place._id + ")\">\n                      <div class=\"airbnbOptions__container__img\">\n                          <img src=\"" + place.images + "\">\n                      </div>\n                      <div class=\"airbnbOptions__container__content\">\n                          <div class=\"airbnbOptions__container__content__namePlace\">                                \n                              \n                                  <h3>" + place.name + " </h3>\n                                  <h5>accommodates:" + place.accommodates + " </h5>\n                             \n                              <p>\n                              " + place.address_country_code + " ,  " + place.address_country + "\n                              </p>\n                          </div>\n                          <div class=\"airbnbOptions__container__content__description\">\n                              <p>\n                              " + place.description + "\n                              </p>\n                          </div>\n                          <div class=\"airbnbOptions__container__content__priceRating\">\n                              <button class=\"btn btn-outline\">\n                              " + place.price + "\n                              </button>\n                              <button class=\"btn btn-outline\">\n                                 \n                              " + place.reviews_rating + "\n                                  \n\n                              </button>\n                          </div>\n\n                      </div>\n                  </div>";
            root_1.innerHTML = html_1;
        });
    }
    catch (error) {
        console.error(error.message);
    }
}
function handlePopup() {
    var popup = document.getElementById("myPopup");
    //popup.classList.toggle("show");
    var showPopupText = document.querySelector(".popuptext");
    showPopupText.style.visibility = "visible";
}
function handleLogin(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, password, role, data, showPopupText, userProfileButton, showUsersName;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, username = _a.username, password = _a.password, role = _a.role;
                    username = username.value;
                    password = password.value;
                    role = role.value;
                    console.log(username, password, role);
                    return [4 /*yield*/, axios.post("/users/login", {
                            username: username,
                            password: password,
                            role: role
                        })];
                case 1:
                    data = (_b.sent()).data;
                    if (data.login) {
                        showPopupText = document.querySelector(".popuptext");
                        userProfileButton = document.querySelector(".navigation--user");
                        showPopupText.style.visibility = "hidden";
                        showUsersName = document.querySelector("#theUsersName");
                        // window.location.href = 'owner.html';
                        if (role === "admin") {
                            window.location.href = "owner.html";
                            userProfileButton.style.backgroundColor = "red";
                        }
                        else if (role === "host") {
                            showPopupText.style.visibility = "hidden";
                            showUsersName.innerHTML = "" + username;
                            userProfileButton.style.backgroundColor = "blue";
                            //window.location.href = `/index.html?username=${username}`;
                        }
                        else {
                            showPopupText.style.visibility = "hidden";
                            showUsersName.innerHTML = "" + username;
                            userProfileButton.style.backgroundColor = "green";
                        }
                    }
                    else {
                        console.log("HA you got it wrong");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function handleRegister(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, password, role, data, showPopupText;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, username = _a.username, password = _a.password, role = _a.role;
                    username = username.value;
                    password = password.value;
                    role = role.value;
                    return [4 /*yield*/, axios.post("/users/add-User", {
                            username: username,
                            password: password,
                            role: role
                        })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    if (data.register) {
                        showPopupText = document.querySelector(".popuptext");
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
function handleGetUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var result, data, users, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/users/get-Users")];
                case 1:
                    result = _a.sent();
                    data = result.data;
                    users = data.users;
                    if (users) {
                        renderUsersToOwnerPage(users);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderUsersToOwnerPage(users) {
    //console.log(users)
    try {
        console.log(users);
        if (!Array.isArray(users))
            throw new Error("data is not an array");
        var root_2 = document.querySelector("#user");
        var html_2 = "";
        users.forEach(function (user) {
            html_2 += "<div class=\"airbnbUser\" >\n                       <h3>" + user.username + "</h3>\n                       <p>" + user._id + "</p>\n                       <input type=\"text\" value=" + user.username + " name=\"username\" onblur=\"handleUpdateUsers(event,'" + user._id + "')\" >                       \n                       <p>" + user.role + "</p> \n                       <button onclick='handleDeleteUsers(\"" + user._id + "\")'>Delete User</button>                  \n                       \n                       \n\n                    </div>";
            root_2.innerHTML = html_2;
        });
    }
    catch (error) {
        console.error(error.message);
    }
}
function handleUpdateUsers(ev, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var username, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    username = ev.target.value;
                    return [4 /*yield*/, axios.patch("/users/update-user", {
                            userId: userId,
                            username: username
                        })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDeleteUsers(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios["delete"]("/users/delete-user", {
                        data: { userId: userId }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}

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
//loadPlaces()
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
                    renderPlace(data);
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
function handleGoToPlace(placeId) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/goToPlace', { data: { placeId: placeId } })];
                case 1:
                    data = (_a.sent()).data;
                    renderPlace(data);
                    return [2 /*return*/];
            }
        });
    });
}
function renderPlace(data) {
    try {
        var html = data.map(function (place) {
            return "<div class=\"mainUpper\">\n    <div class=\"maiUpper__title\">\n        <h1>" + place.name + "</h1>\n       <h3>" + place.price + "$</h3>\n    </div>\n    <div class=\"mainUpper__photoGrid\">\n        <div class=\"mainUpper__photoGrid--bigPhoto\"><img src=\"" + place.images.xl_picture_url + "\" alt=\"\"></div>\n        <div class=\"mainUpper__photoGrid--photo\"><img src=\"" + place.images.medium_url + "\" alt=\"\"></div>\n        <div class=\"mainUpper__photoGrid--photo\"><img src=\"" + place.images.picture_url + "\" alt=\"\"></div>\n            <div class=\"mainUpper__photoGrid--photo\"><img src=\"" + place.images.thumbnail_url + "\" alt=\"\"></div>\n    </div>\n\n</div>\n<div class=\"mainMiddle\">\n    <div class=\"mainMiddle__left\">\n        <div class=\"mainMiddle__left--up\">\n            <div class=\"mainMiddle__left--up--title\">   \n            <h2>entire rental unit hosted by " + place.host.host_name + "</h2>\n        <h6>" + place.accommodates + " <span>&#8226;</span> " + place.bedrooms + " <span>&#8226;</span> " + place.beds + " <span>&#8226;</span> 1 bath</h6></div>\n        <div class=\"mainMiddle__left--up--profile\">\n            <img src=\"" + place.host.host_picture_url + "\">\n        </div>\n    </div>\n    <div class=\"mainMiddle__left--great\">\n        <h5>" + place.space + "</h5>\n        <h5>" + place.description + "</h5>\n    </div>\n    <div class=\"mainMiddle__left--aboutUs\">\n        <p>" + place.summary + "\n            </p>\n            <a href=\"#\">show more</a>\n    </div>\n    <div class=\"mainMiddle__left--bed\">\n        <h2>where you'll sleep</h2>\n        <div class=\"mainMiddle__left--bed--box\">\n            <i class=\"fa-thin fa-bed-front\"></i>\n            <h5>" + place.bed_type + "</h5>\n        </div>\n    </div>\n    <div class=\"mainMiddle__left--list\">\n        <h2>what this place offers</h2>\n        <ul>\n      \n        " + place.amenities + "\n        </ul>\n        <button>show all 12 amenities</button>\n    </div>\n    <div class=\"mainMiddle__left--date\">\n        <input type=\"date\" id=\"birthday\" name=\"birthday\">\n    </div>\n    </div>\n    <div class=\"mainMiddle__stiky\">\n    <form class=\"form\">\n    <div class=\"form--searchLocation\">\n        <label for=\"searchLocation\">Location <br>\n            <input id=\"searchLocation\" type=\"text\" placeholder=\"Where are you going?\">\n        </label>\n        <div class=\"dropdown\">\n            <p>Adults\n                Ages 13 or above</p>\n            <p>Children\n                Ages 2\u201312</p>\n            <p>Infants\n                Under 2</p>\n            <p>\n                Pets\n                Bringing a service animal?\n            </p>\n\n        </div>\n    </div>\n\n    <div class=\"form--checkIn\">\n        <label for=\"checkIn\">Check in <br>\n            <button id=\"checkIn\">Add dates</button>\n        </label>\n        <div class=\"dropdown\">\n            <p>Adults\n                Ages 13 or above</p>\n            <p>Children\n                Ages 2\u201312</p>\n            <p>Infants\n                Under 2</p>\n            <p>\n                Pets\n                Bringing a service animal?\n            </p>\n\n        </div>\n    </div>\n\n    <div class=\"form--checkOut\">\n        <label for=\"checkOut\">Check out<br>\n            <button id=\"checkOut\">Add dates</button>\n        </label>\n        <div class=\"dropdown\">\n            <p>Adults\n                Ages 13 or above</p>\n            <p>Children\n                Ages 2\u201312</p>\n            <p>Infants\n                Under 2</p>\n            <p>\n                Pets\n                Bringing a service animal?\n            </p>\n\n        </div>\n    </div>\n\n    <div class=\"form--guests\">\n        <label for=\"guests\">Guests<br>\n            <button id=\"guests\">Add guests</button>\n        </label>\n        <div class=\"dropdown\">\n            <p>Adults\n                Ages 13 or above</p>\n            <p>Children\n                Ages 2\u201312</p>\n            <p>Infants\n                Under 2</p>\n            <p>\n                Pets\n                Bringing a service animal?\n            </p>\n\n        </div>\n    </div>\n\n\n    <a href=\"\" class=\"form--searchIcon\"><input type=\"image\" src=\"images/searchIcon.png\" ></a>\n\n\n</form>\n    </div>\n</div>\n<div class=\"reviews\">\n     <h3>review</h3>\n   <div class=\"reviews__review\">\n      <div class=\"name\">\n      <h5>\n        " + place.reviews.reviewer_name + "\n        </h5>\n      </div>\n      <div class=\"year\">\n      <h6>\n      " + place.reviews.date + "\n      </h6>\n      </div>\n      <div class=\"theReview\">\n          <p>" + place.reviews.comments + "\n            </p>\n        </div>\n </div> \n <div class=\"reviews__review\">\n <div class=\"name\">\n <h5>\n   " + place.reviews.reviewer_name + "\n   </h5>\n </div>\n <div class=\"year\">\n <h6>\n " + place.reviews.date + "\n </h6>\n </div>\n <div class=\"theReview\">\n     <p>" + place.reviews.comments + "\n       </p>\n   </div>\n</div> \n<div class=\"reviews__review\">\n      <div class=\"name\">\n      <h5>\n        " + place.reviews.reviewer_name + "\n        </h5>\n      </div>\n      <div class=\"year\">\n      <h6>\n      " + place.reviews.date + "\n      </h6>\n      </div>\n      <div class=\"theReview\">\n          <p>" + place.reviews.comments + "\n            </p>\n        </div>\n </div> \n <div class=\"reviews__review\">\n      <div class=\"name\">\n      <h5>\n        " + place.reviews.reviewer_name + "\n        </h5>\n      </div>\n      <div class=\"year\">\n      <h6>\n      " + place.reviews.date + "\n      </h6>\n      </div>\n      <div class=\"theReview\">\n          <p>" + place.reviews.comments + "\n            </p>\n        </div>\n </div> \n <div class=\"reviews__review\">\n      <div class=\"name\">\n      <h5>\n        " + place.reviews.reviewer_name + "\n        </h5>\n      </div>\n      <div class=\"year\">\n      <h6>\n      " + place.reviews.date + "\n      </h6>\n      </div>\n      <div class=\"theReview\">\n          <p>" + place.reviews.comments + "\n            </p>\n        </div>\n </div> \n <div class=\"reviews__review\">\n      <div class=\"name\">\n      <h5>\n        " + place.reviews.reviewer_name + "\n        </h5>\n      </div>\n      <div class=\"year\">\n      <h6>\n      " + place.reviews.date + "\n      </h6>\n      </div>\n      <div class=\"theReview\">\n          <p>" + place.reviews.comments + "\n            </p>\n        </div>\n </div> \n</div>\n<div id=\"map\">\n<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2s!4v1648657793371!5m2!1siw!2s\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n</div>\n<div class=\"aboutHost\">\n    <div class=\"aboutHost--left\">\n        <div class=\"aboutHost--left--profileHost\">\n            <img src=\"" + place.hosthost_picture_url + "\" alt=\"\" style=\"width:50px; height:50px; border-radius:100%;\">\n        </div>\n        <div class=\"aboutHost--left--title\">\n            <h2>\n                hosted by " + place.host.host_name + "\n            </h2>\n        </div>\n        <div class=\"aboutHost--left--review\">\n            <p><span><i class=\"fa-solid fa-star\"></i></span>" + place.number_of_reviews + " reviews</p>\n            <p><span><i class=\"fa-solid fa-square-check\"></i></span> host is verified: " + place.host.host_identity_verified + "</p>\n        </div>\n        <div class=\"aboutHost--left--about\">\n            <p>\n               " + place.host.host_about + "\n            </p>\n        </div>\n    </div>\n    <div class=\"aboutHost--right\">\n        <h5>\n            languages: english, francais, hebrew\n        </h5>\n        <h5>\n            response rate: " + place.host.host_response_rate + "\n        </h5>\n        <h5>\n            response time: " + place.host_host_response_time + "\n        </h5>\n        <button>\n            contact host\n        </button>\n        <p class=\"payment\">\n            To protect your payment, never transfer money or communicate outside of the Airbnb website or app.\n        </p>\n    </div>\n</div>\n<div class=\"toKnow\">\n    <h2>things to know</h2>\n    <ul>\n        <p>house rule</p>\n        <li>\n            Check-in: 4:00 PM - 10:00 PM\n        </li>\n        <li>\n            Checkout: 11:00 AM\n        </li>\n        <li>\n            No smoking\n        </li>\n        <li>\n            No pets\n        </li>\n        <li>\n            No parties or events\n        </li>\n        <button>shoe more</button>\n    </ul>\n    <ul>\n        <p>health &safety</p>\n        <li>\n            Airbnb's social-distancing and other COVID-19-related guidelines apply \n        </li>\n        <li>\n            \nCarbon monoxide alarm not reported Show more\n        </li>\n        <li>\n            Smoke alarm not reported Show more\n        </li>\n        <li>\n            Security Deposit - if you damage the home, you may be charged up to \u20AA2500\n        </li>\n        <button>show more</button>\n    </ul>\n    <div class=\"toKnow__cancle\">\n        <h5>cancellation policy</h5>\n        <p>" + place.cancellation_policy + "</p>\n        <button>add dates</button>\n    </div>\n    \n</div>";
        })
            .join('');
        // console.log(html)
        document.querySelector('#rootPlace').innerHTML = html;
    }
    catch (error) {
        console.error(error.message);
    }
}
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
                    return [4 /*yield*/, axios.get("/places/search-airbnb?search=" + search + "&checkIn=" + checkIn + "&checkOut=" + checkOut + "&adults=" + adults + "&children=" + children + "&infants=" + infants + "&pets=" + pets + " ")
                        ///places/search-airbnb?adults=${adults}
                        // search=${search}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&infants=${infants}&pets=${pets}
                    ];
                case 1:
                    data = (_a.sent()).data;
                    ///places/search-airbnb?adults=${adults}
                    // search=${search}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&infants=${infants}&pets=${pets}
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
;
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
// async function handleSearchCity(ev){
//     const search=ev.target.value;
//     console.log(search);
//     const {data}=await axios.get(`'/search-airbnb'?search=${search}`);
//     const{city}=data;
//     console.log({city})
// }
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

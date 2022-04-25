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
function getCookie(cookieName) {
    var cookies = decodeURIComponent(document.cookie);
    var cookiesArr = cookies.split('; ');
    for (var i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i].split('=')[0] == cookieName)
            return cookiesArr[i].split('=')[1];
    }
}
;
function handleOnLoad() {
    var cookie = getCookie('userInfo');
    // render.gameSetup();
    // if (cookie) {
    //     render.account();
    // }
    // else render.login();
}
;
var render = {
    main: document.querySelector('main'),
    html: '',
    login: function () {
        var cookie = getCookie('userInfo');
        if (cookie) {
            render.account();
        }
        else {
            this.html = "<h2>Welcome back!</h2>\n                        <h4>Don't have an account? <span class=\"pointer\" onclick=\"render.register()\">click here to register</span></h4>\n                        <form onsubmit=\"handleLogin(event)\">\n                            <label for=\"email\">Email address</label>\n                            <input type=\"text\" name=\"email\" id=\"email\">\n                            <label for=\"password\">Password</label>\n                            <input type=\"password\" name=\"password\" id=\"password\">\n                            <input type=\"submit\" name=\"submit\" class=\"button\" value=\"Log-in\">\n                            <h4 id=\"message\"></h4>\n                        </form>\n                ";
            this.main.innerHTML = this.html;
        }
    },
    register: function () {
        var cookie = getCookie('userInfo');
        if (cookie) {
            render.account();
        }
        else {
            this.html = "<form onsubmit=\"handleRegister(event)\">\n                            <label for=\"username\">Choose a username</label>\n                            <input type=\"text\" name=\"username\" id=\"username\">\n                            <label for=\"email\">Enter your email address</label>\n                            <input type=\"text\" name=\"email\" id=\"email\">\n                            <label for=\"password\">Choose a password</label>\n                            <input type=\"password\" name=\"password\" id=\"password\">\n                            <label for=\"passwordConf\">Confirm your password</label>\n                            <input type=\"password\" name=\"passwordConf\" id=\"passwordConf\">\n                            <input type=\"submit\" name=\"submit\" class=\"button\" value=\"Register\">\n                            <h4 id=\"message\"></h4>\n                        </form>\n                ";
            this.main.innerHTML = this.html;
        }
    },
    info: function () {
        this.html = "<h1>Welcome to Well Drawn!</h1>\n                    <h3>\"Well Drawn!\" is a web based party game for multiple people </h3>\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio iusto perspiciatis, quasi saepe ut nihil sit, soluta dolorum quibusdam explicabo voluptatibus. Iusto aspernatur placeat voluptatem perspiciatis minus enim, aperiam velit inventore laborum facere repudiandae nobis perferendis cum obcaecati aut.</p>\n            ";
        this.main.innerHTML = this.html;
    },
    account: function () {
        return __awaiter(this, void 0, void 0, function () {
            var cookie, data, hasAvatar;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cookie = getCookie('userInfo');
                        if (!cookie) {
                            render.info();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, axios.get('/drawings/get-user-avatars')];
                    case 1:
                        data = (_a.sent()).data;
                        this.html = "<h2>Hi there " + data.user + "!</h2>";
                        hasAvatar = false;
                        data.avatars.forEach(function (avatar) {
                            if (avatar.type == "currentAvatar") {
                                _this.html += "<img src=\"" + avatar.dataURL + "\">";
                                hasAvatar = true;
                            }
                        });
                        if (!hasAvatar)
                            this.html += "<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyPl61Oub-Yg1Eb5qJ6vrZl2CwCv2LZglroy1LOZUDY-3EnRe2Rx6Ay1ueT6XZjV3W_Q&usqp=CAU\" alt=\"\">";
                        this.html += "<button onclick=\"render.joinGame()\">Join Room</button>\n        <button onclick=\"render.gameSetup()\">Create Room</button>\n        <div class=\"avatar-grid\">";
                        data.avatars.forEach(function (avatar) {
                            _this.html += "<div class=\"avatar-grid__item\">\n                                <img src=\"" + avatar.dataURL + "\">\n                                <button onclick=\"handleChangeAvatar('" + avatar._id + "')\">Use Avatar</button>\n                                <button onclick=\"handleDeleteAvatar('" + avatar._id + "')\">Delete Avatar</button>\n                          </div>\n            ";
                        });
                        this.html += "</div>";
                        if (data.avatars.length >= 6)
                            this.html += "<h4>You have too many avatars! delete some to add more</h4>";
                        else
                            this.html += "<button onclick = \"render.draw()\" > Add Avatar </button>";
                        this.main.innerHTML = this.html;
                        return [2 /*return*/];
                }
            });
        });
    },
    setImage: function (img, dataURL) {
        img.src = dataURL;
        return img;
    },
    gameSetup: function () {
        return __awaiter(this, void 0, void 0, function () {
            var socket, uid;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        socket = io();
                        uid = Math.random().toString(36).substr(2, 4).toUpperCase();
                        // socket.emit('create room',uid);
                        return [4 /*yield*/, axios.post('/rooms/add-room', { roomId: uid })];
                    case 1:
                        // socket.emit('create room',uid);
                        _a.sent();
                        return [4 /*yield*/, axios.patch('/users/add-user-to-room', { roomId: uid })];
                    case 2:
                        _a.sent();
                        socket.emit('join room', uid);
                        this.html = "<h2>Create game room</h2>\n                    <h4>Room code: " + uid + "</h4>\n                    <div id=\"player-list\"> \n                    </div> <button onclick=\"handleStartGame('" + uid + "')\">Everyone is in</button>";
                        this.main.innerHTML = this.html;
                        socket.on('avatars', function (avatarUrls) {
                            var grid = document.querySelector('#player-list');
                            _this.html = '';
                            avatarUrls.forEach(function (avatar) {
                                _this.html += "<div class=\"player\">\n                <h4>" + avatar.ownerName + "</h4>\n                <img src=\"" + avatar.dataURL + "\">\n                </div>\n                ";
                            });
                            grid.innerHTML = _this.html;
                        });
                        return [2 /*return*/];
                }
            });
        });
    },
    joinGame: function () {
        this.html = "<h2>Join a game room</h2>\n                     <form onsubmit=\"handleJoinRoom(event)\">\n                         <label for=\"roomCode\">Enter room code:</label>\n                         <input type=\"text\" name=\"roomCode\" id=\"roomCode\">\n                         <input type=\"submit\" value=\"Join Room\" class=\"button\">\n                     </form>\n                     <h4 id=\"message\"></h4>\n        ";
        this.main.innerHTML = this.html;
    },
    gameLobby: function (roomId) {
        return __awaiter(this, void 0, void 0, function () {
            var socket;
            var _this = this;
            return __generator(this, function (_a) {
                this.html = "<h2>Room Code: " + roomId + "</h2>\n                     <h3>Players:</h3>\n                     <div id=\"player-list\">\n            \n                     </div>\n                     <h4 id=\"message\"></h4>\n        ";
                this.main.innerHTML = this.html;
                socket = io();
                socket.emit('join room', roomId);
                socket.on('avatars', function (avatarUrls) {
                    var grid = document.querySelector('#player-list');
                    _this.html = '';
                    avatarUrls.forEach(function (avatar) {
                        _this.html += "<div>\n                <h4 class=\"player\">" + avatar.ownerName + "</h4>\n                <img src=\"" + avatar.dataURL + "\">\n                </div>\n                ";
                    });
                    grid.innerHTML = _this.html;
                });
                socket.on('gameStart', function (roomCode) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (roomCode == roomId) {
                            render.draw("game", roomId);
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    },
    draw: function (type, roomCode) {
        return __awaiter(this, void 0, void 0, function () {
            function start(ev) {
                drawing = true;
                draw(ev);
            }
            function end() {
                drawing = false;
                ctx.beginPath();
            }
            function draw(ev) {
                if (!drawing)
                    return;
                ctx.lineWidth = 10;
                ctx.lineCap = "round";
                var pos = getMousePos(canvas, ev);
                ctx.lineTo(pos.x, pos.y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(pos.x, pos.y);
            }
            function getMousePos(canvas, ev) {
                var rect = canvas.getBoundingClientRect();
                return {
                    x: ev.clientX - rect.left,
                    y: ev.clientY - rect.top
                };
            }
            var socket, data, canvas, ctx, drawing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        socket = io();
                        if (!(type == 'game')) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios.get("/words/get-word?roomCode=" + roomCode)];
                    case 1:
                        data = (_a.sent()).data;
                        this.html = "<h5>Draw " + data.word + "</h5>";
                        return [3 /*break*/, 3];
                    case 2:
                        this.html = "<h5>Draw your avatar!</h5>";
                        _a.label = 3;
                    case 3:
                        this.html += "\n                     <canvas id=\"canvas\"></canvas>\n                     <button onclick=\"handleDrawSubmit('" + type + "','" + roomCode + "')\">Submit drawing</button>";
                        this.main.innerHTML = this.html;
                        canvas = document.querySelector('#canvas');
                        ctx = canvas.getContext("2d");
                        canvas.addEventListener('mousedown', start);
                        canvas.addEventListener('mouseup', end);
                        canvas.addEventListener('mouseout', end);
                        canvas.addEventListener('mousemove', draw);
                        canvas.width = 400;
                        canvas.height = 600;
                        ctx.beginPath();
                        ctx.strokeStyle = "#1B263B";
                        drawing = false;
                        return [2 /*return*/];
                }
            });
        });
    },
    showDrawing: function (roomCode) {
        return __awaiter(this, void 0, void 0, function () {
            var data, drawing;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("/drawings/get-room-drawings?roomCode=" + roomCode)];
                    case 1:
                        data = (_a.sent()).data;
                        drawing = data.drawings[0];
                        this.html = "<h4>By: " + drawing.ownerName + "</h4>\n                     <img src=\"" + drawing.dataURL + "\">";
                        if (!(data.id == drawing.ownerId)) return [3 /*break*/, 2];
                        this.html += "<form onsubmit=\"handleLie(event,'" + roomCode + "')\">\n                            <label for=\"lie\">Enter a lie</label>\n                            <input type=\"text\" name=\"lie\" id=\"lie\"></input>\n                            <input type=\"submit\"></input>\n                         </form>             \n            ";
                        return [3 /*break*/, 4];
                    case 2:
                        this.html += "<h4>this is your drawing,</br> wait for others to answer</h4>";
                        return [4 /*yield*/, axios.patch('/room/update-answer', { answer: data.answer, roomCode: roomCode })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.main.innerHTML = this.html;
                        return [2 /*return*/];
                }
            });
        });
    },
    submitted: function (thing) {
        this.html = "<h4>Your " + thing + " was submitted</h4>";
        this.main.innerHTML = this.html;
    },
    showLies: function (roomId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, _i, data_1, lie;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get("/users/get-lies?roomId=" + roomId)];
                    case 1:
                        data = (_a.sent()).data;
                        this.html = "";
                        for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                            lie = data_1[_i];
                            this.html += "<button onclick=\"handleLieChoose('" + lie + "','" + roomId + "')\">" + lie + "</button>";
                        }
                        this.main.innerHTML = this.html;
                        return [2 /*return*/];
                }
            });
        });
    }
};
function handleLieChoose(lie, roomId) {
    return __awaiter(this, void 0, void 0, function () {
        var socket, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    socket = io();
                    return [4 /*yield*/, axios.get("/rooms/check-lie?roomId=" + roomId + "&lie=" + lie)];
                case 1:
                    data = (_a.sent()).data;
                    if (!data) return [3 /*break*/, 3];
                    return [4 /*yield*/, axios.patch('/users/add-points', { lie: lie })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    render.submitted('answer');
                    socket.emit('done answering', roomId);
                    return [2 /*return*/];
            }
        });
    });
}
function handleLie(ev, roomId) {
    return __awaiter(this, void 0, void 0, function () {
        var socket, lie;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    socket = io();
                    lie = ev.target.lie.value;
                    return [4 /*yield*/, axios.patch('/users/add-lie', { lie: lie })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, axios.patch('/rooms/add-lie', { roomId: roomId })];
                case 2:
                    _a.sent();
                    socket.emit('done lying', roomId);
                    socket.on('show lies', function (roomCode) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (roomCode == roomId) {
                                render.showLies(roomId);
                            }
                            return [2 /*return*/];
                        });
                    }); });
                    render.submitted('lie');
                    return [2 /*return*/];
            }
        });
    });
}
function handleDrawSubmit(type, roomCode) {
    return __awaiter(this, void 0, void 0, function () {
        var canvas, ctx, base64CanvasData, socket, data, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvas = document.querySelector('#canvas');
                    ctx = canvas.getContext("2d");
                    base64CanvasData = canvas.toDataURL("image/png").split(';base64,')[1];
                    if (!(type == "game")) return [3 /*break*/, 2];
                    socket = io();
                    return [4 /*yield*/, axios.post('/drawings/add-drawing', { imgData: base64CanvasData, type: roomCode })];
                case 1:
                    data = (_a.sent()).data;
                    socket.emit('done drawing', roomCode);
                    socket.on('show drawings', function (roomId) {
                        if (roomId == roomCode) {
                            render.showDrawing(roomCode);
                        }
                    });
                    render.submitted('drawing');
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, axios.post('/drawings/add-drawing', { imgData: base64CanvasData })];
                case 3:
                    data = (_a.sent()).data;
                    render.account();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleRegister(ev) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var emailRegex, fields, message, email, username, password2, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
                    fields = ev.target.elements;
                    message = document.querySelector('#message');
                    email = document.querySelector('#email');
                    username = document.querySelector('#username');
                    password2 = document.querySelector('#passwordConf');
                    (_a = document.querySelector('.alert')) === null || _a === void 0 ? void 0 : _a.classList.remove('alert');
                    if (fields.password.value != fields.passwordConf.value) {
                        message.innerHTML = 'Password do not match';
                        password2.classList.add("alert");
                        return [2 /*return*/];
                    }
                    if (!emailRegex.test(fields.email.value)) {
                        message.innerHTML = 'Email address not valid';
                        email.classList.add("alert");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, axios.post('/users/add-user', { username: fields.username.value, email: fields.email.value, password: fields.password.value })];
                case 1:
                    data = (_b.sent()).data;
                    switch (data.result) {
                        case 'username already exists':
                            message.innerHTML = 'Username taken';
                            username.classList.add("alert");
                            break;
                        case 'email already exists':
                            message.innerHTML = 'Email address already in use';
                            email.classList.add("alert");
                            break;
                        case 'user created':
                            message.innerHTML = 'Account created!';
                            setTimeout(render.account, 2000);
                            break;
                        case 'DB error':
                            message.innerHTML = 'Oops! something went wrong';
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function handleLogin(ev) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var fields, message, password, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    (_a = document.querySelector('.alert')) === null || _a === void 0 ? void 0 : _a.classList.remove('alert');
                    fields = ev.target.elements;
                    message = document.querySelector('#message');
                    password = document.querySelector('#password');
                    return [4 /*yield*/, axios.post('/users/log-user', { email: fields.email.value, password: fields.password.value })];
                case 1:
                    data = (_b.sent()).data;
                    switch (data.result) {
                        case 'wrong password':
                            message.innerHTML = 'Wrong password';
                            password.classList.add("alert");
                            break;
                        case 'user not found':
                            message.innerHTML = "Account does not exists, <h4 class=\"pointer\" onclick='render.register()'>would you like to register?</h4>";
                            password.classList.add("alert");
                            break;
                        case 'authorized':
                            render.account();
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function handleChangeAvatar(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.patch('/drawings/set-user-avatar', { id: id })];
                case 1:
                    data = _a.sent();
                    render.account();
                    return [2 /*return*/];
            }
        });
    });
}
function handleDeleteAvatar(id) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios["delete"]('/drawings/delete-user-avatar', { data: { id: id } })];
                case 1:
                    data = _a.sent();
                    render.account();
                    return [2 /*return*/];
            }
        });
    });
}
function handleJoinRoom(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var message, label, id, data, data_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    message = document.querySelector('#message');
                    label = document.querySelector('label');
                    id = ev.target.roomCode.value;
                    return [4 /*yield*/, axios.get("/rooms/join-room?roomId=" + id)];
                case 1:
                    data = (_a.sent()).data;
                    if (!(data.result == true)) return [3 /*break*/, 3];
                    return [4 /*yield*/, axios.patch('/users/add-user-to-room', { roomId: id })];
                case 2:
                    data_2 = (_a.sent()).data;
                    render.gameLobby(id);
                    return [3 /*break*/, 4];
                case 3:
                    message.innerHTML = 'Room does not exist';
                    label.classList.add("alert");
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleDrawAvatar() {
    render.draw();
}
function handleStartGame(roomId) {
    return __awaiter(this, void 0, void 0, function () {
        var socket;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.patch('/rooms/start-game', roomId)];
                case 1:
                    _a.sent();
                    render.draw("game", roomId);
                    socket = io();
                    socket.emit('start Draw', roomId);
                    return [2 /*return*/];
            }
        });
    });
}
// async function handleAddWord(ev) {
//     ev.preventDefault();
//     // let word = ev.target.word.value;
//     // word = word.toLowerCase();
//     // await axios.post('/words/add-word', {word})
//     await axios.get('/words/get-word')
// }

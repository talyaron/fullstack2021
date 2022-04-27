

function getCookie(cookieName) {
    const cookies = decodeURIComponent(document.cookie);
    let cookiesArr = cookies.split('; ');
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i].split('=')[0] == cookieName) return cookiesArr[i].split('=')[1];
    }
};

function handleOnLoad() {

    const cookie = getCookie('userInfo')
    // render.gameSetup();
    // if (cookie) {
    //     render.account();
    // }
    // else render.login();
};
const render = {
    main: document.querySelector('main'),
    html: '',
    login() {
        const cookie = getCookie('userInfo')
        if (cookie) {
            render.account();
        }
        else {
            this.html = `<h2>Welcome back!</h2>
                        <h4>Don't have an account? <span class="pointer" onclick="render.register()">click here to register</span></h4>
                        <form onsubmit="handleLogin(event)">
                            <label for="email">Email address</label>
                            <input type="text" name="email" id="email">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password">
                            <input type="submit" name="submit" class="button" value="Log-in">
                            <h4 id="message"></h4>
                        </form>
                `;
            this.main.innerHTML = this.html;
        }
    },
    register() {
        const cookie = getCookie('userInfo')
        if (cookie) {
            render.account();
        }
        else {
            this.html = `<form onsubmit="handleRegister(event)">
                            <label for="username">Choose a username</label>
                            <input type="text" name="username" id="username">
                            <label for="email">Enter your email address</label>
                            <input type="text" name="email" id="email">
                            <label for="password">Choose a password</label>
                            <input type="password" name="password" id="password">
                            <label for="passwordConf">Confirm your password</label>
                            <input type="password" name="passwordConf" id="passwordConf">
                            <input type="submit" name="submit" class="button" value="Register">
                            <h4 id="message"></h4>
                        </form>
                `;
            this.main.innerHTML = this.html;
        }
    },
    info() {
        this.html = `<h1>Welcome to Well Drawn!</h1>
                    <h3>"Well Drawn!" is a web based party game for multiple people </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique optio iusto perspiciatis, quasi saepe ut nihil sit, soluta dolorum quibusdam explicabo voluptatibus. Iusto aspernatur placeat voluptatem perspiciatis minus enim, aperiam velit inventore laborum facere repudiandae nobis perferendis cum obcaecati aut.</p>
            `;
        this.main.innerHTML = this.html;
    },
    async account() {
        const cookie = getCookie('userInfo')
        if (!cookie) {
            render.info();
            return;
        }
        const { data } = await axios.get('/drawings/get-user-avatars');

        this.html = `<h2>Hi there ${data.user}!</h2>`
        let hasAvatar = false;
        data.avatars.forEach(avatar => {

            if (avatar.type == "currentAvatar") {
                this.html += `<img src="${avatar.dataURL}">`
                hasAvatar = true;
            }
        });
        if (!hasAvatar) this.html += `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyPl61Oub-Yg1Eb5qJ6vrZl2CwCv2LZglroy1LOZUDY-3EnRe2Rx6Ay1ueT6XZjV3W_Q&usqp=CAU" alt="">`;

        this.html += `<button onclick="render.joinGame()">Join Room</button>
        <button onclick="render.gameSetup()">Create Room</button>
        <div class="avatar-grid">`
        data.avatars.forEach(avatar => {
            this.html += `<div class="avatar-grid__item">
                                <img src="${avatar.dataURL}">
                                <button onclick="handleChangeAvatar('${avatar._id}')">Use Avatar</button>
                                <button onclick="handleDeleteAvatar('${avatar._id}')">Delete Avatar</button>
                          </div>
            `;

        })
        this.html += `</div>`
        if (data.avatars.length >= 6) this.html += `<h4>You have too many avatars! delete some to add more</h4>`;
        else this.html += `<button onclick = "render.draw()" > Add Avatar </button>`;
        this.main.innerHTML = this.html;
    },
    setImage(img, dataURL) {
        img.src = dataURL
        return img;
    },
    async gameSetup() {
        let socket = io();
        const uid = Math.random().toString(36).substr(2, 4).toUpperCase()
        // socket.emit('create room',uid);
        await axios.post('/rooms/add-room', { roomId: uid });
        await axios.patch('/users/add-user-to-room', { roomId: uid })

        socket.emit('join room', uid);

        this.html = `<h2>Create game room</h2>
                    <h4>Room code: ${uid}</h4>
                    <div id="player-list"> 
                    </div> <button onclick="handleStartGame('${uid}')">Everyone is in</button>`;
        this.main.innerHTML = this.html;

        socket.on('avatars', (avatarUrls) => {
            const grid = document.querySelector('#player-list')

            this.html = ''
            avatarUrls.forEach(avatar => {
                this.html += `<div class="player">
                <h4>${avatar.ownerName}</h4>
                <img src="${avatar.dataURL}">
                </div>
                `;

            });
            grid.innerHTML = this.html;
        });

    },
    joinGame() {
        this.html = `<h2>Join a game room</h2>
                     <form onsubmit="handleJoinRoom(event)">
                         <label for="roomCode">Enter room code:</label>
                         <input type="text" name="roomCode" id="roomCode">
                         <input type="submit" value="Join Room" class="button">
                     </form>
                     <h4 id="message"></h4>
        `;
        this.main.innerHTML = this.html;

    },
    async gameLobby(roomId) {
        this.html = `<h2>Room Code: ${roomId}</h2>
                     <h3>Players:</h3>
                     <div id="player-list">
            
                     </div>
                     <h4 id="message"></h4>
        `;
        this.main.innerHTML = this.html;

        let socket = io();
        socket.emit('join room', roomId);

        socket.on('avatars', (avatarUrls) => {
            const grid = document.querySelector('#player-list')

            this.html = ''
            avatarUrls.forEach(avatar => {
                this.html += `<div>
                <h4 class="player">${avatar.ownerName}</h4>
                <img src="${avatar.dataURL}">
                </div>
                `;

            });
            grid.innerHTML = this.html;
        });

        socket.on('gameStart', async (roomCode) => {
            if (roomCode == roomId) {

                render.draw("game", roomId);
            }
        });

    },
    async draw(type, roomCode) {
        let socket = io();
        if (type == 'game') {
            const { data } = await axios.get(`/words/get-word?roomCode=${roomCode}`)
            this.html = `<h5>Draw ${data.word}</h5>`;
        }
        else {
            this.html = `<h5>Draw your avatar!</h5>`
        }


        this.html += `
                     <canvas id="canvas"></canvas>
                     <button onclick="handleDrawSubmit('${type}','${roomCode}')">Submit drawing</button>`;
        this.main.innerHTML = this.html;
        const canvas: any = document.querySelector('#canvas');
        const ctx = canvas.getContext("2d");

        canvas.addEventListener('mousedown', start);
        canvas.addEventListener('mouseup', end);
        canvas.addEventListener('mouseout', end);
        canvas.addEventListener('mousemove', draw);

        canvas.width = 400;
        canvas.height = 600;

        ctx.beginPath();
        ctx.strokeStyle = "#1B263B";

        let drawing = false;

        function start(ev) {
            drawing = true;
            draw(ev);
        }
        function end() {
            drawing = false;
            ctx.beginPath();
        }
        function draw(ev) {
            if (!drawing) return;
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            let pos = getMousePos(canvas, ev);

            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        }
        function getMousePos(canvas, ev) {
            let rect = canvas.getBoundingClientRect();
            return {
                x: ev.clientX - rect.left,
                y: ev.clientY - rect.top
            };
        }
    },
    async showDrawing(roomCode) {
        const { data } = await axios.get(`/drawings/get-room-drawings?roomCode=${roomCode}`)


        const drawing = data.drawings[0];

        this.html = `<h4>By: ${drawing.ownerName}</h4>
                     <img src="${drawing.dataURL}">`
        if (data.id == drawing.ownerId) {
            this.html += `<form onsubmit="handleLie(event,'${roomCode}')">
                            <label for="lie">Enter a lie</label>
                            <input type="text" name="lie" id="lie"></input>
                            <input type="submit"></input>
                         </form>             
            `;
        }
        else {
            this.html += `<h4>this is your drawing,</br> wait for others to answer</h4>`
            await axios.patch('/room/update-answer', { answer: data.answer, roomCode });

        }
        this.main.innerHTML = this.html;
    },
    submitted(thing) {
        this.html = `<h4>Your ${thing} was submitted</h4>`;
        this.main.innerHTML = this.html;
    },
    async showLies(roomId) {
        const { data } = await axios.get(`/users/get-lies?roomId=${roomId}`);
        this.html = ``;
        for (const lie of data) {
            this.html += `<button onclick="handleLieChoose('${lie}','${roomId}')">${lie}</button>`
        }
        this.main.innerHTML = this.html;
    }
};

async function handleLieChoose(lie, roomId) {
    let socket = io();
    const { data } = await axios.get(`/rooms/check-lie?roomId=${roomId}&lie=${lie}`);
    if(data){
        await axios.patch('/users/add-points',{lie})
    }
    render.submitted('answer');
    socket.emit('done answering', roomId);

}

async function handleLie(ev, roomId) {
    ev.preventDefault();
    let socket = io();
    const lie = ev.target.lie.value;
    await axios.patch('/users/add-lie', { lie });
    await axios.patch('/rooms/add-lie', { roomId });
    socket.emit('done lying', roomId);
    socket.on('show lies', async (roomCode) => {
        if (roomCode == roomId) {

            render.showLies(roomId);
        }
    });
    render.submitted('lie');

}


async function handleDrawSubmit(type, roomCode) {
    const canvas: any = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");
    const base64CanvasData = canvas.toDataURL("image/png").split(';base64,')[1];
    if (type == "game") {
        let socket = io();
        const { data } = await axios.post('/drawings/add-drawing', { imgData: base64CanvasData, type: roomCode });
        socket.emit('done drawing', roomCode);
        socket.on('show drawings', (roomId) => {
            if (roomId == roomCode) {
                render.showDrawing(roomCode);
            }
        });
        render.submitted('drawing');
    }
    else {
        const { data } = await axios.post('/drawings/add-drawing', { imgData: base64CanvasData });
        render.account();
    }
}

async function handleRegister(ev) {
    ev.preventDefault();
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    const fields = ev.target.elements
    const message = document.querySelector('#message')
    const email: any = document.querySelector('#email')
    const username: any = document.querySelector('#username')
    const password2: any = document.querySelector('#passwordConf')

    document.querySelector('.alert')?.classList.remove('alert')

    if (fields.password.value != fields.passwordConf.value) {
        message.innerHTML = 'Password do not match';
        password2.classList.add("alert");
        return;
    }
    if (!emailRegex.test(fields.email.value)) {
        message.innerHTML = 'Email address not valid';
        email.classList.add("alert");
        return;
    }
    const { data } = await axios.post('/users/add-user', { username: fields.username.value, email: fields.email.value, password: fields.password.value });

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
            setTimeout(render.account, 2000,);
            break;
        case 'DB error':
            message.innerHTML = 'Oops! something went wrong';
            break;
    }

}

async function handleLogin(ev) {
    ev.preventDefault();
    document.querySelector('.alert')?.classList.remove('alert')
    const fields = ev.target.elements
    const message = document.querySelector('#message')
    const password: any = document.querySelector('#password')

    const { data } = await axios.post('/users/log-user', { email: fields.email.value, password: fields.password.value })
    switch (data.result) {
        case 'wrong password':
            message.innerHTML = 'Wrong password';
            password.classList.add("alert");
            break;
        case 'user not found':
            message.innerHTML = `Account does not exists, <h4 class="pointer" onclick='render.register()'>would you like to register?</h4>`;
            password.classList.add("alert");
            break;
        case 'authorized':
            render.account();
            break;
    }
}

async function handleChangeAvatar(id) {
    const data = await axios.patch('/drawings/set-user-avatar', { id })
    render.account();
}
async function handleDeleteAvatar(id) {
    const data = await axios.delete('/drawings/delete-user-avatar', { data: { id } })
    render.account();
}

async function handleJoinRoom(ev) {
    ev.preventDefault();
    const message = document.querySelector('#message')
    const label = document.querySelector('label')
    const id = ev.target.roomCode.value
    const { data } = await axios.get(`/rooms/join-room?roomId=${id}`)
    if (data.result == true) {
        const { data } = await axios.patch('/users/add-user-to-room', { roomId: id })

        render.gameLobby(id);

    }
    else {
        message.innerHTML = 'Room does not exist';
        label.classList.add("alert");
    }

}

function handleDrawAvatar() {
    render.draw();
}

async function handleStartGame(roomId) {
    await axios.patch('/rooms/start-game', roomId);
    render.draw("game", roomId);
    let socket = io();
    socket.emit('start Draw', roomId);
}

// async function handleAddWord(ev) {
//     ev.preventDefault();
//     // let word = ev.target.word.value;
//     // word = word.toLowerCase();
//     // await axios.post('/words/add-word', {word})
//     await axios.get('/words/get-word')
// }

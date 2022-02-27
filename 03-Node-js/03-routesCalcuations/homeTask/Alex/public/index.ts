const axios = require('axios');

axios.get("/get-users").then(({ data }) => {
    console.log(data);
})

function handleSelectTopic(event) {
    try {
        const pictures = event.target.value;
        console.log(pictures);
        if (pictures) {
            axios.get(`/get-users?pictures=${pictures}&topic=123`).then(({ data }) => {
                console.log(data);

                const root = document.querySelector("#root");

                let html = "";
                if (Array.isArray(data)) {
                    data.forEach((user) => {
                        html += `<img src="${user.url}"></img>`;
                        // console.log(user.url);
                        
                    });
                    root.innerHTML = html;
                } else {
                    throw new Error("data is not an array")
                }

            });
        }
    } catch (err) {
        console.error(err);
    }
}
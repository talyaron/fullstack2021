var axios = require('axios');
axios.get("/get-users").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSelectTopic(event) {
    try {
        var pictures = event.target.value;
        console.log(pictures);
        if (pictures) {
            axios.get("/get-users?pictures=" + pictures + "&topic=123").then(function (_a) {
                var data = _a.data;
                console.log(data);
                var root = document.querySelector("#root");
                var html = "";
                if (Array.isArray(data)) {
                    data.forEach(function (user) {
                        html += "<img src=\"" + user.url + "\"></img>";
                        // console.log(user.url);
                    });
                    root.innerHTML = html;
                }
                else {
                    throw new Error("data is not an array");
                }
            });
        }
    }
    catch (err) {
        console.error(err);
    }
}

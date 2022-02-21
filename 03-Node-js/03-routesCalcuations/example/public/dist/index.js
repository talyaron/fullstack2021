axios.get("/get-users").then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleSelectUsers(ev) {
    try {
        var gender = ev.target.value;
        console.log(gender);
        if (gender) {
            axios.get("/get-users?gender=" + gender + "&stam=123").then(function (_a) {
                var data = _a.data;
                console.log(data);
                var root = document.querySelector("#root");
                var html = "";
                if (Array.isArray(data)) { //check that the data is an array
                    data.forEach(function (user) {
                        html += "<p>" + user.name + "</p>";
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

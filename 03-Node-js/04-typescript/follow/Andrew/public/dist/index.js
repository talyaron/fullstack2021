var axios = require('axios')["default"];
function handleSearch() {
    axios.get('/get').then(function (_a) {
        var data = _a.data;
        console.log(data);
    });
}

function handleSearch(ev) {
    try {
        var searchTerm = ev.target.value;
        axios.get("/getArticels?article=" + searchTerm).then(function (_a) {
            var data = _a.data;
            if (Array.isArray(data)) {
                console.log(data);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}

console.dir(document);
document.addEventListener("visibilitychange", function () {
    document.title = document.visibilityState;
});

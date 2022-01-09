var bb = document.querySelectorAll(".bb");
bb.forEach(function (image) {
    image.addEventListener("mouseover", function (e) {
        console.log("mouseover");
        console.log(this);
        var title = this.querySelectorAll(".wrapper__text")[0];
        console.log(title);
        title.style.visibility = 'visible';
    });
    image.addEventListener("mouseout", function (e) {
        this.querySelectorAll(".wrapper__text")[0].style.visibility = 'hidden';
    });
});

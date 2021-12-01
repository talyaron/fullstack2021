"use strict";

var video = document.querySelectorAll("video");
videos.forEach(function (video) {
  video.addEvenetListener("mouseover", function () {
    this.play();
  });
  video.addEvenetListener("mouseout", function () {
    this.pause();
  });
});
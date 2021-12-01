const video = document.querySelectorAll("video")

videos.forEach(video => {
    video.addEvenetListener("mouseover", function (){
         this.play()
    })

video.addEvenetListener("mouseout", function() {
    this.pause()
})
})

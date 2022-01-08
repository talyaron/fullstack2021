var main = document.querySelector('.main');
var boxes = document.querySelectorAll('.main_box');
var buttons = document.querySelectorAll('button');
var video = document.getElementById('displayVD');
var btnsInfo = document.querySelectorAll('.main_box-btnInfo');
var sourceVideo = document.getElementById('sourceVideo');
// id's buttons  
var btnGTAinfo = document.getElementById('btnGTA');
var btnCODinfo = document.getElementById('btnCOD');
var btnNBAinfo = document.getElementById('btnNBA');
var btnFIFAinfo = document.getElementById('btnFIFA');
var btnSPIDYinfo = document.getElementById('btnSpidy');
var btnFORTinfo = document.getElementById('btnFort');
// id's of the images boxes 
var gta = document.getElementById('gta');
var cod = document.getElementById('cod');
var nba = document.getElementById('nba');
var fifa = document.getElementById('fifa');
var spiderman = document.getElementById('spiderman');
var fortnite = document.getElementById('fortnite');
// paragraph 
var infoPara = document.getElementById('infoPara');
// varables for changing background images 
var count = 1;
var gtaBackground;
var nbaBackground;
var fifaBackground;
var fortniteBackground;
var spidermanBackground;
var codBackground;
// how long between changing images 
function set_time() {
    setInterval(image_change, 2500);
}
// changing image function 
function image_change() {
    if (count == 1) {
        gtaBackground = "url(https://www.spieltimes.com/wp-content/uploads/2021/12/maxresdefault-9.jpg)";
        codBackground = "url(https://oneesports.azureedge.net/cdn-data/2021/05/CallOfDuty_Warzone_Graphic.jpg)";
        nbaBackground = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEozVM6VF8SkwtOep5h4GrFiT8fbovEnRy09vRUWxcsnkdxtPxJ6D2lOuQrOEcVNCB2U0&usqp=CAU)";
        fifaBackground = "url(https://i.pinimg.com/564x/b2/80/e1/b280e104158a8a6b25f8a88f68f1cecb.jpg)";
        fortniteBackground = "url(https://cdn1.epicgames.com/offer/fn/19BR_KeyArt_EGS_Launcher_Blade_2560x1440_2560x1440-0c719814e3356a4726560c70f0462e7b)";
        spidermanBackground = "url(https://i.ytimg.com/vi/H1PU5tny4mU/maxresdefault.jpg)";
    }
    else if (count == 2) {
        gtaBackground = "url(https://site-cdn.givemesport.com/images/20/10/30/a1ea40890ed055b1a4643f329015a830/960.jpg)";
        codBackground = "url(https://www.callofduty.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/body/AGB_WZ_LAUNCH_010.jpg)";
        nbaBackground = "url(https://i.ytimg.com/vi/Ua60PuA-Hng/maxresdefault.jpg)";
        fifaBackground = "url(https://www.tgspot.co.il/wp-content/uploads/2014/06/FIFA-Soccer-21.jpg)";
        fortniteBackground = "url(https://www.dexerto.com/wp-content/uploads/thumbnails/_thumbnailLarge/fortnite-battle-royale-tilted-towers-construction-patch-update-new-map-zone-crater-meteor.jpg)";
        spidermanBackground = "url(https://gamingbolt.com/wp-content/uploads/2020/10/marvels-spider-man-miles-morales-image-4-1-1280x720.jpg)";
    }
    else if (count == 3) {
        gtaBackground = "url(https://pyre-media-3.s3.us-east-1.amazonaws.com/ceab6b1b-bc07-4036-80e4-8f933ac3f25eGTA-Vice-City.jpeg)";
        codBackground = "url(https://bnetproduct-a.akamaihd.net//40/e1ad45153cfc2017906f72e637877b2d-WZ_Camaraderie_Refresh_Keyart_Textless-Bnet-Shop_Card_Feature-960x540.jpg)";
        nbaBackground = "url(https://gamertweak.com/wp-content/uploads/2020/09/How-to-Dunk-NBA-2k21-Guide.jpg)";
        fifaBackground = "url(https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/06/09/1bc78d52-518b-416a-ba8e-0a5592260ee3/fifa-20-neymar)";
        fortniteBackground = "url(https://img.20mn.fr/UjhBvavWQoG-snT1PTrjeQ/830x532_fortnite-la-prochaine-saison-introduira-un-mode-solo-narratif.jpg)";
        spidermanBackground = "url(https://imgix.kotaku.com.au/content/uploads/sites/3/2020/11/25/qgbmrv2xhjvdodglrux1.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1280)";
    }
    else if (count == 4) {
        gtaBackground = "url(https://i.pinimg.com/originals/ac/62/9f/ac629f48574d849a9abcf850ef8285e3.jpg)";
        codBackground = "url(http://gamerspack.co.il/wp-content/uploads/2020/03/call_of_duty_warzone_02.jpg)";
        nbaBackground = "url(https://cdn.realsport101.com/images/ncavvykf/realsport-production/44fd02bab56c9cc8354f1840f22ef96bf2538b4a-1280x720.jpg?rect=0,0,1279,720&w=700&h=394)";
        fifaBackground = "url(https://s.yimg.com/os/creatr-uploaded-images/2021-02/e20fbd80-6555-11eb-9f2d-2511246d03a4)";
        fortniteBackground = "url(https://www.gamereactor.se/media/57/_2405753b.jpg)";
        spidermanBackground = "url(https://gamingbolt.com/wp-content/uploads/2020/09/marvels-spider-man-miles-morales-image-2-1.jpg)";
    }
    else {
        count = 0;
    }
    gta.style.backgroundImage = gtaBackground;
    cod.style.backgroundImage = codBackground;
    nba.style.backgroundImage = nbaBackground;
    fifa.style.backgroundImage = fifaBackground;
    fortnite.style.backgroundImage = fortniteBackground;
    spiderman.style.backgroundImage = spidermanBackground;
    count++;
}
// display buttons 
boxes.forEach(function (box) {
    box.addEventListener('mouseover', showButtons);
});
function showButtons(box) {
    var id = box.target.id;
    if (id == "gta") {
        btnGTAinfo.style.display = 'inline';
    }
    else if (id == "cod") {
        btnCODinfo.style.display = 'inline';
    }
    else if (id == "fifa") {
        btnFIFAinfo.style.display = 'inline';
    }
    else if (id == "nba") {
        btnNBAinfo.style.display = 'inline';
    }
    else if (id == "fortnite") {
        btnFORTinfo.style.display = 'inline';
    }
    else if (id == "spiderman") {
        btnSPIDYinfo.style.display = 'inline';
    }
}
// buttons display none 
boxes.forEach(function (box) {
    box.addEventListener('mouseleave', mouseOut);
});
function mouseOut(box) {
    var id = box.target.id;
    if (id == "gta") {
        btnGTAinfo.style.display = 'none';
    }
    else if (id == "cod") {
        btnCODinfo.style.display = 'none';
    }
    else if (id == "fifa") {
        btnFIFAinfo.style.display = 'none';
    }
    else if (id == "nba") {
        btnNBAinfo.style.display = 'none';
    }
    else if (id == "fortnite") {
        btnFORTinfo.style.display = 'none';
    }
    else if (id == "spiderman") {
        btnSPIDYinfo.style.display = 'none';
    }
}
// display description 
btnsInfo.forEach(function (btn) {
    btn.addEventListener('click', showDescription);
});
function showDescription(btn) {
    var id = btn.target.id;
    if (id == "btnGTA") {
        infoPara.textContent = 'Group Description. Grand Theft Auto (usually abbreviated GTA) is a series of games that incorporate driving and action gameplay styles. Created by the British developer Rockstar North, GTA games are set in vast, predominantly urban "sandbox" environments, and feature protagonists involved in organized crime. ';
        infoPara.style.display = 'block';
        video.src = "videos/gta.mp4";
    }
    else if (id == "btnCOD") {
        infoPara.textContent = 'Call of Duty is a first-person shooter video game based on id Tech 3, and was released on October 29, 2003. The game was developed by Infinity Ward and published by Activision. The game simulates the infantry and combined arms warfare of World War II.';
        infoPara.style.display = 'block';
        video.src = "videos/COD.mp4";
    }
    else if (id == "btnFIFA") {
        infoPara.textContent = "FIFA brings The World's Game to life, letting you play with the biggest leagues, clubs, and players in world football, all with incredible detail and realism.";
        infoPara.style.display = 'block';
        video.src = "videos/fifa.mp4";
    }
    else if (id == "btnNBA") {
        infoPara.textContent = 'NBA 2K is a series of basketball sports simulation video games developed and released annually since 1999. The premise of each game in the series is to emulate the sport of basketball, more specifically, the National Basketball Association. ... All of the games in the franchise have been developed by Visual Concepts.';
        infoPara.style.display = 'block';
        video.src = "videos/nba.mp4";
    }
    else if (id == "btnSpidy") {
        infoPara.textContent = "After eight years behind the mask, Peter Parker is a crime-fighting expert. Feel the full power of a more experienced Spider-Man with improvisational combat, dynamic acrobatics, fluid urban traversal, and environmental interactions. A rookie no longer, this is the most masterful Spider-Man you've ever played.";
        infoPara.style.display = 'block';
        video.src = "videos/spiderman.mp4";
    }
    else if (id == "btnFort") {
        infoPara.textContent = 'Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive.';
        infoPara.style.display = 'block';
        video.src = "videos/fortnite.mp4";
    }
}


const personName: any = document.querySelector('#name');

function picLeave() {
    personName.innerText = '( please hover image )'; personName.style.opacity = '0.5';
}

document.querySelector('.picOne').addEventListener('mouseenter', picOneEnter);
document.querySelector('.picOne').addEventListener('mouseleave', picLeave);
function picOneEnter() {
    personName.innerText = 'Bob Asnafy'; personName.style.opacity = '1';
}
(picLeave: void) => { }


document.querySelector('.picTwo').addEventListener('mouseenter', picTwoEnter)
document.querySelector('.picTwo').addEventListener('mouseleave', picLeave)
function picTwoEnter() {
    personName.innerText = 'Jasmine Asnafy'; personName.style.opacity = '1';
}
(picLeave: void) => { }

document.querySelector('.picThree').addEventListener('mouseenter', picThreeEnter)
document.querySelector('.picThree').addEventListener('mouseleave', picLeave)
function picThreeEnter() {
    personName.innerText = 'Quasimodo Notre Dame De Paris Asnafy'; personName.style.opacity = '1';
}
(picLeave: void) => { }

document.querySelector('.picFour').addEventListener('mouseenter', picFourEnter)
document.querySelector('.picFour').addEventListener('mouseleave', picLeave)
function picFourEnter() {
    personName.innerText = 'Winnie Asnafy'; personName.style.opacity = '1';
}
(picLeave: void) => { }

document.querySelector('.picFive').addEventListener('mouseenter', picFiveEnter)
document.querySelector('.picFive').addEventListener('mouseleave', picLeave)
function picFiveEnter() {
    personName.innerText = 'Snoopy Asnafy'; personName.style.opacity = '1';
}
(picLeave: void) => { }

document.querySelector('.picSix').addEventListener('mouseenter', picSixEnter)
document.querySelector('.picSix').addEventListener('mouseleave', picLeave)
function picSixEnter() {
    personName.innerText = 'Simba Asnafy'; personName.style.opacity = '1';
}
(picLeave: void) => { }

document.querySelector('.picSeven').addEventListener('mouseenter', picSevenEnter)
document.querySelector('.picSeven').addEventListener('mouseleave', picLeave)
function picSevenEnter() {
    personName.innerText = 'Dora Asnafy'; personName.style.opacity = '1';
}
(picLeave: void) => { }



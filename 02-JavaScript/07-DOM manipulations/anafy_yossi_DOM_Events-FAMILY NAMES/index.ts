
const personName: any = document.querySelector('#name');


document.querySelector('.picOne').addEventListener('mouseenter', picOneEnter);
document.querySelector('.picOne').addEventListener('mouseleave', picOneLeave);

function picOneEnter() {
    personName.innerText = 'Bob Asnafy'; personName.style.opacity = '1';
}
function picOneLeave() {
    personName.innerText = '( please hover image )'; personName.style.opacity = '0.5';
}

document.querySelector('.picTwo').addEventListener('mouseenter', picTwoEnter)
document.querySelector('.picTwo').addEventListener('mouseleave', picTwoLeave)
function picTwoEnter() {
    personName.innerText = 'Jasmine Asnafy'; personName.style.opacity = '1';
}
function picTwoLeave() {
    personName.innerText = '( please hover image )'; personName.style.opacity = '0.5';
}

document.querySelector('.picThree').addEventListener('mouseenter', picThreeEnter)
document.querySelector('.picThree').addEventListener('mouseleave', picThreeLeave)
function picThreeEnter() {
    personName.innerText = 'Quasimodo Notre Dame De Paris Asnafy'; personName.style.opacity = '1';
}
function picThreeLeave() {
    personName.innerText = '( please hover image )'; personName.style.opacity = '0.5';
}

document.querySelector('.picFour').addEventListener('mouseenter', picFourEnter)
document.querySelector('.picFour').addEventListener('mouseleave', picFourLeave)
function picFourEnter() {
    personName.innerText = 'Winnie Asnafy'; personName.style.opacity = '1';
}
function picFourLeave() {
    personName.innerText = '( please hover image )'; personName.style.opacity = '0.5';
}

document.querySelector('.picFive').addEventListener('mouseenter', picFiveEnter)
document.querySelector('.picFive').addEventListener('mouseleave', picFiveLeave)
function picFiveEnter() {
    personName.innerText = 'Snoopy Asnafy'; personName.style.opacity = '1';
}
function picFiveLeave() {
    personName.innerText = '( please hover image )'; personName.style.opacity = '0.5';
}

document.querySelector('.picSix').addEventListener('mouseenter', picSixEnter)
document.querySelector('.picSix').addEventListener('mouseleave', picSixeLeave)
function picSixEnter() {
    personName.innerText = 'Simba Asnafy'; personName.style.opacity = '1';
}
function picSixeLeave() {
    personName.innerText = '( please hover image )'; personName.style.opacity = '0.5';
}

document.querySelector('.picSeven').addEventListener('mouseenter', picSevenEnter)
document.querySelector('.picSeven').addEventListener('mouseleave', picSevenLeave)
function picSevenEnter() {
    personName.innerText = 'Dora Asnafy'; personName.style.opacity = '1';
}
function picSevenLeave() {
    personName.innerText = '( please hover image )'; personName.style.opacity = '0.5';
}

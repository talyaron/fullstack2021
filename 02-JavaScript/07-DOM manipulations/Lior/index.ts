
var something = document.getElementById("item")
something.animate([
{transform: 'scale(2)', background: 'red', opacity:1 ,offsetTop:0},
{transform: 'scale(2.5) rotate(360deg)',  background: 'blue', opacity:0.5 ,offsetTop:1},
{transform: 'scale(3) rotate(0deg)', background: 'red', opacity:1 ,offsetTop:1}
],
{
    duration:5000,
    easing: 'ease-in-out',
    delay:3,
    iterations: 4,
    
    direction: 'alternate',
    fill:"forwards"
});

something.style.width='250px';
something.style.height='50px';
something.style.borderRadius='50px';
something.style.marginTop = '220px';
something.style.marginLeft = '320px';
something.style.textAlign= 'center';
something.style.alignContent = 'center';


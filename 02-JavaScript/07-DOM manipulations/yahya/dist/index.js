var text = document.getElementById("text");
function leave() {
    text.innerHTML = 'HOVER TO SEE TITLE';
}
ironman.addEventListener('mouseenter', function () {
    text.innerHTML = 'THIS IS IRON-MAN';
});
ironman.addEventListener('mouseleave', leave);
halk.addEventListener('mouseenter', function () {
    text.innerHTML = 'THIS IS HALK';
});
halk.addEventListener('mouseleave', leave);
goku.addEventListener('mouseenter', function () {
    text.innerHTML = 'THIS IS goku';
});
goku.addEventListener('mouseleave', leave);
deadpool.addEventListener('mouseenter', function () {
    text.innerHTML = 'THIS IS DEAD-POOL';
});
deadpool.addEventListener('mouseleave', leave);
spiderman.addEventListener('mouseenter', function () {
    text.innerHTML = 'THIS IS SPIDER-MAN';
});
spiderman.addEventListener('mouseleave', leave);
// /////////////////////////////////////////////////////////////////////////
//  const ironman =document.getElementById('iron-man');
//  const halk= document.getElementById('halk');
//  const goku= document.getElementById('goku');
//  const deadpool = document.getElementById('dead-pool');
//  const spiderman = document.getElementById('spider-man')
//  ironman.addEventListener('mouseenter',()=> {
//      text.innerHTML='THIS IS IRON-MAN'
//  })
//  ironman.addEventListener('mouseleave',()=> {
//      text.innerHTML='HOVER TO SEE TITLE'  
//  })
//  halk.addEventListener('mouseenter',()=> {
//      text.innerHTML='THIS IS HALK'
//  })
//  halk.addEventListener('mouseleave',()=> {
//      text.innerHTML='HOVER TO SEE TITLE'  
//  })
//  goku.addEventListener('mouseenter',()=> {
//      text.innerHTML='THIS IS GOKU'
//  }
//  goku.addEventListener('mouseleave',()=> {
//      text.innerHTML='HOVER TO SEE TITLE'  
//  })
//  deadpool.addEventListener('mouseenter',()=> {
//      text.innerHTML='THIS IS DEAD-POOL'
//  })
//  deadpool.addEventListener('mouseleave',()=> {
//      text.innerHTML='HOVER TO SEE TITLE'  
//  })
//  spiderman.addEventListener('mouseenter',()=> {
//      text.innerHTML='THIS IS SPIDER-MAN'
//  })
//  spiderman.addEventListener('mouseleave',()=> {
//      text.innerHTML='HOVER TO SEE TITLE'  
//  })

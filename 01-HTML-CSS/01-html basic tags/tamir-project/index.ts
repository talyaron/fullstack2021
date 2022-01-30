function handlesubmit(ev) {
    ev.preventDefault();
    alert('תודה שיצרת איתנו קשר נציגנו ישמחו לחזור אליך')
    ev.target.reset();
}
function renderitems(ev) {
    ev.preventDefault();
    document.getElementById('saved').innerHTML = `<form class='lobi__form'>
     <img src="pic/ליעד/תמונה ראשית.jpg" alt="">
     <h2>:פרטים אישיים</h2>
     <input type="text" name="" id="text" placeholder=":שם פרטי">
     <input type="text" name="" id="text" placeholder=":שם משפחה">
     <input type="tel" name="" id="fhone" placeholder=":מספר פלאפון">
     <input type="email" name="" id="email" placeholder=":כתובת אימייל">
     <input class="submit" type="submit" value="אישור      ">
    
     </form>`;
     
}


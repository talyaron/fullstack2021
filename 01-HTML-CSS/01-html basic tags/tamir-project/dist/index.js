function handlesubmit(ev) {
    ev.preventDefault();
    alert('תודה שיצרת איתנו קשר נציגנו ישמחו לחזור אליך');
    ev.target.reset();
}
function renderitems(ev) {
    ev.preventDefault();
    document.getElementById('saved').innerHTML = "<form class='lobi__form'>\n     <img src=\"pic/\u05DC\u05D9\u05E2\u05D3/\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E8\u05D0\u05E9\u05D9\u05EA.jpg\" alt=\"\">\n     <h2>:\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD</h2>\n     <input type=\"text\" name=\"\" id=\"text\" placeholder=\":\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9\">\n     <input type=\"text\" name=\"\" id=\"text\" placeholder=\":\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4\">\n     <input type=\"tel\" name=\"\" id=\"fhone\" placeholder=\":\u05DE\u05E1\u05E4\u05E8 \u05E4\u05DC\u05D0\u05E4\u05D5\u05DF\">\n     <input type=\"email\" name=\"\" id=\"email\" placeholder=\":\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC\">\n     <input class=\"submit\" type=\"submit\" value=\"\u05D0\u05D9\u05E9\u05D5\u05E8      \">\n    \n     </form>";
}

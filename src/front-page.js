//Create the main div element to be exported
const exportDiv = document.createElement("div");
import lanternImage from "./assets/lantern.png";

//Add contant inside the div created
exportDiv.innerHTML = '<div class="title">\
<img src=' + lanternImage + '>\
<div class="text">\
    <h1>Lantern & Lotus</h1>\
    <h2>NOODLE HOUSE</h2>\
</div>\
<img src=' + lanternImage + '>\
</div>\
\
<div class="page-item">\
<h3>Simple bowls. Honest broth. Stories by lantern-light.</h3>\
<h4>Inspired by roadside teahouses, small plates, and fragrant trees.</h4>\
<h5>-Li C.</h5>\
</div>\
<div class="page-item">\
<h3>Hours</h3>\
<h4>Daily: 11:00 AM - 10: 00 PM</h4>\
</div>\
<div class="page-item">\
<h3>Location</h3>\
<h4>3 Peach Blossom, Yunxi District</h4>\
</div>';

export default exportDiv;
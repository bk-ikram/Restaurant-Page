//Create the main div element to be exported
const exportDiv = document.createElement("div");
import lanternImage from "./assets/lantern.png";

//Add contant inside the div created
exportDiv.innerHTML = '<div class="title">\
<img src=' + lanternImage + '>\
<div class="text">\
    <h1>Menu</h1>\
</div>\
<img src=' + lanternImage + '>\
</div>\
\
<div class="page-item">\
<h3>Muskar\'s Been Noodle</h3>\
<h4>Slow-simmered broth, hand-pulled noodles</h4>\
<h5>$15</h5>\
</div>\
<div class="page-item">\
<h3>Mist-Veil Dumplings (6)</h3>\
<h4>thin wrappers, juicy filling</h4>\
<h5>$10</h5>\
</div>\
<div class="page-item">\
<h3>Lotus Tea-Smoked Pork</h3>\
<h4>Smoky, tender slices</h4>\
<h5>$25</h5>\
</div>\
';

export default exportDiv;
//Create the main div element to be exported
const exportDiv = document.createElement("div");
import lanternImage from "./assets/lantern.png";

//Add contant inside the div created
exportDiv.innerHTML = '<div class="title">\
<img src=' + lanternImage + '>\
<div class="text">\
    <h1>Contact Us</h1>\
</div>\
<img src=' + lanternImage + '>\
</div>\
\
<div class="page-item">\
<h3>Mo Ran</h3>\
<h4>Manager</h4>\
<h5>mor1@shizun.com</h5>\
<h5>(555) 678-9101</h5>\
</div>';

export default exportDiv;
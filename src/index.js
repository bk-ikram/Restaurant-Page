import "./style.css";
import frontPage from "./front-page.js"
import menuPage from "./menu-page.js"
import contactPage from "./contact-page.js"

console.log("testing my js file");

const navBar = document.querySelector("nav");
const containerDiv = document.querySelector("#content");

const pageList = [{"page":frontPage,"id":"front-page"}
                    ,{"page":menuPage,"id":"menu-page"}
                    ,{"page":contactPage,"id":"contact-page"}]

//Add an event listener to the nav bar

navBar.addEventListener("click", (e) => {
    //Check if a button has been clicked
    if(e.target.tagName === "BUTTON"){
        //Get the id of the selected button
        const id = e.target.id;
        //Toggle the "selected" class of the buttons
        const buttons = document.querySelectorAll("button");
        buttons.forEach( (btn) => {
            btn.classList.remove("selected");
        })
        e.target.classList.add("selected");
        //fetch the correct module
        const selectedModule = pageList.filter( (ele) => { return ele.id === id})[0].page;
        //Empty the container div and fill it with the module's html
        containerDiv.innerHTML = '';
        containerDiv.innerHTML = selectedModule.innerHTML;
    }
})

//At first load, render the front page
containerDiv.innerHTML = frontPage.innerHTML;
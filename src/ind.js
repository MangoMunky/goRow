function openPopup(){
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}
function closePopup(){
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}



function sfxOO(){
    if(localStorage.getItem("OF", "on") == null && localStorage.getItem("OF", "off") == null){
        localStorage.setItem("OF", "on");
    }
    const cat = localStorage.getItem("OF", "off");
    
    if(cat == null){
        const cat = localStorage.getItem("OF", "on");
    }
    if(cat == "on"){
        localStorage.removeItem("OF", "on");
        localStorage.setItem("OF", "off");
    }
    else if(cat == "off"){
        localStorage.removeItem("OF", "off");
        localStorage.setItem("OF", "on");
    }
    console.log(cat)
}


let mexico = localStorage.getItem("OF", "on") + "fire" + localStorage.getItem("OF", "off");
let cowboy = mexico;

window.onload = function() {
    if(localStorage.getItem("OF", "off") == "off"){
        document.getElementById("checkbox").checked = false;
    }
    else if(localStorage.getItem("OF", "on") == "on"){
        document.getElementById("checkbox").checked = true;
    }

    document.getElementById("pepe1").onmouseover = function() {mouseOver()};
    document.getElementById("pepe1").onmouseout = function() {mouseOut()};

    document.getElementById("pepe").onmouseover = function() {mouseOver()};
    document.getElementById("pepe").onmouseout = function() {mouseOut()};
}


function mouseOver() {
  document.getElementById("wog").style.color = "white";
  document.getElementById("wog").style.background = "black";
  document.getElementById("wog").style.transition = "background-color 0.5s, color 0.4s";
  //document.getElementById("sR").style.border-top-right-radius = "25px";
}

function mouseOut() {
  document.getElementById("wog").style.color = "black";
  document.getElementById("wog").style.background = "white";
  document.getElementById("wog").style.transition = "background-color 0.5s, color 0.4s";
  //document.getElementById("sR").style.border-top-right-radius = "0px";
  
}


//I have no issues with the shop, but I just don't feel like repairing bikes as much anymore andi'm trying to spend more times with my friends now that we will all be going our seperate ways
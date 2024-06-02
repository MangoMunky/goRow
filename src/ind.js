//creates popup
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
    var sfxSw = localStorage.getItem("OF", "off");
    
    if(sfxSw == null || sfxSw!= "off "){
        sfxSw = localStorage.getItem("OF", "on");
    }
    if(sfxSw == "on"){
        localStorage.removeItem("OF", "on");
        localStorage.setItem("OF", "off");
    }
    else if(sfxSw == "off"){
        localStorage.removeItem("OF", "off");
        localStorage.setItem("OF", "on");
    }
    console.log(sfxSw + " sfx")
}

//makes a box checked or unchecked
function oOC(x, y){
    if(localStorage.getItem(x, "off") == "off"){
        document.getElementById(y).checked = false;
    }
    else if(localStorage.getItem(x, "on") == "on"){
        document.getElementById(y).checked = true;
    }
}


//Sets game as either single player bot or 1v1
function singleP(x){
    if(x == 'off'){
        localStorage.removeItem("sP", "on")
    }
    else if(x=='on'){
        localStorage.removeItem("sP", "off")
    }
    localStorage.setItem("sP", x);
    document.location='connectG.html';
}

window.onload = function() {
    oOC("OF", "cB");

    

    document.getElementById("oVOB").onmouseover = function() {mouseOver()};
    document.getElementById("oVOB").onmouseout = function() {mouseOut()};

    document.getElementById("botB").onmouseover = function() {mouseOver()};
    document.getElementById("botB").onmouseout = function() {mouseOut()};
}


function mouseOver() {
  document.getElementById("body").style.color = "white";
  document.getElementById("body").style.background = "black";
  document.getElementById("body").style.transition = "background-color 0.5s, color 0.4s";
  //document.getElementById("sR").style.border-top-right-radius = "25px";
}

function mouseOut() {
  document.getElementById("body").style.color = "black";
  document.getElementById("body").style.background = "white";
  document.getElementById("body").style.transition = "background-color 0.5s, color 0.4s";
  //document.getElementById("sR").style.border-top-right-radius = "0px";
  
}


//I have no issues with the shop, but I just don't feel like repairing bikes as much anymore andi'm trying to spend more times with my friends now that we will all be going our seperate ways
function openPopup(){
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}
function closePopup(){
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}
function sfxOO(){
    if(document.cookie = "on"){
        document.cookie = "off";
    }
    else{
        document.cookie = "off";
    }
    console.log(document.cookie)
}
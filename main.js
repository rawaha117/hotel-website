let menu = document.getElementById("menu");



menu.style.transition="0.5s";

function toggle(){
    if(menu.style.transform=="translateX(-200px)"){
menu.style.transform="translateX(0px)"
    }

    else{
    menu.style.transform="translateX(-200px)"
    }
}
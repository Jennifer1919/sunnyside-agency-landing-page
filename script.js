var menu = document.getElementById('menu_icon');

var open = function(){
    if(menu.nextElementSibling.style.display === "none" ){
    menu.nextElementSibling.style.display = "block";}
    else{
    menu.nextElementSibling.style.display = "none";
    }
}

menu.addEventListener("click", open);

//if (screen.width > 750){
   // menu.nextElementSibling.style.display = "flex";

//}
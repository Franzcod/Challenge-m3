


var modulo2=require("./services.js");
modulo2.chargeData();
modulo2.another();

// ocultar o mostrar div con click
// Logica del menu de filtro

let filtro_select = '';

let boton = document.querySelector(".form-control");

let options = document.querySelector(".options-disable");

function togleClass() {
    if ( options.classList.contains("options-disable") ){
        options.classList.remove("options-disable");
    }
    else{
        options.classList.toggle("options-disable")
    }
    options.classList.toggle("options")
}

boton.addEventListener("click", function(e) {
    togleClass()
})


let option_1 = document.querySelector(".option_1");
let option_2= document.querySelector(".option_2");
let option_3 = document.querySelector(".option_3");

option_1.addEventListener("click", function(e) {
 
    selectFilter("recientes")
})
option_2.addEventListener("click", function(e) {
 
    selectFilter("menorPrecio")
})
option_3.addEventListener("click", function(e) {
 
    selectFilter("maiorPrecio")
})


function selectFilter(option) {
    filtro_select = option;
    console.log("select Filter => ", filtro_select)
    setTimeout(function() {
        togleClass()
    }, 500)
}

// Logica de menu

let btnFiltro = document.getElementById("btnFiltro");
let menu = document.querySelector(".menu");


btnFiltro.addEventListener("click", function(e) {
    menu.classList.toggle("menu")
    menu.classList.toggle("mobile-menu")
})


window.addEventListener("resize", function(){
    if (window.innerWidth > 768) {
        menu.classList.remove("mobile-menu")
        menu.classList.add("menu")
        
    }
})


let btnCloseMenu = document.querySelector(".cross");
btnCloseMenu.addEventListener("click", function(e) {
    menu.classList.toggle("menu")
    menu.classList.toggle("mobile-menu")
})


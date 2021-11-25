


var modulo2=require("./services.js");
modulo2.chargeData('http://localhost:5000/products?_limit=9');

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


// CARREGAR MAIS, AND OCULT BOTTON
let btnCarregarMais = document.querySelector(".boton-cargar-mas");

btnCarregarMais.addEventListener("click", function(e){
    modulo2.chargeData('http://localhost:5000/products');
    btnCarregarMais.classList.add("ocult");
})


// FILTER BY COLORS FUNCTIONS
var anterior = ''

function filterColor(color) {
    modulo2.chargeData('http://localhost:5000/products?color='+color);
    btnCarregarMais.classList.add("ocult");

    // deseleccionar color anterior
    if(anterior != ''){
        // console.log("anterior => ", anterior)
        let prev = document.querySelector(anterior)
        let hijoPrev = prev.firstChild;
        hijoPrev.nextElementSibling.classList.remove("box-in");
        hijoPrev.nextElementSibling.classList.add("box-in-disabled");
    } 
    
    anterior = `#${color}`;

    // marcar seeleccionado
    let padre = document.querySelector(`#${color}`)
    let hijo = padre.firstChild;
    hijo.nextElementSibling.classList.add("box-in");
    hijo.nextElementSibling.classList.remove("box-in-disabled");   

    if (window.innerWidth < 768) {
        menu.classList.toggle("menu")
        menu.classList.toggle("mobile-menu")
        
    }
}


document.querySelector("#Amarelo").addEventListener("click",(e)=>filterColor('Amarelo'));
document.querySelector("#Azul").addEventListener("click",(e)=>filterColor('Azul'));
document.querySelector("#Branco").addEventListener("click",(e)=>filterColor('Branco'));
document.querySelector("#Cinza").addEventListener("click",(e)=>filterColor('Cinza'));
document.querySelector("#Laranja").addEventListener("click",(e)=>filterColor('Laranja'));
document.querySelector("#Verde").addEventListener("click",(e)=>filterColor('Verde'));
document.querySelector("#Vermelho").addEventListener("click",(e)=>filterColor('Vermelho'));
document.querySelector("#Preto").addEventListener("click",(e)=>filterColor('Preto'));
document.querySelector("#Rosa").addEventListener("click",(e)=>filterColor('Rosa'));
document.querySelector("#Vinho").addEventListener("click",(e)=>filterColor('Vinho'));




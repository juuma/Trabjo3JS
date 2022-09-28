const pizzas = [
    { id: 1,
    nombre: "Muzzarella",
    ingredientes: ["muzzarella", "salsa", "aceitunas"],
    precio: 800, },
    { id: 2,
    nombre: "Hawaiana",
    ingredientes: ["muzzarella", "salsa", "anana", "jamon", "extra queso"],
    precio: 1400, },
    { id: 3,
    nombre: "Deluxe",
    ingredientes: ["muzzarella", "salsa", "peperoni", "salchichas", "pimientos", "cebollas", "champignones"],
    precio: 1500, },
    { id: 4,
    nombre: "Americana",
    ingredientes: ["muzzarella", "salsa", "jamon", "aceitunas"],
    precio: 980, },
    { id: 5,
    nombre: "Hot chicken",
    ingredientes: ["muzzarella", "salsa", "pollo", "pimientos", "champignones"],
    precio: 1500, },
    { id: 6,
    nombre: "Super queso",
    ingredientes: ["muzzarella", "4 quesos", "aceitunas", "cebolla"],
    precio: 1200, },
    { id: 7,
    nombre: "Roquefort",
    ingredientes: ["muzzarella", "salsa", "roquefort", "jamon"],
    precio: 1100, },
    ];

//Traigo lementos del HTML
const input = document.getElementById("input");
const darOk = document.getElementById("darOk");
const nombrePizza = document.getElementById("nombrePizza");
const precioPizza = document.getElementById("precioPizza");

//Evento
darOk.addEventListener("click", lanzaPizza);

function lanzaPizza() {
    //Para crear HTML
    nombrePizza.innerHTML = "";
    precioPizza.innerHTML = "";
    //Valor al input
    const respuestaAlOk = input.value;
    //recorrer cada objeto de Array
    pizzas.forEach((pizza) => {
        if(pizza.id == respuestaAlOk) {
            nombrePizza.innerHTML = `La pizza seleccionada es <br> ${pizza.nombre}`;
            precioPizza.innerHTML = `Su precio es $${pizza.precio}`;
        } 
    })
    //Si el numero ingresado no esta entre 1 y 7
    if(respuestaAlOk > 7) {
        precioPizza.innerHTML = "No es un número correspondiente a una pizza de nuestra lista"
    }
    if(respuestaAlOk < 1) {
        precioPizza.innerHTML = "No es un número correspondiente a una pizza de nuestra lista"
    }
}
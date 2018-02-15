"use strict";
//tiempo de la fecha del proyecto 2
var fechaFin = new Date("March 5, 2018 09:30:00").getTime();

// modifico la cuenta cada segundo
/*Tomas Venegas: la variable x no se usa nunca. */
setInterval(function() {
 
    // obtengo la fecha actual
    var fechaHoy = new Date().getTime();

    // tiempo restante
    var restante = fechaFin - fechaHoy;

    /*Tomas Venegas: el if debería estar antes de los cálculos y del cambio del innerHTML aunque entiendo que así funciona */
    // si la cuenta termina escribo
    if (restante < 0) {
        document.getElementById("cuenta").innerHTML = "In process to push";
        return;
        /*Tomas Venegas: agregar un return para evitar los cálculos*/
    }


    // calculo el tiempo por dias, horas, minutos y segundos
    var dia = Math.floor(restante / (1000 * 60 * 60 * 24));
    var hora = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((restante % (1000 * 60)) / 1000);

    // actualizo el elemento id="cuenta" en el index
    document.getElementById("cuenta").innerHTML = dia + "d " + hora + "h "
        + minutos + "m " + segundos + "s ";
  
},1000);

/*Tomas Venegas: De nuevo me parece que el código está bien estructurado y bien documentado pero que no es muy interesante: el único
uso que hace de javaScript es para implementar algo que dice que la página no está terminada.
Además esta funcionalidad se encuentra en muchas páginas de internet.
Podría agregar contenido dinámicamente con JQuery o agregar alguna funcionalidad que haga la página interesante y/o útil.*/

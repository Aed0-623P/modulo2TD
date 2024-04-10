


//ID del estudiante


var Nombre = document.getElementById("Nombre")
var Carrera = document.getElementById("Carrera")

var nombreInput = prompt("Escribe tu nombre ")
var carreraInput = prompt("Escribe tu carrera ")

Nombre.innerHTML = nombreInput
Carrera.innerHTML = carreraInput

// TOMAR LOS ID EN HTML

var HTML1 = document.getElementById("HTML1");
var HTML2 = document.getElementById("HTML2");
var HTML3 = document.getElementById("HTML3");
var HTMLPromedio = document.getElementById("HTMLPromedio")

var nota1HTML = +(prompt("Ingrese la nota 1 de html "))
var nota2HTML = +(prompt("Ingrese la nota 2 de html "))
var nota3HTML = +(prompt("Ingrese la nota 3 de html "))

HTML1.innerHTML = nota1HTML
HTML2.innerHTML = nota2HTML
HTML3.innerHTML = nota3HTML
HTMLPromedio.innerHTML = ((nota1HTML + nota2HTML + nota3HTML) /3).toFixed(2)

// TOMAR LOS ID EN CSS

var CSS1 = document.getElementById("CSS1")
var CSS2 = document.getElementById("CSS2")
var CSS3 = document.getElementById("CSS3")
var CSSPromedio = document.getElementById("CSSPromedio")

var nota1CSS = +(prompt("Ingrese la nota 1 de CSS "))
var nota2CSS = +(prompt("Ingrese la nota 2 de CSS "))
var nota3CSS = +(prompt("Ingrese la nota 3 de CSS "))

CSS1.innerHTML = nota1CSS
CSS2.innerHTML = nota2CSS
CSS3.innerHTML = nota3CSS
CSSPromedio.innerHTML = ((nota1CSS + nota2CSS + nota3CSS)/3).toFixed(2)

// TOMAR LOS ID EN JS

var JAVASCRIPT1 = document.getElementById("JAVASCRIPT1")
var JAVASCRIPT2 = document.getElementById("JAVASCRIPT2")
var JAVASCRIPT3 = document.getElementById("JAVASCRIPT3")
var JAVASCRIPTPromedio = document.getElementById("JAVASCRIPTPromedio")

var nota1JS = +(prompt("Ingrese la nota 1 de JavaScript "))
var nota2JS = +(prompt("Ingrese la nota 2 de JavaScript "))
var nota3JS = +(prompt("Ingrese la nota 3 de JavaScript "))

JAVASCRIPT1.innerHTML = nota1JS
JAVASCRIPT2.innerHTML = nota2JS
JAVASCRIPT3.innerHTML = nota3JS
JAVASCRIPTPromedio.innerHTML = ((nota1CSS + nota2CSS + nota3CSS)/3).toFixed(2)
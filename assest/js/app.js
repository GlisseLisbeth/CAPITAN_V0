//Botones para enviar respuestas según los quizes
var buttonQuiz1 = document.getElementById('enviarSprint1');
var buttonQuiz2 = document.getElementById('enviarSprint2');
var respuesta21 = document.getElementById('22');
var respuesta22 = document.getElementById('24');
var respuesta23 = document.getElementById('28');
var respuesta11 = document.getElementById('11');
var respuesta12 = document.getElementById('15');
var respuesta13 = document.getElementById('19');
var respuestasQUIZES1 = document.getElementById('respuestasprint1');
var respuestasQUIZES2 = document.getElementById('respuestasprint2');
var sprint2 = document.getElementById('sprint2');
var sprint1 = document.getElementById('sprint2');
var temaSprint1 = document.getElementById("temaSprint1");
var temaSprint2 = document.getElementById("temaSprint2");
var opciones = document.getElementsByName("grouQuiz21");
var opciones1 = document.getElementsByName("grouQuiz22");
var opciones2 = document.getElementsByName("grouQuiz23");
var opciones3 = document.getElementsByName("groupQuiz11");
var opciones4 = document.getElementsByName("groupQuiz12");
var opciones5 = document.getElementsByName("groupQuiz13");

var tema = document.getElementById('tema');
var respuestaQuiz1 = 0;
var respuestaQuiz2 = 0;

//Almacenar nombre:
var myParam = location.search.split('nombre=')[1]
var nombre = document.getElementById('usuario');
 if (myParam == undefined) { // Si esta vacio solicitar nombre
		 var inicio = prompt('Cual es tu nombre');
		 inicio = inicio.toString().toLowerCase();
		 inicio = inicio.charAt(0).toUpperCase()+inicio.slice(1);
		 nombre.innerHTML = inicio;
 } else { //Sino mostar nombre almacenado
		 nombre.innerHTML = myParam;
 }
 document.getElementById("coders").addEventListener('click',function() {
		 this.href += "?nombre="+nombre.innerHTML;
 });

//Dropdown
 function functionMenu() {
 	document.getElementById("myDropdown").classList.toggle("show");
 }

 window.onclick = function(event) {
 	if (!event.target.matches('.dropbtn')) {

 		var dropdowns = document.getElementsByClassName("dropdown-content");
 		for (var i = 0; i < dropdowns.length; i++) {
 			var openDropdown = dropdowns[i];
 			if (openDropdown.classList.contains('show')) {
 				openDropdown.classList.remove('show');
 			}
 		}
 	}
 }

//Funcion para seleccionar sprint:
 var mostrar= function(elementId) {
   document.getElementById("sprint1").style.display="none";
   document.getElementById("sprint2").style.display="none";
   document.getElementById("sprint3").style.display="none";
   document.getElementById(elementId).style.display="block";
 }

// Funciones para validar respuestas:
buttonQuiz1.addEventListener("click", function(event){
	event.preventDefault();
  if(validacion1()){
    temaSprint1.style.display = "none";

  	if(respuesta11.checked){
  		respuestaQuiz1++;
  	}
  	if(respuesta12.checked){
  		respuestaQuiz1++;
  	}
  	if(respuesta13.checked){
  		respuestaQuiz1++;
  	}
  	respuestasQUIZES1.innerHTML = "<p>	Tienes "+respuestaQuiz1+" correctas</p>"
  }
});

buttonQuiz2.addEventListener("click", function(event){
	event.preventDefault();
  if(validacion2()){
  	temaSprint2.style.display = "none";
    if(respuesta21.checked){
  		respuestaQuiz2++;
  	}
  	if(respuesta22.checked){
  		respuestaQuiz2++;
  	}
  	if(respuesta23.checked){
  		respuestaQuiz2++;
  	}

  	respuestasQUIZES2.innerHTML = "<p>	Tienes "+respuestaQuiz2+" correctas</p>"
  }
});


function validacion2(){
	var seleccionado1 = false;
  var seleccionado2 = false;
  var seleccionado3 = false;

  for(var i=0; i<opciones.length; i++) {
		if(opciones[i].checked) {
			seleccionado1 = true;
			break; }
		}
		if(!seleccionado1) {

			return alert("Ingrese una opcion");
		}
	for(var j=0; j<opciones1.length; j++) {
		if(opciones1[j].checked) {
				seleccionado2 = true;
				break; }
		}
		if(!seleccionado2) {

				return alert("Ingrese una opcion");
		}
	for(var k=0; k<opciones2.length; k++) {
			if(opciones2[k].checked) {
					seleccionado3 = true;
					break; }
			}
      if(!seleccionado3) {

  				return alert("Ingrese una opcion");
  		}
      return seleccionado1 && seleccionado2 && seleccionado3;
}

function validacion1(){
  var seleccionado1 = false;
  var seleccionado2 = false;
  var seleccionado3 = false;

  for(var i=0; i<opciones3.length; i++) {
				if(opciones3[i].checked) {
						seleccionado1 = true;
						break; }
				}
				if(!seleccionado1) {

						return alert("Ingrese una opcion");
				}
	for(var j=0; j<opciones4.length; j++) {
			 if(opciones4[j].checked) {
									seleccionado2 = true;
									break; }
							}
							if(!seleccionado2) {

									return alert("Ingrese una opcion");
							}
	for(var k=0; k<opciones5.length; k++) {
			if(opciones5[k].checked) {
				seleccionado3 = true;
				break; }
			}
			if(!seleccionado3) {

				return alert("Ingrese una opcion");
		 }
     return seleccionado1 && seleccionado2 && seleccionado3;
}

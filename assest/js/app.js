//Botones para enviar respuestas según los quizes
var buttonQuiz1 = document.getElementById('enviarSprint1');
var buttonQuiz2 = document.getElementById('enviarSprint2');

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
 })


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
 buttonQuiz2.addEventListener("click", function(){
 	var respuestaQuiz2 = 0
 	var respuesta21 = document.getElementById('22');
 	var respuesta22 = document.getElementById('24');
 	var respuesta23 = document.getElementById('28');
 	var respuestasQUIZES2 = document.getElementById('respuestasprint2')
 	if(repuesta21.checked){
 		respuestaQuiz2++;
 	}
 	if(repuesta22.checked){
 		respuestaQuiz2++;
 	}
 	if(repuesta23.checked){
 		respuestaQuiz2++;
 	}

 	respuestasQUIZES2.innerHTML = "<hr> <p>	Tienes "+respuestaQuiz2+"correctas</p>" //Muestra resultado:

 });

 buttonQuiz1.addEventListener("click", function(){
 	var respuestaQuiz1 = 0
 	var respuesta11 = document.getElementById('11');
 	var respuesta12 = document.getElementById('15');
 	var respuesta13 = document.getElementById('19');
 	var respuestasQUIZES1 = document.getElementById('respuestasprint1')
 	if(repuesta11.checked){
 		respuestaQuiz1++;
 	}
 	if(repuesta12.checked){
 		respuestaQuiz1++;
 	}
 	if(repuesta13.checked){
 		respuestaQuiz1++;
 	}

 	respuestasQUIZES1.innerHTML = "<hr> <p>	Tienes "+respuestaQuiz1+"correctas</p>" //Muestra resultado:

 });

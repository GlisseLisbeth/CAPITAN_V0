var nombreSession = document.getElementsByTagName('div')[0];
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
var opciones3 = document.getElementById("groupQuiz11");
var opciones4 = document.getElementById("groupQuiz12");
var opciones5 = document.getElementById("groupQuiz13");

var tema = document.getElementById('tema');
var respuestaQuiz1 = 0;
var respuestaQuiz2 = 0;

function inicializa(event){
	event.preventDefault();
	var nombre = prompt("Bienvenidas, ingrese su nombre");
	//nombreSession.innerText = "Hola Glisse  ☰";
	nombreSession.innerHTML = "Hola " + nombre + "      <button onclick='functionMenu()' class='dropbtn'>☰</button>      <div id='myDropdown' class='dropdown-content'>        <a href='coders.html'>Coders</a>        <a href='hastaLuego.html'>Salir</a>      </div>    "
}
function functionMenu() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

var mostrarOcultar = function(divtexte) {
	document.getElementById("sprint1").style.display = "none";
	document.getElementById("sprint2").style.display = "none";
	document.getElementById("sprint3").style.display = "none";
	document.getElementById(divtexte).style.display = "block";

}

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
  	respuestasQUIZES1.innerHTML = "<hr> <p>	Tienes "+respuestaQuiz1+"correctas</p>"
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
		var seleccionado = false;
	for(var i=0; i<opciones.length; i++) {
		if(opciones[i].checked) {
			seleccionado = true;
			break; }
		}
		if(!seleccionado) {

			return alert("Ingrese una opcion");
		}
	for(var i=0; i<opciones1.length; i++) {
		if(opciones1[i].checked) {
				seleccionado = true;
				break; }
		}
		if(!seleccionado) {

				return alert("Ingrese una opcion");
		}
	for(var i=0; i<opciones2.length; i++) {
			if(opciones2[i].checked) {
					seleccionado = true;
					break; }
			}
			if(!seleccionado) {

					return alert("Ingrese una opcion");
			}

      return seleccionado;
}

function validacion1(){
  var seleccionado = false;
  for(var i=0; i<opciones3.length; i++) {
				if(opciones3[i].checked) {
						seleccionado = true;
						break; }
				}
				if(!seleccionado) {

						return alert("Ingrese una opcion");
				}
	for(var i=0; i<opciones4.length; i++) {
			 if(opciones4[i].checked) {
									seleccionado = true;
									break; }
							}
							if(!seleccionado) {

									return alert("Ingrese una opcion");
							}
	for(var i=0; i<opciones5.length; i++) {
			if(opciones5[i].checked) {
				seleccionado = true;
				break; }
													}
			if(!seleccionado) {

				return alert("Ingrese una opcion");
													}
     return seleccionado;
}

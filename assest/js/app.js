var nombreSession = document.getElementsByTagName('div')[0];
var buttonQuiz1 = document.getElementById('enviarSprint1');
var buttonQuiz2 = document.getElementById('enviarSprint2');
function inicializa(event){
	event.preventDefault();
	var nombre = prompt("Bienvenidas, ingrese su nombre");
	//nombreSession.innerText = "Hola Glisse  ☰";
	nombreSession.innerHTML = "Hola " + nombre + "      <button onclick='functionMenu()' class='dropbtn'>☰</button>      <div id='myDropdown' class='dropdown-content'>        <a href='#'>Perfil</a>        <a href='#l'>Salir</a>      </div>    "
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
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "block" ) {
		divtext.style.display = "none";
	} else{
		divtext.style.display = "block";
	}
}

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

	respuestasQUIZES2.innerHTML = "<hr> <p>	Tienes "+respuestaQuiz2+"correctas</p>"

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

	respuestasQUIZES1.innerHTML = "<hr> <p>	Tienes "+respuestaQuiz1+"correctas</p>"

});

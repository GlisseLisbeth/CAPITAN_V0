var nombreSession = document.getElementsByTagName('div')[0];
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

function inicializa(event){
	event.preventDefault();
	var nombre = prompt("Bienvenidas, ingrese su nombre");
	//nombreSession.innerText = "Hola Glisse  ☰";
	nombreSession.innerHTML = "Hola " + nombre + "      <button onclick='functionMenu()' class='dropbtn'>☰</button>      <div id='myDropdown' class='dropdown-content'>        <a href='#'>Perfil</a>        <a href='#l'>Salir</a>      </div>    "
}

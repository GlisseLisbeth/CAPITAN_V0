var reporte = document.getElementById("reporte");
coders = [
  {
    nombre: "Meche",
    apellido: "Zubieta",
    promocion: "1era Promocion",
    estado: "Trabajando"
  },
  {
    nombre: "Arabela",
    apellido: "Rojas",
    promocion: "2da Promocion",
    estado: "Trabajando"
  },
  {
    nombre: "Maria",
    apellido: "Rosan",
    promocion: "2da Promocion",
    estado: "Trabajando"
  },
  {
    nombre: "Guadalupe",
    apellido: "Racio",
    promocion: "3ra Promocion",
    estado: "Trabajando"
  },
  {
    nombre: "Sara",
    apellido: "Casa",
    promocion: "3ra Promocion",
    estado: "Trabajando"
  },
  {
    nombre: "Daniela",
    apellido: "Duran",
    promocion: "4ta Promocion",
    estado: "Trabajando"
  },
  {
    nombre: "Michelle",
    apellido: "Seguil",
    promocion: "5ta Promocion",
    estado: "Trabajando"
  },
  {
    nombre: "Diana",
    apellido: "Navarro",
    promocion: "5ta Promocion",
    estado: "Trabajando"
  }
];

//Funcion para mostrar lista de coders:
function mostrarCoders(){
  for (var i in coders) { //Itera en cada objeto del array:
    document.getElementsByClassName("div-coder")[i].innerHTML +=
    //Mostrar cada objeto con el texto que definimos abajo:
    "<p> Nombre: "+coders[i].nombre+"</p>"+
    "<p> Apellido: "+coders[i].apellido+"</p>"+
    "<p> Promoción: "+coders[i].promocion+"</p>"+
    "<p> Estado: "+coders[i].estado+ "</p>";}
};mostrarCoders();

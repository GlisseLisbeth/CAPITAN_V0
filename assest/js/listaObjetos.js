var reporte = document.getElementById("reporte");
laboratoria = [
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


function imprimir(laboratoria){
  var texto = "<table><tr>";
      laboratoria.forEach(function(e){
        texto +=  "<td><canvas id='rectangulo' width='300' height='150' style='background-color:yellow'>"
        +"<label for='nombre'>Nombre:</label>"+e.nombre+"<br>"
        +"<label for='apellido'>Apellido:</label>"+e.apellido+"<br>"
        +"<label for='promocion'>Promocion:</label>"+e.promocion+"<br>"
        +"<label for='cumpleanio'>Estado:</label>"+e.estado+"<br>"
        +"</canvas> </td>";
      });
      texto = "</tr></table>"
  return texto;
}

function imprimirTodos(){
  reporte.innerHTML=imprimir(laboratoria);
}

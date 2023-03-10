var eleccionDelJugador = "";
var eleccionDelPc = "";
let celdasJugadasDelJugador = [];
let celdasJugadasDelPc = [];
let cantidadDeJugadas = 0;

const opcionesHorizontalesParaGanar = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
const opcionesVerticalesParaGanar = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
const opcionesDiagonalesParaGanar = [
  [0, 4, 8],
  [2, 4, 6],
];

/**Esta Funcion me recibe la elecion del jugador con los dos caracteres permitos que son "x" o "o" si el jugador
 *ingresa algun otro caracter mostrara "Debes elegir entre X o O" */
function eleccionJudador(event, eleccion) {
  let resultadoEleccion = "";
  if (eleccion === "x") {
    resultadoEleccion = "X";
  } else if (eleccion === "o") {
    resultadoEleccion = "O";
  } else {
    resultadoEleccion = "Debes elegir entre X o O";
  }
  eleccionDelJugador = resultadoEleccion;
  event.target.disabled = eleccionDelJugador ? true : false;
  eleccionPc(eleccionDelJugador);
}
/**Esta Funcion me recibe el valor obtenido de la Funcion eleccionJugador y me retorna el la segunda opcion
 * es decir si el jugador elije "X" al pc le corresponde "O" pero si el jugador elige un caracter no permitido
 * esta funcion me retorna "El jugador no ha elejido"
 */
function eleccionPc(eleccion) {
  let inputABloquiar;
  let resultadoEleccionPc = "";
  if (eleccion.toLowerCase() === "x") {
    resultadoEleccionPc = "O";
    inputABloquiar = document.querySelector("#input_o");
  } else if (eleccion.toLowerCase() === "o") {
    resultadoEleccionPc = "X";
    inputABloquiar = document.querySelector("#input_x");
  } else {
    resultadoEleccionPc = "El jugador no ha elejido";
  }
  inputABloquiar.disabled = true;
  eleccionDelPc = resultadoEleccionPc;
  console.log(eleccionDelPc);
}

function genera_tabla() {
  let main = document.getElementsByTagName("main")[0];
  let tabla = document.createElement("table");
  let tblMain = document.createElement("tmain");
  let contador = 0;
  for (let i = 0; i < 3; i++) {
    let hilera = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      let celda = document.createElement("td");
      celda.classList.add("columnaJuego");
      celda.id = contador;
      contador++;
      hilera.appendChild(celda);
    }
    tblMain.appendChild(hilera);
  }
  tabla.appendChild(tblMain);
  main.appendChild(tabla);
  anadirInteractividad();
}
function anadirInteractividad() {
  let espaciosDeJuego = document.querySelectorAll(".columnaJuego");
  espaciosDeJuego.forEach((espacio) => {
    espacio.addEventListener("click", seleccionarCasilla);
  });
  event.target.disabled = espaciosDeJuego;
}

function seleccionarCasilla(event) {
    cantidadDeJugadas ++
  event.target.innerText = eleccionDelJugador;
  celdasJugadasDelJugador.push(event.target.id);
  seleccionarCasillaPc();
}
function seleccionarCasillaPc() {
    cantidadDeJugadas ++
  let jugadaPc;
  do {
    jugadaPc = aleatorio(0, 8);
    console.log(jugadaPc);
  } while (
    (existeJugadaDentroDelJugador(jugadaPc) ||
    existeJugadaDentroDelPc(jugadaPc))&&cantidadDeJugadas<=8
  );
  celdasJugadasDelPc.push(jugadaPc);
  let casilla = document.getElementById(jugadaPc);
  casilla.innerText = eleccionDelPc;
  if (hayGanador()) {
    return;
 }
}
function existeJugadaDentroDelJugador(jugada) {
  let eleccion = celdasJugadasDelJugador.find((o) => o == jugada);
  return eleccion ? true : false;
}
function existeJugadaDentroDelPc(jugada) {
  let eleccionAlmacenadaPc = celdasJugadasDelPc.find((o) => o == jugada);
  return eleccionAlmacenadaPc ? true : false;
}

function hayGanador() {
  if (
    identificarGanador(opcionesHorizontalesParaGanar, celdasJugadasDelJugador)||
    identificarGanador(opcionesVerticalesParaGanar,celdasJugadasDelJugador)||
    identificarGanador(opcionesDiagonalesParaGanar,celdasJugadasDelJugador)
  ) {
     alert("Gano Jugador");
  }else if(identificarGanador(opcionesHorizontalesParaGanar,celdasJugadasDelPc)||
  identificarGanador(opcionesVerticalesParaGanar,celdasJugadasDelPc)||
  identificarGanador(opcionesDiagonalesParaGanar,celdasJugadasDelPc)) {
    alert("Gano Pc");
  }else if(cantidadDeJugadas == 9){
    alert("Empate")
  }
}
function identificarGanador(matriz, array) {
  let hayGanador = false;
  let contadorGanador = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      let valor = matriz[i][j];
      let valorArray = array.find((o) => o == valor);
      if (valorArray) {
        contadorGanador++;
      }
    }
    if (contadorGanador == 3) {
      hayGanador = true;
      return hayGanador;
    }

    contadorGanador = 0;
  }
  return hayGanador;
}


function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


var eleccionDelJugador = ''
var eleccionDelPc = ''
let celdasJugasdas = []
let celdasJugadasDelJugador = []
let celdasJugadasDelPc = []

const opcionesHorizontalesParaGanar = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
]
const opcionesVerticalesParaGanar = [
    [0,3,6],
    [1,4,7],
    [2,5,8],
]
const opcionesDiagonalesParaGanar = [
    [0,4,8],
    [2,4,6],
]
console.log(celdasJugasdas);

/**Esta Funcion me recibe la elecion del jugador con los dos caracteres permitos que son "x" o "o" si el jugador
 *ingresa algun otro caracter mostrara "Debes elegir entre X o O" */
function eleccionJudador (event,eleccion){
    let resultadoEleccion = ''
    if(eleccion.toLowerCase() === "x" ){
        resultadoEleccion = "X"
    }else if(eleccion === "o"){
        resultadoEleccion = "O"
    }else{
        resultadoEleccion = "Debes elegir entre X o O"
    }
    eleccionDelJugador = resultadoEleccion
    console.log(event);
    event.target.disabled = eleccionDelJugador
    eleccionPc(eleccionDelJugador)
}
/**Esta Funcion me recibe el valor obtenido de la Funcion eleccionJugador y me retorna el la segunda opcion
 * es decir si el jugador elije "X" al pc le corresponde "O" pero si el jugador elige un caracter no permitido
 * esta funcion me retorna "El jugador no ha elejido"
 */
function eleccionPc (eleccion){
    let resultadoEleccionPc = ''
    if(eleccion.toLowerCase() === "x"){
        resultadoEleccionPc = "O"
    }else if(eleccion.toLowerCase() === "o"){
        resultadoEleccionPc = "X"
    }else{
        resultadoEleccionPc = "El jugador no ha elejido"
    }
    eleccionDelPc = resultadoEleccionPc
    
    console.log(eleccionDelPc);
}

function genera_tabla() {
    let main = document.getElementsByTagName("main")[0];
    let tabla = document.createElement("table");
    let tblMain = document.createElement("tmain");
    let contador = 0
    for (let i = 0; i < 3; i++){
      let hilera = document.createElement("tr");
      for (let j = 0; j < 3; j++) {
        let celda = document.createElement("td");
        celda.classList.add("columnaJuego")
        celda.id = contador
        contador ++
        hilera.appendChild(celda);
      }
      tblMain.appendChild(hilera);
    }
    tabla.appendChild(tblMain);
    main.appendChild(tabla);
    anadirInteractividad()
    //imprimirCoordenadas(opcionesHorizontalesParaGanar)
  }
function anadirInteractividad() {
    let espaciosDeJuego = document.querySelectorAll(".columnaJuego")
    console.log(espaciosDeJuego);
    espaciosDeJuego.forEach(espacio => {
        espacio.addEventListener('click',siElijioEspacio)
    });
}
function siElijioEspacio(event) {
    event.target.innerText = eleccionDelJugador
    console.log(event.target);
    celdasJugadasDelJugador.push(event.target.id)
    console.log(eleccionDelJugador);
}

function imprimirCoordenadas(matrix){
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++){
            console.log(matrix[i][j]);
        }
    }
}
console.log(imprimirCoordenadas(opcionesHorizontalesParaGanar));
console.log(celdasJugadasDelJugador);

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//opcionesHorizontalesParaGanar.find((o) => o === matrix[i][j])//verificar el array coincida jugadas del jugador
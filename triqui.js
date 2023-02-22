
var eleccionDelJugador = ''

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
    return resultadoEleccionPc
}

function genera_tabla() {
    let main = document.getElementsByTagName("main")[0];
    let tabla = document.createElement("table");
    let tblMain = document.createElement("tmain");

    for (let i = 0; i < 3; i++){
      let hilera = document.createElement("tr");
      for (let j = 0; j < 3; j++) {
        let celda = document.createElement("td");
        celda.classList.add("columnaJuego")
        hilera.appendChild(celda);
      }
      tblMain.appendChild(hilera);
    }
    tabla.appendChild(tblMain);
    main.appendChild(tabla);
    anadirInteractividad()
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
    console.log(eleccionDelJugador);
}
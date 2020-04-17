
function election() {
    var valor = random();
    console.log(valor);
    var respuesta = document.getElementById('player').value;
    console.log(respuesta);

    if (respuesta === valor) {
        document.getElementById('respuesta').innerHTML = `No hay un ganador, ya que ${respuesta} es igual a ${valor}`;
    } else if (respuesta !== valor){
        if ((respuesta == 'Papel') && (valor == 'Tijera')) {
            document.getElementById('respuesta').innerHTML = `Perdiste, la maquina eligio ${valor}`;
        }
        if ((respuesta == 'Papel') && (valor == 'Piedra')) {
            document.getElementById('respuesta').innerHTML = `Ganaste, la maquina eligio ${valor}`;
        }
        if ((respuesta == 'Piedra') && (valor == 'Tijera')) {
            document.getElementById('respuesta').innerHTML = `Ganaste, la maquina eligio ${valor}`;
        }
        if ((respuesta == 'Piedra') && (valor == 'Papel')) {
            document.getElementById('respuesta').innerHTML = `Perdiste, la maquina eligio ${valor}`;
        }
        if ((respuesta == 'Tijera') && (valor == 'Papel')) {
            document.getElementById('respuesta').innerHTML = `Ganaste, la maquina eligio ${valor}`;
        }
        if ((respuesta == 'Tijera') && (valor == 'Piedra')) {
            document.getElementById('respuesta').innerHTML = `Perdiste, la maquina eligio ${valor}`;
        }
    }
}
function random() {
    var bandera
    var ran = parseInt(Math.random()*10);
    if (ran < 4) {
        bandera = "Piedra"; 
    } else if (ran > 7){
        bandera = "Papel";
    } else {
        bandera = "Tijera";
    }
    return bandera;
}
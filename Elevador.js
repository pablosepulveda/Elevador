var subirBajar = prompt ("subes o bajas");
var pisoSeleccionado = prompt ("a que piso vas");
var pisoActual = 1;
const primerPiso = 2;
const ultimoPiso = 20;


if (subirBajar == "subes"){
	alert ("subes")
	for(pisoActual; pisoActual <= ultimoPiso; pisoActual++){
	console.log ("estas en el piso" + pisoActual);
	 if (pisoActual === pisoSeleccionado){
	 	alert ("llegastes")
	 }
	}
}

if (subirBajar == "bajas"){
	alert ("bajas")
}



for(pisoActual; pisoActual <= ultimoPiso; pisoActual++){
	console.log ("estas en el piso" + pisoActual);
 if (pisoActual === pisoSeleccionado){
 	alert ("llegastes")
 }
}
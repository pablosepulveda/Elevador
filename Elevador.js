var suboBajo = prompt ("subo o bajo");
var pisoSeleccionado = prompt ("a que piso vas?");
var pisoActual = 1;
const primerPiso = 2;
const ultimoPiso = 20;


if (suboBajo == "subo"){
	alert ("subo")
	for(pisoActual; pisoActual <= ultimoPiso; pisoActual++){
	console.log ("estas en el piso" + pisoActual);
	 if (pisoActual == pisoSeleccionado){
	 	alert ("llegastes")
	 }
	}
}


if (suboBajo === "bajo"){
	alert ("bajo")
pisoActual = 20;

for(ultimoPiso; pisoActual >= 1; pisoActual--){
	console.log ("estas en el piso" + pisoActual);
 if (pisoActual == pisoSeleccionado)
 	alert ("llegastes");
 }
}


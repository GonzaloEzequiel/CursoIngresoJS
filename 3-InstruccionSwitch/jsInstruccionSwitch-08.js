function mostrar()
{
	var destinoIngresado;
	destinoIngresado=txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
		// mofifiqué linea 45 del InstruccionSwitch-08.html pues mostraba Ushuaia pero el option value="Cordoba"
		case "Ushuaia":
			alert("FRIO");
			break;
		default:
		//case "Cataratas":
		//case "Mar del plata":
			alert ("CALOR");
			break;		
	}
}
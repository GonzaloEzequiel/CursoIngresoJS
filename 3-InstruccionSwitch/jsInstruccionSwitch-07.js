function mostrar()
{
	var destinoIngresado;
	destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert ("Este");
			break;
		// mofifiqué linea 46 del InstruccionSwitch-07.html pues mostraba Ushuaia pero el option value="Cordoba"	
		case "Ushuaia":
			alert("Sur");
			break;
	}
}
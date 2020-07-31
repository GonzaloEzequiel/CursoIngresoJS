function mostrar()
{	
	//   txtIdEdad    estadoCivil
	var edadIngresada;
	var estadoIngresado;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);
	estadoIngresado=estadoCivil.value;

	
	if(edadIngresada<18 && estadoIngresado!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
	else
	{
		alert("Edad: "+edadIngresada+" Estado civil: "+estadoIngresado);
	}
		
}
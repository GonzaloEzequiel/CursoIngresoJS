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

	}
	else
	{
		alert("Edad: "+edadIngresada+" Estado civil: "+estadoIngresado);
		
		if(edadIngresada>17 && estadoIngresado=="Soltero")
		{
			alert("Es soltero y no es menor");
		}
	}
} //CORREGIR

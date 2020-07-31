function mostrar()
{
	//tomo la edad     txtIdEdad
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<13 || edadIngresada>17)
	{
		alert("Usted NO es Adolescente");
	}

	/* Variacion
	if(edadIngresada>17 || edadIngresada<13)
	{
		alert("Usted NO es Adolescente");
	}



	/*
	if(edadIngresada<13)
	{
		alert("Usted NO es Adolescente");
	}

	if(edadIngresada>17)
	{
		alert("Usted NO es Adolescente");
	}

					o bien

	if(edadIngresada>17)
	{
		alert("Usted NO es Adolescente");
	}

	if(edadIngresada<13)
	{
		alert("Usted NO es Adolescente");
	}
	*/
}
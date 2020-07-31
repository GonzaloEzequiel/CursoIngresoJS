function mostrar()
{
	//tomo la edad   txtIdEdad
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>12 && edadIngresada<18)
	{
		alert("Usted es Adolescente");
	}

	/* Variación &&
	if(edadIngresada<18 && edadIngresada>12)
	{
		alert("Usted es Adolescente");
	}

	*/


	/* Variaciones anidadas
	if(edadIngresada>12)
	{
		if(edadIngresada<18)
		{
			alert("Usted es Adolescente");
		}
	}
	
						O bien

	if(edadIngresada<18)
	{
		if(edadIngresada>12)
		{
			alert("Usted es Adolescente");
		}
	}
	*/
}
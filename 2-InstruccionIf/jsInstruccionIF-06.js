function mostrar()
{
	var edadIngresada;
	var mensaje;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);



	if(edadIngresada<13)
	{
		mensaje="niño";
		//alert("Se trata de un niño");
	}
	else
	{		
		if(edadIngresada<18)
		{
			mensaje="adolescente";
			//alert("Se trata de un adolescente");
		}
		else
		{
			mensaje="mayor de edad";
			//alert("Se trata de un mayor de edad");
		}
	}

	alert("Se trata de un "+mensaje);
		
	/* version mucho procesador

	if(edadIngresad<13)
	{
		alert("niño");
	}
	if(edadIngresada<18 && edadIngresada>12)
	{
		alert("adolescente");
	}
	if(edadIngresada>17)
	{
		alert("mayor");
	}
	*/
}
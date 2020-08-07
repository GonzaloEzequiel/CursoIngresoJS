/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	// declarar variables
	//var banderaDelPrimero;
	var numeroIngresado;
	var numeroParseado;
	var numeroMaximo;
	var numeroMinimo;
	var contador;
	var respuesta;

	//iniciar variables
	//banderaDelPrimero="es el primero";
	respuesta="si";
	contador=0;

	while(respuesta=="si")
	{
		contador++;
		numeroIngresado=prompt("Ingrese el número "+contador);
		numeroParseado=parseInt(numeroIngresado);

		if(isNaN(numeroParseado)) // APB
		{
			contador--;	
		}
		else
		{		
			if(contador==1)
			{
			numeroMaximo=numeroParseado;
			numeroMinimo=numeroParseado;
			}
			else
			{			
				if(numeroParseado>numeroMaximo)
				{
					numeroMaximo=numeroParseado;			
				}		
				if(numeroParseado<numeroMinimo)
				{
					numeroMinimo=numeroParseado;
				}
			}

		respuesta=prompt("Desea continuar?");

		}			
	}

	txtIdMaximo.value="Número máximo ingresado "+numeroMaximo;
	txtIdMinimo.value="Número mínimo ingresado "+numeroMinimo;
}
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	var numeroParseado;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";

	//porfesorxs este ejercicio lo pense distinto, si no es como ustedes lo quieren espero devolución

	while(respuesta=="si")
	{
		contador++;
		numeroIngresado=prompt("Ingrese numero "+contador);
		numeroParseado=parseInt(numeroIngresado);

		if(isNaN(numeroParseado)) // APB
		{
			contador--;
		}
		else
		{
			if(numeroParseado>-1) //tomo 0 como positivo
			{				
				sumaPositivos=sumaPositivos+numeroParseado;
			}
			else
			{
				multiplicacionNegativos=multiplicacionNegativos*numeroParseado;
			}	
							
		respuesta=prompt("¿Desea continuar?");

		}		
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var suma;
	var respuesta;
	var numeroIngresado;
	var numeroParseado;

	contador=0;
	suma=0;
	respuesta="si";
	numeroIngresado=0;
	
	while(respuesta=="si")
	{
		contador++;
		numeroIngresado=prompt("Ingrese numero "+contador);
		numeroParseado=parseInt(numeroIngresado);
		
		if(isNaN(numeroParseado)) 
		{
			contador--;
		}
		else
		{
			suma=suma+numeroParseado;
		}

		respuesta=prompt("¿Desea continuar?");
	}

	txtIdSuma.value=suma;
	txtIdPromedio.value=suma/contador;
}
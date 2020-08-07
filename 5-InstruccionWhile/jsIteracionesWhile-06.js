function mostrar()
{
	var contador;
	var suma;
	var numeroIngresado;

	contador=0;
	suma=0;

	while(contador <5)
	{
		contador++;
		numeroIngresado=prompt("Ingrese numero "+contador);
		numeroIngresado=parseInt(numeroIngresado);

		if(isNaN(numeroIngresado))
		{
			contador--;
		}
		else
		{
			suma=suma+numeroIngresado;
		}		
	}
		
	txtIdSuma.value=suma;
	txtIdPromedio.value=suma/contador;
}
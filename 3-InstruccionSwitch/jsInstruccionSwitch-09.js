function mostrar()
{
	// txtIdEstacion   txtIdDestino
	var estacionIngresada;
	estacionIngresada=txtIdEstacion.value;
	
	var destinoIngresado;
	destinoIngresado=txtIdDestino.value;

	var precioInicial;
	precioInicial=15000
	var precioDif;
	var precioFinal;

	// Por estacion
	switch(estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					precioDif=20;
					break;
				case "Mar del plata":
					precioDif=-20;
					break;
				default:
					precioDif=-10;
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado)
			{
				case "Bariloche":
					precioDif=-20;
					break;
				case "Mar del plata":
					precioDif=20;
					break;
				default:
					precioDif=10;
					break;
			}
			break;

		default:
			switch (destinoIngresado)
			{
				case "Cordoba":
					break;
				default:
					precioDif=10;
					break;
			}
			break;
	}
	

	/* por destino
	switch (destinoIngresado)
	{
		case "Bariloche":
			switch(estacionIngresada)
			{
				case "Verano":
					precioDif=-20;
					break;
				case "Invierno":
					precioDif=20;
					break;
				default:
					precioDif=10;
					break;
			}
			break;
		
		case "Cataratas":
			switch(estacionIngresada)
			{
				case "Invierno":
					precioDif=-10;
					break;
				default:
					precioDif=10;
					break;
			}

		case "Mar del plata":
			switch(estacionIngresada)
			{	
				case "Verano":
					precioDif=20;
					break;
				case "Invierno":
					precioDif=-20;
					break;
				default:
					precioDif=10;
					break;
			}
			break;

		case "Cordoba":
			switch(estacionIngresada)
			{	
				case "Verano":
					precioDif=10;
					break;
				case "Invierno":
					precioDif=-10;
					break;
				default:
					break;
			}
	}
	*/


	precioFinal=precioInicial+precioInicial*(precioDif/100);

	alert(destinoIngresado+" en "+estacionIngresada+" por un total de $"+precioFinal);
}
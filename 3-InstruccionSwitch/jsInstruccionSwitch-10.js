function mostrar()
{
	// txtIdEstacion   txtIdDestino
	var estacionIngresada;
	estacionIngresada=txtIdEstacion.value;
	
	var destinoIngresado;
	destinoIngresado=txtIdDestino.value;

	var posibleViaje;

/* Por Destino (alternativa) 

	switch(destinoIngresado)
	{
		case "Bariloche":
			switch(estacionIngresada)
			{
				case "Invierno":
				case "Otoño":
					posibleViaje="Se viaja.";
					break;
				default:
					posibleViaje="No se viaja.";
					break;
			}
			break;

		case "Cataratas":
			switch(estacionIngresada)
			{
				case "Invierno":
					posibleViaje="No se viaja.";
					break;
				default:
					posibleViaje="Se viaja.";
					break;
			}
			break;

		case "Mar del plata":
			switch(estacionIngresada)
			{
				case "Invierno":
					posibleViaje="No se viaja.";
					break;
				default:
					posibleViaje="Se viaja.";
					break;
			}
			break;

		case "Cordoba":
			switch(estacionIngresada)
			{
				case "Invierno":
				case "Verano":
					posibleViaje="No se viaja.";
					break;
				default:
					posibleViaje="Se viaja.";
					break;
			}
			break;
	}
	*/

	// Por Estación (mas corto!)

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					posibleViaje="Se viaja.";
					break;
				default:
					posibleViaje="No se viaja.";
					break;
			}
			break;

		case "Otoño":
			posibleViaje="Se viaja.";
			break;

		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					posibleViaje="No se viaja.";
					break;
				default:
					posibleViaje="Se viaja.";
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cordoba":
					posibleViaje="No se viaja.";
					break;
				default:
					posibleViaje="Se viaja.";
					break;
			}
			break;
	}
	

	alert (posibleViaje);
}
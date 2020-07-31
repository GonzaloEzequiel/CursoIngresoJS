function mostrar()
{
	//tomo el mes
	var mesDelAño;
	mesDelAño=txtIdMes.value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Nomviembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		default:
			alert("Falta para el invierno.");
			break;
	}
}
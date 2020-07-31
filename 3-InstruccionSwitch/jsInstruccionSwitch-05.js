function mostrar()
{
	//tomo la hora
	var horaDelDia;
	horaDelDia=txtIdHora.value;
	horaDelDia=parseInt(horaDelDia);
	alert(horaDelDia+" horas.");
	
	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
		default:
			break;
	}
}
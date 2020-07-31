function mostrar()
{
	//tomo el mes
	var mesDelAño;
	mesDelAño=txtIdMes.value;
	alert(mesDelAño);

	//switch() reemplaza a if() si conocemos los valores que la variable puede tomar
	//switch no aplica elementos logicos y comparaciones
	switch(mesDelAño)
	{
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
		default:
			//alert("resto del año");
			break;
	}
}
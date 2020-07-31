/* perez gonzalo
Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.
*/

function mostrar()
{
	//tomo la edad   txtIdEdad
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		alert("Usted es menor de edad");
	}

	/*
	if(edadIngresada>17)
	{
		alert("Usted es mayor de edad");
	}
	if(edadIngresada<18)
	{
		alert("Usted es menor de edad");
	}
	*/
}
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado=prompt("Indique su sexo","f para femenino / m para masculino.");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{		
		sexoIngresado=prompt("Indique su sexo","f para femenino / m para masculino.");
	}

	if(sexoIngresado=="f")
	{
		sexoIngresado="Femenino";
	}
	else
	{
		sexoIngresado="Masculino";
	}

	txtIdSexo.value=sexoIngresado;
}
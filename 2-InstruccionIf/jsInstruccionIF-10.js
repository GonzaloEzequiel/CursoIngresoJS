//NUNCA SE HIZO HACER

function mostrar()
{
	function mostrar()
{
	var razaIngresada;
	var pesoIngresado;
	var mayorPeso;
	var mayorPesoRaza;
	var tempIngresada;
	var edadIngresada;
	var peligroExtincion;
	var respuesta;
	var acumuladorEdadAnimales;
	var contadorAnimales;
	var promedioEdadAnimales;
	var tempMaxPeligroExt;

	respuesta="si";
	acumuladorEdadAnimales=0;
	contadorAnimales=0;
	mayorPeso=0;
	tempMaxPeligroExt=0;

	while(respuesta=="si")
	{
		razaIngresada=prompt("Ingresar raza:");
		pesoIngresado=prompt("Ingresar peso:");
		pesoIngresado=parseInt(pesoIngresado);
		while(isNaN(pesoIngresado))
		{
			pesoIngresado=prompt("Error, Reingresar peso:");
			pesoIngresado=parseInt(pesoIngresado);
		}
		tempIngresada=prompt("Ingresar temperatura:");
		tempIngresada=parseInt(tempIngresada);
		while(isNaN(tempIngresada))
		{
			tempIngresada=prompt("Error, Reingresar temperatura:");
			tempIngresada=parseInt(tempIngresada);
		}
		edadIngresada=prompt("Ingresar edad:");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada))
		{
			edadIngresada=prompt("Error, Reingresar edad:");
			edadIngresada=parseInt(edadIngresada);
		}
		peligroExtincion=prompt("¿Está en peligro de extinción?","si / no");
		while(peligroExtincion!="si" && peligroExtincion!="no")
		{
			peligroExtincion=prompt("¿Está en peligro de extinción?","si / no");
		}

		//1°

		if(pesoIngresado>mayorPeso)
		{
			mayorPeso=pesoIngresado;
			mayorPesoRaza=razaIngresada;
		}

		switch(peligroExtincion)
		{
			case "si":
					if(tempIngresada>tempMaxPeligroExt)
					{
						tempMaxPeligroExt=tempIngresada;						
					}
				break;
			case "no":
				break;
		}

		contadorAnimales++;
	}

	promedioEdadAnimales=acumuladorEdadAnimales/contadorAnimales;

	document.write("1-El promedio de edad total es: "+promedioEdadAnimales+"<br>"+
				"2-La raza del más pesado es: "+mayorPesoRaza+"<br>"+
				"3-La temperatura máxima ingresada de los animales en extinción es: "+tempMaxPeligroExt);
}
}
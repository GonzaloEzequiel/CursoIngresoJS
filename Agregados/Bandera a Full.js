/*
Enunciado  a)”bandera a full”
de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
sexo
altura
edad
nombre
se debe informar:

1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
*/
function mostrar()
{
	var nombreIngresado;
	var sexoIngresado;
	var alturaIngresada;
	var edadIngresada;
	var respuesta;
	var banderaPrimero;
	var mujerMasAlta;
	var hombreMasViejo;
	var mayorEdad;
	var mayorAltura;
	var primerAdolescente;
	var primerAdolescenteBandera;

	mayorAltura=0;
	mayorEdad=0;

	respuesta="si";
	banderaPrimero=0;	
	primerAdolescenteBandera=0;

	while(respuesta=="si")
	{
		nombreIngresado=prompt("Ingrese nombre:");
		sexoIngresado=prompt("Ingrese sexo:");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("Reingrese sexo:");
		}
		edadIngresada=prompt("Ingrese edad:");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada) || edadIngresada<0)
		{
			edadIngresada=prompt("Ingrese edad:");
			edadIngresada=parseInt(edadIngresada);
		}		
		alturaIngresada=prompt("Ingrese altura:");
		alturaIngresada=parseInt(alturaIngresada);
		while(isNaN(alturaIngresada))
		{
			alturaIngresada=prompt("Ingrese altura:");
			alturaIngresada=parseInt(alturaIngresada);
		}

		if(banderaPrimero==0)
		{
			if(sexoIngresado=="f")
			{
				mujerMasAlta=nombreIngresado;
			}
			else
			{
				hombreMasViejo=nombreIngresado;
			}

			if(edadIngresada>12 && edadIngresada<18)
			{
				primerAdolescente=nombreIngresado;
			}

			banderaPrimero=1;
		}		

		if(primerAdolescenteBandera==0 && edadIngresada>12 && edadIngresada<18)
		{
			primerAdolescente=nombreIngresado;
			primerAdolescenteBandera=1;			
		}

		switch(sexoIngresado)
		{
			case "f":
				if(alturaIngresada>mayorAltura)
				{
					mayorAltura=alturaIngresada;
					mujerMasAlta=nombreIngresado;
				}
				break;
			case "m":
				if(edadIngresada>mayorEdad)					
				{
					mayorEdad=edadIngresada;
					hombreMasViejo=nombreIngresado;
				}
				break;
		}

		respuesta=prompt("¿Desea Continuar?");	
	}

	document.write("1- La más alta de las mujeres es: "+mujerMasAlta+"<br>"+
				"2- El más viejo de los hombres es: "+hombreMasViejo+"<br>");

	if(primerAdolescenteBandera!=0)
	{
		document.write("3- El primer adolescente ingresado es: "+primerAdolescente);
	}

}
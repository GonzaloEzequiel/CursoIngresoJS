/*
Agregado while

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:

nivel 1:
cuantos son en total 
cuantos mayores de edad 
cuantos menores de edad 
cuantos adolescentes de edad 
la edad mas vieja;
la edad mas joven;

nivel 2:
cuantas mujeres;
cuantos hombres;
cuantas adolescentes mujeres 
cuantos niños hombres 
el promedio de edad
el promedio de edad de las mujeres
el promedio de edad de los hombres
la cantidad de edades pares 

nivel 3:
el nombre de la persona mas vieja
el nombre de la persona mas joven
el sexo de la persona mas vieja
el sexo de la persona mas joven

nivel dios:
cuantas personas hay con la edad minima
cuantas personas hay con la edad maxima
el nombre de la ultima persona con la mayor edad encontrada
el nombre de la ultima persona con la menor edad encontrada
*/

function mostrar()
{
	var edadIngresada;
	var nombreIngresado;
	var sexoIngresado;

	var cantMayores;
	var cantMenores;
	var cantAdolescentes;
	var edadMasJoven;
	var nombreMasJoven;
	var edadMasViejo;
	var nombreMasViejo;
	var cantMujeres;
	var cantHombres;
	var adolescentesMujeres;
	var niñosHombres;
	var sumaEdades;
	var promedioEdad;
	var sumaEdadMujeres;
	var promedioEdadMujeres;
	var sumaEdadHombres;
	var promedioEdadHombres;
	var cantEdadesPares;
	var personasEdadMinima;
	var personasEdadMaxima;
	var personasMasJovenes;
	var personasMasViejas;
	var sexoMasViejo;
	var sexoMasJoven;

	/* 
	PARA LOGRAR OBJETIVOS 1 Y 2 DEL NIVEL3 ARMÉ ARRAYS (MAS DE 1)
	(PARA QUE LOS OBJETIVOS 3 Y 4 DEL NIVEL DIOS NO LOS REESCRIBAN)

	LOS OBJETIVOS 3 Y 4 DEL NIVEL 3 PASAN A NO TENER SENTIDO
	PIDEN EL SEXO DEL MAS JOVEN Y DEL MAS VIEJO (PUEDE HABER MAS DE 1)
	*/
	personasMasViejas=[];
	personasMasJovenes=[];
	sexoMasJoven=[];
	sexoMasViejo=[];

	var respuesta;
	var contador;
	var banderaPrimero;

	cantMenores=0;
	cantMayores=0;
	cantAdolescentes=0;
	cantMujeres=0;
	cantHombres=0;
	adolescentesMujeres=0;
	niñosHombres=0;
	cantEdadesPares=0;
	sumaEdades=0;
	sumaEdadMujeres=0;
	sumaEdadHombres=0;
	personasEdadMinima=0;
	personasEdadMaxima=0;

	contador=0;
	respuesta="si";
	banderaPrimero=0;

	while(respuesta=="si")
	{
		edadIngresada=prompt("Ingresar edad");
		edadIngresada=parseInt(edadIngresada);

		while(isNaN(edadIngresada) || edadIngresada <0 || edadIngresada >120)
		{
			edadIngresada=prompt("Error, reingrese edad","entre 0 y 120");
			edadIngresada=parseInt(edadIngresada);
		}

		nombreIngresado=prompt("Ingrese su nombre");

		sexoIngresado=prompt("Ingresar sexo","f para femenino / m para masculino");

		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("Error, reingrese sexo","f / m");
		}

		if(banderaPrimero==0)
		{
			edadMasJoven=edadIngresada;
			edadMasViejo=edadIngresada;
			nombreMasJoven=nombreIngresado;
			nombreMasViejo=nombreIngresado;
			sexoMasJoven=sexoIngresado;
			sexoMasViejo=sexoIngresado;
			banderaPrimero=1;
		}

		if(edadIngresada%2==0)
		{
			cantEdadesPares++;
		}

		if(edadIngresada>=edadMasViejo)
		{
			edadMasViejo=edadIngresada;
			nombreMasViejo=nombreIngresado;
			sexoMasViejo=sexoIngresado;
			personasMasViejas.push(nombreIngresado);
		}		
		else
		{	
			if(edadIngresada<=edadMasJoven)
			edadMasJoven=edadIngresada;
			nombreMasJoven=nombreIngresado;
			sexoMasJoven=sexoIngresado;
			personasMasJovenes.push(nombreIngresado);
		}

		if(edadIngresada>17)
		{
			cantMayores++;
		}
		else
		{	
			cantMenores++;
			if(edadIngresada>12)
			{
				cantAdolescentes++;
				if(sexoIngresado=="f")
				{
					adolescentesMujeres++;
				}
			}
			else
			{
				if(sexoIngresado=="m")
				{
					niñosHombres++;
				}
			}
		}
		switch(edadIngresada)
		{
			case 0:				
				personasEdadMinima++;
				break;
			case 120:
				personasEdadMaxima++;
				break;
			default:
				break;
		}	

		switch(sexoIngresado)
		{
			case "f":
				cantMujeres++;
				sumaEdadMujeres=sumaEdadMujeres+edadIngresada;
					break;
			case "m":
				cantHombres++;
				sumaEdadHombres=sumaEdadHombres+edadIngresada;
					break;
		}

		contador++;
		sumaEdades=sumaEdades+edadIngresada;

		respuesta=prompt("¿Desea continuar?");
	}

	promedioEdad=sumaEdades/contador;
	promedioEdadMujeres=sumaEdadMujeres/cantMujeres;
	promedioEdadHombres=sumaEdadHombres/cantHombres;

	document.write("<h4>Nivel 1</h4>"+
		"Total de personas ingresadas: "+contador+"<br>"+
		"Total de mayores de edad: "+cantMayores+"<br>"+
		"Total de menores de edad: "+cantMenores+"<br>"+
		"Total de adolescentes: "+cantAdolescentes+"<br>"+
		"Mayor edad ingresada: "+edadMasViejo+"<br>"+
		"Menor edad ingresada: "+edadMasJoven+"<br><br>"+

		"<h4>Nivel 2</h4>"+
		"Total de mujeres: "+cantMujeres+"<br>"+
		"Total de hombres: "+cantHombres+"<br>"+
		"Total de adolescentes mujeres: "+adolescentesMujeres+"<br>"+
		"Total de niños hombres: "+niñosHombres+"<br>"+
		"Promedio de edades igresadas: "+promedioEdad+"<br>"+
		"Promedio de edad de las mujeres: "+promedioEdadMujeres+"<br>"+
		"Promedio de edad de los hombres: "+promedioEdadHombres+"<br>"+
		"Cantidad de edades pares: "+cantEdadesPares+"<br><br>"+

		"<h4>Nivel 3</h4>"+
		"La/s persona/s más vieja/s : "+personasMasViejas+"<br>"+
		"La/s persona/s más joven/es : "+personasMasJovenes+"<br>"+
		"El sexo de la persona más vieja: "+sexoMasViejo+"<br>"+
		"El sexo de la persona más joven: "+sexoMasJoven+"<br><br>"+

		"<h2><b>NIVEL DIOS</b></h2>"+
		"Personas con edad mínima: "+personasEdadMinima+"<br>"+
		"Personas con edad máxima: "+personasEdadMaxima+"<br>"+
		"Ultima persona con la mayor edad ingresada: "+nombreMasViejo+"<br>"+
		"Ultima persona con la menor edad ingresada: "+nombreMasJoven);
}

/*
Se requiere generar un sistema para realizar estadísticas sobre los egresados en la universidad.
1.	El alumno deberá ingresar:
o	Nombre del alumno
o	Carrera (Programación, Psicología, Diseño gráfico)
o	Estado de la carrera: en curso-abandono-finalizado
o	Sexo (femenino-masculino-nobinario)
o	Edad (18 o más)
o	Nota (entre 1 y 10) 

2.	Se desconoce la cantidad de alumnos que se ingresaran.
3.	Se deberán validar los casos resaltados en negrita.
4.	El programa deberá informar a través del documento html:
A.	Cantidad total de alumnos de cada carrera.
B.	Cantidad total de mujeres que cursan la carrera de programación
C.	Cantidad de alumnos no binarios.
D.	Promedio de notas de los alumnos finalizantes.
E.	Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F.	Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.
G.	¿Cuál es la carrera que tiene más alumnos?
*/

function mostrar()
{
	var nombreIngresado;
	var carreraIngresada;
	var estadoCarrera;
	var sexoIngresado;
	var edadIngresada;
	var notaIngresada;
	var cantAlumnosProg;
	var cantAlumnosPsico;
	var cantAlumnosDiseño;
	var cantMujeresProg;
	var cantNoBinarios;
	var sumaNotas;
	var promedioNotas;
	var mayorEdadIngresada;
	var nombreDelMasViejo;
	var sexoDelMasViejo;
	var notaMasAlta;
	var notaMasAltaNB;
	var notaMasAltaNBNombre;
	var notaMasAltaNBEstCarrera;
	var carreraMasAlumnos;
	var banderaPrimero;

	cantAlumnosProg=0;
	cantAlumnosPsico=0;
	cantAlumnosDiseño=0;
	cantMujeresProg=0;
	cantNoBinarios=0;
	sumaNotas=0;
	mayorEdadIngresada=0;
	notaMasAlta=0;
	notaMasAltaNB=0;
	banderaPrimero=0;
	cantFinalizado=0;
	respuesta="si";

	while(respuesta=="si")
	{
		nombreIngresado=prompt("Ingresar Nombre:");
		carreraIngresada=prompt("Ingresar Carrera:","Programación / Psicología / Diseño gráfico");
		while(carreraIngresada!="Programación" && carreraIngresada!="Psicología" && carreraIngresada!="Diseño gráfico")
		{
			carreraIngresada=prompt("Error, Reingresar Carrera:");
		}
		estadoCarrera=prompt("Estado de la Carrera:","Programación / Psicología / Diseño gráfico");
		while(estadoCarrera!="en curso" && estadoCarrera!="abandono" && estadoCarrera!="finalizado")
		{
			estadoCarrera=prompt("Error, Reingrese Estado de la Carrera:","en curso / abandono / finalizado");
		}
		sexoIngresado=prompt("Ingresar Sexo:","femenino / masculino / nobinario");
		while(sexoIngresado!="f" && sexoIngresado!="m" && sexoIngresado!="nobinario")
		{
		sexoIngresado=prompt("Error, Reingresar Sexo:","femenino / masculino / nobinario");
		}
		edadIngresada=prompt("Ingresar Edad:");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada) || edadIngresada<18)
		{
			edadIngresada=prompt("Error, Reingresar Edad:");
		}
		notaIngresada=prompt("Ingresar Nota:");
		while(isNaN(notaIngresada) || notaIngresada<1 || notaIngresada>10)
		{
			notaIngresada=prompt("Error, Reingresar Nota:");
		}

		if(banderaPrimero==0)
		{
			//!! COMPLETAR
			banderaPrimero=1;
		}

		switch(carreraIngresada)
		{
			case "Programación":
				cantAlumnosProg++;
				if(sexoIngresado=="femenino")
				{
					cantMujeresProg++;
				}
					break;
			case "Psicología":
				cantAlumnosPsico++;
				if(edadIngresada>mayorEdadIngresada)
				{
					mayorEdadIngresada=edadIngresada;
					nombreDelMasViejo=nombreIngresado;
					sexoDelMasViejo=sexoIngresado;
				}
				if(notaIngresada>notaMasAlta)
				{
					nombreMjorAlumnoPsico=nombreIngresado;
					notaMejorAlumnoPsico=notaIngresada;
					estadoCarreraMejorAlumnoPsico=estadoCarrera;					
				}
				if(sexoIngresado=="nobinario")
				{
					if(notaIngresada>notaMasAltaNB)
					{
						notaMasAltaNB=notaIngresada;
						notaMasAltaNBNombre=nombreIngresado;
						notaMasAltaNBEstCarrera=estadoCarrera;
					}
				}
					break;
			case "Diseño gráfico":
				cantAlumnosDiseño++;
					break;
		}

		switch(sexoIngresado)
		{
			case "masculino":
				break;
			case "femenino":
				break;
			case "nobinario":
				cantNoBinarios++;
				break;

		}

		switch(estadoCarrera)
		{
			case "finalizado":
				cantFinalizado++;
				sumaNotas=sumaNotas+notaIngresada;
				break;
			default:
				break;
		}

		respuesta=prompt("¿Desea continuar?");

	}
	if(cantAlumnosProg>cantAlumnosPsico && cantAlumnosProg>cantAlumnosDiseño)
	{
		carreraMasAlumnos="Programación";
	}
	if(cantAlumnosPsico>cantAlumnosProg && cantAlumnosPsico>cantAlumnosDiseño)
	{
		carreraMasAlumnos="Psicología";
	}
	if(cantAlumnosDiseño>cantAlumnosProg && cantAlumnosDiseño>cantAlumnosPsico)
	{
		carreraMasAlumnos="Diseño gráfico";
	}

	if(cantFinalizado!=0)
	{
		promedioNotas=sumaNotas/cantFinalizado;	
	}
	
	document.write("A) <br> Cantidad total de alumnos de Programación: "+cantAlumnosProg+"<br>"+
				"Cantidad total de alumnos de Psicología: "+cantAlumnosPsico+"<br>"+
				"Cantidad total de alumnos de Diseño gráfico: "+cantAlumnosDiseño+"<br><br>"+
				"B) Cantidad total de mujeres que cursan Programación: "+cantMujeresProg+"<br><br>"+
				"C) Cantidad de alumnos no binarios: "+cantNoBinarios+"<br><br>");
	if(cantFinalizado!=0)
	{
		document.write("D) Promedio de notas de los alumnos finalizantes: "+promedioNotas+"<br><br>");
	}
	document.write("E) El alumno más viejo de la carrera de Psicología es: "+nombreDelMasViejo+" Sexo: "+sexoDelMasViejo+" Edad: "+mayorEdadIngresada+"<br><br>"+
				"F) El mejor alumno no binario que estudia psicología es: "+notaMasAltaNBNombre+" Nota: "+notaMasAltaNB+" Estado de la carrera: "+notaMasAltaNBEstCarrera+"<br><br>"+
				"G) La carrera con más alumnos es :"+carreraMasAlumnos);
}		
/*
Enunciado b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
*/

function mostrar()
{
	var nombreIngresado;
	var cantIngresos;
	var edadIngresada;
	var alturaIngresada;
	var sexoIngresado;
	var dineroIngresado;
	var cantHijos;
	var respuesta;
	var mayorEdad;
	var mayorEdadNombre;
	var menorEdad;
	var menorEdadNombre;
	var acumuladorAlturaMujeres;
	var contadorMujeres;
	var promedioAlturaMujeres;
	var mujerMasJoven;
	

	respuesta="si";
	cantIngresos=0;
	acumuladorAlturaMujeres=0;
	contadorMujeres=0;
	mayorEdad=0;
	menorEdad=115;

	while(cantIngresos<10)
	{

		nombreIngresado=prompt("Ingrese nombre:");
		edadIngresada=prompt("Ingrese edad:");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada) || edadIngresada <0 || edadIngresada > 115)
		{
			edadIngresada=prompt("Error, Reingrese edad:");
			edadIngresada=parseInt(edadIngresada);
		}
		alturaIngresada=prompt("Ingrese altura:");
		alturaIngresada=parseInt(alturaIngresada);
		while(isNaN(alturaIngresada) || alturaIngresada<30 || alturaIngresada>230)
		{
			alturaIngresada=prompt("Error, Reingrese altura:");
			alturaIngresada=parseInt(alturaIngresada);
		}
		sexoIngresado=prompt("Ingrese sexo:");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("Reingrese sexo:","f / m");
		}
		dineroIngresado=prompt("Ingrese cantidad de dinero:");
		dineroIngresado=parseInt(dineroIngresado);
		while(isNaN(dineroIngresado))
		{
			dineroIngresado=prompt("Error, Reingrese cantidad de dinero:");
			dineroIngresado=parseInt(dineroIngresado);
		}
		cantHijos=prompt("Ingrese cantidad de hijos:");
		cantHijos=parseInt(cantHijos);
		while(isNaN(cantHijos) || cantHijos<0 || cantHijos>10)
		{
			cantHijos=prompt("Error, Reingrese cantidad de hijos:");
			cantHijos=parseInt(cantHijos);
		}

		if(edadIngresada>mayorEdad)
		{
			mayorEdad=edadIngresada;
			mayorEdadNombre=nombreIngresado;
		}

		switch(sexoIngresado)
		{
			case "f":
				contadorMujeres++;
				acumuladorAlturaMujeres=acumuladorAlturaMujeres+alturaIngresada;
				if(edadIngresada<menorEdad)
				{
					menorEdad=edadIngresada;
					menorEdadNombre=nombreIngresado;
				}				
				break;
			default:
				break;
		}

		cantIngresos++;

	}

	promedioAlturaMujeres=acumuladorAlturaMujeres/contadorMujeres;

	document.write("1- La persona con edad más vieja es: "+mayorEdadNombre+"<br>"+
				"2- Promedio de altura de las mujeres: "+promedioAlturaMujeres+"<br>"+
				"3- La mujer más joven es: "+menorEdadNombre);
}
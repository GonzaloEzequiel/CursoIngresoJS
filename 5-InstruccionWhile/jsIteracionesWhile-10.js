/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/


function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var numeroParseado;
	var sumaNegativos;
	var cantNegativos;
	var sumaPositivos;
	var cantPositivos;
	var cantidadCeros;
	var cantPares;
	var promedioPositivos;
	var promedioNegativos;
	var difPosNeg;
	var contador;
	var resto;

	respuesta="si";
	cantNegativos=0;
	cantPositivos=0;
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadCeros=0;
	cantPares=0;
	contador=0;
	

	while(respuesta=="si")
	{
		contador++;
		numeroIngresado=prompt("Ingrese numero "+contador);
		numeroParseado=parseInt(numeroIngresado);

		if(isNaN(numeroParseado))
		{
			contador--;
		}
		else
		{
			switch(numeroParseado)
			{
				case 0:
					cantidadCeros++; //5)
						break;
				default:
					if(numeroParseado>0)
					{
						cantNegativos++; //4)
						sumaNegativos=sumaNegativos+numeroParseado; //1)
					}
					else
					{
						cantPositivos++; //3)
						sumaPositivos=sumaPositivos+numeroParseado; //2)
					}
					
					resto=numeroParseado%2
					if(resto=0)
					{
						cantPares++; //6)
					}
						break;
			}

		}

		respuesta=prompt("desea continuar?");
	}

	promedioPositivos=sumaPositivos/cantPositivos; //7)
	promedioNegativos=sumaNegativos/cantNegativos; //8)
	difPosNeg=sumaPositivos+sumaNegativos //9)

	document.write("La suma de negativos es: "+sumaNegativos+"<br>" 
					+"La suma de positivos es: "+sumaPositivos +"<br>"
					+"La cantidad de positivos es: "+cantPositivos+"<br>"
					+"La cantidad de negativos es: "+cantNegativos+"<br>"
					+"La cantidad de ceros es: "+cantidadCeros+"<br>"
					+"La cantidad de números pares es: "+cantPares+"<br>"
					+"El promedio de positivos es: "+promedioPositivos+"<br>"
					+"El promedios de negativos es: "+promedioNegativos+"<br>"
					+"La diferencia entre positivos y negativos es: "+difPosNeg);


}


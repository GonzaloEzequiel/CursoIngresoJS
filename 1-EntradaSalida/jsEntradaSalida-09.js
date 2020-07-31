/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//   txtIdSueldo  txtIdResultado

	//declaro las variables
	var sueldoIngresado;
	var sueldoAumentado;
	var aumento

	//asigno y parseo
	aumento=10;
	sueldoIngresado=txtIdSueldo.value;
	sueldoIngresado=parseInt(sueldoIngresado);

	//asigno aumento
	sueldoAumentado=sueldoIngresado+(sueldoIngresado*aumento/100);

	//muestro
	txtIdResultado.value=sueldoAumentado;
	
}

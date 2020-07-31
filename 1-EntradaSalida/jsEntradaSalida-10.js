/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//   txtIdImporte  txtIdResultado

	//declaro las variables
	var importeIngresado;
	var sueldoDescuentoAplicado;
	var aumento=-25;

	//asigno y parseo
	importeIngresado=txtIdImporte.value;
	importeIngresado=parseInt(importeIngresado);

	//asigno aumento
	sueldoDescuentoAplicado=importeIngresado+(importeIngresado*aumento/100);

	//muestro
	txtIdResultado.value=sueldoDescuentoAplicado;
}

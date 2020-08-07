/* Se pide dos datos, importe por prompt y un porcentaje de decuento por prompt,
informar el resultado de la operacion por alert  EJ:
a:ingreso importe  500 y 50 de descueno y el resultado deberia ser 250
b:ingreso importe  200 y 30 de descueno y el resultado deberia ser 140 
*/

// perez gonzalo
function mostrar()
{	
	//declaro variables
	var importeIngresado;
	var descuentoAplicado;
	var resultado;

	//asigno y parseo
	importeIngresado=prompt("Ingrese un importe");
	importeIngresado=parseInt(importeIngresado);

	descuentoAplicado=prompt("Ingrese un % a descontar");
	descuentoAplicado=parseInt(descuentoAplicado);

	//opero descuento (asigno resultado)
	resultado=importeIngresado-(importeIngresado*descuentoAplicado/100);

	//muestro
	alert("El resultado es "+resultado);
}
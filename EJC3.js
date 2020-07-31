/* Se pide un importe(ej:200) y un porcetaje de descuento(ej:30 ) por prompt, 
y se muestra el importe con el descuento por alert con el siguiente mensaje :
" el importe es $xxxx el descuento es $xxx y el precio final es $xxx, gracias por su compra"
ejemplo:
" el importe es $200 el descuento es $60 y el precio final es $140, gracias por su compra" 
(ingresando 200 para el importe y 30 para el porcetaje de descuento)
*/

// perez gonzalo
function mostrar()
{	
	//declaro variables
	var importeIngresado;
	var descuentoAplicado;
	var valorDescontado;
	var resultado;

	//asigno y parseo
	importeIngresado=prompt("Ingrese un importe");
	importeIngresado=parseInt(importeIngresado);

	descuentoAplicado=prompt("Ingrese un % a descontar");
	descuentoAplicado=parseInt(descuentoAplicado);

	//opero descuento (asigno resultado)
	valorDescontado=importeIngresado*descuentoAplicado/100
	resultado=importeIngresado-valorDescontado;

	//muestro
	alert("El importe es $"+importeIngresado+", el descuento es $"+valorDescontado+", y el precio final es $"+resultado+". Gracias por su compra!!");
}
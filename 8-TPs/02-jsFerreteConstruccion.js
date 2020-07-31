/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//  txtIdLargo   txtIdAncho   txtIdRadio

	//declaro variables
	var largoIngresado;
	var anchoIngresado;
	var perimetroTotal;
	var cantidadAlambre;

	//asigno variables
	largoIngresado=txtIdLargo.value;
	anchoIngresado=txtIdAncho.value;

	perimetroTotal=largoIngresado*2+anchoIngresado*2;
	cantidadAlambre=perimetroTotal*3;

	//muestro
	alert("Alambre necesario para el perímetro: "+cantidadAlambre+" metros.");

}
function Circulo () 
{
	//  txtIdLargo   txtIdAncho   txtIdRadio

	//declaro variables
	var radioIngresado;
	var perimetroTotal;
	var cantidadAlambre;

	//asigno variables
	radioIngresado=txtIdRadio.value;
	perimetroTotal=2*3.14*radioIngresado;
	cantidadAlambre=perimetroTotal*3;

	//muestro
	alert("Alambre necesario para el perímetro: "+cantidadAlambre+" metros.");
}
function Materiales () 
{
	//  txtIdLargo   txtIdAncho   txtIdRadio

	//declaro variables
	var largoIngresado;
	var anchoIngresado;
	var areaTotal;
	var cantidadCemento;
	var cantidadCal;

	//asigno variables
	largoIngresado=txtIdLargo.value;
	anchoIngresado=txtIdAncho.value;
	areaTotal=largoIngresado*anchoIngresado;
	cantidadCemento=areaTotal*2;
	cantidadCal=areaTotal*3;

	//muestro
	alert("Se necesitan "+cantidadCemento+" bolsas de cemento y "+cantidadCal+" bolsas de cal, para cubrir "+areaTotal+" metros cuadrados.")
}
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//  txtIdNumeroDividendo    txtIdNumeroDivisor

	//declaro las variables
	var dividendoIngresado;
	var divisorIngresado;
	var resto;

	dividendoIngreado=txtIdNumeroDividendo.value
	dividendoIngreado=parseInt(dividendoIngresado);

	divisorIngresado=txtIdNumeroDivisor.value
	divisorIngresado=parseInt(divisorIngresado);

	resto=dividendoIngresado%divisorIngresado;

	alert("El resto es "+resto);

	//NO FUNCIONA CORREGIR
}

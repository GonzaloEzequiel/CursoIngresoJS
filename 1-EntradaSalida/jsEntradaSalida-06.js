/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// txtIdNumeroUno     txtIdNumeroDos

	//declaro variables
	var numeroUno;
	var numeroDos;
	var resultado;

	//asigno vairables
	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

	//muestro
	alert("la suma es "+resultado);
}


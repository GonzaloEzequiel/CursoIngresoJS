/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/


function mostrar()
{	
	
	//txtIdNombre
	//txtIdEdad

	//deaclaro las variables
	var nombreIngreado;
	var edadIngresada;

	//asigno las variables
	nombreIngreado = txtIdNombre.value;	
	edadIngresada = txtIdEdad.value;


	alert("Usted se llama " +nombreIngreado +" y tiene " +edadIngresada +" años.");

	//alert("Usted se llama José y tiene 66 años");
}
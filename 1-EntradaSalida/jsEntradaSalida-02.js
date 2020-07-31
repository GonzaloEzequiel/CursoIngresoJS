/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado; 
	nombreIngresado = prompt("Ingresa tu nombre", "Nombre");
/*
	Comando
		var "variable"  = <- declaracion y asignacion
			lower camelcase

		prompt("mensaje","display");
		siempre acompañado de variable
*/
	alert("su nombre es: " + nombreIngresado);
	// "+" para concatenar (union entre dos cadenas)

	//alert(nombreIngresado);

}


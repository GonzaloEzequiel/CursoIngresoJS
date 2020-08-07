/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio, <br>
de cada una debo obtener los siguientes datos: 
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),<br>
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
la Marca y 
el fabricante. <br>
Se debe Informar al usuario lo siguiente:<br>

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
b) Del tipo con mas unidades, el promedio por compra <br>
c) Cuántas unidades de jabones hay en total <br><br>
*/
function mostrar()
{
	var tipo;
	var precio;
	var cantidaUnidades;
	var marca;
	var fabricante;
	var contador;
	var alcoholMasBarato;
	var alcoholMasBaratoUnidades;
	var alcoholMasBaratoFabricante;
	var banderaPrimerAlcohol;
	var contadorJabones;
	var contadorAlcohol;
	var contadorBarbijo;
	var acumuladorJabones;
	var acumuladorAlcohol;
	var acumuladorBarbijo;
	var promedioMasUnidades;
	var tipoMasUnidades;


	 contadorJabones=0;
	 contadorAlcohol=0;
	 contadorBarbijo=0;
	 acumuladorJabones=0;
	 acumuladorAlcohol=0;
	 acumuladorBarbijo=0;
	contador=0;
	banderaPrimerAlcohol="es el primero";

	while(contador<5)
	{
		tipo=prompt("ingrese tipo");
		while(tipo!="barbijo" && tipo !="alcohol" && tipo!="jabon")
		{
			tipo=prompt("error reingrese tipo");
		}

		precio=prompt("ingrese precio");
		precio=parseInt(precio);
		while(precio<100 || precio>300)
		{
			precio=prompt("error reingrese precio");
			precio=parseInt(precio);
		}

		cantidaUnidades=prompt("ingrese cantidaUnidades");
		cantidaUnidades=parseInt(cantidaUnidades);
		while(cantidaUnidades<0 || cantidaUnidades>1000)
		{
			cantidaUnidades=prompt("error reingrese cantidaUnidades");
			cantidaUnidades=parseInt(cantidaUnidades);
		}
		marca=prompt("ingrese marca");
		fabricante=prompt("ingrese fabricante");

		// datos ingresados

		if(tipo=="alcohol")
		{
			if(banderaPrimerAlcohol=="es el primero")
			{
				alcoholMasBarato=precio;
				alcoholMasBaratoFabricante=fabricante;
				alcoholMasBaratoUnidades=cantidaUnidades;
				banderaPrimerAlcohol="ya paso";
			}else
			{
				if(precio<alcoholMasBarato)
				{
					alcoholMasBarato=precio;
					alcoholMasBaratoFabricante=fabricante;
					alcoholMasBaratoUnidades=cantidaUnidades;
				}
			}
		}	
		switch(tipo)
		{
			case "jabon":
				contadorJabones++;
				acumuladorJabones=acumuladorJabones+cantidaUnidades;
				break;
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol=acumuladorAlcohol+cantidaUnidades;
				break;
			case "barbijo":
				acumuladorBarbijo=acumuladorBarbijo+cantidaUnidades;
				contadorBarbijo++;
				break;
		}



		contador++;
	}//del while prncipal

	if(acumuladorBarbijo>acumuladorAlcohol && acumuladorBarbijo>acumuladorJabones)
	{
		promedioMasUnidades=acumuladorBarbijo/contadorBarbijo;
		tipoMasUnidades="barbijo";
	}else
	{
		if(acumuladorAlcohol>acumuladorJabones)
		{
			promedioMasUnidades=acumuladorAlcohol/contadorAlcohol;
			tipoMasUnidades="alcohol";
		}else
		{
			promedioMasUnidades=acumuladorJabones/contadorJabones;
			tipoMasUnidades="jobones";
		}
	}

	


}
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//   txtIdTemperatura

	//defino variables
	var terperaturaIngresada;
	var temperaturaFinal;

	terperaturaIngresada=txtIdTemperatura.value;
	temperaturaFinal=(terperaturaIngresada-32)/1.8;

	alert(terperaturaIngresada+"°F son "+temperaturaFinal+"°C");
}	

function CentigradosFahrenheit () 
{
	//   txtIdTemperatura

	//defino variables
	var terperaturaIngresada;
	var temperaturaFinal;

	terperaturaIngresada=txtIdTemperatura.value;
	temperaturaFinal=(terperaturaIngresada*1.8)+32;

	alert(terperaturaIngresada+"°C son "+temperaturaFinal+"°F");
}

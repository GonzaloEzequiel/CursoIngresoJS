/*4.	

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	// txtIdCantidad    Marca    txtIdprecioDescuento   

 	var cantidadLamparas;
 	var marcaLamparas;
 	var descuentoLamparas;
 	var precioLamparas;
 	var valorIIBB;
 	var precioFinal;

 	cantidadLamparas=txtIdCantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);

 	marcaLamparas=Marca.value;


 	switch(cantidadLamparas)
 	{
 		case 1:
 		case 2:
 			descuentoLamparas=0;
 			break;
 		case 3:
 			switch(marcaLamparas)
 			{
 				case "ArgentinaLuz":
 					descuentoLamparas=15;
 					break;
 				case "FelipeLamparas":
 					descuentoLamparas=10;
 					break;
 				default:
 					descuentoLamparas=5;
 					break;
 			}
 			break;

 		case 4:
 			switch(marcaLamparas)
 			{
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 					descuentoLamparas=25;
 					break;
 				default:
 					descuentoLamparas=20;
 					break;
 			}
 			break;

 		case 5:
 			switch(marcaLamparas)
 			{
 				case "ArgentinaLuz":
 					descuentoLamparas=40;
 					break;
 				default:
 					descuentoLamparas=30;
 					break;
 			}
 			break;

 		default:
 			descuentoLamparas=50;
 			break;
 	}

 	precioLamparas=cantidadLamparas*35
 	precioFinal=precioLamparas-precioLamparas*(descuentoLamparas/100);
 	
 	if(precioFinal>120)
 	{	
 		valorIIBB=precioFinal*10/100;
 		precioFinal=precioFinal+(valorIIBB);

 		alert("Usted pago "+valorIIBB+" de IIBB.")
 	}

 	txtIdprecioDescuento.value=precioFinal;
}


/* version  IF

 	if(cantidadLamparas>5)
 	{
 		descuentoLamparas=50;
 	}

 	else
 	{
 		if(cantidadLamparas==5)
 		{
 			if(marcaLamparas=="ArgentinaLuz")
 			{
 				descuentoLamparas=40;
 			}
 			else //cualquier otra marca
 			{
 				descuentoLamparas=30;
 			}
 		}

 		else
 		{

 			if(cantidadLamparas==4)
 			{
 				if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
 				{
 					descuentoLamparas=25;
 				}
 				else //cualquier otra marca
 				{
 					descuentoLamparas=20;
 				}
 			}

 			else
 			{
	 			if(cantidadLamparas==3)
	 			{
	 				if(marcaLamparas=="ArgentinaLuz")
	 				{
	 					descuentoLamparas=15;
	 				}
	 				else
	 				{
		 				if(marcaLamparas=="FelipeLamparas")
		 				{
		 					descuentoLamparas=10;
		 				}
		 				else
		 				{
		 					descuentoLamparas=5;
		 				}
	 				}
	 			}
	 			else 
	 			{
	 				descuentoLamparas=0;
	 			}
	 		}
 		}
 	}

 	precioLamparas=cantidadLamparas*35
 	precioFinal=precioLamparas-precioLamparas*(descuentoLamparas/100);
 	
 	if(precioFinal>120)
 	{	
 		valorIIBB=precioFinal*10/100;
 		precioFinal=precioFinal+(valorIIBB);

 		alert("Usted pago "+valorIIBB+" de IIBB.")
 	}

 	txtIdprecioDescuento.value=precioFinal;

}
*/

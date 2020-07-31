/*	gonzalo perez

	Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado "sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/
 function mostrar ()
 {
 	var edadIngresada;
	var estadoIngresado;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);
	estadoIngresado=estadoCivil.value;
	
	if(edadIngresada>17)
	{
		alert("se responsable");
		if(estadoIngresado=="Soltero")
		{
			alert("a vivir la vida");	
		}
		else
		{
			if(estadoIngresado=="Casado")
			{
				alert("a disfrutar la pareja");
			}
			else
			{
				alert("a intentarlo nuevamente");
			}
		}
		if(edadIngresada>59)
		{
			alert("sos persona de riesgo");
		}
	}

	else
	{
		alert("respeta a tus mayores");

		if(edadIngresada>13)
		{
			if(estadoIngresado!="Soltero")
			{
				alert("sos muy joven para no ser soltero");
			}
		}
		else
		{
			alert("hagan la tarea");
		}
	}
	
	/* version con switch

	switch(edadIngresada)
    {
	    case 1:
	    case 2:
	    case 3:
	    case 4:
	    case 5:
	    case 6:
	    case 7:
	    case 8:
	    case 9:
	    case 10:
	    case 11:
	    case 12:
	    case 13:
	    	alert("hagan la tarea");
        case 14:
        case 15:
        case 16:
        case 17:
            alert("respeta a tus mayores");
            switch(estadoIngresado)
	        {
	            case "Soltero":
	                break;
	            default:
	                alert("sos muy joven para no ser soltero");
	                break;
	        }
	        break;
	        
	   	default:
	        alert("se responsable");
	        switch(estadoIngresado)
	        {
	            case "Soltero":
	                alert("a vivir la vida");
	                break;
	            case "Casado":
	                alert("a disfrutar de la pareja");
	                break;
	            case "Divorciado":
	                alert("a intentarlo nuevamente");
	                break;
	        }
	        if(edadIngresada>59)
	        {
	            alert("sos persona de riesgo");
	        }
	        break;
    }
    */
 }
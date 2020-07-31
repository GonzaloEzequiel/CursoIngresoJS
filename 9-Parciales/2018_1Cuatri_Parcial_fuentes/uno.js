
function mostrar()
{
	var anchoRectangulo;
	var largoRectangulo;
	var perimetroRectangulo;

	anchoRectangulo=prompt("Ingrese el ANCHO del Rectángulo:","Ingrese la medida en metros");
	largoRectangulo=prompt("Ingrese el LARGO del Rectángulo:","Ingrese la medida en metros");
	
	perimetroRectangulo=anchoRectangulo*2+largoRectangulo*2;

	alert("El perímetro del Rectángulo es: "+perimetroRectangulo);
}

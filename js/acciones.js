 //JavaScript
	
$(document).ready(function(e){
	var TuNombre;
    var TuDia;
    var TuMes;
    var TuAnio;
	var diasfaltantes;
	var edad;
	$('#ContinuarFecha').click(
	function(e){
	TuNombre= $('#Nombre').val();
	});//click continuar fecha
	
$('#ContinuarResultado').click(
function(e){
	alert(TuNombre);	
	 TuDia=$('#DIA').val();
	//alert( TuDia);
     
	 TuMes=$('#MES').val();
	//alert( TuMes);
		
	TuAnio=$('#ANIO').val();
	//alert(TuAnio);
	
	$('#Quien').text(TuNombre);
	
	
	
var Fecha= new Date();
//alert(Fecha.getFullYear());
//alert((Fecha.getMonth()+1));
//alert(Fecha.getDate());



    alert(Fecha);
	
	
	
	

var fechaactual = new Date (Fecha.getFullYear()+'/'+ (Fecha.getMonth()+1)+'/'+Fecha.getDate());
alert(fechaactual);
var mifecha = new Date(Fecha.getFullYear()+'/'+ TuMes +'/'+TuDia);
alert(mifecha);
edad=Fecha.getFullYear()- TuAnio;
if (mifecha.getMonth() >= fechaactual.getMonth())
    {
		if (mifecha.getMonth() == fechaactual.getMonth())
		{
			//Cuando el mes es igual y el dia es mayor
			if(mifecha.getDate() > fechaactual.getDate())
			{
				diasfaltantes=((mifecha-fechaactual)/1000/60/60/24);
			edad= edad-1;
			}
			//Cuando el mes es igual y el dia no es mayor
			else
			{
				mifecha= new Date((mifecha.getFullYear()+1)+'/'+ TuMes+'/' +TuDia);
			diasfaltantes=((mifecha-fechaactual)/1000/60/60/24);
			alert(diasfaltantes);
	       }
			
		    
		//Cuando el mes es mayor
	    }
		   else
		   {
			   diasfaltantes=((mifecha-fechaactual)/1000/60/60/24);
		   edad= edad-1;
		   }
	    //Cuando el mes es menor
}
		   else
			 {mifecha= new Date((mifecha.getFullYear()+1)+'/'+ TuMes+'/' +TuDia);
			diasfaltantes=((mifecha-fechaactual)/1000/60/60/24);
			
	
			
			
			}
			
		
      
	   
	   if (diasfaltantes < 31)
	   {
		   $('#Imagen').show();
	   }
	   else{
		   $('#Imagen').hide();}
		   
	
 alert(diasfaltantes);
	   alert(edad);
	   $('#Anioscumplidos').text(edad);
	   $('#Faltandias').text(diasfaltantes);
});//click continuar fecha



});//ready      
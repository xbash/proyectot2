var lat;
var lng;
var pos;
function borrar(){
	document.getElementById('nombre').value='';
	document.getElementById('rut').value='';
}
//link mapa 
function refresca(){
	 window.location= "mapa2.html";
}
function mos (){
	console.log (lat);
	console.log (lng);
}
function mostrar(){
	var pos;
	navigator.geolocation.getCurrentPosition(exito,error );
	function exito(position){
              lat= position.coords.latitude;
              lng= position.coords.longitude;
			  console.log(lng);
		   $.ajax({
			cache: false,
			// puede ser GET, POST
			type: "POST",  							
			// Tipo de retorno
			dataType: "html",
			// pagina php que recibe la llamada
			url:"http://localhost/intento/ws/base.php",  							
			// datos, ej: $_POST['data'
			data: {
				lat:lat,
				lng:lng
				},
			 success: function(){
                   console.log('bkn');
                 // alert (data);
				  window.location= "foto.html";
			 },
			 error: function(xhr, status,msg2 ){
                    //alert('4');			
                    console.log(xhr);
			 }
		});//fin ajax
} function error(){
		   alert('error');
	}
}
function hacer(){
	var nombre = "jose";
	var $user = document.getElementById('nombre').value;
	var $rut = document.getElementById('rut').value;
		
		$.ajax({
			//cache: false,
			// puede ser GET, POST
			type: "POST",  							
			// Tipo de retorno
			dataType: "html",
			// pagina php que recibe la llamada
			url:"http://localhost/intento/ws/base.php",  							
			// datos, ej: $_POST['data'
			data: {
				$user:$user,
				$rut:$rut
				},
			 success: function(){
                console.log("conectado");
				
			// window.location= "foto.html";
			 },
			 error: function(xhr, status,msg2 ){
                    //alert('4');			
                    console.log(xhr);
            }
			
		});//fin ajax	
		
		
		/*if ($ms == 1){
			alert('conectado');
			window.location="foto.html";
		}else {
			alert ('nombre o rut erroneos, favor intentelo de nuevo ');
		}*/
}
function soloLetras(e)
{
   key = e.keyCode || e.which;
   tecla = String.fromCharCode(key).toLowerCase();
   letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
   //especiales = [8,37,39,46];

   tecla_especial = false;

	if(letras.indexOf(tecla)==-1 && !tecla_especial)
	{
		return false;
	}
}
function saludar(){
		var nombre = document.getElementById('nombre').value;
	alert(" " + nombre);
				
}
//function soloNumeros(evt)
function soloNumeros(e)
{
	tecla = (document.all) ? e.keyCode : e.which; 
	if (tecla==8) return true; 
	patron =/^[0-9.]+$/;//este acepta punto(.), si se quiere eliminar borrar el punto despues del 9. 
	te = String.fromCharCode(tecla); 
	return patron.test(te);
}

function validaralpha(e) 
{ 
	tecla = (document.all) ? e.keyCode : e.which; 
	if (tecla==8) return true; 
	patron =/[\ w\w.&ñ]/;//este acepta espacios entre medio, si se quiere eliminar los espacios poner [\w] 
	te = String.fromCharCode(tecla); 
	return patron.test(te);
}

function operacion()
{
	var select=$("#operacion option:selected").val();//text() para texto de select option
	var nro1=document.getElementById('nro1').value;
	var nro2=document.getElementById('nro2').value;
	if(nro1=='' || nro2=='')
	{
		alert('Debe Ingresar los valores!');
	}
	else
	{
	//alert(select);
	if(select==0)
	{
		alert('Debe seleccionar Operación!!!');
	}
	else if(select==1)
	{
		funcion='suma';
	}
	else if(select==2)
	{
		funcion='resta';
	}
	else if(select==3)
	{
		funcion='mult';
	}
	else if(select==4)
	{
		funcion='division';
	}
	if(select > 0)
	{		
		//alert(funcion);
		$.ajax({
		cache: false,
		// puede ser GET, POST
		type: "POST",  							
		// Tipo de retorno
		dataType: "html",
		// pagina php que recibe la llamada
		url: "http://72.14.183.67/ws/",  							
		// datos, ej: $_POST['data']
		data: {
			funcion:funcion,
			n1:nro1,
			n2:nro2				
		},
		beforeSend: function(){  
                    document.getElementById('divCargando').style.display="block";
                    $("#labelCargando").html('Cargando...');	
		},
		// acciones cuando me retorna algo el PHP
		success: function( msg){
			//console.log(msg);
                        document.getElementById('divCargando').style.display="none";
			if(msg=='error')
			{
				alert('Ha ocurrido un Error.');
			}
			else if(msg=='cero')
			{
				alert('Error!, Nro2 no puede ser cero.');
                                reiniciar();
			}
			else
			{
				document.getElementById('divResultado').style.display="block";
				$("#labelResultado").html('Resultado de la '+$("#operacion option:selected").text()+' es = '+msg);
				
			}
		},							
		// acciones cuando hay error en comunicacion el el php
		error: function(xhr, status,msg2 ){
			//alert('4');			
			console.log(xhr);
		}
	});//fin ajax
	}//fin else
	}
}

function reiniciar()
{
	document.getElementById('nro1').value='';
	document.getElementById('nro2').value='';
	$("#operacion").val(0);
	document.getElementById('divResultado').style.display="none";
        document.getElementById('divCargando').style.display="none";
}

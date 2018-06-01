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
function enviar(){
	var usu = document.getElementById('Nombre').value;
	var clave = document.getElementById('clave').value;
	var email = document.getElementById('email').value;
	
	var fun = 1;
	if (usu ==''|| clave==''|| email==''){
		alert("no ha ingresado todos los valores");
	}else{
		$.ajax({
			cache: false,
			// puede ser GET, POST
			type: 'POST',  							
			// Tipo de retorno
			dataType: 'html',
			// pagina php que recibe la llamada
			url:'ws/base.php',  							
			// datos, ej: $_POST['data'
			data: {
				$fun:fun,
				$clave:clave,
				$email:email,
				$user:usu
				},
			 success: function(dato){
				if (dato==1){
						alert ("valore agregados correctamente");
						document.getElementById('Nombre').value='';
						document.getElementById('clave').value='';
						document.getElementById('email').value='';
				 }
				 if(dato==2) {
					alert ("Usuario ya existe, intente con otro usuario");
				 }
				 if (dato==0){
					 alert ("Nombre o Usuario son incorrectos, intentelo de nuevo");
				 }
				 else {
			 $("#info").text(dato);
		 }},
		 error: function(xhr, status,msg2 ){
                    //alert('4');			
                    console.log(xhr)
				 }
				 
		});//fin ajax
	}
}
/*function mos(){
	//Access-Control-Allow-Origin: *;
	var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 20
        });
		lat: position.coords.latitude;
              lng: position.coords.longitude;
              lati= -33.6488897;
              lngi= lng: -70.779265;
	var infoWindow = new google.maps.InfoWindow({map: map});
	          navigator.geolocation.getCurrentPosition( function(position) {
            var pos=[
					lat,lng,lati,lngi];
			for (var x=0;x<2;x++ ){
				
			
            infoWindow.setPosition(pos);
            infoWindow.setContent('oferta!!.');
          },);
		   navigator.geolocation.getCurrentPosition( function(position) {
				var apos = {
			lat: -33.6488897, lng: -70.7792655
            };
            infoWindow.setPosition(apos);
            infoWindow.setContent('otra oferta.');
            map.setCenter(apos);
		    console.log(apos);
          },);
}*/

function registro(){
	window.location="registro.html";
}
function mostrar(){
	var pos;
	navigator.geolocation.getCurrentPosition(exito,error );
	function exito(position){
              lat= position.coords.latitude;
              lng= position.coords.longitude;
			  fun = 2;
			  console.log(lng);
		   $.ajax({
			cache: false,
			// puede ser GET, POST
			type: "POST",  							
			// Tipo de retorno
			dataType: "json",
			// pagina php que recibe la llamada
			url:"base.php",  							
			// datos, ej: $_POST['data'
			data: {
				lat:lat,
				lng:lng
				},
			success: function(dato){
					if (dato==1){
						alert ("valore agregados correctamente");
				 }else {
					 alert ("Nombre o Usuario son incorrectos, intentelo de nuevo");
						$("#result").text(dato);
				 }},error: function(xhr, status,msg2 ){
                    //alert('4');			
                    console.log(xhr)
				 }
		});//fin ajax
} 
}
function hacer(){
	var nom = document.getElementById('nom').value;
	var cla = document.getElementById('cla').value;
	var fun = 0;
	$.ajax({
			cache: false,
			// puede ser GET, POST
			type: 'POST',  							
			// Tipo de retorno
			dataType: 'html',
			// pagina php que recibe la llamada
			url:'ws/base.php',  							
			// datos, ej: $_POST['data'
			data: {
				$fun:fun,
				$nom:nom,
				$contra:cla
				},
				 success: function(dato){
					if (dato==1){
						window.location = "mapa2.html";
				 }else {
					 alert ("Nombre o Usuario son incorrectos, intentelo de nuevo");
				 }},error: function(xhr, status,msg2 ){
                    //alert('4');			
                    console.log(xhr)
				 }
		});//fin ajax	
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
	patron =/[\w.&ñ]/;//este acepta espacios entre medio, si se quiere eliminar los espacios poner [\w] 
	te = String.fromCharCode(tecla); 
	return patron.test(te);
}

function reiniciar()
{
	document.getElementById('nro1').value='';
	document.getElementById('nro2').value='';
	$("#operacion").val(0);
	document.getElementById('divResultado').style.display="none";
        document.getElementById('divCargando').style.display="none";
}

function validarEmail(email)
{
	//Creamos un objeto 
	object=document.getElementById(email);
	valueForm=object.value;
 
	// Patron para el correo
	var patron=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,2})+$/;
	if(valueForm.search(patron)==0)
	{
		//Mail correcto
		object.style.color="#000";
		$("#info").text("Email correcto");
		return;
	}
	//Mail incorrecto
	object.style.color="#f00";
	$("#info").text("Email erroneo");

}

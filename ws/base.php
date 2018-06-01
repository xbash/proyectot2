<?php

$con = new mysqli("127.0.0.1", "root", "", "usuario");
if ($con->connect_errno ) {
    echo "Fallo al conectar a MySQL: (" . $con->connect_errno . ") " . $mysqli->connect_error;
}

$fun= $_POST['$fun'];
if ($fun == 0){
	$nom= $_POST['$nom'];
	$contra= $_POST['$contra'];

	if (isset($nom)&& isset($contra)){
		$sql  = "SELECT * FROM personas WHERE usuario = '$nom' and clave = '$contra'";//SELECT * FROM personas WHERE nombre = '$user' AND Usu = '$rut' ";
		$resultado =  mysqli_query($con,$sql);
		$numfilas = $resultado->num_rows;
		for ($x=0;$x<$numfilas;$x++) {
			$fila = $resultado->fetch_object();
		    $nombr = $fila->usuario;
			$clave = $fila->clave;
			$correo= $fila->correo;
		}
		if ($clave == $contra and $nom == $nombr){
			echo 1;
			
		}else{
			echo 0;
		}
}else {
	echo "error";
}
}
if ($fun==1){
	$clave =$_POST['$clave'];
	$email= $_POST['$email'];
	$user=$_POST['$user'];
	$nom=" ";

	if (isset($clave)&& isset($user)&& isset($email)){
		$sql  = "SELECT * FROM personas WHERE usuario = '$user'";
		$resultado =  mysqli_query($con,$sql);
		$numfilas = $resultado->num_rows;
		for ($x=0;$x<$numfilas;$x++) {
			$fila = $resultado->fetch_object();
		    $nom = $fila->usuario;
			$clav = $fila->clave;
			$correo= $fila->correo;
		}
		if ($user == $nom){
			echo 2;
		}else {
			$sqls = "INSERT into personas values('$user','$clave','$email')";
			$resultados = mysqli_query($con,$sqls);
			echo 1;
		}
	}else{
		echo 0;
	}
}
//if ($fun==2){
	
mysqli_close($con);
	//}
//case 2;
?>
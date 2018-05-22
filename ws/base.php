<?php
	
//echo $lat = $_POST['lat'];
//echo $lng = $_POST['lng'];
echo $user = $_POST['$user'];//"beto";
echo $rut = $_POST['$rut']; 


$con = new mysqli("127.0.0.1", "root", "", "usuario");
if ($con-> connect_errno ) {
    echo "Fallo al conectar a MySQL: (" . $con->connect_errno . ") " . $mysqli->connect_error;
}

$sql  = "SELECT * FROM personas WHERE nombre = '$user' and Usu = '$rut'";//SELECT * FROM personas WHERE nombre = '$user' AND Usu = '$rut' ";
$resultado =  mysqli_query($con,$sql);

$numfilas = $resultado->num_rows;
for ($x=0;$x<$numfilas;$x++) {
	$fila = $resultado->fetch_object();
	$nombre = "<td>".$fila->Usu."</td>";
	$clave = "<td>".$fila->nombre."</td>";
	$correo= "<td>".$fila->correo."</td>";
}
if ($clave=$user and $rut = $nombre){
	echo "hola jose";
	header('foto.html');

	
}else{
	$ms=0;
	echo "error ";
}


$resultado->free();
$con->close();
?>
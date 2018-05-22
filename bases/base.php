<?php

$mysql_host = 'localhost';
$mysql_usuario = 'root';
$mysql_clave = 'root';
$mysql_bd ='usuario';

$con = mysql_connect($mysql_host, $mysql_usuario,$mysql_clave, $mysql_bd );

if (mysqli_connect_error()){
	echo "Error con la conexion: " . mysqli_connect_error();
}else{
	echo "conectado";
}
?>
<?php

$con = new mysqli("127.0.0.1", "root", "", "usuario");
if ($con->connect_errno ) {
    echo "Fallo al conectar a MySQL: (" . $con->connect_errno . ") " . $mysqli->connect_error;
}

	$clave =$_POST['$clave'];
	$email= $_POST['$email'];
	$user=$_POST['$user'];
	
	if (isset($clave)&& isset($user)&& isset($email)){
		$sql = "INSERT into personas values('$user','$clave','$email')";
		$resultado = mysqli_query($con,$sql);
		echo 1;
	}else {
		echo 0;
	}
mysqli_close($con);
	//}
//case 2;
?>
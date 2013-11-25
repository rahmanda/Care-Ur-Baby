<?php
/*header("access-control-allow-methods: GET, POST, OPTIONS");
header("access-control-allow-credentials: true");
header("access-control-allow-headers: Content-Type, *");
header("Content-type: application/json; charset=utf-8");
header("access-control-allow-origin: *");*/
$host="localhost";
$user="rahmanda";
$password="SmmKQKnypzSuFA4C";	
$koneksi=mysql_connect($host,$user,$password) or die("Connection Failed! Try Again!");
mysql_select_db("careurbaby");
/*if(isset($_POST['username']) and isset($_POST['password'])) {
	$username = mysql_real_escape_string($_POST['username']);
	$password = mysql_real_escape_string($_POST['password']);
	$sql = "SELECT nama, password FROM user WHERE nama='$username'";
	$result = mysql_query($sql) or die ("Query error: " . mysql_error());
	$row = mysql_fetch_assoc($result);
	if($row['password'] == $password){
		$response_array['status'] = 'success';
	} else {
		$response_array['status'] = 'error';
	}
	echo json_encode($response_array);
}*/
?>
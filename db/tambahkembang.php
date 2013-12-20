<?php
require_once("connect.php");
//if(isset($_POST['nama']) and isset($_POST['alamat']) and isset($_POST['tgl_lahir'])) {
	//$username = mysql_real_escape_string($_POST['username']);
	//$password = mysql_real_escape_string($_POST['password']);
	$berat = $_POST['berat']; $tinggi = $_POST['tinggi']; $tanggal = date('Y-m-d');
	$id = $_POST['id'];
	if($berat!=NULL)
	  $sqlberat = "INSERT INTO berat (berat, tanggal, bayi_id) VALUES ('$berat','$tanggal','$id')";
	if($tinggi!=NULL)
	$sqltinggi = "INSERT INTO tinggi (tinggi, tanggal, bayi_id) VALUES ('$tinggi','$tanggal','$id')";
	$resultberat = mysql_query($sqlberat) or die ("Query error: " . mysql_error());
	$resulttinggi = mysql_query($sqltinggi) or die ("Query error: " . mysql_error());
	if($resultberat&&$resulttinggi){
		$response_array['status'] = 'success';
	} else {
		$response_array['status'] = 'error';
	}
	echo json_encode($response_array);
//}
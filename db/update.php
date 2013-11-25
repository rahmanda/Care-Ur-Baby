<?php
require_once("connect.php");
if(isset($_POST['nama']) and isset($_POST['alamat']) and isset($_POST['tgl_lahir'])) {
	//$username = mysql_real_escape_string($_POST['username']);
	//$password = mysql_real_escape_string($_POST['password']);
	$nama = $_POST['nama']; $alamat = $_POST['alamat']; $tgl_lahir = $_POST['tgl_lahir'];
	$sql = "UPDATE user SET nama='$nama', alamat='$alamat', tgllahir='$tgl_lahir' WHERE nama='Mawar'";
	$result = mysql_query($sql) or die ("Query error: " . mysql_error());
	if($result){
		$response_array['status'] = 'success';
	} else {
		$response_array['status'] = 'error';
	}
	echo json_encode($response_array);
}
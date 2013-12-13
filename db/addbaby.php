<?php
require_once("connect.php");
//if(isset($_POST['nama']) and isset($_POST['alamat']) and isset($_POST['tgl_lahir'])) {
	//$username = mysql_real_escape_string($_POST['username']);
	//$password = mysql_real_escape_string($_POST['password']);
	$nama = $_POST['nama']; $jk = $_POST['jk']; $tgl_lahir = $_POST['tgl_lahir']; $tpt_lahir = $_POST['tpt_lahir'];
	$berat = $_POST['berat']; $tinggi = $_POST['tinggi'];
	$id = $_POST['id'];
	$sql = "INSERT INTO bayi (parent_id, nama, jeniskelamin, tglLahir) VALUES ('$id','$nama','$jk','$tgl_lahir')";
	$result = mysql_query($sql) or die ("Query error: " . mysql_error());
	if($result){
		$response_array['status'] = 'success';
	} else {
		$response_array['status'] = 'error';
	}
	echo json_encode($result);
//}
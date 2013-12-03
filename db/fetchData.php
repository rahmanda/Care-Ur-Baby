<?php
//memberi pengalamatan khusus untuk json
header('Content-type: application/json');
require_once("connect.php");
$username = $_GET['username'];
//query data
$sql = "SELECT nama AS namauser, alamat AS alamatuser, tgllahir AS tgllahiruser FROM user WHERE nama='".$username."'";
$result = mysql_query($sql) or die ("Query error: " . mysql_error());
 
//fetch dalam bentuk array
$records = array();
while($row = mysql_fetch_assoc($result)) {
	$records[] = $row;
}

echo json_encode($records);
?>
<?php
require_once("connect.php");

//query data
$id = $_POST['id'];
$sql = "SELECT * FROM user WHERE id='$id'";
$result = mysql_query($sql) or die ("Query error: " . mysql_error());
 
//fetch dalam bentuk array
//$records = array();
//while($row = mysql_fetch_assoc($result)) {
	//$records[] = $row;
//}
$records = mysql_fetch_assoc($result);
echo $_GET['jsoncallback'] . '(' . json_encode($records) . ');';
?>
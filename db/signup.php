<?php
require_once("connect.php");
require_once('../PHPMailer_v5.1/class.phpmailer.php');
//if(isset($_POST['nama']) and isset($_POST['alamat']) and isset($_POST['tgl_lahir'])) {
	//$username = mysql_real_escape_string($_POST['username']);
	//$password = mysql_real_escape_string($_POST['password']);
	$nama = $_POST['username']; $email = $_POST['email']; $password = $_POST['password'];
	$sql = "INSERT INTO user (nama, email, password) VALUES ('$nama','$email','$password')";
	$result = mysql_query($sql) or die ("Query error: " . mysql_error());
	if($result){
		$response_array['status'] = 'success';
		$mail = new PHPMailer(true);
		try{
			$mail->AddReplyTo("momotheambercat@gmail.com", "First Last");
			$mail->AddAddress("rahmandawibowo@gmail.com", "First Last");
			$mail->SetFrom("momotheambercat@gmail.com", "First Last");
			$mail->Subject = 'PHPMailer Test Subject via mail(), advanced';	
		} catch (phpmailerException $e) {
			echo $e->errorMessage();
		} catch (Exception $e) {
			echo $e->getMessage();
		}

		//mail("rahmandawibowo@gmail.com", "account for ".$email." have been successfully created", "text message");
	} else {
		$response_array['status'] = 'error';
	}
	echo json_encode($result);
//}
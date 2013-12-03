$('#home').live('pageshow', function(event) {
	$.getJSON(serviceURL + 'getuserdata.php?id=1', displayUserData);
});

function displayUserData(data) {
	var user = data.item;
	console.log(user);
	$('#username').text(user.nama);
}

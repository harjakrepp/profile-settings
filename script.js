/*Image Preview using JQuery*/
$(document).ready(()=>{
	$('#addPP').change(function(){
		const file = this.files[0];
		console.log(file);
		if (file){
			let readfile = new FileReader();
			readfile.onload = function(event){
				console.log(event.target.result);
				$('#profilePicture').attr('src', event.target.result);
			}
			readfile.readAsDataURL(file);
		}
	});
});
/*Alert for Submit*/
function resnAlert(){
	alert('Success Change Profile');
	document.getElementById('profileForm').reset();
}
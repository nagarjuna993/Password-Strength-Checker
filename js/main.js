$( document ).ready(function() {
	var strength = {
		0: '<span style="color:#b71c1c;">Worst</span>',
		1: '<span style="color:#f44336;">Bad</span>',
		2: '<span style="color:#ffeb3b;">Weak</span>',
		3: '<span style="color:#ff9800;">Good</span>',
		4: '<span style="color:#4caf50;">Strong</span>'
	};
	$( "#password" ).focus(function() {
  		$( "#password-strength-block" ).css("display", "block");
	});
	var password = document.getElementById('password');
	var pass_range = document.getElementById('password-strength-meter');
	var text = document.getElementById('password-strength-text');
	password.addEventListener('input', function()
	{
    	var val = password.value;
   		var result = zxcvbn(val);
	
    	// Update the password strength meter
    	pass_range.value = result.score+1;
   
    	// Update the text indicator
    	if(val !== "") {
        	text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<br><span class='feedback-block'>" + result.feedback.warning + "<br>" + result.feedback.suggestions + "</span";
    	}
    	else {
        	text.innerHTML = "";
    	}
	});
});
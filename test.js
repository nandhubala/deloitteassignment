function fun1(){
	var f=document.getElementById("first").value;
	var s=document.getElementById("second").value;
	
	document.getElementById("third").value=f+" "+s;
}


function fun2(){
	document.getElementById("img").src="../IMAGE/a.jpg";
	document.getElementById("imgtit").innerHTML="Bangalore";
}


function fun3(){
	var userValue = document.getElementById("fName").value;
	var namePattern = "^[A-Za-z ]+$";

	if(!userValue.match(namePattern))
		document.getElementById("errMsg").innerHTML="Name should be in Alphabets";
	else{
		document.getElementById("errMsg").innerHTML="";
	}
}



function fname(){
	var firstName = document.getElementById("fName").value;
	var fNamePattern = "^[A-Za-z ]+$";
	if(!firstName.match(fNamePattern)){
		document.getElementById("fNameError").innerHTML="First Name should be only Alphabets";
		return false;
	}
	else{
		document.getElementById("fNameError").innerHTML="";
		return true;
	}
}

function lname(){
	var lastName = document.getElementById("lName").value;
	var lNamePattern = "^[A-Za-z ]+$";
	if(!lastName.match(lNamePattern)){
		document.getElementById("lNameError").innerHTML="Last Name should be only Alphabets";
		return false;
	}
	else{
		document.getElementById("lNameError").innerHTML="";
		return true;
	}
}

function phone(){
	var phoneNo = document.getElementById("phone").value;
	var phonePattern="^[6-9]{1}[0-9]{9}$";
	if(!phoneNo.match(phonePattern)){
		document.getElementById("phoneError").innerHTML="Phone No. should Be Numeric";
		return false;
	}
	else{
		document.getElementById("phoneError").innerHTML="";
		return true;
	}
}

function mail(){
	var enteredEmail = document.getElementById("email").value;
	var emailPattern = "^[a-zA-Z0-9_.]+[@]{1}[a-zA-Z]+(.com|.in|.co.in)$";
	if(!enteredEmail.match(emailPattern)){
		document.getElementById("emailError").innerHTML="Enter Valid email";
		return false;
	}
	else{
		document.getElementById("emailError").innerHTML="";
		return true;
	}
}


function gen(){
	var elements = document.getElementsByName("gender");
	var count=0;
	for(var i=0;i<elements.length;i++){
		if(elements[i].checked)
			count++;
	}
	if(count==0){
		document.getElementById("genError").innerHTML="Please Select Your Gender";
		return false;
	}
	else{
		document.getElementById("genError").innerHTML="";
		return true;
	}
}


function language(){
	var elements = document.getElementsByName("lang");
	var count=0;
	for(var i=0;i<elements.length;i++){
		if(elements[i].checked)
			count++;
	}
	if(count==0){
		document.getElementById("langError").innerHTML="Please Select Languages You Know";
		return false;
	}
	else{
		document.getElementById("langError").innerHTML="";
		return true;
	}
}


function cty(){
	var e = document.getElementsByClassName("cityCls");
	var count=0;
	for(var i=0;i<e.length;i++){
		if(e[i].selected){
			count++;
		}
	}	
	if(count==0){
		document.getElementById("cityError").innerHTML="Please Select A City";
		return false;
	}
	else{
		document.getElementById("cityError").innerHTML="";
		return true;
	}
}



function submitForm(){
	if(fname() && lname() && phone() && gen() && mail() && language() && cty())
		return true;
	else
		return false;
}
// refer to question 4 before development starts for scope document

var submitBtm = document.getElementById("submitContact").addEventListener("click", validateForm);

function validateForm(){
    
    // First Name
    var firstName = document.getElementById("firstName").value;
        if(firstName == ""){
            document.getElementById("firstName").style.backgroundColor = "red";
            document.getElementById("firstNameError").style.display = "block";
        } else{
            document.getElementById("firstName").style.backgroundColor = "lightgreen";
            document.getElementById("firstNameError").style.display = "none";
        }

    // Last Name
    var lastName = document.getElementById("lastName").value;
        if(lastName == ""){
            document.getElementById("lastName").style.backgroundColor = "red";
            document.getElementById("lastNameError").style.display = "block";
        } else {
            document.getElementById("lastName").style.backgroundColor = "lightgreen";
            document.getElementById("lastNameError").style.display = "none";
        }

    // Phone
    function validatePhone(){
        var phone = document.getElementById("phone").value;
        var reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var valid = reg.test(phone);
        console.log(valid);
        if(valid == true){
            document.getElementById("phone").style.backgroundColor = "lightgreen";
            document.getElementById("phoneError").style.display = "none";
        } else if(valid == false){
            document.getElementById("phone").style.backgroundColor = "red";
            document.getElementById("phoneError").style.display = "block";
        }
    }   
    validatePhone();
    
    // E-mail
    function validateEmail(){
        var email = document.getElementById("email").value;
        var reg = /^[a-zA-z0-9._]+@[a-zA-Z0-9-_]+\.[a-zA-Z]{2,3}$/g;
        var validEmail = reg.test(email);
        console.log(validEmail);
        if(validEmail == true){
            document.getElementById("email").style.backgroundColor = "lightgreen";
            document.getElementById("emailError").style.display = "none";
        } else if(validEmail == false){
            document.getElementById("email").style.backgroundColor = "red";
            document.getElementById("emailError").style.display = "block";
        }
    }   
    validateEmail();
}

//Shakila Samaradiwakara 8886070
//this covers  - functions / conditions / datatypes / objects / event listeners / DOM  - add animation! - add calendar widjet
$(document).ready(function () {
    //2nd jQuery Widget - chosing a date
    $("#birthdate").datepicker();

})

document.getElementById("formBox").addEventListener('submit', (ev) => {

    ev.preventDefault();
    checkInputs();

})


//checking to see if the inputs are valids
function checkInputs() {

    //reseting error messages whenever register button is clicked
    document.getElementById("firstNameError").innerText = "";
    document.getElementById("usernameError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("repasswordError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("birthdateError").innerText = "";


    //store the inputs from the user first into variables
    let firstName = document.getElementById("firstName").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthdate").value;


    let validForm = true;

    //we will now trim the values inputted incase there's space in between the content - and validate the inputted values of users.

    if (firstName.trim() === "") {
        document.getElementById("firstNameError").innerText = "First name cannot be empty.";
        validForm = false;
    }

    if (username.trim() === "") {
        document.getElementById("usernameError").innerText = "Username cannot be empty.";
        validForm = false;
    }

    if (birthdate.trim() === "") {
        document.getElementById("birthdateError").innerText = "Birthday cannot be empty.";
        validForm = false;
    }
    else {
        const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateFormat.test(birthdate)) {
            document.getElementById("birthdateError").innerText = "Invalid format of Birthday. It should be YYYY-MM.";
            validForm = false;
        }
    }

    if (password.trim() === "") {
        document.getElementById("passwordError").innerText = "Password cannot be empty.";
        validForm = false;
    }

    if (repassword.trim() === "") {
        document.getElementById("repasswordError").innerText = "Password cannot be empty";
        validForm = false;
    }

    if (repassword.trim() !== password.trim()) {
        document.getElementById("repasswordError").innerText = "Password doesn't match";
        validForm = false;
    }

    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Email cannot be empty";
        validForm = false;
    }
    if (validForm) {
        alert('Form submitted successfully!');
    }

}

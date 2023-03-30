//Funtion for validating all form controls
function validateInput() {
    //Get all user input values
    let userName = document.getElementById("user-name").value;
    let Password = document.getElementById("password").value;
    let discountCode = document.getElementById("discount-code").value;
    let size = document.getElementById("burger-size").value;
    let numB = document.getElementById("num-burgers").value;
    let lengthUserName = userName.length;
    let lengthPassword = Password.length;
    let validForm = true;
   //check if value for number of burger is mumeric
    if (isNaN(numB)) {
        alert("The number of burgers must be Numeric");
        validForm = false;
    }
    //check if user name has been supplied.
    if(userName==""){
        alert("User Name can not be empty.");
        document.getElementById("user-name").focus();
        validForm = false;
    }
    //check if passrword has been supplied.
    if(Password==""){
        alert("Password  can not be empty.");
        document.getElementById("password").focus();
        validForm = false;
    }
     //check if number of burgers has been supplied.
    if(numB==""){
        alert("Number of burgers can not be empty.");
        document.getElementById("num-burgers").focus();
        validForm = false;
    }
     // check if discount code has been supplied.
    if(discountCode==""){
        alert("Discount code can not be empty.");
        document.getElementById("discount-code").focus();
        validForm = false;
    }
     //check if password length is equal to 9
    if(lengthPassword!= 9){
        alert("Password must be 9 characters in length");
        validForm = false;
    }
    // check if discount code has been supplied.
    if(discountCode == "extracheese"){

        alert("10% discount has been applied");
        validForm = false;
    }

  /// check if customer has selected super size burger and supply alert message
    var pizzaSize = document.getElementById("burger-size").value;
    if(pizzaSize == "super")
    {
        alert("Careful You selected  supersize. Eating too much of supersize burger may be harmful to your health!! ")
        validForm = false;
    }
}

//function for reloading page after submision.
function ReloadPage()
{
    window.location.reload();
}

// Function for alerting the user about health issues that may araise from eating too much of supersize burger
function burgerSize() {
     var pizzaSize = document.getElementById("burger-size").value;
     //Check if user selected supersized view
    if(pizzaSize == "super")
    {
        alert("Careful You selected  supersize. Eating too much of supersize burger may be harmful to your health!! ")
    }

  }

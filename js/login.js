//step-1 : add click event handler with the submit button
document.getElementById('btn-submit').addEventListener("click",function(){
    //get the email address...
    //alwasys rememeber to use .value to get the field text
    const emailField = document.getElementById('user-email').value;
    
    
    //get password
    //set id in the html element(password field!)
    const passwordField = document.getElementById("user-password").value;
    //console.log(passwordField);
    if(emailField === 'abc@abc.com' && passwordField ==='12345'){
        window.location.href = 'bank.html';
    
    }else{
       alert("invalid User");
    }
});


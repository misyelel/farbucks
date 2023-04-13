// form.addEventListener('submit', (e) => {
//     if (validation()) {
//     } else {
//         console.log("test")
//         e.preventDefault();
//     }
// });

var form = document.getElementById('form');
var fullname = document.getElementById('name');
var email = document.getElementById("email");
var password = document.getElementById("password");
var address = document.getElementById("address");
var check = document.getElementById("tc");

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     validation();
// });

function validation(){
    var nameValue = fullname.value.trim();
    var emailValue = email.value.trim();
    var passValue = password.value.trim();
    var addValue = address.value.trim();
    let cekName = cekEmail = cekPass =  cekAdd = cekTick = 0;


    if (nameValue == "") {
        error_alert(fullname, 'Full name cannot be blank!');
    } else if (nameValue.length < 2) {
        error_alert(fullname, 'Please input your full name!');
    } else {
        success_alert(fullname);
        cekName = 1;
    }

    if (emailValue === '') {
        error_alert(email, 'Email cannot be blank!');
    } else if (!emailValue.endsWith('@gmail.com')) {
        error_alert(email, "Email must contain '@gmail.com'!");
    } else {
        success_alert(email);
        cekEmail =1;
    }

    if (passValue == "") {
        error_alert(password, "Password cannot be blank!");
    } else if (passValue.length < 8) {
        error_alert(password, "Password must contain 8 characters!");
    } else {
        success_alert(password);
        cekPass = 1;
    }

    if (addValue == "") {
        error_alert(address, "Address cannot be blank!");
    } else if (addValue.length < 8) {
        error_alert(address, "Address must contain 8 characters!");
    } else {
        success_alert(address);
        cekAdd = 1;
    }
    if (!check.checked) {
        alert("Please indicate that you accept the Terms and Conditions");
    }else{
        cekTick=1;
    }
    if(cekName&&cekEmail&&cekPass&&cekAdd&&cekTick){
        return true
    }else
        return false
}


function error_alert(input,text){
    var formbox = input.parentElement;
    var small = formbox.querySelector('small');
    
    small.innerText = text;
    formbox.className = 'form-box error';
}

function success_alert(input){
    var formbox = input.parentElement;
    formbox.className = 'form-box success';
}

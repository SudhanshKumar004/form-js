function data(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#number').value;
    let psw = document.querySelector('#psw').value;
    let psw2 = document.querySelector('#psw2').value;

    console.log(name);
    console.log(email);
    console.log(number);
    console.log(psw);
    console.log(psw2);


    if(name === ""){
        document.querySelector('#errorname').innerHTML = "Please enter your name";
        let selectname = document.querySelector('#name');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";
        return false;
    }
    if(email === ""){
        document.querySelector('#errorname2').innerHTML = "Please enter your email";
        let selectemail = document.querySelector('#email');
        selectemail.style.borderColor = "red";
        selectemail.style.outlineColor = "red";
        return false;
    }
    if(number === ""){
        document.querySelector('#errorname3').innerHTML = "Please enter your number";
        let selectnumber = document.querySelector('#number');
        selectnumber.style.borderColor = "red";
        selectnumber.style.outlineColor = "red";
        return false;
    }
    if(psw === ""){
        document.querySelector('#errorname4').innerHTML = "Please enter your Password";
        let selectpsw = document.querySelector('#psw');
        selectpsw.style.borderColor = "red";
        selectpsw.style.outlineColor = "red";
        return false;
    }
    if(psw2 === ""){
        document.querySelector('#errorname5').innerHTML = "Please confirm your Password";
        let selectpsw2 = document.querySelector('#psw2');
        selectpsw2.style.borderColor = "red";
        selectpsw2.style.outlineColor = "red";
        return false;
    } 

    
    // if(name === ""){
    //     window.alert("Please Enter Your Name");
    // }
    // if(email === ""){
    //     window.alert("Please Enter Your Email");
    // }
    // if(number === ""){
    //     window.alert("Please Enter Your Number");
    // }
    // if(psw === ""){
    //     window.alert("Please Enter Your Password");
    // }
    // if(psw2 === ""){
    //     window.alert("Please Confirm Your Password");
    // }

    // return false; 
}
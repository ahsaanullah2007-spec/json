const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameField = document.getElementById("nameField");
    const namePattern = /^[A-Za-z\s'-]+$/

    const emailField = document.getElementById("emailField");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const err = document.getElementsByClassName("err");

    if(!namePattern.test(nameField.value)){
        err[0].innerHTML = 'Name must be proper';
    }
    else {
        err[0].innerHTML = '';
    }

    if(!emailPattern.test(emailField.value)){
        err[1].innerHTML = 'Email must be in correct format';
    }
    else {
        err[1].innerHTML = '';
    }


    if(namePattern.test(nameField.value) && emailPattern.test(emailField.value)){
        alert("Form Submitted Successfully");
        nameField.value = "";
        emailField.value = "";
    }

})
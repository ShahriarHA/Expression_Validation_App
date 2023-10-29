// // post code
// let exp =  /^\d{4}$/;
// let value = 4444;
// // console.log(exp.source);
// // console.log(exp);
// console.log(exp.test(value));

// // Bangladeshi phone number
// let phone_number1 = /^\+8801[0-9]{9}$/;
// let phone_number2 = /^01[0-9]{9}$/;
// let number = "01786051980";
// if(phone_number1.test(number)){
//     console.log(`number is matched1!`);
// }
// else if(phone_number2.test(number)){
//     console.log("number is matched2!");
// }

// // emails
// let email_e = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let email1 = 'shussain@gmai.yahoo.com';
// let email2 = 'shahriar.hussain@domin.com';
// console.log(email_e.test(email1));

// start from here
// get the optionss
let email = document.querySelector('#email');
let post_code = document.querySelector('#post-code');
let phone_number = document.querySelector('#phone-number');
let card_body = document.querySelector('#card-body');

// add EventListeners
email.addEventListener('click',emailActive);
post_code.addEventListener('click',postCodeActive);
phone_number.addEventListener('click',phoneNumberActive);

// functions
function emailActive(e){
    let div = document.createElement('div');
    div.className = 'input-group mb-3';

    let span = document.createElement('span');
    span.className = 'input-group-text';
    span.id = 'span-class';
    span.appendChild(document.createTextNode('YOUR EMAIL'));

    let input = document.createElement('input');
    input.setAttribute('type','email');
    input.className = 'form-control shadow-none';
    input.id = 'emailAddress';
    input.setAttribute('placeholder','name@example.com');

    div.appendChild(span);
    div.appendChild(input);

    card_body.appendChild(div);

    checkEmail();
}
function checkEmail(e){
    let input_field = document.querySelector('#emailAddress');
    input_field.addEventListener('click',takeInput);
}
function takeInput(e){
    let yourEmail = prompt(`Enter your email address 📧`);
    let input_field = document.querySelector('#emailAddress');
    input_field.value = yourEmail;

    // console.log(yourEmail);
    let reg_exp_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(reg_exp_email.test(yourEmail)){
        // console.log('Your email is VALID');
        let div = document.createElement('div');
        div.className = 'alert alert-success mt-3';
        div.setAttribute('role','alert');
        div.appendChild(document.createTextNode('Your email is VALID'));

        card_body.appendChild(div);
        // email.disable = true;
        email.parentElement.remove();
    
    }
    else{
        let div = document.createElement('div');
        div.className = 'alert alert-success mt-3';
        div.setAttribute('role','alert');
        div.appendChild(document.createTextNode('Your email is INVALID'));

        card_body.appendChild(div);
        // email.disabled = true;
        email.parentElement.remove();
    }
}


function postCodeActive(e){
    let div = document.createElement('div');
    div.className = 'input-group mb-3';

    let span = document.createElement('span');
    span.className = 'input-group-text';
    span.id = 'span-class';
    span.appendChild(document.createTextNode('POST CODE'));

    let input = document.createElement('input');
    input.setAttribute('type','text');
    input.className = 'form-control shadow-none';
    input.id = 'postCode';
    input.setAttribute('placeholder','write your post code!');

    div.appendChild(span);
    div.appendChild(input);

    card_body.appendChild(div);

    checkPostCode();
}
function checkPostCode(e){
    let input_field = document.querySelector('#postCode');
    input_field.addEventListener('click',takePostCode);
}
function takePostCode(e){
    let postCode = prompt(`enter your post code`);
    let input_field = document.querySelector('#postCode');
    input_field.value = postCode;

    let reg_exp_postCode = /^\d{4}$/;

    if(reg_exp_postCode.test(postCode)){
        let div = document.createElement('div');
        div.className = 'alert alert-success mt-3';
        div.setAttribute('role','alert');
        div.appendChild(document.createTextNode('Your Post Code is VALID'));

        card_body.appendChild(div);
        post_code.parentElement.remove();
    }
    else{
        let div = document.createElement('div');
        div.className = 'alert alert-warning mt-3';
        div.setAttribute('role','alert');
        div.appendChild(document.createTextNode('Your Post Code is INVALID'));

        card_body.appendChild(div);
        post_code.parentElement.remove();
    }
}

function phoneNumberActive(e){
    let div = document.createElement('div');
    div.className = 'input-group mb-3';

    let span = document.createElement('span');
    span.className = 'input-group-text';
    span.id = 'span-class';
    span.appendChild(document.createTextNode('Phone Number'));

    let input = document.createElement('input');
    input.setAttribute('type','text');
    input.className = 'form-control shadow-none';
    input.id = 'phoneNumber';
    input.setAttribute('placeholder','write your Phone Number');

    div.appendChild(span);
    div.appendChild(input);

    card_body.appendChild(div);

    checkNumber();
}
function checkNumber(e){
    let input_field = document.querySelector('#phoneNumber');
    input_field.addEventListener('click',takeNumber);
}
function takeNumber(e){
    let phoneNumber = prompt(`enter your post code`);
    let input_field = document.querySelector('#phoneNumber');
    input_field.value = phoneNumber;

    let reg_exp_number = /^01[0-9]{9}$/;
    let reg_exp_number1 = /^\+8801[0-9]{9}$/;

    if(reg_exp_number.test(phoneNumber)){
        let div = document.createElement('div');
        div.className = 'alert alert-success mt-3';
        div.setAttribute('role','alert');
        div.appendChild(document.createTextNode('Your Phone Number is VALID'));

        card_body.appendChild(div);
        phone_number.parentElement.remove();
    
    }
    else if(reg_exp_number1.test(phoneNumber)){
        let div = document.createElement('div');
        div.className = 'alert alert-success mt-3';
        div.setAttribute('role','alert');
        div.appendChild(document.createTextNode('Your Phone Number is VALID'));

        card_body.appendChild(div);
        phone_number.parentElement.remove();
    }
    else{
        let div = document.createElement('div');
        div.className = 'alert alert-warning mt-3';
        div.setAttribute('role','alert');
        div.appendChild(document.createTextNode('Your Phone Number is INVALID'));

        card_body.appendChild(div);
        phone_number.parentElement.remove();
    }
}


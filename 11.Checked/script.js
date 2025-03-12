const check = document.getElementById("check");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");

const submit = document.getElementById("submit");
const subRest = document.getElementById("subRest");
const payment = document.getElementById("payment");



submit.onclick = function(){
    if(check.checked){
        subRest.textContent = "You are subscribe!";
    }
    else{
        subRest.textContent = "You are not subscribe.";
    }

    if(visa.checked){
        payment.textContent = "You are paying with visa.";
    }
    else if(mastercard.checked){
        payment.textContent = "You are paying with mastercard.";
    }
    else if(paypal.checked){
        payment.textContent = "You are paying with paypal.";
    }
    else{
        payment.textContent = "You must choose a payment system";

    }
}

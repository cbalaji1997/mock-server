document.querySelector("form").addEventListener("submit", signUpFun);

var signData = JSON.parse(localStorage.getItem("userCred"))||[];
function signUpFun(){

    event.preventDefault();

    var signObj = {
        Name: document.querySelector("#name").value,
        Email: document.querySelector("#email").value,
        Pass: document.querySelector("#password").value
    };
    window.location.href = "login.html";
    signData.push(signObj);
    console.log(signData);
    localStorage.setItem("userCred",JSON.stringify(signData));
}
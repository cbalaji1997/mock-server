document.querySelector("form").addEventListener("submit", LoginFun);
var regeUser = JSON.parse(localStorage.getItem("userCred"));
console.log(regeUser);

function LoginFun(event){
    event.preventDefault();
    var Logemail = document.querySelector("#email").value;
    var Logpass = document.querySelector("#password").value;

    for(var i=0; i<regeUser.length; i++)
    {
        if(regeUser[i].Email == Logemail)
        {
            if(regeUser[i].Pass == Logpass)
            {
                alert("Login Successfull");
                window.location.href = "books.html";  
                break;
            
             }
            else
            {
                alert("invalid Credentials");
                break;
            }
            
        }
    }

}
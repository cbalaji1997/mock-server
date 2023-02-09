document.querySelector("#form"),addEventListener("submit",handleForm);


function handleForm(e){
    e.preventDefault();
    

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    console.log(email, password);

    if(email==="admin@gmail.com" && password==="masai"){
        alert("login successful");
        window.location.href="admin.html"
    }
    else{
        alert("please check credentials")
    }

}
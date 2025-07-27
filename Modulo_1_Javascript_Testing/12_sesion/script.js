document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");
    
    
    //Validaciones simples
    if(user === "" || password === ""){
        message.textContent = "Todos los campos son obligatorios";
        message.style.color = "red";
        return;
    }
    if(user === "admin" && password === "1234"){
        message.textContent = "Login Exitoso!";
        message.style.color = "green";
    }
    else{
        message.textContent = "Usuario o contraseña incorrectos!";
        message.style.color = "red";
    }
})
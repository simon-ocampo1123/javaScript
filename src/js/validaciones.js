document.getElementById('formLogin').addEventListener('submit', function (event) {
    event.preventDefault();
});

function validarFormLogin(formLogin) {
    let usuario = formLogin.usuario;
    if (usuario.value == "") {
        alert('Debe indicar su nombre de usuario');
        usuario.focus();
        usuario.select();
        return false;
    }

    let password = formLogin.password;
    if (password.value == "" || password.value.length < 8) {
        alert('Debe indicar una contraseña mayor a 8 caracteres');
        password.focus();
        password.select();
        return false;
    }

    window.location.href = "index.html"; // Redirige a la página principal
    return true;
};

document.getElementById('formRegister').addEventListener('submit', function (event) {
    event.preventDefault();
});

function validarFormRegister(formRegister) {
    let fullName = formRegister.fullName;
    let email = formRegister.email;
    let user = formRegister.user;
    
    if(fullName.value == "" || email.value == "" || user.value == "") {
        alert('Debe rellenar todos los campos');
        return false;
    }

    let pass = formRegister.pass;
    let confirmPass = formRegister.confirmPass;
    if(pass.value != confirmPass.value) {
        alert('Asegurese de que ambas contraseñas sean iguales');
        return false;
    }
    window.location.href = "login.html"; 
    return true;
};


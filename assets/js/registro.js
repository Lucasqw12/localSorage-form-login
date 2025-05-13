const inputUser = document.querySelector("#log-usuario")
const inputpassaword = document.querySelector("#log-senha")
const inputcomfirmPassaword = document.querySelector("#log-confirmar-senha")
const btnRegister = document.querySelector("#signInbtn")

const cadastrarUsuario = () => {
    let user = inputUser.value 
    let passaword = inputpassaword.value 
    let confirmpassword = inputcomfirmPassaword.value 

    if(passaword == confirmpassword && user.trim() != "") {
        localStorage.setItem("user", user)
        localStorage.setItem("password", passaword)
        window.location.href =  '../../index.html'
        alert("cadastro finalizado com sucesso!")
            return;
        

    }
    lert("falha no cadastro!")
}


btnRegister.addEventListener("click", cadastrarUsuario)
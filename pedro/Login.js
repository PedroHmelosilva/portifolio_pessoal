function logar(){

    var Login = document.getElementById('login').value;
    var Senha = document.getElementById('senha').value;

    if(Login == "Etecbest" && Senha == "Lendasdovav"){
        alert('Bem Vindo, Devs!');

        location.href = "projeto.html";

    }else{
        alert('Erro!!!');
    }
}
function logar(){

    var Login = document.getElementById('login').value;
    var Senha = document.getElementById('senha').value;

    if(Login == "Pedrohmelo" && Senha == "#Pedro.Site-login@22#"){
        alert('Olá pedro, seja bem-vindo!');

        location.href = "indexpedro.html";

    }else{
        alert('Erro!!!');
    }
}
var email = prompt("Digite o e-mail :) ")

function validaEmail(email){
    var verificacao = email.indexOf("@");
    if ( verificacao < 0){
       return false
    } else {
        return true
    }
}

function exibeResultadoValidacao(resultado){

    if (validaEmail(resultado) == true){
        return document.write("<p> E-mail validado </p>")
    } else {
        return document.write("<p> E-mail fornecido INVALIDO </p>")
    }
}

console.log(exibeResultadoValidacao(validaEmail(email)))

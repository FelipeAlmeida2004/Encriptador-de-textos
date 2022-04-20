
function criptografar(){

    var msg = texto.value
    var cod = msg.replaceAll("e", "enter").
    replaceAll("i","imes").
    replaceAll("a", "ai").
    replaceAll("o","ober").
    replaceAll("u", "ufat")
    document.getElementById('retorno').innerHTML = `<textarea name="" id="menssagem" rows="10">${cod}</textarea>`
    document.getElementById('retorno').innerHTML += `<button class="botao3"  onclick="copiar()">Copiar</button>`
}

function descriptografar(){

    var msg = texto.value
    var cod = msg.replaceAll("enter", "e").
    replaceAll("imes","i").
    replaceAll("ai", "a").
    replaceAll("ober","o").
    replaceAll("ufat", "u")
    document.getElementById('retorno').innerHTML = `<textarea name="" id="menssagem" rows="10">${cod}</textarea>`
    document.getElementById('retorno').innerHTML += `<button class="botao3"  onclick="copiar()">Copiar</button>`

}

function copiar(){
   
    var copy = document.getElementById("menssagem")
    var copiado = copy.value
    navigator.clipboard.writeText(copiado)
    alert("Copiado!")
    

}

var texto = document.querySelector('textarea')
var button = document.querySelector('button#btn1')
button.onclick = criptografar
var button2 = document.querySelector('button#btn2')
button2.onclick = descriptografar


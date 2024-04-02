const textArea = document.querySelector("#msgTextarea");
const resultMessage = document.querySelector("#resultMessage");

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function btnEncrypt() {
    const textoEncriptar = encriptar(textArea.value);
    if(textoEncriptar.length<1){
        exibirImagemAlerta();
        alert("Digite o texto a ser criptografado");
    }else{
        ocultarImagemAlerta()
        resultMessage.value = textoEncriptar;
        textArea.value = "";

    }
}

function btnDecrypt() {
    const textoDescriptar = desencriptar(textArea.value);
    if(textoDescriptar.length<1){
        exibirImagemAlerta();
        alert("Digite o texto a ser descriptografado");
    }else{
        ocultarImagemAlerta()
        resultMessage.value = textoDescriptar;
        textArea.value = "";

    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDescriptada) {
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptada;
}

function btnCopiar() {
    if (resultMessage.value === "") {
        alert("Não há mensagem a ser copiada");
    } else {
        resultMessage.select();
        document.execCommand("copy");
        resultMessage.value = "";
        exibirImagemAlerta();
    }
}

function validarTexto(element) {
    let texto = element.value.toLowerCase(); // Converte para minúsculas
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove acentos
    const textoSemSimbolos = texto.replace(/[^a-z\s]/g, ''); // Remove símbolos exceto letras e espaços
    element.value = textoSemSimbolos;
}


const imagemBoneco = document.querySelector('#boneco');
const imagemCampoVazio = document.querySelector('#campoVazio');


function exibirImagemAlerta() {
    imagemBoneco.style.display = 'block';
    imagemCampoVazio.style.display = 'block';

}

function ocultarImagemAlerta() {
    imagemBoneco.style.display = 'none';
    imagemCampoVazio.style.display = 'none';
}
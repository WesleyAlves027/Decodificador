var botaoCodificar = document.querySelector('.button-codificar')
var botaoDecodificar = document.querySelector('.button-descodificar')
var inputResposta = document.querySelector('.input-resposta')
var botaoCopiar = document.querySelector('.button-copiar')
var texto = document.querySelector('.recebeTexto')

function sumirImagem(){
    var imagemNop = document.querySelector('.imagem-nop')
    imagemNop.style.display="none"
    var imagemDecodificado = document.querySelector('.imagem-decodificado')
    imagemDecodificado.style.display='none'
    var imagemEncontrado = document.querySelector('.imagem-encontrado')
    imagemEncontrado.style.display='block'
    botaoCopiar.style.display='block'

}
function sumirImagem2(){
    var imagemNop = document.querySelector('.imagem-nop')
    imagemNop.style.display="none"
    var imagemEncontrado = document.querySelector('.imagem-encontrado')
    imagemEncontrado.style.display='none'
    var imagemDecodificado = document.querySelector('.imagem-decodificado')
    imagemDecodificado.style.display='block'
    botaoCopiar.style.display='block'
}
function sumirButtonCopiar(){
    var imagemNop = document.querySelector('.imagem-nop')
    imagemNop.style.display="block"
    var imagemEncontrado = document.querySelector('.imagem-encontrado')
    imagemEncontrado.style.display='none'
    var imagemDecodificado = document.querySelector('.imagem-decodificado')
    imagemDecodificado.style.display='none'
    texto.value = ""
    inputResposta.value =""
    botaoCopiar.style.display='none'
}
texto.addEventListener('click',function(e){
    e.preventDefault()
    texto.value = ""
});

function textoNaoEncontrado(){
    var imagemNop = document.querySelector('.imagem-nop')
    imagemNop.style.display="block"
    var imagemDecodificado = document.querySelector('.imagem-decodificado')
    imagemDecodificado.style.display='none'
    inputResposta.value = "Insira um texto primeiro !!!!"
    botaoCopiar.style.display='none'
}
botaoCodificar.addEventListener ('click', function(e){
    e.preventDefault()
    var arrayTexto = texto.value.split('')

    var codigo1 = "e"
    var codigo2 = "i"
    var codigo3 = "a"
    var codigo4 = "o"
    var codigo5 = "u" 

    for(i=0; i < arrayTexto.length; i++){
        sumirImagem();
        if(arrayTexto[i] == (codigo1) || (codigo2) || (codigo3) || (codigo4) || (codigo5)){
            inputResposta.value  = texto.value.toLowerCase().replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai')
            .replaceAll('o', 'ober').replaceAll('u', 'ufat')
        }
    }
});

botaoDecodificar.addEventListener ('click', function(e){
    e.preventDefault()
    sumirImagem2();

   
        if(texto.value ==  ('enter') || ('imes') || ('ai') || ('ober') || ('ufat')){
            inputResposta.value = texto.value.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u')
        }
        if(texto.value == '' ){
            textoNaoEncontrado()
        }

        
});

botaoCopiar.addEventListener ('click', function(){
    var copiarTexto = document.querySelector('.input-resposta').value;
    navigator.clipboard.writeText(copiarTexto);
    sumirButtonCopiar();
   

    



});

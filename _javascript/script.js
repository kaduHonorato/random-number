// Variáveis criadas a partir de TAGS HTML

var txtTagLimiInferior = document.querySelector("#txtTagLimiInferior");  // Armazena o texto da tag legend do número de menor valor do intervalo;
var txtTagLimiSuperior = document.querySelector("#txtTagLimiSuperior");  // Armazena o texto da tag legend do número de maior valor do intervalo;
var tagLimiteInferior = document.querySelector("#tagLimiteInferior"); // Armazena o número de menor valor do intervalo;
var tagLimiteSuperior = document.querySelector("#tagLimiteSuperior"); // Armazena o número de maior valor do intervalo;
var tagBtGeraNumero = document.querySelector("#tagBtGeraNumero"); // Botão que chama a função que gera o número; 
var tagExibeNumero = document.querySelector("#tagExibeNumero"); // Div que exibe o número gerado;

// ==================================================================

// Variáveis Auxiliares

var numLimiteInferior;
var numLimiteSuperior;
var numAleatorio;

// ===================================================================



inicio();

// Função Padrão de início de código

function inicio(){

tagLimiteInferior.addEventListener("input",defineValoresValidosTagsNumber);
tagLimiteSuperior.addEventListener("input",defineValoresValidosTagsNumber);
tagBtGeraNumero.addEventListener("click",geraNumeroAleatorio);

checaIdiomaNavegador();
defineValoresValidosTagsNumber();


}

// ====================================================================

// Função que checa o idioma do navegador

function checaIdiomaNavegador(){


    if(navigator.language != "pt-BR" && navigator.language != "pt-PT"){

    txtTagLimiInferior.innerHTML = "Inferior Limit";
    txtTagLimiSuperior.innerHTML = "Upper Limit";  
    tagBtGeraNumero.innerHTML = "Generate Number";
    
    }

}

// ========================================



// Função que define quais valores são válidos para as TAGS de tipo number 

function defineValoresValidosTagsNumber(){

    tagLimiteInferior.max =  parseInt(tagLimiteSuperior.value) - 1;
    tagLimiteSuperior.min =  parseInt(tagLimiteInferior.value) + 1;

    chegaValorTagsNumber();


}

// ==============================================================================



// Função que checa os valores contidos nas Tags number 

function chegaValorTagsNumber(){
  
if(tagLimiteInferior.checkValidity() && tagLimiteSuperior.checkValidity()){

    
    mudaEstadoBt(false);   
    numLimiteInferior = parseInt(tagLimiteInferior.value);
    numLimiteSuperior = parseInt(tagLimiteSuperior.value);

  

}else{

    mudaEstadoBt(true);    
    exibeNumero("");
}

}

// =======================================================


// Funçao que muda o estado do botão que chama a função que gera o número aleátorio

function mudaEstadoBt(chave){

tagBtGeraNumero.disabled = chave; 

}

// =========================================================


// Função que gera o número aleátorio

function geraNumeroAleatorio(){

numAleatorio = numLimiteInferior + Math.round( Math.random() *  (numLimiteSuperior - numLimiteInferior));

provaReal();
exibeNumero(numAleatorio);


}

// ========================================================


// Função que Exibe o número aleátorio gerado

function exibeNumero(n){

    tagExibeNumero.innerHTML = n;

}

// ========================================================


// Função que prova que todos os números do intervalo podem ser gerados

function provaReal(){

    var intervaloNumeros = [];
    var n = numLimiteInferior;
    
    for(var x = 0; x <= numLimiteSuperior - numLimiteInferior; x++){
    
    intervaloNumeros[x] = n++;
    
    }
   
    console.log("- - - - - - - - - - - - - -");
    
    while(intervaloNumeros.length){
    
        numAleatorio = numLimiteInferior + Math.round( Math.random() *  (numLimiteSuperior - numLimiteInferior)); 
        var indice = intervaloNumeros.indexOf(numAleatorio);
    
    
        if(indice != -1){
        console.log(intervaloNumeros[indice]);
        intervaloNumeros.splice(indice,1); 
        }
    }
    
}

// =====================================================================
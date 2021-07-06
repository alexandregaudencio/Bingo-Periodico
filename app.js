var elementos = document.getElementById("elementos");

var arrayElementos = [
    "Não pertence a nenhuma família ou grupo.",
    "gás nobre de menor número atômico.",
    "Apresenta distribuição eletrônica 1s<sup>2</sup> 2s<sup>1</sup>.",
    "Segundo elemento do segundo período.",
    "Único ametal do grupo 13.",
    "Elemento do 2 ºperíodo e grupo 14.",
    "Apresenta distribuição eletrônica 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>3</sup>.",
    "Calcogênio de menor número atômico.",
    "Halogênio do 2º período.",
    "Segundo gás nobre da tabela periódica.",
    "Metal alcalino do 3º período.",
    "Metal alcalino terroso do 3º período.",
    "Metal, do 3º e grupo 13.",
    "Elemento do 3º período e grupo 14.",
    "Elemento do 3º período e grupo 15.",
    "Calcogênio do 3º período.",
    "Segundo Halogênio da tabela períodica.",
    "Gás nobre do 3º período.",
    "Elemento do 4º período e grupo 1.",
    "Elemento do 4º período e grupo 2.",
    "Primeiro metal de transição da tabela periódica."
    
]

var numeroAleatorio;


function GerarAleatório() {
    numeroAleatorio = Math.floor(Math.random()*arrayElementos.length);
}


function NovoElemento() {
    GerarAleatório();
    if (arrayElementos.length != 0) {
        window.alert(arrayElementos[numeroAleatorio])
        elementos.innerHTML += "<br> - "+arrayElementos[numeroAleatorio];
        arrayElementos.splice(numeroAleatorio, 1);
        console.log(arrayElementos)
    } else {
       
    }
}

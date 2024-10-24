let palavraSecretaCategoria;

let palavraSecretaSorteada;

let listaDinamica = [];

let tentativas = 6;

const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "NAÇÃO"
    },
    palavra001 = {
        nome: "EQUADOR",
        categoria: "NAÇÃO"
    },
    palavra005 = {
        nome: "MALDIVAS",
        categoria: "NAÇÃO"
    },
    palavra006 = {
        nome: "INGLATERRA",
        categoria: "NAÇÃO"
    },
    palavra007 = {
        nome: "GROENLÂNDIA",
        categoria: "CONSIDERADO A MAIOR ILHA DO MUNDO"
    },
    palavra008 = {
        nome: "MALAQUIAS",
        categoria: "BÍBLIA"
    },
    palavra009 = {
        nome: "JOÃO BATISTA",
        categoria: "BATIZOU JESUS"
    },
    palavra010 = {
        nome: "PAULO",
        categoria: "APÓSTOLO DE JESUS"
    },
    palavra011 = {
        nome: "MATEUS",
        categoria: "APÓSTOLO DE JESUS"
    },
    palavra012 = {
        nome: "JUDAS ISCARIOTES",
        categoria: "APÓSTOLO DE JESUS"
    },
    palavra013 = {
        nome: "DANIEL",
        categoria: "PROFETA"
    },
    palavra014 = {
        nome: "SENAQUERIBE",
        categoria: "REI DA ASSÍRIA"
    },
    palavra015 = {
        nome: "BELSAZAR",
        categoria: "REI DOS CALDEUS"
    },
    palavra016 = {
        nome: "BIOS",
        categoria: "INFORMÁTICA BASIC INPUT/OUTPUT"
    },
    palavra017 = {
        nome: "DDOS",
        categoria: "TIPO DE ATAQUE HACKER"
    },
    palavra018 = {
        nome: "DNS",
        categoria: "INFORMÁTICA"
    },
    palavra019 = {
        nome: "SOFTWARE",
        categoria: "INFORMÁTICA"
    },
    palavra020 = {
        nome: "HARDWARE",
        categoria: "INFORMÁTICA"
    },
    palavra021 = {
        nome: "BICICLETA",
        categoria: "MEIO DE TRANSPORTE"
    },
    palavra022 = {
        nome: "LANCHA",
        categoria: "MEIO DE TRANSPORTE"
    },
    palavra023 = {
        nome: "NAVIO",
        categoria: "MEIO DE TRANSPORTE"
    },
    palavra0024 = {
        nome: "TELEFÉRICO",
        categoria: "MEIO DE TRANSPORTE"
    },
    palavra025 = {
        nome: "MOTOCICLETA",
        categoria: "MEIO DE TRANSPORTE"
    },
    palavra026 = {
        nome: "BARCO",
        categoria: "MEIO DE TRANSPORTE"
    },
    palavra027 = {
        nome: "AERONAVE",
        categoria: "MEIO DE TRANSPORTE"
    },
    palavra028 = {
        nome: "TREM",
        categoria: "MEIO DE TRANSPORTE"
    },
    palavra029 = {
        nome: "CAIAQUE",
        categoria: "MEIO DE TRANSPORTE"
    },
    palavra030 = {
        nome: "FUNICULAR",
        categoria: "MEIO DE TRANSPORTE"
    },
    palavra031 = {
        nome: "MELÂNCIA",
        categoria: "FRUTA"
    },
    palavra032 = {
        nome: "AMENDOIM",
        categoria: "LEGUMINOSA OLEAGINOSA"
    },
    palavra033 = {
        nome: "ESFIRRA",
        categoria: "PEQUENA TORTA DA SÍRIA"
    },
    palavra034 = {
        nome: "PÃO DE QUEIJO",
        categoria: "COMIDA TÍPICA DE MG"
    },
    palavra035 = {
        nome: "JANTAR",
        categoria: "TIPO DE REFEIÇÃO"
    },
    palavra036 = {
        nome: "MELÃO",
        categoria: "FRUTA"
    },
    palavra037 = {
        nome: "DESJEJUM",
        categoria: "TIPO DE REFEIÇÃO"
    },
    palavra038 = {
        nome: "MASTIGAR",
        categoria: "PREPRARAÇÃO DO PROCESSO DIGESTIVO"
    },
    palavra039 = {
        nome: "ENGOLIR",
        categoria: "PROCESSO DIGESTIVO"
    },
    palavra040 = {
        nome: "CUSCUZ",
        categoria: "ALIMENTO"
    },
    palavra040 = {
        nome: "DRAGÃO",
        categoria: "ANIMAL EXTINTO"
    },
    palavra041 = {
        nome: "GALINHA",
        categoria: "ANIMAL"
    },
    palavra042 = {
        nome: "PAVÃO",
        categoria: "ANIMAL"
    },
    palavra043 = {
        nome: "CAMÊLO",
        categoria: "ANIMAL"
    },
    palavra044 = {
        nome: "PERU",
        categoria: "ANIMAL"
    },
    palavra045 = {
        nome: "ZEBRA",
        categoria: "ANIMAL"
    },
    palavra046 = {
        nome: "DROMEDÁRIO",
        categoria: "ANIMAL"
    },
    palavra047 = {
        nome: "CALANGO",
        categoria: "ANIMAL"
    },
    palavra048 = {
        nome: "SAGUI",
        categoria: "ANIMAL"
    },
    palavra049 = {
        nome: "LAGARTIXA",
        categoria: "ANIMAL"
    },
    palavra050 = {
        nome: "HIPOPÓTAMO",
        categoria: "ANIMAL"
    },
    palavra051 = {
        nome: "A ERA DO GELO",
        categoria: "FILME"
    },
    palavra052 = {
        nome: "HOMEM ARANHA",
        categoria: "FILME"
    },
    palavra053 = {
        nome: "PAI HERÓI",
        categoria: "NOVELA DE 1979"
    },
    palavra054 = {
        nome: "TELA QUENTE",
        categoria: "PROGRAMA DE TV"
    },
    palavra055 = {
        nome: "O SUPER MAN",
        categoria: "FILME"
    },
    palavra056 = {
        nome: "O REI DO GADO",
        categoria: "NOVELA"
    },
    palavra057 = {
        nome: " A MULHER  MARAVILHA",
        categoria: "FILME"
    },
    palavra058 = {
        nome: "O INCRÍVEL HULK",
        categoria: "FILME"
    },
    palavra059 = {
        nome: "O BOB ESPONJA",
        categoria: "DESENHO ANIMADO"
    },
    palavra060 = {
        nome: "PÂNICO NA TV",
        categoria: "PROGRAMA DE TV"
    },
    palavra061 = {
        nome: "MOTO",
        categoria: "MOTOCICLETA CONHECIDA COMO?"
    },
    palavra062 = {
        nome: "ESTER",
        categoria: "RAINHA DA PÉRSIA"
    },
    palavra063 = {
        nome: "O BEM AMADO",
        categoria: "NOVELA DE 1973"
    },
    palavra064 = {
        nome: "PECADO RASGADO",
        categoria: "NOVELA DE 1978"
    },
    palavra065 = {
        nome: "ÁSIA",
        categoria: "MAIOR CONTINENTE EM EXTENSÃO TERRITORIAL"
    },
    palavra066 = {
        nome: "OCEANIA",
        categoria: "MENOR CONTINENTE EM EXTENSÃO TERRITORIAL"
    },
    palavra067 = {
        nome: "ATLÂNTICO",
        categoria: "OCEANO"
    },
    palavra068 = {
        nome: "PACÍFICO",
        categoria: "OCEANO"
    },
    palavra069 = {
        nome: "ÍNDICO",
        categoria: "OCEANO"
    },
    palavra070 = {
        nome: "ÁRTICO",
        categoria: "OCEANO"
    },
    palavra071 = {
        nome: "MADAME MIN",
        categoria: "PERSONAGEM EM QUADRINHOS"
    },
    palavra072 = {
        nome: "NYOKA",
        categoria: "PERSONAGEM EM QUADRINHOS"
    },
    palavra073 = {
        nome: "ZÉ CARIOCA",
        categoria: "PERSONAGEM EM QUADRINHOS"
    },
    palavra074 = {
        nome: "SNOOPY",
        categoria: "PERSONAGEM EM QUADRINHOS"
    },
    palavra075 = {
        nome: "MÕNICA",
        categoria: "PERSONAGEM EM QUADRINHOS"
    },
];

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(indexPalavra);
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
}

montarPalavraNaTela();
function montarPalavraNaTela() {
    const categoria = document.getElementById('categoria');
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById('palavra-secreta');
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
           if (palavraSecretaSorteada[i] == " "){
            listaDinamica[i] = " ";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
           }
           else{
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
    else{
        if(palavraSecretaSorteada[i] == " "){
            listaDinamica[i] = " ";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class'letrasEspaco'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML =  palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
  }
}



function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }

}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "maroon";
    document.getElementById(tecla).style.color = "#ffff";

}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);
    if(pos < 0){
             tentativas--
             carregaImagemForca();
             if(tentativas == 0)
             {
               abreModal("OPS!, não foi deste vez!!!", " A palavra secreta era "+"<b><font color='blue'>"+palavraSecretaSorteada);
             }
        }
        else{
            for(i = 0; i < palavraSecretaSorteada.length; i++ )
            {
              if(palavraSecretaSorteada[i] == letra){
                 listaDinamica[i] = letra;
              }
            }
        }

        let vitoria = true;
        for(i = 0; i < palavraSecretaSorteada.length; i++ ){
            if(palavraSecretaSorteada[i] != listaDinamica[i]){
                vitoria = false;
            }
        }

       if(vitoria == true){
        abreModal("PARABÉNS!", "<font color='blue'><b>Você</b></font> Ganhou O Jogo!!!");
        tentativas = 0;
       } 
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById('imagem').style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById('imagem').style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById('imagem').style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById('imagem').style.background = "url('./img/forca04.png')";
        case 1:
            document.getElementById('imagem').style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById('imagem').style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById('imagem').style.background = "url('./img/forca.png')";
            break;           
    }
}

function abreModal(titulo, mensagem){
   let modalTitulo = document.getElementById("exampleModalLabel");
  modalTitulo.innerText = titulo;

  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}
let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
     location.reload();
});
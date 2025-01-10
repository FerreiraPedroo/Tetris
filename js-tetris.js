class Tetris {
  constructor() {}
}

let matrizJogo = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const bloco = [[2, 2, 2, 2]];

let blocoPosX = 0;
let blocoPosY = 0;
const novoBlocoPosicao = [0, 5];

criarNovoBloco();
function criarNovoBloco() {
  blocoPosX = novoBlocoPosicao[0];
  blocoPosY = novoBlocoPosicao[1];

  bloco.forEach((linha, linhaIndex) => {
    linha.forEach((coluna, colunaIndex) => {
      matrizJogo[colunaIndex + novoBlocoPosicao[0]][novoBlocoPosicao[1]] =
        coluna;
    });
  });
}

function limpandoMatrizJogo() {
  for (x = 0; x < matrizJogo.length; x++) {
    for (y = 0; y < matrizJogo[0].length; y++) {
      if (matrizJogo[x][y] == 2) {
        matrizJogo[x][y] == 0;
      }
    }
  }
  atualizandoMatrizJogo();
}

function atualizandoPosicaoBlocoAtivo() {
  
    bloco.forEach((linha, linhaIndex) => {
      linha.forEach((coluna, colunaIndex) => {
        matrizJogo[blocoPosY][novoBlocoPosicao[1]] =
          coluna;
      });
    });
}

function atualizandoMatrizJogo() {
  for (x = 0; x < matrizJogo.length; x++) {
    for (y = 0; y < matrizJogo[0].length; y++) {
      document.getElementById(`linha-${x}-coluna-${y}`).innerText =
        matrizJogo[x][y];
    }
  }
}

function detectarColisao() {}

/*
Array de configuração da tecla de movimentação dos blocos.
*/
let keyConfig = { ArrowDown: 1, ArrowRight: 1, ArrowLeft: -1 };

/*
detecção da tecla digitada.
*/
document.querySelector("body").addEventListener("keydown", function (event) {
  movimentandoBloco(event.key);
});

/*
movimentação do bloco.
*/
function movimentandoBloco(_key) {
  switch (_key) {
    case "ArrowRight":
      limpandoMatrizJogo();
      if (blocoPosX >= 0 && blocoPosX < matrizJogo[0].length) {
        blocoPosX += 1;
      }
      break;

    case "ArrowDown":
      limpandoMatrizJogo();
      console.log("BAIXO");
      break;

    case "ArrowLeft":
      limpandoMatrizJogo();
      if (blocoPosX > 0 && blocoPosX <= matrizJogo[0].length) {
        blocoPosX -= 1;
      }
      break;

    default:
      console.log("KEY - N/A");
      break;
  }
  console.log("DIREITA: " + blocoPosX);
  console.log("ESQUERDA: " + blocoPosY);
}

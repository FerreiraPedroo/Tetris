class Tetris {
    constructor() {
    }
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const bloco = [
    [2, 2, 2, 2]
]

let blocoPosX = 0;
let blocoPosY = 0;




criarNovoBloco()
function criarNovoBloco() {
    let random = parseInt(Math.random() * 1);
    matrizJogo[blocoPosX][blocoPosY] = 2
    matrizJogo[blocoPosX+1][blocoPosY] = 2
    matrizJogo[blocoPosX+2][blocoPosY] = 2
    matrizJogo[blocoPosX+3][blocoPosY] = 2
}

atualizandoMatrizJogo()
function atualizandoMatrizJogo() {

    for (x = 0; x < matrizJogo.length; x++) {
        for (y = 0; y < matrizJogo[0].length; y++) {
            document.getElementById(`linha-${x}-coluna-${y}`).innerText = matrizJogo[x][y];
            // console.log(`linha-${x}-coluna-${y}}`)
        }
    }
}




/*
Array de configuração da tecla de movimentação dos blocos.
*/
let keyConfig = [101, 99, 98, 97]

/*
detecção da tecla digitada.
*/
document.querySelector('body').addEventListener('keydown', function (event) {
    movimentandoBloco(event.keyCode);
    //console.log(event.keyCode)
});

/*
movimentação do bloco.
*/
function movimentandoBloco(_key) {
    switch (_key) {
        case keyConfig[0]:
            console.log("CIMA")
            break
        case keyConfig[1]:
            if (blocoPosX >= 0 && blocoPosX < matrizJogo[0].length) {
                blocoPosX += 1;
            }
            break
        case keyConfig[2]:
            console.log("BAIXO")
            break
        case keyConfig[3]:
            if (blocoPosX > 0 && blocoPosX <= matrizJogo[0].length) {
                blocoPosX -= 1;
            }
            break
        default:
            console.log("KEY - N/A")
            break
    }
    console.log("DIREITA: " + blocoPosX);
    console.log("ESQUERDA: " + blocoPosY);
}


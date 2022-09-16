// Coordenadas
let x1 = 600, y1 = 40; // carro 1
let x2 = 600, y2 = 95; // carro 2
let x3 = 600, y3 = 150; // carro 3
let x4 = 600, y4 = 210; // carro 4
let x5 = 600, y5 = 270; // carro 5
let x6 = 600, y6 = 320; // carro 6
let xLe =- 50; // limite
let wC = 50, hC = 40; // dimensões dos carros
let v1 = 2, v2 = 2.5, v3 = 3.5, v4 = 5, v5 = 3.5, v6 = 2.5; //velocidades dos carros

let xC = [x1, x2, x3, x4, x5, x6]; //vetor x dos carros
let yC = [y1, y2, y3, y4, y5, y6]; //vetor y dos carros
let vp = [v1, v2, v3, v4, v5, v6]; // vetor passo

let i; // índice

function Carros() {
    for(i = 0; i < imaC.length; i++) {
        image(imaC[i], xC[i], yC[i], wC, hC)
    }
}

function Corrida() {
    for(i = 0; i < imaC.length; i++)
    { xC[i] -= vp[i] }
}

function Retorno() {
    for(i = 0; i < imaC.length; i++) {
        if(xC[i] <= xLe) { xC[i] = 600 }
    }
}
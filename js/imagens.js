
// Imagens e sons
let estrada, personagem, carro1, carro2, carro3;
let musica, batida, ponto;

function preload() {
  estrada=loadImage('imagens/estrada.png')
  personagem=loadImage('imagens/personagem.png')
  carro1=loadImage('imagens/carro1.png')
  carro2=loadImage('imagens/carro2.png')
  carro3=loadImage('imagens/carro3.png')
  imaC=[carro1, carro2, carro3, carro1, carro2, carro3];

  musica=loadSound('sons/musica.mp3')
  batida=loadSound('sons/batida.mp3')
  ponto=loadSound('sons/pontos.wav')
}

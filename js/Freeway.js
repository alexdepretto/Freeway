
function setup() {
  createCanvas(500, 400);
  musica.loop();
}

function draw() {
  background(estrada);
  Personagem();
  Andarilho();
  Carros();
  Corrida();
  Retorno();
  Colisao();
  pontos();
  contar();
}

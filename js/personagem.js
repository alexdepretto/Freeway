
let xP = 200, yP = 368; // personagem
let bater = false;
let PC = 0, PA = 0; // pontos corridos e acumulados

function Personagem()
  { image(personagem, xP, yP, 30, 30) }

function Andarilho() {
  if(keyIsDown(UP_ARROW))
  { if(yP > 0) { yP -= 3 } }
  if(keyIsDown(DOWN_ARROW))
  { if(yP < 368) { yP += 3 } }
  if(keyIsDown(LEFT_ARROW))
  { if(xP > 0) { xP -= 3 } }
  if(keyIsDown(RIGHT_ARROW))
  { if(xP < 400) { xP += 3 } }
}

function Colisao() {
  for (i = 0; i < imaC.length; i++) {
    bater = collideRectCircle(xC[i], yC[i], wC, hC, xP, yP, 15)
    if (bater == true) {
      PC = 0;
      marcoZero();
      batida.play();
    }
  }
}

function marcoZero() { xP = 200; yP = 368 }

function pontos() {
  fill('yellow')
  textSize(25)
  textStyle(BOLD)
  textAlign(CENTER)
  text(PC, width/3, 27)
  text(PA, width*2/3, 27)
}

function contar() {
  if(yP < 10) {
    PC++;
    if(PC > PA) { PA++ }
    marcoZero();
    ponto.play();
  }
}
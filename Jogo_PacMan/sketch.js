let personagem;
let fundo;
let tamanho = 64;
let fantasma01;
let fantasma02;
let fantasma03;
let trofeu;

let andarX = 0;
let andarY = 0;

function setup() {
  createCanvas(576, 576);
  personagem = loadImage('person.png');
  fundo = loadImage('fundoPreto.png');
   fantasma01 =loadImage('fantasma001.png');
  fantasma02=loadImage('fantasma002.png');
  fantasma03 = loadImage('fantasma003.png');
  trofeu = loadImage('trofeu.jpg');

  
}
  

function draw() {
  background(220);
  
 for(let x = 0;  x<=8; x++){  
 for(let y =0;   y<=8; y++){
   image(fundo, x*tamanho,y*tamanho,tamanho, tamanho);
  }
 }  
  
  
  image(fantasma01,384,64,tamanho,tamanho);
  image(fantasma02,256,256,tamanho,tamanho);
  image(fantasma03,320,448,tamanho,tamanho);
  image(personagem,andarX,andarY,tamanho,tamanho);
  
  
  
  if(andarX === 384 && andarY === 64){
    image(trofeu,160,160,256,256);
   botao = createButton('Reiniciar');
 botao.mousePressed(reiniciar)
  noLoop()}
  
  
  else if(andarX === 256 && andarY=== 256){
     image(trofeu,160,160,256,256);
   botao = createButton('Reiniciar');
 botao.mousePressed(reiniciar)
    
     noLoop()
}
   
    else if(andarX === 320 && andarY === 448){
    image(trofeu,160,160,256,256);
   botao = createButton('Reiniciar');
 botao.mousePressed(reiniciar)
    
     noLoop()
    }

      

 }
   function reiniciar(){
     andarX = 0;
     andarY =0;
     botao.remove()
     loop()
     
   }

function keyPressed(){ 
   if (keyIsDown(LEFT_ARROW) && andarX > 0) {
   andarX -=64;
     
  }

  if (keyIsDown(RIGHT_ARROW)&& andarX < 512) {
   andarX += 64;
  }

  if (keyIsDown(UP_ARROW)&& andarY > 0) {
   andarY -=64;
  }

  if (keyIsDown(DOWN_ARROW)&& andarY < 512) {
  andarY +=64;
  }
   }
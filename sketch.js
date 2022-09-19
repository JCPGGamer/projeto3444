
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao,parede1,parede2,parede3,parede4,parede5,parede6,cima,lado2,lado1,cubao;
var cubaoIMG;
var bg;
var chaoImg;

function preload() {
bg = loadImage('céu.png')
cubaoIMG = loadImage('cubee.png')
chaoImg = loadImage('chao.png')
}


function setup() {
  createCanvas(600,600);
  
 lado1 = createImg('New Piskel-1.png (1).png')
 lado1.position(570,10)
 lado1.size(30,30)
 lado1.mouseClicked(esquerda)

 lado2 = createImg('New Piskel-1.png.png')
 lado2.position(500,10)
 lado2.size(30,30)
 lado2.mouseClicked(direita)

 cima = createImg('New Piskel-1.png (2).png')
 cima.position(430,10)
 cima.size(30,30)
 cima.mouseClicked(VUA)

  engine = Engine.create();
  world = engine.world;

var Opcao = {
  restitution:0.03
}

var opcaos = {
  isStatic: true
}

  cubao = Bodies.rectangle(300,500,50,50,Opcao)
  World.add(world,cubao)

  chao = Bodies.rectangle(300,580,600,50,opcaos)
  World.add(world,chao)
  

}


function draw() 
{
  background(51);

  image(bg,0,0,width,height)
  Engine.update(engine);

  push()
  imageMode(CENTER)
  image(chaoImg,chao.position.x,chao.position.y,600,50)
  image(cubaoIMG,cubao.position.x,cubao.position.y,50,50)
  pop()
}

function VUA(){
Matter.Body.applyForce(cubao,{x:0,y:0},{x:0,y:-0.01})
}

function esquerda(){
Matter.Body.applyForce(cubao,{x:0,y:0},{x:-0.01,y:0})
}

function direita(){
  Matter.Body.applyForce(cubao,{x:0,y:0},{x:0.01,y:0})  }
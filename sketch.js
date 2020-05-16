var car,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,120)
  weight = random(400,1500)

  car = createSprite(50,150,50,50)
  wall = createSprite(1500,200,60,height/2)
  
   deformation = 0.5 * weight * speed * speed / 22500;
  car.velocityX =speed;
}

function draw() {
  background(0);  
  car.display();
  wall.display();
  
  deform();
console.log(deformation)
  drawSprites();
  
}

function deform(){
  if (wall.x - car.x < (car.x + wall.x)/2){
    car.velocityX = 0;
  
    if(deformation < 80)
    {
        car.shapeColor = color(0,230,0);
      }
       if (deformation > 80 && deformation <= 180)
      {
          car.shapeColor = color("yellow");
          
      }
     if (deformation > 180 )
      {
        car.shapeColor = color("red");
      }   
    }
}
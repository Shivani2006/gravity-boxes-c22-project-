// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var box,boxes = []
var ground;
var gSlider;
var valueX = 255;
 
function setup() {
    createCanvas(400, 400);
    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
     // A slider is already created for you here. This slider will dictate the gravity of the world
   gSlider = createSlider(0, 100, 50);
   gSlider.position(40, 365);
   gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
   world.gravity.y = gSlider.value()/100;
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(50,350,500,5);
      
}
function mousePressed()
{
 console.log(mouseX); 
   
 valueX = mouseX%255;
 console.log(" value X " + valueX ); 
 var boxWidth = random(10,60);
 var boxHeight = random(5,55);
 box = new Box(mouseX,mouseY,boxWidth,boxHeight); 
 boxes.push(box); 

}
function draw() {
    // Draw all the elements including the slider that 
    background(0);
    fill(valueX,200,valueX-10);
    text("Click on the mouse to add boxes to the world", 5, 50);
    fill(valueX,145,valueX+20);
    text("Gravity :" + gSlider.value()/100,330,50);
    Engine.update(engine);
    // This is the value of your gravity. You can optionally show it to the viewer.
   var fVal = gSlider.value();

   for(var i = 0;i<boxes.length;i++){
        boxes[i].display();
   }
 
ground.display();

       
   }
  
  

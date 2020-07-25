function setup() {
  createCanvas(400,400);
  var title=createElement('h2');
  title.html("monkey chunky app");
  title.position(130,0);

  var input=createInput("");
  var button=createButton("submit");
  var greeting=createElement('h3');
  var chunks=[];
  input.position(130,160);
  button.position(250,200);
  button.mousePressed(()=>{
    greeting.html(input.value());
    greeting.position(200,250);
    //chunks=db.
  });
}

function draw() {
  background("red"); 
  
  drawSprites();
}
function setup() { 
  createCanvas(400, 400);
}

function draw() {
	background (255);
	stroke(0);
	strokeWeight(1);
	
	for (var x = 20; x <= 380; x += 10){
		line (20, x, x, 20);
		
for (var y = 30; y <= 380; y += 10){
		line (380, y, y, 380); 
		}
}
}

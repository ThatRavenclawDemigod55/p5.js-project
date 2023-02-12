function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 120);
    video = createCapture(VIDEO) ;
    video.hide();
}

function draw() {
background("#728C69");
image (video, 105, 95, 440, 280) ;
drawCircles();
drawRectangles();
drawEllipses();
}

function drawCircles() {
fill("pink") ;
circle(30, 30, 50) ;
fill("pink") ;
circle(600, 450, 50) ;
fill("pink") ;
circle(30, 450, 50) ;
fill("pink") ;
circle(600, 30, 50) ;
}

function drawRectangles() {
    fill("yellow") ;
    rect(55, 23, 220, 20) ;
    fill("yellow") ;
    rect(55, 440, 220, 20) ;
    fill("yellow") ;
    rect(325, 23, 253, 20) ;
    fill("yellow") ;
    rect(325, 440, 253, 20) ;
    fill("yellow") ;
    rect(20, 50, 20, 200)
    fill("yellow") ;
    rect(20, 250, 20, 180)
    fill("yellow") ;
    rect(590, 50, 20, 200)
    fill("yellow") ;
    rect(590, 250, 20, 180)
}

function drawEllipses() {
    fill("blue") ;
    ellipse(30, 240, 50, 40);
    fill("blue") ;
    ellipse(600, 240, 50, 40) ;
    fill("blue") ;
    ellipse(300, 450, 60, 50) ;
    fill("blue") ;
    ellipse(300, 30, 60, 50) ;
    fill("blue") ;
}
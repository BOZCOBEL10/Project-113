function  preload(){

}

function setup(){
    canvas = createCanvas(650,480);
    canvas.position(-10,246);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,650,480);
    fill(255, 165, 0)
    circle(15, 10, 50);
    circle(640, 10, 50);
    circle(640, 470, 50);
    circle(15, 470, 50);
    noFill()
    rect(10, 0, 640, 480, 20);
}

function take_snapshot(){
    save('thisisanimage.png');
}
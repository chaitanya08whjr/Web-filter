function preload(){

}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(300, 300);

}

function draw(){
image(video, 0, 0, 300, 300 ) 
}

function take_snap(){
   save('boom.png');
}
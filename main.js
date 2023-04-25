function preload(){
mustache=loadImage("https://i.postimg.cc/9Xt69PNM/image.png");
}
noseX=0;
noseY=0;
function setup(){
    canvas=createCanvas(400,350);
    canvas.position(520,170);
    video=createCapture(VIDEO);
    video.size(400,350);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
}
function modelLoaded(){
    console.log("Posenet is initialised.");
}
function draw(){
    image(video,0,0,400,350)
    image(mustache,noseX-40,noseY-15,85,80)
}
function takeSnapshot(){
    save("mustachefilter.png");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX);
        console.log("noseY="+noseY);
    }
}
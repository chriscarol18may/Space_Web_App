noseX=0;
noseY=0;
var indicator = 0;

function preload() {
  img1 = loadImage('https://i.postimg.cc/dVZL07fW/space2.png');
  img2 = loadImage('https://i.postimg.cc/fRRttPDF/ASTRONAUT-BACK-TRANS.png');
  img3 = loadImage('https://i.postimg.cc/mgNL6Q1F/space3.png');
  img4 = loadImage('https://i.postimg.cc/d0NCSKJ8/astronaut1.png');
  img5 = loadImage('https://i.postimg.cc/SNChqD2K/astronaut2.png');
  img6 = loadImage('https://i.postimg.cc/VLm8fXjB/Rocket1.png');
  img7 = loadImage('https://i.postimg.cc/R0tNRDZn/rocket2.png ');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  if(indicator == 1)
  {
    image(img1, 0, 0, 300, 300);
  }
  if(indicator == 2)
  {
    image(img2, 0, 0, 300, 300);
  }
  if(indicator == 3)
  {
    image(img3, 0, 0, 300, 300);
  }
  if(indicator == 4)
  {
    image(img4, 0, 0, 300, 300);
  }
  if(indicator == 5)
  {
    image(img5, 0, 0, 350, 350);
  }
  if(indicator == 6)
  {
    image(img6, 0, 0, 300, 390);
  }
  if(indicator == 7)
  {
    image(img7, -50, 0, 400, 400);
  }
  
  //image(clown_nose, noseX, noseY, 30, 30);
}

function openimg1()
{
  indicator = 1;
}
function openimg2()
{
  indicator = 2;
}
function openimg3()
{
  indicator = 3;
}
function openimg4()
{
  indicator = 4;
}
function openimg5()
{
  indicator = 5;
}
function openimg6()
{
  indicator = 6;
}
function openimg7()
{
  indicator = 7;
}

function take_snapshot(){    
  save('myFilterImage.png');
}

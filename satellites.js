scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(100,120);
    
    space_Satellite.hide();
    video = createCapture(VIDEO);
    video.position(900,100);
    video.size(400,400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  function draw()
  {
    image(space_Satellite , 0 , 0 , 600 , 500);
   
    

    

    if(scoreRightWrist > 0.2)
    { 
      space_Satellite.loop();
    space_Satellite.volume(1);
    space_Satellite.speed(1); 

        
    }

    if(scoreLeftWrist > 0.2)
    {
        
      space_Satellite.stop(); 
    }
  }
  function preload() 
  {
    space_Satellite = createVideo("space_Satellite.mp4");
  
  
  }

  function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }
  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      scoreRightWrist =  results[0].pose.keypoints[10].score;
      scoreLeftWrist =  results[0].pose.keypoints[9].score;
      console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
      
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
  
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
          
    }
  }
  function start()
  {
    space_Satellite.loop();
    space_Satellite.volume(1);
    space_Satellite.speed(1); 
  }
  function stop(){
    space_Satellite.stop(); 
  }

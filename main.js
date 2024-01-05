lipsX = 0;
lipsY = 0;

function preload()
{
    lipstick=loadImage('https://i.postimg.cc/zD7t1pkN/lip-3.png');
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("lips x ="+results[0].pose.lips.x+130);
        console.log("lips y ="+results[0].pose.lips.y-130);

    }
}

function draw()
{
    image(video,0,0,300,300);
    image(lipstick, lipsX, lipsY, 50, 45);
}

function Take_snapshot()
{
    save('myFilterImage.png');
}

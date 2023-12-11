function preload (){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color="";
}

function draw(){
    image(video ,0, 0, 640, 480);
    tint(tint_color);
    fill("#FF0000");
    text("", 45, 75 );
    noFill();
    stroke("#FF0000")
    rect(45, 55 , 450, 365);

}

function take_snapshot(){
    save('student_name.png')
}
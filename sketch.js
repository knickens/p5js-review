var x = 0;
var y = 0;
var sizes = [12, 14, 16, 18, 20, 18, 16, 14, 12, 20];
var kiRed = 50;
var kiGreen = 255;
var kiBlue = 50;



function setup(){
    createCanvas(700,500);
}

function draw(){
    background(255);
    kiBlue = random(0,255);
    kiGreen = random(0,255);
    kiRed = random(0,255);
    redCircle();
    greenStripe();
    blackLines();
    changebackground();
    rowCircles();
    rowCircles(150);
    rowCircles(300);
    
    
}

function redCircle(){
   noStroke();
    fill(kiBlue,kiGreen,kiRed);
    ellipse(mouseX,mouseY,50,50); 
}


function greenStripe(){
  stroke(255);
    fill(0,300);
    x = 200;
    y+=3;
    rect(x,y,50,height); 
     if(y > height){
        y = 0 - height;
    }

}

function blackLines(){
    var i = 0;
    var yLine = 20;
    while(i<10){
    stroke(kiBlue,kiRed,50);
    line(100,yLine,450,yLine);
    i++;
    yLine += 20;
    }
}

function changebackground(){
    if(mouseX > 150 && mouseY < 150){
    background(123,123,123,100);   
    }
    else if(mouseX < 150 && mouseY >=150){
        background(0,100);
    }
    
   
}

function rowCircles(yRow){
 var xCircle = 50;
    for(var i = 0; i < 10; i++){
        noStroke();
        fill(244, 66, 140,200);
        ellipse(xCircle,yRow,sizes[i],sizes[i]);
        xCircle += 60;
    }   

}
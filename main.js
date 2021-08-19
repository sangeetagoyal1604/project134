object=[];
status="";
function preload() {
    
}
function setup() {
  canvas=  createCanvas(450,350);
  video=createCapture(VIDEO);
  video.size(450,350);
  video.hide();
canvas.center();
objectdetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML="status=detecting baby";
}
function draw() {
    image(video,0,0,450,350);
    objectdetector.detect(video,gotresult);
       
 if (status!="") {
    objectdetector.detect(video,gotresult);
    r=random(255);
g=random(255);
b=random(255);
 for (let i= 0; i < object.length; i++) {
   
   document.getElementById("status").innerHTML="status: baby detected  "+  object.length;
   document.getElementById("number").innerHTML="baby found";
   
   fill(r,g,b);

percent=object[i].confidence*100;
console.log(percent);
percentage=floor(percent);
text(object[i].label+" "+percentage,object[i].x,object[i].y);
noFill();
stroke(r,g,b
  );
rect(object[i].x,object[i].y,object[i].width,object[i].height);
 
}
   }    
   }
function modelloaded() {
 console.log ('modelloaded'); 
 status=true;
 objectdetector.detect(video,gotresult);
}
function gotresult(error,result) {
  if (error) {
    console.log(error);
  }
  else{
    console.log(result);
    object=result;
  }
}
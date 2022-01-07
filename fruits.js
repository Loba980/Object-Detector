staus="";
objects=[];

function preload(){
    img = loadImage('Christmas_Tree.jpg');
}
function setup(){
    canvas=createCanvas();
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    objects=results;

}

function draw(){
    if(status=""){
        for(i=0; i<objects.length; i++){
            percent=floor(objects[i].confidence*100);
            text(objects[i].label);
            objects[i].confidence;
            objects[i].x, objects[i].y;
            objects[i].width;
            objects[i].height;
        }
    }
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
  }
  
  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }
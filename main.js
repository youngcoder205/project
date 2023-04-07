img = "";
status1 = "";
object = []

function setup()
{

    canvas = createCanvas(640,420)
canvas.center()
objectDetector = ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML = "status:detecting objects"

}

function preload()
{
    img = loadImage("dog_cat.jpg")
}

function draw()
{
    image (img,0,0,640,420)
    if (status1 != "") {

      for(i=0;i<object.length;i++) {
        document.getElementById("status").innerHTML = "status:object detected"
        fill("orange")
        percent = floor(object[i].confidence * 100)
        text (object[i].label + "" + percent + "%", object[i].x + 15, object[i].y + 15)
        noFill()
        stroke("orange")
        rect(object[i].x, object[i].y, object[i].width, object[i].height)

      }

    }
}

function modelloaded() 
{

console.log("model is loaded")
status1 = true
objectDetector.detect(img,gotresult)

}

function gotresult(error,results)  {

if (error)  {
    console.error(error)
}
console.log(results)
object = results
}
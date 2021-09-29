noseX = 0;
noseY = 0;

function preload() {
    skull = loadImage("Skull.png")
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.position(430, 220);

    camera = createCapture(VIDEO);
    camera.hide();
    //poseNet model
    poseNet = ml5.poseNet(camera, modelLoaded)
    poseNet.on('pose', getPoses)

}

function modelLoaded() {
    console.log("Model is loaded");
}

function draw() {
    image(camera, 0, 0, 600, 450);
    image(skull, noseX, noseY, 330, 280)
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX= results[0].pose.nose.x-200;
        noseY= results[0].pose.nose.y-180;
    }
}
function saveImg() {
    save("skullFilteredPic.png")
}
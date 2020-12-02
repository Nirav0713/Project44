var WarImage,EnemyImg,Enemy1;
var edges;

function preload(){
    WarImage = loadImage("War Image.jpg")
    EnemyImg = loadImage("WarSoldier.png")
}

function setup(){
    var canvas = createCanvas(800,500);
    Enemy1 = createSprite(50,375,15,15);
    Enemy1.addImage(EnemyImg)
    Enemy1.scale = 0.2
    Enemy1.velocityY = -5

    edges = createEdgeSprites()
}

function draw(){
    background(WarImage);

    Enemy1.bounceOff(edges)

    drawSprites();
}
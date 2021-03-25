var canvas = new fabric.Canvas("myCanvas");
var XcordPlayer = 30;
var YcordPlayer= 30;
var widthVar = 30;
var heightVar = 30;
var playerObject = "";
var blockObject = "";
function PlayerADD(){
    fabric.Image.fromURL("player.png",function(Img) {
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);
        playerObject.set({
            top:YcordPlayer,left:XcordPlayer
        });
        canvas.add(playerObject);
    });
}
function BlockADD(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
        blockObject=Img;
        blockObject.scaleToWidth(widthVar);
        blockObject.scaleToHeight(heightVar);
        blockObject.set({
            top:YcordPlayer,left:XcordPlayer
        });
        canvas.add(blockObject);
    });
}
window.addEventListener("keydown", KeyDown);
function KeyDown(e){
    var KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if(e.shiftKey==true&&KeyPressed=="80")
    {
        widthVar = widthVar + 10;
        heightVar = heightVar + 10;
        document.getElementById("currentWidth").innerHTML=widthVar;
        document.getElementById("currentheight").innerHTML=heightVar;
    }
    if(e.shiftKey==true&&KeyPressed=="77")
    {
        widthVar = widthVar - 10;
        heightVar = heightVar - 10;
        document.getElementById("currentWidth").innerHTML=widthVar;
        document.getElementById("currentheight").innerHTML=heightVar;
    }
    if(KeyPressed=="87"){
        BlockADD("wall.jpg");
    }
    if(KeyPressed=="67")
    {
        BlockADD("cloud.jpg");
    }
    if(KeyPressed=="68")
    {
        BlockADD("dark_green.png");
    }
    if(KeyPressed=="71")
    {
        BlockADD("ground.png");
    }
    if(KeyPressed=="76")
    {
        BlockADD("light_green.png");
    }
    if(KeyPressed=="78")
    {
        BlockADD("roof.jpg");
    }
    if(KeyPressed=="84")
    {
        BlockADD("trunk.jpg");
    }
    if(KeyPressed=="85")
    {
        BlockADD("unique.png");
    }
    if(KeyPressed=="89")
    {
        BlockADD("yellow_wall.png");
    }
    if(KeyPressed=="38")
    {
        UP();
    }
    if(KeyPressed=="40")
    {
        DOWN();
    }
    if(KeyPressed=="39")
    {
        RIGHT();
    }
    if(KeyPressed=="37")
    {
        LEFT();
    }
}
function UP(){
    if(YcordPlayer>0){
        YcordPlayer = YcordPlayer-10;
        canvas.remove(playerObject);
        PlayerADD();
    }
}
function DOWN(){
    if(YcordPlayer<700){
        YcordPlayer = YcordPlayer+10;
        canvas.remove(playerObject);
        PlayerADD();
    }
}
function LEFT(){
    if(XcordPlayer>0){
        XcordPlayer = XcordPlayer-10;
        canvas.remove(playerObject);
        PlayerADD();
    }
}
function RIGHT(){
    if(XcordPlayer<1600){
        XcordPlayer = XcordPlayer+10;
        canvas.remove(playerObject);
        PlayerADD();
    }
}
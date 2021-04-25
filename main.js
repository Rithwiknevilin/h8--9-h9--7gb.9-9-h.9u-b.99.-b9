canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");



background_image = "https://i.gifer.com/5825.gif";

car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car1_x = 10;
car1_y = 10;
car1_width = 120;
car1_height = 70;
car2_image = "https://www.volvoclub.org.uk/press/graphics/213070_New_Volvo_XC40_exterior.jpg";
car2_x = 10;
car2_y = 100;
car2_width = 120;
car2_height = 70;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image;   // laod image
   car1_imgTag = new Image(); //defining a variable with a new image
   car1_imgTag = uploadcar; // setting a function, onloading this variable
    car1_imgTag.src = car1_image;   // laod image
    car2_imgTag = new Image(); //defining a variable with a new image
    car2_imgTag = uploadcar; // setting a function, onloading this variable
     car2_imgTag.src = car1_image;   // laod image
}
function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
    function uploadcar1(){
        ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
    }
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed= e.keyCode;
    console.log(keypressed);
    if(keypressed == '38')
    {
        car1_up();
        console.log("up");

    }
    if(keypressed == '40')
    {
        car1_down();
        console.log("down");

    }
    if(keypressed == '37')
    {
        car1_left();
        console.log("left");

    }
    if(keypressed == '39')
    {
        car1_right();
        console.log("right");

    }
    if(keypressed == '38')
    {
        car2_up();
        console.log("up");

    }
    if(keypressed == '40')
    {
        car2_down();
        console.log("down");

    }
    if(keypressed == '37')
    {
        car2_left();
        console.log("left");

    }
    if(keypressed == '39')
    {
        car2_right();
        console.log("right");

    }
}
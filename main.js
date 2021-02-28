canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";


ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 6;
ctx.arc(500, 350, 30, 0, 2 * Math.PI);
ctx.rect(300, 50, 400, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "fuchsia";
ctx.lineWidth = 6;
ctx.arc(600, 350, 30, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {


    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + "Y = " + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = "fuchsia";
    ctx.lineWidth = 6;
    ctx.arc(mouse_x, mouse_y, 30, 0, 2 * Math.PI);
    ctx.stroke();
}

function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
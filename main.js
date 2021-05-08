var mouse_event="";
var last_xposition, last_yposition;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="black";
var width_of_line="1";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouse_event="mousedown";
    console.log(mouse_event);
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var current_xposition=e.clientX-canvas.offsetLeft;
    var current_yposition=e.clientY-canvas.offsetTop;
    if (mouse_event="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_xposition, last_yposition);
        console.log(last_yposition + ": this is last y position");
        console.log(last_xposition + ": this is last x position"); 
        console.log(current_xposition + ": this is current x position");
        console.log(current_yposition + ": this is current y position"); 
        ctx.lineTo(current_xposition, current_yposition);
        ctx.stroke();
        console.log(mouse_event);
    }
    last_xposition=current_xposition;
    last_yposition=current_yposition;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouse_event="mouseup";
    console.log(mouse_event);
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouse_event="mouseleave";
    console.log(mouse_event);
}

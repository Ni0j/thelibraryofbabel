$(document).ready(function(){
    // 绑定点击事件到具有class="switch"的元素
    $(".switch").on("click", function(){
        // 这里使用$("body")来更改背景色
        var currentColor = $("body").css("background-color");
        if(currentColor === "rgb(1, 13, 0)"){ // 判断当前背景颜色
            $("body").css("background-color", "#FFECD5");
        } else {
            $("body").css("background-color", "#010D00");
        }
    });
});



const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const proton = new Proton();

const emitter = new Proton.Emitter();

emitter.rate = new Proton.Rate(new Proton.Span(2, 8), 0.01);

emitter.addInitialize(new Proton.Mass(1));
emitter.addInitialize(new Proton.Radius(1, 3));
emitter.addInitialize(new Proton.Life(9));

emitter.addInitialize(new Proton.Velocity(
    new Proton.Span(-0.2, 0.2), 
    new Proton.Span(0, 360), 
    "polar"));

emitter.addBehaviour(new Proton.Alpha(1, 0));
emitter.addBehaviour(new Proton.Scale(0.3, 0.1));


emitter.p.x = canvas.width / 2;
emitter.p.y = canvas.height / 2;

emitter.emit();

proton.addEmitter(emitter);

const renderer = new Proton.CanvasRenderer(canvas);

proton.addRenderer(renderer);

let theta = 0;
let a = 1000;
function draw(){
    window.requestAnimationFrame(draw);

    theta -= 0.1;
    a -= 1;

    emitter.p.x = (a * Math.cos(theta)) / theta + canvas.width / 2;


    proton.update();
}

draw();


 


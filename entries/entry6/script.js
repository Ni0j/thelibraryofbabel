let str = "▷ My solitude is gladdened by this elegant hope."
let test = document.querySelector(".para3")
let words = str.split("")

let write = () => {
    if(words.length > 0){
        let span = document.createElement("span")
        let del = words.shift()
        let opc = 0
        span.innerHTML = del
        test.appendChild(span)
        let fade = setInterval(() => {
            opc++
            span.style.opacity = opc / 10
            span.style.color = "transparent"
            span.style.textShadow =  "0 0 1px #D94033, 0 0 1px #D94033,0 0 4px #D94033, 0 0 20px #D94033"
            span.style.filter = `blur(${(10 / opc - 1)}px)`
            if(opc >= 10){
                clearInterval(fade)
                span.style.color = "#D94033"
            }
        }, 50)
    }
}

setInterval(write,50)








// const canvas = document.getElementById("canvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const proton = new Proton();

// const emitter = new Proton.Emitter();

// emitter.rate = new Proton.Rate(new Proton.Span(2, 8), 0.01);

// emitter.addInitialize(new Proton.Mass(1));
// emitter.addInitialize(new Proton.Radius(1, 3));
// emitter.addInitialize(new Proton.Life(12));

// emitter.addInitialize(new Proton.Velocity(
//     new Proton.Span(-0.2, 0.2), 
//     new Proton.Span(0, 180), 
//     "polar"));

// emitter.addBehaviour(new Proton.Alpha(1, 0));
// emitter.addBehaviour(new Proton.Scale(0.6, 0.4));

// emitter.p.x = canvas.width / 2;
// emitter.p.y = canvas.height / 2;

// emitter.emit();

// proton.addEmitter(emitter);

// const renderer = new Proton.CanvasRenderer(canvas);

// proton.addRenderer(renderer);

// let theta = 0;
// let a = 1000;
// function draw(){
//     window.requestAnimationFrame(draw);

//     theta -= 0.1;
//     a -= 1;

//     // emitter.p.x = (a * Math.cos(theta)) / theta + canvas.width / 2;


//     proton.update();
// }

// draw();


 

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

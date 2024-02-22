window.addEventListener('resize', function() {
    if (document.body.style.transform !== 'scale(2)') {
        document.body.style.transform = 'scale(2)';
    }
});


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

dragElement(document.getElementById("paradrag1"));
  dragElement(document.getElementById("paradrag2"));
  dragElement(document.getElementById("paradrag3"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
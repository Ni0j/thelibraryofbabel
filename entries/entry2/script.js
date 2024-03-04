var intervalId;

function startInterval() {
    intervalId = setInterval(function () {
        var randomNumber = Math.floor(Math.random() * 900) + 100;
        document.getElementById('number').innerHTML = randomNumber;
    }, 20);
}

startInterval(); // 开始定时器

document.getElementById('number').addEventListener('mouseenter', function () {
    clearInterval(intervalId); // 鼠标进入时暂停定时器
    document.getElementById('number').innerHTML = 500; // 更新内容为500
});

document.getElementById('number').addEventListener('mouseleave', function () {
    startInterval(); // 鼠标离开时恢复定时器
});


var slider = document.getElementById("myRange");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");

slider.oninput = function() {
  if (this.value <= 50) {
    text1.style.display = "block";
    text2.style.display = "none";
  } else {
    text1.style.display = "none";
    text2.style.display = "block";
  }
}


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


document.addEventListener("DOMContentLoaded", function() {
  var toggleButton = document.getElementById("toggleButton");
  var extraContainer = document.querySelector(".extra-container");


  toggleButton.addEventListener("click", function() {
    var computedStyle = window.getComputedStyle(extraContainer);

    if (computedStyle.visibility === "visible" || extraContainer.style.visibility === "visible") {
      extraContainer.style.visibility = "hidden";
      extraContainer.style.opacity = "0";
    } else {
      extraContainer.style.visibility = "visible";
      extraContainer.style.opacity = "1";
    }
  });
});
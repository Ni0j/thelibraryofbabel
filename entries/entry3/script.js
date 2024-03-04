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
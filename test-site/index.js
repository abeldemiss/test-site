window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "10px 80px";
  } else {
    document.getElementById("nav").style.padding = "50px 80px";
  }
} 
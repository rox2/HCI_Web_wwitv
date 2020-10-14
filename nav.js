//hide navbar


let navbar = document.getElementById('navbar');
var scrollPrev = window.pageYOffset;
function scrollFun1() {
  var scrollCur = window.pageYOffset;
  if(scrollPrev > scrollCur){
    navbar.style.top = "0";
  }else{
     navbar.style.top = "-90px";

  }
 scrollPrev = scrollCur;
}


// When the user scrolls down 50px from the top of the document, resize the header logo size


function scrollFun2() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 && document.body.offsetWidth > 620) {
document.getElementById('logo').style.width= "150px";
} else {
document.getElementById('logo').style.width = "200px";
}
}

window.onscroll = function() {scrollFun1(), scrollFun2()};
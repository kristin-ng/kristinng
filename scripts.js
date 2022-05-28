var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('hi there!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("welcome to my page.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("你好")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("歡迎來到我的網站")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I am Kristin Ng")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Computer Science Student By Day,")
    .pauseFor(500)
    .deleteAll()
    .typeString("Food Blogger By Night")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('我是吳諾雯')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("計算機科學專業的學生和美食博主")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .typeString("感謝造訪")
    .pauseFor(1000)
    .deleteAll()
    .start();

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}

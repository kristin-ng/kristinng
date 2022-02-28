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
    .typeString("my name is kristin")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm a student at tufts.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm studying computer science.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i like to cook and bake.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("check out my food insta :)")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('and my GitHub.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("thanks for visiting!")
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

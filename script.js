var games = [
  {
    gameName: "Lords of The Fallen",
    gameDescription:
      "Asethoc ipsum dolor sit amet consectetur adipisicing elit.Quidem, animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nisi.",
    gameBgImg: "./assests/imgs/0519_Lords_Of_The_Fallen.png",
    gamePrice: "GET $86.00",
  },
  {
    gameName: "Marvel Midnight",
    gameDescription:
      "Asethoc ipsum dolor sit amet consectetur adipisicing elit.Quidem, animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nisi.",
    gameBgImg: "./assests/imgs/1202_EGS_TST_Marvel_Midnight.png",
    gamePrice: "GET $46.00",
  },
  {
    gameName: "Dead Island",
    gameDescription:
      "Asethoc ipsum dolor sit amet consectetur adipisicing elit.Quidem, animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nisi.",
    gameBgImg: "./assests/imgs/0414_Dead_Island.png",
    gamePrice: "GET $53.00",
  },
  {
    gameName: "Redfall",
    gameDescription:
      "Asethoc ipsum dolor sit amet consectetur adipisicing elit.Quidem, animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nisi.",
    gameBgImg: "./assests/imgs/0426_Redfall.png",
    gamePrice: "GET $61.00",
  },
];

var cluttery = "";

function game() {
  games.forEach(function (game) {
    cluttery += `<div class="box">
    <div class="box-bg">
      <img src=${game.gameBgImg} alt="" />
    </div>
    <div class="box-text">
      <h2>${game.gameName}</h2>
      <p>
        ${game.gameDescription}
      </p>
      <button>${game.gamePrice}</button>
    </div>
  </div>`;
    document.querySelector("#page3 #boxes").innerHTML = cluttery;
  });
}
game();

function musicfuncationality() {
  var musicOn = document.querySelector("#music-btn .musicOn");
  var musicOff = document.querySelector("#music-btn .musicOff");
  var audio = new Audio();

  musicOn.addEventListener("click", () => {
    musicOff.hidden = false;
    musicOn.hidden = true;
    audio.src = "./assests/audio/loop.mp3";
    audio.play();
  });
  musicOff.addEventListener("click", () => {
    musicOff.hidden = true;
    musicOn.hidden = false;
    audio.pause();
  });
}
musicfuncationality();

var tl = gsap.timeline();

tl.from("nav #logo", {
  opacity: 0,
  y: -30,
  duration: 0.8,
});

tl.from("nav #links", {
  opacity: 0,
  y: -30,
  duration: 0.4,
});

tl.to("#music-btn", {
  opacity: 1,
  y: 0,
  duration: 0.4,
});

tl.from("#page1 #bg-video", {
  opacity: 0,
  duration: 1,
  scale: 0,
});

tl.from("#page1 .title1", {
  x: -40,
  duration: 1,
  opacity: 0,
});

tl.from("#page1 .title2", {
  x: 40,
  duration: 1,
  opacity: 0,
});

gsap.from("#page2 .text-con", {
  scrollTrigger: {
    trigger: "#page2 .text-con",
    start: "top center",
    end: "bottom center",
    scrub: true,
    toggleActions: "play none none reverse",
  },
  x: -100,
  opacity: 0,
  duration: 1,
});

gsap.from("#page3 h2", {
  scrollTrigger: {
    trigger: "#page3 h2",
    start: "top center",
    end: "bottom center",
    scrub: true,
    toggleActions: "play none none reverse",
  },
  y: 40,
  opacity: 0,
  duration: 0.6,
});

gsap.from("#page3 #boxes", {
  scrollTrigger: {
    trigger: "#page3 #boxes",
    start: "top center",
    end: "bottom center",
    scrub: true,
    toggleActions: "play none none reverse",
  },
  y: 60,
  opacity: 0.2,
  duration: 0.8,
});

gsap.from("#page4 h2", {
  scrollTrigger: {
    trigger: "#page4 h2",
    start: "top center",
    end: "bottom center",
    scrub: true,
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1,
});

gsap.from("#page4 .partners", {
  scrollTrigger: {
    trigger: "#page4 .partners",
    start: "top center",
    end: "bottom center",
    scrub: true,
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1,
});

gsap.from("#page5 h2", {
  scrollTrigger: {
    trigger: "#page5 h2",
    start: "top center",
    end: "bottom center",
    scrub: true,
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1,
});

gsap.from("#page5 .footer-con .footer-content", {
  scrollTrigger: {
    trigger: "#page5 h2",
    start: "top center",
    end: "bottom center",
    stagger:true,
    scrub: true,
    toggleActions: "play none none reverse",
  },
  y: 80,
  opacity: 0,
  duration: 1,
});

const butterfly = document.querySelector(".butterfly-trail");

let mouseX = 0;
let mouseY = 0;

let butterflyX = 0;
let butterflyY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function animateButterfly() {
  butterflyX += (mouseX - butterflyX) * 0.08;
  butterflyY += (mouseY - butterflyY) * 0.08;

  butterfly.style.left = butterflyX + "px";
  butterfly.style.top = butterflyY + "px";

  requestAnimationFrame(animateButterfly);
}

animateButterfly();

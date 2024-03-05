let imgs = document.querySelectorAll(".header-slider ul img");
let prevBot = document.querySelector(".control-prev");
let nextBot = document.querySelector(".control-next");

let x = 0;
function create() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[x].style.display = "block";
}
create();

prevBot.addEventListener("click", (e) => {
  if (x > 0) {
    x--;
  } else {
    x = imgs.length - 1;
  }
  create();
});
nextBot.addEventListener("click", () => {
  if (x < imgs.length - 1) {
    x++;
  } else {
    x = 0;
  }
  create();
});

let scrollCont = document.querySelectorAll(".prodiucts");

for (let item of scrollCont) {
  item.addEventListener("wheel", () =>{
    
  })
}
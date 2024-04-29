const mobile_offcanvas = document.querySelector(".mobile_offcanvas");
const close_btn = document.querySelector(".close_btn");
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  mobile_offcanvas.classList.add("open");
  overlay.classList.add("open_overlay");
});

close_btn.addEventListener("click", () => {
  mobile_offcanvas.classList.remove("open");
  overlay.classList.remove("open_overlay");
});
overlay.addEventListener("click",()=>{
    mobile_offcanvas.classList.remove("open");
    overlay.classList.remove("open_overlay");
    });



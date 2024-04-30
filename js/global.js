const mobile_offcanvas = document.querySelector(".mobile_offcanvas");
const close_btn = document.querySelector(".close_btn");
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
    mobile_offcanvas.classList.add("open");
    overlay_add();
});

close_btn.addEventListener("click", () => {
    mobile_offcanvas.classList.remove("open");
    overlay_remove();
});

function overlay_add(){
    overlay.classList.add("open_overlay");
    overlay.addEventListener("click", overlay_remove);
}

function overlay_remove(){
    overlay.classList.remove("open_overlay");
    overlay.removeEventListener("click", overlay_remove);
}

overlay.addEventListener("click", () => {
    mobile_offcanvas.classList.remove("open");
    cart_slider_off_canvas.classList.remove("open_cart");
    overlay_remove();
});


// cart slider js
const cart = document.querySelector(".cart");
const cart_slider_off_canvas = document.querySelector(".cart_slider_off_canvas");
const close_btn_cart = document.querySelector(".close_btn_cart");

cart.addEventListener("click", () => {
    cart_slider_off_canvas.classList.add("open_cart");
    overlay_add()
});
close_btn_cart.addEventListener("click", () => {
    cart_slider_off_canvas.classList.remove("open_cart");
    overlay_remove()
});



// -----------------This is for accordion toggeling-----------------------
document.addEventListener("DOMContentLoaded", function () {
    var accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(function (header) {
        header.addEventListener("click", function () {
            var accordionItem = this.parentElement;
            var accordionContent = accordionItem.querySelector(".accordion-content");
            accordionContent.style.display =
                accordionContent.style.display === "block" ? "none" : "block";
                overlay.addEventListener("click", () => {
                    accordionContent.style.display ="none";
                });
        });

    });
});


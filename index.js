import { showproduct } from "./product.js";
import showslide from "./swiperr.js";

fetch(`https://fakestoreapi.com/products`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    showdata(data);
  });

function showdata(data) {
  document.getElementById("sweep_slide").innerHTML = showslide(data);

  document.getElementById("cardsss").innerHTML = showproduct(data);


  var swiper = new Swiper(".mySwiper", {
    loop: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
}


function showslide(data) {
  return `
  
   <div class="swiper mySwiper">
            <div class="swiper-wrapper">
 ${data
   .map((ele) => {
     return `<div class="swiper-slide">
        <img src=${ele.image} alt=${ele.image} class="img-fluid m-5">
        <p class="px-2 fs-5 text-bold">${ele.title}</p>
        </div>
        
        `;
   })
   .join(" ")}
            </div>
            <div class="swiper-pagination"></div>
        </div>`;
}

export default showslide
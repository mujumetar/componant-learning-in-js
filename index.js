fetch(`https://fakestoreapi.com/products`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    showdata(data);
  });

function showdata(data) {
  data.map((ele) => {
    document.getElementById("sweep_slide").innerHTML += showslide(ele);
  });

  data.map((ele) => {
    document.getElementById("cardsss").innerHTML += showproduct(ele);
  });
}

function showslide(ele) {
  return `<div class="swiper-slide">
        <img src=${ele.image} alt=${ele.image} class="img-fluid m-5">
        <p class="px-2 fs-5 text-bold">${ele.title}</p>
        </div>
        
        `;
}

function showproduct(ele) {
  return `
        <div class="col-lg-3 col-6">
                <div class="card" style="width: 100%;">
                    <img src=${ele.image} class="card-img-top img-fluid" alt=${ele.image}>
                    <div class="card-body">
                      <h5 class="card-title text-truncate">${ele.title}</h5>
                      <h4 class="card-title">$ ${ele.price}</h4>
                      <p class="card-text">⭐ ${ele.rating.rate}</p>
                      <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                  </div>
            </div>
        `;
}

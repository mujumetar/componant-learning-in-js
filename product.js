
 export const showproduct=(data)=>{
    return `
    <div class="row gy-5">
    ${data.map((ele) =>  (
      `
   <div class="col-lg-3 col-6">
                  <div class="card rounded-6" style="width: 100%;">
                      <img src=${ele.image} class="card-img-top img-fluid" alt=${ele.image}>
                      <div class="card-body">
                        <h5 class="card-title text-truncate">${ele.title}</h5>
                        <h4 class="card-title">$ ${ele.price}</h4>
                        <p class="card-text">⭐ ${ele.rating.rate}</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                      </div>
                    </div>
              </div>
              
              ` )
    ).join("")}
      </div>    
          `;
  }
  
 
/*viết hiệu ứng */
// import json 
const urlProdcut = './assets/json/myProducts.json'


// geteElement html 
const phone = document.querySelector("#products");

// render innerHtml
const renderProducts = (products) => {
    products.forEach(products => {
        const productHtml = `
             <div  class="box__phone">
                
                <img class src="${products.image}" alt="">
                <div class="phone_price">
                    <p class="box__phone-name">${products.name}</p>
                    <p class="box__phone-cros-price">₹${products.price}</p>
                    <p class="box__phone-net-price">₹${products.originalPrice}</p>
                    <div class="smallhr"></div>
                    <p class="box__phone-net-save-price">Save - ₹${products.save}</p>
                </div>
            </div>
        ` 
        phone.innerHTML += productHtml
        
        

    })
}


// Lấy dữ liệu JSON và gọi hàm render
//renderProducts(jsonUrl);
fetch(urlProdcut)
    .then(response => response.json())
    .then(data => {
        renderProducts(data);
    })
    .catch(error => {
        console.error("Error loading products:", error);
    });




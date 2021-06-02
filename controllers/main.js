import Product from "./../models/Product.js";

// Get element by Id
const getEleById = (ele) => {
  return document.getElementById(ele);
};

// Render cart item
const renderCartItem = (arrProduct) => {
  var cartItem = "";

  for (let i = 0; i < arrProduct.length; i++) {
    const pd = arrProduct[i];
    const product = new Product(
      pd.id,
      pd.name,
      pd.price,
      pd.screen,
      pd.backCamera,
      pd.frontCamera,
      pd.img,
      pd.desc,
      pd.type,
      pd.fontCamera,
      pd.image,
      pd.inventory,
      pd.rating
    );

    cartItem += `
    <div class="col-md-4">
      <div class="card p-2">
        <img
          src="${product.img}"
          class="card-img-top"
          alt="Product img"
        />
        <div class="card-body p-0">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.desc}
          </p>
          <a href="#" class="btn btn-success btn-block">Cart</a>
        </div>
      </div>
    </div>
    `;
  }

  getEleById("productList").innerHTML = cartItem;
};

// Get products api
async function getDataProductApi() {
  try {
    const result = await axios({
      url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/products",
      method: "get",
    });

    renderCartItem(result.data);
  } catch (error) {
    console.log(error.data);
  }
}

getDataProductApi();

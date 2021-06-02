class Product {
  constructor(
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type,
    fontCamera,
    image,
    inventory,
    rating
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.screen = screen;
    this.backCamera = backCamera;
    this.frontCamera = frontCamera;
    this.img = img;
    this.desc = desc;
    this.type = type;
    this.fontCamera = fontCamera;
    this.image = image;
    this.inventory = inventory;
    this.rating = rating;
  }
}

export default Product;

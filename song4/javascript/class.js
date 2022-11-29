class Clothes {
  constructor(color, size, price) {
    this.color = color;
    this.size = size;
    this.price = price;
  }
  clothesInfo() {
    console.log(
      `color: ${this.color}, size: ${this.size}, price: ${this.price}`
    );
  }
}

const winterClothes = new Clothes("pink", "XXL", 78000);
winterClothes.clothesInfo();

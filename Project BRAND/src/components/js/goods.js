class GoodsItem {
    constructor(title, price) {
      this.title = title;
      this.price = price;    
       
    }
    render() {
     
      return `<a href="#" class="gallery-item">
                <img src="../src/assets/img/Feature_img_1.jpg" alt="Pic1" class="gallery-image">
                <h3 class="product-title">${this.title}</h3>
                <h3 class="price">$${this.price}</h3>
                <div class="cover-bg"></div>
                <div class="cover-text">
                    <p class="inbox-text">
                    <img src="../src/assets/img/gallery-cart.png" alt="">
                    Add to Cart</p></div>
            </a>`;
    
  }
}
  

  class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
      ];
    }
    render() {
      let listHtml = '';
     
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price);
        
        listHtml += goodItem.render();       
       
      });
      document.querySelector('#catalog').innerHTML = listHtml;
    }
  }

  const list = new GoodsList();
list.fetchGoods();
list.render();
  
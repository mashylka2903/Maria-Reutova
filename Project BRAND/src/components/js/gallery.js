const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt'];
const PRICES = [52, 53, 55, 67, 69, 94, 23, 45];

const catalog = {
    items: [],
    container: null,            
    init() {
        this.container = document.querySelector('#featured-gallery');
        this.items = getItems();
        this.render();
    },
    render() {
        let htmlStr = '';
        this.items.forEach((item, index) => {
            let imgURL = `../src/assets/img/Feature_img_${index + 1}.jpg`;
            htmlStr += `
            <a href="#" class="gallery-item">
                <img src="${imgURL}" alt="Pic${index + 1}" class="gallery-image">
                <h3 class="product-title">${item.productName}</h3>
                <h3 class="price">$${item.productPrice}</h3>
                <div class="cover-bg"></div>
                <div class="cover-text">
                    <p class="inbox-text">
                    <img src="../src/assets/img/gallery-cart.png" alt="">
                    Add to Cart</p></div>
            </a>
            `;
        });
        this.container.innerHTML = htmlStr;
    }
}

catalog.init();
//

function createNewItem(name, price) {
    return {
        productName: name,
        productPrice: price
    }
}

function getItems() {
    return NAMES.map((name, index) => createNewItem(NAMES[index], PRICES [index]));
}
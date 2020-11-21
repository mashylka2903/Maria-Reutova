const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt', 'One More T-Shirt'];
const PRICES = [52, 53, 55, 67, 69, 94, 23, 45, 200];

const catalog = {
    items: [],
    container: null, 
    imgFTPurl: 'https://raw.githubusercontent.com/kellolo/static/master/img/JS1_shop',
    url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',

    init() {
        this.container = document.querySelector('#catalog');
        this._get(this.url)
        .then(items => {
            this.items = items;
        })
        .then(() => {
            this.render();
        })
        
    },
    _get(url) {
        return fetch(url).then(d => d.json()) //на выходе из этого метода вы получите полноценный объект(массив) с данными
    },
    render() {
        let htmlStr = '';
        this.items.forEach((item, index) => {
            let imgURL = `${this.imgFTPurl}/featuredItem${index + 1}.jpg`;
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

class ProductList {
    #goods; // декларировать goods как свойство
    constructor (container = '.products') { //так можно указать, куда выложить каталог, это класс дива
        this.container = container;
        this.#goods = []; //массив данных исп только для внутренних операций
        this.allProducts = []; // экземпляр созданных на основе данных
        this.#fetchGoods();
        this.#render();
    }

    #fetchGoods() {
        this.#goods = [
            {id : 1, title: 'Notebook', price: 2000},
            {id : 2, title: 'Mouse', price: 1500},
            {id : 3, title: 'Keyboard', price: 5000},
            {id : 4, title: 'Gamepad', price: 4500},
        ];
    }

    #render () {
        const block = document.querySelector(this.container);

        for (let product of this.#goods) {
            const productObject = new ProductItem(product);

            this.allProducts.push(productObject);

            block.insertAdjacentHTML('beforeend', productObject.getHTMLStr());
        }
    }


sumPrice(){
    return this.#goods.reduce((sum, {price}) => sum + price, 0); //сумма всех элементов
    
}

}
class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    getHTMLStr () {
        return `<div class = "product-item" data id = "${this.id}">
        <img src = "${this.img}" alt = "Image">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class = "by-btn">Добавить в корзину </button>
        </div>` 
    }
}

const list = new ProductList();
console.log (list.sumPrice());
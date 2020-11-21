
const basket = {
    items: [],
    wrapper: null, /*он будет то показываться, то скрываться*/
    container: null, /* внутри wrapper, куда падают items*/
    url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json', //ссылка на массив с корзиной
    init() { /* инициализация*/
        this.wrapper = document.querySelector('#wrapper'); /* wrapper присваивается id */
        this.container = document.querySelector('#basket-container'); // контейнеру id basket

        this._get(this.url) //запрос
            .then(basketObject => { //получили объект корзины
                this.items = basketObject.content
            })
            .then(() => { //потом данные не возвращаем
                this._render(); // делаем рендер
                this._handleEvents(); //делаем хендл
            })
    },

    _get(url) {
        return fetch(url).then(d => d.json()) //на выходе из этого метода вы получите полноценный объект(массив) с данными
    },
    _handleEvents() {
        document.querySelector('#toggle-basket').addEventListener('click', () => { //для иконки корзины toggle - если класс есть, то убираем, если нет, то добавляем
            this.wrapper.classList.toggle('hidden'); /* для того, чтобы скрывать или показывать корзину. Для этого в css доббавить класс hidden 
            display:none !important;*/
            console.log(this)
        });

        this.wrapper.addEventListener('click', e => {

        })
    },
    _render() {
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += `
            <div class="basket-item">
                <a href="product.html" class="basket-item__product-link">
                    <img src="${item.productImg}"
                        alt="product" class="drop-cart__product-img">
                </a>
                <div class="basket-item-description">
                    <a href="product.html" class="basket-item-description-name">${item.productName}</a>
                    <div class="product-stars">
                        <i class="${item.stars > "0" ? "fas" : "far"} ${item.stars === "0.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "1" ? "fas" : "far"} ${item.stars === "1.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "2" ? "fas" : "far"} ${item.stars === "2.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "3" ? "fas" : "far"} ${item.stars === "3.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "4" ? "fas" : "far"} ${item.stars === "4.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                    </div>
                    <div class="basket-item-price">
                        <span> ${item.amount} x ${item.productPrice}= $${item.productPrice * item.amount}</span>
                    </div>
                </div>
                <i class="fas fa-times-circle"></i>
            </div>
        `;
        });
        this.container.innerHTML = htmlStr;
    }
}

basket.init()
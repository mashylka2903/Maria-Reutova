//создаем конструктор элемента корзины

class BasketItem {
    constructor(el, img ='https://placehold.it/200x150') {
        this.basketItem_title = el.product.title;
        this.basketItem_price = el.product.price;
        this.basketItem_id = el.product.id;
        this.img = img;
    }

    render () {
        //вставляем разметку элемента корзины
    }
}

//создаем конструктор списка элемнтов корзины

class BasketList {
    constructor(container = '.basket') {
        this.container = container;        
        this.allProducts = [];
        
    }

    init () {
        //обработчик кнопки купить
        //записать информацию о товаре в переменную
    }

    render () {
        //создать массив allProducts из 

    }
}

class Basket {
    
    addProduct (product)
    //добавить продукт с проверкой, если уже такой есть, то изменить количество


    removeProduct (product)
    //удалить продукт с проверкой, если уже такой >1, то изменить количество

    init ()

    //обработчик событий на кнопку по появлению дива корзины

}

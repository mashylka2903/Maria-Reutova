const express = require('express');
const fs = require('fs');
const router = express.Router();


/**
 * API Корзины
 */
router.get('/', (req, res) => {
    fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    });
});

// Добавление нового товара в корзине
router.post('/', (req, res) => {
    fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            // парсим текущую корзину
            const cart = JSON.parse(data);
            // добавляем новый товар
            cart.contents.push(req.body);
            // пишем обратно
            fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } 
            })
        }
    });
});

// Изменяем количество товара
router.put('/:id', (req, res) => {
    fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            // парсим текущую корзину
            const cart = JSON.parse(data);
            // ищем товар по id
            const find = cart.contents.find(el => el.id_product === +req.params.id);
            // изменяем количество
            find.quantity += req.body.quantity;
            // пишем обратно
            fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } 
            })
        }
    });
});

// Удаляем товар
router.delete('/:id', (req, res) => {
    fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            // парсим текущую корзину
            const cart = JSON.parse(data);
            // ищем товар по id
            const find = cart.contents.find(el => el.id_product === +req.params.id);
            // удаляем товар
            cart.contents.splice(cart.contents.indexOf(find), 1);
            // пишем обратно
            fs.writeFile('./server/db/userCart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } 
            })
        }
    });
});

module.exports = router;

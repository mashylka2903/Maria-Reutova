const express = require('express');
const fs = require('fs');
const app = express();
const cartRouter = require('./cartRouter');

/**
 * Активируем мидлвары
 */
app.use(express.json()); // Даем знать приложению, что работаем с json'ом
app.use('/', express.static('./public')); // запросы в корень нашего сайт отдают содержимое public
app.use('/api/cart', cartRouter);


/**
 * API Каталога
 */
app.get('/api/products', (req, res) => {
  fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

/*Запуск сервера 
 */

const port = 3000; 
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});

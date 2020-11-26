


//Определяем параметры
class Param {
  constructor (elem) {
    this.name = elem.value;
    this.price = +elem.dataset.price;
    this.calories = +elem.dataset.calories;
  }
}

// Конструктор Гамбургера

class Hamburger {
  constructor (size, stuffing, topping) {
    this.size = new Param(this.selectRadio(size));
    this.stuffings = this.selectCheckBox(stuffing);
    this.toppings = this.selectCheckBox(topping);
  }

  selectRadio (name) {
    return document.querySelector(`input[name="${name}"]:checked`);
  }

  selectAll (name) {
    return document.querySelectorAll(`input[name="${name}"]:checked`);

  }

  selectCheckBox (name) {
    let res = [];
    this.selectAll(name).forEach(el =>res.push(new Param(el)));
      return res;
    
  }

sumPrice() {
  let result = this.size.price;
  this.stuffings.forEach(stuffing => result += stuffing.price);
  this.toppings.forEach(topping => result += topping.price);
  return result;

}
sumCalories() {
  let result = this.size.calories;
  this.stuffings.forEach(stuffing => result += stuffing.calories);
  this.toppings.forEach(topping => result += topping.calories);
  return result;

}


final() {document.querySelector('.total').innerHTML = `Price : ${this.sumPrice()}
Calories : ${this.sumCalories()}`

}

}








// Лекція 32



// Завдання 1

const taxMixin = {
  vat() {
    this.price += this.price * 0.2;
    return this.price;
  },
  exciseDuty() {
    this.price = (this.price + this.price * 0.3) + 10;
    return this.price;
  },
  singleTax() {
    this.price += 1;
    return this.price;
  }
};

class Cola {
  constructor(brand, price){
    this.brand = brand;
    this.price = price;
  }
}

Object.assign(Cola.prototype, taxMixin);

class Whiskey {
  constructor(brand, price){
    this.brand = brand;
    this.price = price;
  }
}

Object.assign(Whiskey.prototype, taxMixin);

class Ice {
  constructor(price){
    this.price = price;
  }
}

Object.assign(Ice.prototype, taxMixin);


let cocaCola = new Cola('Coca-Cola', 10);
let johnwalker = new Whiskey('john walker', 100);
let ice = new Ice(2);

console.log(cocaCola.vat()); // 12
console.log(johnwalker.exciseDuty()); // 140
console.log(ice.singleTax()); // 3




// Завдання 2

function uniqueString(str) {
  const words = str.split(';').map((word) => word.trim());
  const uniqueWords = [];

  words.forEach((word, index) => {

    if (words.indexOf(word) === index && !uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  });

  return uniqueWords.join('; ');
}

console.log(uniqueString("cherry; orange; cherry; banana; banana")); // "cherry; orange; banana"





// Завдання 3 

function getUniquePhoneNames() {
  const phones = {};
  const phoneList = document.querySelectorAll('.shop-list li');
  
  for (let i = 0; i < phoneList.length; i++) {
    const name = phoneList[i].textContent;
    if (!phones[name]) {
      phones[name] = true;
    }
  }
  
  const uniquePhoneNames = Object.keys(phones).filter(name => phones[name]);
  return uniquePhoneNames;
}

console.log(getUniquePhoneNames());





// Завдання 4 

let mike = {name: 'Mike', age: 18}
let bob = {name: 'Bob', age: 25}
let nikola = {name: 'Nikola', age: 32}

function userVisits() {
  const visits = new Map();
  
  return function(user) {
    if (visits.has(user)) {
      visits.set(user, visits.get(user) + 1);
    } else {
      visits.set(user, 1);
    }
    
    return visits.get(user);
  }
}

const mikeVisits = userVisits();
const bobVisits = userVisits();
const nikolaVisits = userVisits();

mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisits(bob);
nikolaVisits(nikola);
nikolaVisits(nikola);

console.log(mikeVisits(mike));
console.log(bobVisits(bob));
console.log(nikolaVisits(nikola));


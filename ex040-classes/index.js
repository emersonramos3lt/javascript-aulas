// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor  function ex. static keyword, encapsulation, inheritance


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    // taxa
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05 // Valor da taxa

// Add os itens a Product
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00)

product2.displayProduct();

const total = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
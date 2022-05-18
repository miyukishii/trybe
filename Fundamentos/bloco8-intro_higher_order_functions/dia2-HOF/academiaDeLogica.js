const techProducts = [
    {
        id: 1, // numérico
        name: 'computer', // string
        price: 2100, // number
    },
    {
        id: 2,
        name: 'mouse',
        price: 56,
    },
    {
        id: 3,
        name: 'monitor',
        price: 589,
    },
    {
        id: 4,
        name: 'keyboard',
        price: 78,
    },
    {
        id: 5,
        name: 'HD',
        price: 350,
    },
    {
        id: 6,
        name: 'webcam',
        price: 187,
    },
    {
        id: 7,
        name: 'mic',
        price: 69,
    },
    {
        id: 8,
        name: 'headset',
        price: 216,
    },
];

// 1 - Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares 

function returnArrayOfEvens() {
let array = [];
    techProducts.forEach((product) => {
        if (product.id % 2 === 0) {
            array.push(product.name);
        } else {
            return 'even id not found';
        }
    })
    return array;
};
console.log(returnArrayOfEvens());


// 2 - Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário

function isHigherThanThreeThousand() {
    return techProducts.some((product) => product.price > 300);
};
console.log(isHigherThanThreeThousand());


// 3 - Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
// ex: id: 8 e quantidade: 2 preço total: 432

function totalValue(productId, quantity) {
let total = 0;
let price = 0;
    techProducts.find((product) => {
        if (product.id === productId) {
            price = product.price;
        }
    })
    return total = price * quantity;
};
console.log(totalValue(3, 2));
// function createBookShop(inventory){
//     return {
//         inventory: inventory,
//         inventoryValue: function() {
//             return this.inventory.reduce(function(totalPrice, book){
//                 return totalPrice + book.price;
//             }, 0);
//         },
//         priceForTitle: function(bookTitle){
//             return this.inventory.find(function(book){
//                 return book.title === bookTitle;
//             }).price;
//         }
//     }
// }

// var inventory = [
//     {title: "The Alchemist", price: 150},
//     {title: "A Game of Thrones", price: 350},
// ]
// var bookShop = createBookShop(inventory);

// console.log(bookShop.inventoryValue());
// console.log(bookShop.priceForTitle("A Game of Thrones"));



// Using Es6
function createBookShop(inventory){
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((totalPrice, book) => {
                return totalPrice + book.price;
            }, 0);
        },
        priceForTitle(bookTitle){
            return this.inventory.find((book) => {
                return book.title === bookTitle;
            }).price;
        }
    }
}

var inventory = [
    {title: "The Alchemist", price: 150},
    {title: "A Game of Thrones", price: 350},
]

var bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("A Game of Thrones"));


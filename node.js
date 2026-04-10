// Online Bookstore
// Task 1

let customerName = "Esher"
let customerAge = "25" 
let bookTitle = "JavaScript Basics"
let bookPrice = 5000;
let quantity = 3;
let isStudent = true;

// Task 2 Calculate the total price
let totalPrice = bookPrice * quantity;

// Task 3: Comparison checks
let isAdult = customerAge >=18;
let buyingManyBooks = quantity > 3;
let isBookFiveThousand = bookPrice === 5000;

//Task 4: Creat an object for the order 
const customerOrder = {
    customerName : customerName,
    bookTitle:bookTitle,
    quantity: quantity,
    totalPrice: totalPrice
};


//Task 5: print the result 
console.log("Customer Name:", customerName)
console.log("Book Title:", bookTitle)
console.log("Total Price:", totalPrice);
console.log("Is Customer an Adult?", isAdult);
console.log("Buying More Than 3 Book?", buyingManyBooks);
console.log("Is Book Price 5000?", isBookFiveThousand);



    

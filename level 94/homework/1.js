// 1) შექმენი ობიექტი სადაც გექნება გექნება ორი გასაღები, მათი მნიშვნელობა კი იყოს კი შენი საყვარელი მანქანის ბრენდი და მოდელი, დაამატე ახალი გასაღები რომელშიც შეინახავ გამოშვების წელს

const myobj = {
  brand: "jiguli",
  model: "xuioznaet",
}
myobj.year = 1723


// 2)შექმენი ობიექტი calculator, რომელსაც ექნება მეთოდი add(a, b) და დააბრუნებს ჯამს.

const calculator = {
  method : (a,b) =>{
    return a + b
  }
}
console.log(calculator.method(5,2))

// 3) შექმენი ობიექტი user სადაც გექნება name და age. წაშალე age გასაღები და დაამატე weigth

const user = {
  name: "jemali",
  age: "55"
}
delete user.age
user.weight = 67
console.log(user)
// 4)შექმენი ობიექტი book და შეცვალე მისი title გასაღები.

const book = {
  title: "sigma buki"
}
book.title = "not so sigma buk"
console.log(book)
// 5)შექმენი ობიექტი და გამოიყენე for...in, რომ დაბეჭდო მხოლოდ keys.

const newobj = {
  name: "shota",
  age: 51,
  bread: "sy"
}
for(let i in newobj){
  console.log(i)
}
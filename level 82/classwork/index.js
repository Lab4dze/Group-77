// 1) კომენტარების სახით ახსენით რა არის arrow function და რა დანიშნულება აქვს მათ? რისთვის გამოიყენება? 

// 2) შექმენით arrow function რომელსაც დაარქმევთ getAge, მიიღებს პარამეტრად ასაკს და შემდეგ დააბრუნებს გაორმაგებულ რიცხვით მნიშვნელობას 

// 3) მოახდინეთ შემდეგი კოდის refactor-ინგი arrow function-ში:
//   function sayHello(name) {
//     return `Hi ${name}`
//   }

// 4) შექმენით helper ფუნქციის 1 ნებისმიერი მარტივი მაგალითი, უნდა გქონდეთ 2 ფუნქცია, და ერთ-ერთი ფუნქცია უნდა აბრუნებდეს პირველი ფუნქციის შედეგად მიღებულ გაუმჯობესებულ პასუხს.

// 5) შექმენით 3 სხვადასხვა ფუნქცია, პირველი ფუნქცია ჩვეულებრივი გზით (function keyword), მეორე ფუნქცია ცვლადში შენახული მნიშვნელობით და მესამე ფუნქცია arrow ფუნქცია. (უმარტივესი ფუნქციები)
// 1) Arrow function არის ფუნქციის მოკლე სინტაქსი, რომელიც საშუალებას გვაძლევს შევქმნათ ფუნქციები უფრო კომპაქტურად. ისინი არ ქმნიან საკუთარ "this" კონტექსტს და ხშირად გამოიყენება ანონიმურ ფუნქციებში, როგორიცაა callback-ები.

// 2)
const getAge = (age) => age * 2;
console.log(getAge(25)); // 50

// 3)
const sayHello = (name) => `Hi ${name}`;
console.log(sayHello('John')); // Hi John
// 4)
function add(a, b) {
  return a + b;
}
function enhanceAddition(a, b) {
  return add(a, b) * 2;
}
console.log(enhanceAddition(3, 4)); // 14
// 5)
// ჩვეულებრივი ფუნქცია
function greet() {
  return 'Hello!';
}
console.log(greet()); // Hello! 
// ცვლადში შენახული ფუნქცია
const farewell = function() {
  return 'Goodbye!';
};
console.log(farewell()); // Goodbye!
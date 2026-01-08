// 2) კომენტარების სახით ახსენით რა არის increment / decrement

//increment - არის 1 ით გაზდა decrement - 1 ით შემცირება

// 3) კომენტარების სახით ახსენით რა არის literal string-ები, და საერთოდ რაში ვიყენებთ?

// literal string ებს ვიყენებთ როცა გვინდა ცვლადის ჩასმა ტექსტში

// 4) შექმენით let ცვლადი და მიანიჭეთ მას რიცხვი. += ოპერატორის გამოყენებით გაზარდეთ ეს რიცხვი 10-ით და გამოიტანეთ კონსოლში.

let num = 5;
num+=10;
console.log(num)

// 5) შექმენით var ცვლადი საწყისი მნიშვნელობით 5. გამოიყენეთ ++ ოპერატორი ორჯერ და საბოლოო შედეგი გამოიტანეთ კონსოლში.

var age = 15;
age++;
age++;
console.log(age)

// 6) Math ობიექტის გამოყენებით კონსოლში გამოიტანეთ რიცხვის დამრგვალებული მნიშვნელობა (მთელ რიცხვამდე).

let random_num = Math.random() * 10
console.log(Math.round(random_num))
// 7) შექმენით const ცვლადი და მიანიჭეთ მას რაიმე რიცხვი. შეეცადეთ მისი მნიშვნელობის შეცვლას და დააკვირდით შედეგს.

const real = "over";
// real = "nigga"; //error


// 8) შექმენით ორი let ცვლადი და მათში შეინახეთ რაღაც რიცხვი. გამოიყენეთ *= ოპერატორი, რომ პირველი რიცხვი გაამრავლოთ მეორეზე და გამოიტანეთ კონსოლში.

let num_1 = 10;
let num_2 = 3
console.log(num_1*=num_2)

// 9) შექმენით let ცვლადი და მასში შეინახეთ რიცხვი 20. გამოიყენეთ -- ოპერატორი ერთხელ და გამოიტანეთ შედეგი კონსოლში.

let numberz = 20;
numberz--;
console.log(numberz)

// 10) Math.random()-ის გამოყენებით შექმენით ცვლადი, სადაც შეინახავთ random რიცხვს 1-დან 50-მდე და გამოიტანეთ კონსოლში.

//first version
let randomNum = Math.random()*50;
console.log(randomNum)

//second version with .round()
let randomNum1 = Math.round(Math.random()*50);
console.log(randomNum1)


// 11) შექმენით ცვლადები, რომელშიც შეინახავთ ინფორმაციას თქვენს შესახებ (მაგ: სახელი, გვარი, ასაკი, ჰობბი და ა.შ). თქვენი დავალებაა literal string-ების გამოყენებით ააწყოთ ერთი დიდი წინადადება.

let namezy = "Shio";
let aggey = 15;
let LastName = "Labadze";
let Hobby = "Proggraming";
let job = "unemployed"
console.log(`hello my name is ${namezy} ${LastName} i am ${aggey} years old and my Hobby is ${Hobby} and also i am ${job}`)
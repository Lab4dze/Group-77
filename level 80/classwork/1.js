// 1) კომენტარებით ახსენით რა არის Hoisting და როგორ მუშაობს?

//ჰოისთინგი ჯავასკრიპტში არის ჯავასკრიპტის წესი რაშიც მდგომარეობს რომ ჯერ კომპიტერი ფუნქციებს კითხულობს მერე კოდს

// 2) გცვლადში შეინახეთ თქვენი სახელი და შექმენით switch case --> განიხილეთ case "davit" და დაბეჭდეთ შსაბამისად მისალმების ტექსტი, ასევე case "nikolozi", case "vazha" და რაიმე default case-ი.

let name1 = "shio";
switch (name1) {
  case "davit":
    console.log("hello davit");
    break;
  case "nikolozi":
    console.log("hello nikoloz");
    break;
  case "vazha":
    console.log("hello vazha");
    break;
  default:
    console.log("hello NIGGER");
}

// 3) შექმენით ფუნქცია greet, რომელსაც გადაცემა პარამეტრი name და დააბრუნბინებთ შესაბამისი მისალმების ტექსტს შესაბამისს სახლზე. (გამოიყენეთ return keyword)

const greet = (name) =>{
  return `Hello ${name}`
}
console.log(greet("shiozz"))

// 4) შექმენით ფუნქცია multiplication, რომელსაც გადაცემა 2 პარამეტრი, შესაბამისად a და b. თქვნი დავალებაა დაბეჭდოთ ამ პარამეტრების ნამრავლი. (გამოიყენეთ return keyword)

const multiplication = (a, b) => {
  return a * b
}
console.log(multiplication(15,2))

// 5) შექმენით ფუნქცია substriction, რომელსაც გადაცემა 2 პარამეტრი, შესაბამისად a და b. თქვენი დავალებაა დაბეჭდოთ ამ პარამეტრების სხვაობა. (გამოიყენეთ return keyword)

const substriction = (a,b) => {
  return a - b
}

console.log(substriction(5,1))

// 6) შექმენით ფუნქცია ageChecker, რომელსაც გადაეცემა 1 პარამეტრი (ასაკი) და შეამოწმებს, თუ ასაკი > 18 მაშინ გამოიტანოს "სრულწლოვანი", სხვა ნებისმიერ შემთავევაში კი "შენ ხარ მოზარდი".

const ageChecker = (age) => {
  if (age > 18) {
    return "სრულწლოვანი"
  } else {
    return "შენ ხარ მოზარდი"
  }
}

console.log(ageChecker(13))
// 1) ახსენით რაში გამოიყენება forEach map filter reduce,

//forEach ს გამოვიყენეთ რომ სიას გადავუაროთ უფრო მარტივად და სწრაფად და ასევე მას გადეცემა ქალლბექ ფუნქცია
//map საც იგივენაირად ოღონდ ის ქმნის ახალ სიას და აბრუნებს მნიშვნელობას
//filter ფილტერი აბრუნებს ახალ სიას და იგი ფილტრავს რაღაცა პირობის შედეგად
//reduce -ი აბრუნებს საბოლოო მნიშვნელობას მას გადაეცემა ორი არგუმენტი accumulator და initial value აქუმულატორი არის დამწყები რიცვხი

// 2)  შექმენით რიცხვების მასივი, თქვენი დავალებაა დაბეჭდოთ კონსოლში თითოეული რიცხვი და მის გვერდით ტექსტი:

// Number is: 5
// Number is: 10
// ...ასე შემდეგ


// const numbers = [1,2,3,4,5]
// numbers.forEach(num => console.log(`Number is ${num}`))


// 3) შექმენით რიცხვების მასივი, დატოვე მხოლოდ ისეთი რიცხვები რომელიც არის ლუწი და არის მეტი 5 ზე

// const numbers = [1,3,4,5,6,7,8]
// const new_nums = numbers.filter(num =>{
//   return num % 2 == 0 && num > 5
// })
// console.log(new_nums)

// 4) შექმენით რიცხვების მასივი, reduce ის მეშვეობით იპოვე მასივში არსებული რიცხვების საშვალო 

// const numbers = [1,3,4,5,6,7,8]

// const sum = numbers.reduce((acc, curr) => acc + curr, 0)
// const average = sum / numbers.length

// console.log(average)

// 5) შექმენით რიცხვების მასივი, შენი დავალებაა დატოვო მხოლოდ ლუწი რიცხვები, შემდგომ დარჩენილი რიცხვები გაამრავლეთ 3 ზე, და საბოლოოდ გაიგეთ მასივში არსებული რიცხვების ჯამი

const nums = [12,34,45,2,3]
const new_nums = nums.filter(num => num % 2 == 0)
const neww_nums = new_nums.map(numz => numz*3)
const final = neww_nums.reduce((acc,curvall) => {
  return acc+curvall
} ,0)
console.log(final)
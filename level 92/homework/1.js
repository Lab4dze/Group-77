// 1)შექმენით პროგრამა რომელიც შეამოწმებს არის თუ არა ინტეჯერების სიაში არსებული ყველა ელემენტი დადებითი 

// const numbers = [1,2,3,4,5,6]
// const new_numbers = numbers.every(num => num > 0)
// console.log(new_numbers)

// 2)შექმენი ინტეჯერების სია და დააბრუნე ახალი სია სადაც იქნება მათი კვადრატები

const numbers = [1,2,3,4,5,6]

const newList = numbers.map(num => num * num)

console.log(newList)

// 3)შექმენი სია სადაც იქნება მრავალი მონაცემთა ტიპი და დატოვე მხოლოდ სტრინგები

const words = [20,"gee",true,6.12,"yellow","ss"]
const filtered = words.filter(wrd => {
  return typeof(wrd) === typeof("str")
})
console.log(filtered)

// 4)შექმენით სტრინგების სია და დაადგინე, არის თუ არა მინიმუმ ერთი სტრინგი, რომელიც შეიცავს ციფრს.

// const wordsArr = ["hey","asd","omggad","im 1 4 you"]
// const detect = wordsArr.filter()
//vergavigee


// 5) გადაუარეთ ინტეჯერების სიას და დააბრუნე სია სადაც იქნება ყველა ინტეჯერს გამოკლებული მათი 20%


const numberz = [5,10,100,50,123,53]
const new_numz = numberz.map(numz => {
  return numz - (numz * (20 / 100))
})
console.log(new_numz)
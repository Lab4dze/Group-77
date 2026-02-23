// const callback = (value) => {
//   return value * 2 
// }

// const func = (arr) => {
//   res = []
//   for(let i = 0;i<arr.length;i++){
//     res.push(callback(arr[i],i))
//   }
//   return res
// }

// console.log(func([67,41,10,4,5]))




// 1)შექმენით პროგრამა რომელიც შეამოწმებს არის თუ არა ინტეჯერების სიაში არსებული ყველა ელემენტი 20-ზე მეტი
const elements = [50,123,512,52,123,421]
const check = elements.every((num) =>{
  return num > 20
})
console.log(check)
// 2)შექმენით სახელების სია და გამოიტანე ახალი სია სადაც მხოლოდ ის სახელებია რომელიც იწყება ასო ს-ზე
const names = ['gia','shio','zangi','shavikaci']
const funcc =(s) =>{

  for(let i =0;i<s.length;i++){
    newNames=[]
    if (s[i][0] =='s'){
      newNames.push(s[i])
    }else{
      continue
    }
  }
  return newNames
}
console.log(funcc(['gia','shio','zangi','shavikaci']))
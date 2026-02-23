const arr1 = [1,2,3,4,5]
const func = (arr,fn) => {
  for(let i = 0; i< arr.length;i++){
    fn(arr[i], i, arr)
  }
}
func(arr1, (num,index,array) => {
  console.log(num)
  console.log(index)
  console.log(array)

})
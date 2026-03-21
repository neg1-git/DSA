let arr = [-5,2,10,4,6] 
let target=100

let o=-1
for (let i = 0; i < arr.length; i++) {

  if(arr[i]===target){
    o=i
  }
  
}
console.log(o)
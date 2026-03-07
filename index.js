let numbers = [1,2,3,4] 
let target = 3

let l=0
let r=numbers.length-1
while(l<=r){
  let sum=numbers[l]+numbers[r]
  if(sum>target){
    r--
  }
  if(sum<target){
    l++
  }
  if(sum===target){
    console.log(l+1,r+1)
    return
  }
}




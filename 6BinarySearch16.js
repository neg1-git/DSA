let arr = [-5,2,4,6,10] 
let target=10

let l=0
let r=arr.length-1
let o=-1

while(l<=r){
  let m = Math.floor((l+r)/2)
  
  let check=arr[m];

  if(target<check){
    r=m-1
  }
  else if(target>check){
    l=m+1
  }else{
    o=m
    break
  }
}

console.log(o)
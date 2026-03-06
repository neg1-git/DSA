let s = "Was it a car or a cat i saw?"

let cleanStr=s.toLowerCase().replace(/[^a-z0-9]/g,'')

let left=0;
let right=cleanStr.length-1
let output=true
while(left<right){
  if(cleanStr[left]!==cleanStr[right]){
    output=false
  }else{
    left=left+1
    right=right-1
    output=true
  }
}
console.log(output)




s = "[(])"

const obj={
    ")":"(",
    "}":"{",
    "]":"["
}
let stack=[]

for(const i of s){
    if(i in obj && stack[stack.length-1]===obj[i]){
        stack.pop(i)
    }else{
    stack.push(i)}
}
if(stack.length===0){console.log(true)}
else{console.log(false)}
console.log(stack)
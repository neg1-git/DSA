let tokens = ["4", "13", "5", "/", "+"]
let operators = ["+","-","*","/"]
let num=[]
let op=[]
let output

for(const token of tokens){
    if(token==='+'){
        output=Number(num[num.length-2])+Number(num[num.length-1])
        num.pop()
        num.pop()
        num.push(output)
        console.log(output)
    }else if(token==='-'){
        output=Number(num[num.length-2])-Number(num[num.length-1])
        num.pop()
        num.pop()
        num.push(output)
        console.log(output)
    }else if(token==='*'){
        output=Number(num[num.length-2])*Number(num[num.length-1])
        num.pop()
        num.pop()
        num.push(output)
        console.log(output)
    }else if(token==='/'){
        output=Number(num[num.length-2])/Number(num[num.length-1])
        num.pop()
        num.pop()
        num.push(Math.trunc(output))
        console.log(output)
    }else{
        num.push(token)
    }
}
console.log(output)
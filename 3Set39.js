// const set= new Set([1,2,3])
// set.add(4)
// set.delete(2)
// console.log(set.has(1))
// console.log(set.size)

// for(i of set){
//   console.log(i);
// }

const arr=[1,1,2,2,3,3,4,4,5,6,7,8]

// const set= new Set(arr)

// const newarr=[set]

// console.log(arr)
// console.log(...newarr)

const newarr=[...new Set(arr)]

console.log(newarr)
const map= new Map([['a',1],['b',2],['c',3]])
map.set('d',4)
map.delete('b')
console.log(map.size)
console.log(map.has('b'))

for ([key,val] of map){
  console.log(`${key}:${val}`)
}

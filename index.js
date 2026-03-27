let key="alice"
let timestamp="2"

let store = {
  "alice": [
    ["good", 1],
    ["sad", 3],
    ["angry", 5]
  ],
  "bob": [
    ["chilling", 2]
  ]
};


 let l=0
 let r=store[key].length-1
let out

while(l<=r){
  let m=Math.floor((l+r)/2);
  const element = store[key][m];

  if(timestamp>=element[1]){
    out=element
    l=m+1
  }else{
    r=m-1
  }
}
console.log(out)

/* for (let i = 0; i < store[key].length; i++) {
  const element = store[key][i];
  if(store[key][i][1]<=timestamp){

    out=element
  }
  
}
console.log(out)*/
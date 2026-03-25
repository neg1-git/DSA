let nums = [5,1,2,3,4]
let target = 1


let l=0;
let r=nums.length-1;

while(l<r){
  let m=Math.floor((l+r)/2);

  if(nums[m]>=nums[l]){
    if(nums[m]>=target && target>nums[l]){
      r=m
    }else{
      l=m+1
    }
  }else{
    if(target>nums[m] && target<=nums[r]){
      l=m+1
    }else{
      r=m
    }
  }
console.log(m)
}


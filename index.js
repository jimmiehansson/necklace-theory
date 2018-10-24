console.time('x');
const arr = [5,4,6,3,1,2,0];
const stack = { min: 0, med: 0, max: 0 };
let outer;

for(var i = 0; i <= arr.length; ++i) {
  if(i === arr[i]) {
    stack.min++;
  }
  if(i === 0){
    for(var j = 0; j <= arr.length; ++j) {
      if(arr[arr[j]] === j && arr[arr[j]] !== arr[j]) {
        stack.med++;
      }
    }
  }
  outer = i;
}
stack.max = outer - (Number.parseInt(stack.med) + Number.parseInt(stack.min));
console.log(stack);
console.timeEnd('x');
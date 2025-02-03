// let data =[1,2,3];
// let [a, ,b, c = 4] = data;
// console.log(a, b, c)

const data = {arr: [1,2,3]};
const {arr: [ , v2]} = data;
console.log(v2);
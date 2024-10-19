let n = prompt("Enter the number");
let arr = [];
for (let i = 0;i < n; i++) {
   arr[i] = i + 1 ;
}
const sumArr = arr.reduce((prev,curr) => {
    return prev + curr
});
console.log("The sum of array is", sumArr);
const mulArr = arr.reduce((prev,curr) => {
    return prev * curr
});
console.log("The product of array is", mulArr);

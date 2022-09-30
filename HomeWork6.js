const str = '123456';
const firstHalf = (+str[0] + +str[1] + +str[2]);
const secondHalf = (+str[3] + +str[4] + +str[5]);
if (firstHalf === secondHalf) {
    console.log('да');
} else {
    console.log('нет');
}

let n = 1000;
let num = 0;
while (n > 50) {
    n /= 2
        ++num
}
console.log(num);
console.log(n);

const arr = [12, 15, 20, 25, 59, 79];
const sum = arr.reduce((a, b) => a + b);
const average = sum / arr.length;
console.log(average);

const arr2 = [1, 2, 3, 4, 5];
arr2.splice(3, 0, 'a', 'b', 'c');
console.log(arr2);

const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 0, 'a', 'b');
arr3.splice(6, 0, 'c');
arr3.splice(8, 0, 'e');
console.log(arr3);

const arr4 = [3, 4, 1, 2, 7];
arr4.sort(function (a, b) {
    return a - b
})
console.log(arr4);
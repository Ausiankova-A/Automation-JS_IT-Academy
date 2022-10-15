const arr = [1, 2, 3, 4, 5, 6];

function reverse(array) {
    return array.reverse()
};
console.log(reverse(arr));



const arr2 = [3, 67, 177, 154, 18, 2];

function maxValue(array) {
    let max = array[0];
    array.forEach((item) => {
        if (item > max) {
            max = item;
        }
    })
    return max;
};
console.log(maxValue(arr2));


function getFibonacci(n, M) {
    let current = getFibonacci2(n);

    function getFibonacci2(n) {
        return n <= 1 ? n : getFibonacci2(n - 1) + getFibonacci2(n - 2);
    };

    const np = n - 1;
    let prev = getFibonacci3(np);

    function getFibonacci3(np) {
        return np <= 1 ? np : getFibonacci3(np - 1) + getFibonacci3(np - 2);
    };

    let result = [];
    for (i = 0; i < M; i++) {
        let future = prev + current;
        prev = current;
        current = future;
        result.push(prev);
    };
    return result;


}
console.log(getFibonacci(5, 6));



function match(a, b) {
    const strA = String(a);
    let numA = Array.from(strA);
    let strB = String(b);
    const numB = Array.from(strB);
    let counter = 0;
    let counter2 = 0
    for (i = 0; i < numA.length; i++) {
        let item1 = numA[i];
        let item2 = numB[i];
        if (item1 === item2) {
            counter++;
        } else {
            if (numA.includes(item2)) {
                counter2++
            }
        }
    }

    return {
        valueAndPosition: counter,
        onlyValue: counter2
    };

}
console.log(match(1234, 1247));



function sort(Array) {
    let clone1 = Array.slice(0);
    let clone2 = Array.slice(0);
    return {
        increase: clone1.sort((a, b) => a - b),
        decrease: clone2.sort((a, b) => b - a)
    };
}
console.log(sort([3, 1, 25, 12, 23, 2]));



function delition(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}
console.log(delition([1, 2, 3, 3, 4, 4, 5, 6, 6]))
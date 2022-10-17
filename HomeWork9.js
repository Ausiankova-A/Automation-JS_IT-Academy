function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const promise1 = new Promise((res, rej) => {
    const num = getRandom(1, 5);
    setTimeout(() => {
        res(1);
    }, num * 1000)
});
const promise2 = new Promise((res, rej) => {
    const num = getRandom(1, 5);
    setTimeout(() => {
        res(2);
    }, num * 1000)
});
const promise3 = new Promise((res, rej) => {
    const num = getRandom(1, 5);
    setTimeout(() => {
        res(3);
    }, num * 1000)
});
Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log(value);
})



function getNum() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(getRandom(1, 5))
        }, 3000)
    })
}
async function getSquared() {
    const a = await getNum();
    const doubleA = Math.pow(a, 2);
    console.log(doubleA);

}
getSquared();



function getNum1() {
    return new Promise((res) => {
        setTimeout(() => {
            return res(getRandom(1, 5))
        }, 3000)
    })
}

function getNum2() {
    return new Promise((res) => {
        setTimeout(() => {
            return res(getRandom(6, 10))
        }, 5000)
    })
}
async function getSum() {
    const a = await getNum1();
    const b = await getNum2();
    const sumValues = a + b;
    console.log(sumValues);

}
getSum();
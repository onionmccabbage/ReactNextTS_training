// https://hackernoon.com/higher-order-function-in-javascript-with-es6-examples
// also see https://blog.skay.dev/es6-higher-order-functions
// Library function
const calculate = (x, y, callback) => {
    if (typeof callback === 'function') {
        return callback(x, y);
    };
};

// Functions that we will pass as callback
const add = (x, y) => {
    return x + y;
};

const substract = (x, y) => {
    return x - y;
};

const multiplay = (x, y) => {
    return x * y;
};

const divide = (x, y) => {
    return x / y;
};

// We call the function from the library and pass the callback
console.log(calculate(12, 8, add));
// 20
console.log(calculate(12, 8, substract));
// 4



const someArray = [
    {
        key: 12,
        value: 'Hello',
    },
    {
        key: 14,
        value: 'Something',
    },
    {
        key: 13,
        value: 'World',
    },
];
someArray.sort((valueA, valueB) => {
    if (valueA.value > valueB.value) {
        return -1;
    } else {
        return 1;
    }
});

someArray.forEach((value) => {
    // console.log(`${value.key} ${value.value}`)
}
);

// 13 World
// 14 Something
// 12 Hello
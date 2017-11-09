const n = Number(prompt(`Input n, n should not be zero`));

function fibNum(n) {
    return n <= 1 ? n : fibNum(n - 1) + fibNum(n - 2);
}

function prn(let) {
    document.write(let);
}
const result = fibNum(n);
prn('Fibonacci number: ' + result);

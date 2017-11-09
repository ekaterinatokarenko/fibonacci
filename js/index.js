const n = Number(prompt(`Input n, n should not be zero`));
function fibNum(n) {
    let a = 1;
    let b = 1;
    let c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function prn(let) {
    document.write(let);
}
const result = fibNum(n);
prn('Fibonacci number: ' + result);

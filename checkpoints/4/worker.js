function fib(x) {
    if (x <= 1n) {
        return x
    } else {
        return fib(x - 1n) + fib(x - 2n)
    }
}


onmessage = (e) => {
    const children = []
    for (let i = 0; i < e.data; i++) {
      children.push(fib(BigInt(i)))
    }
    
    postMessage(children)
};  
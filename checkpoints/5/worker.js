let values = []

function fib(x) {
    if (x <= 1n) {
        return x
    } else {
        return fib(x - 1n) + fib(x - 2n)
    }
}

onconnect = (e) => {
    const port = e.ports[0];

    port.addEventListener("message", (e) => {
        const [cmd, ...args] = e.data

        switch (cmd) {
            case "get":
                port.postMessage(values)
                break;
            case "set":
                values = []
                port.postMessage(`args ${JSON.stringify(args)}`)
                for (let i = 0; i < args[0]; i++) {
                    const v = fib(BigInt(i))
                    port.postMessage(`calc fib(${i}) => ${v}`)
                    values.push(v)
                }
                port.postMessage(values)
                break
            default:
                break;
        }
    });

    port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
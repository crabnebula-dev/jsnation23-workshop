importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

function fib(x) {
    if (x <= 1n) {
        return x
    } else {
        return fib(x - 1n) + fib(x - 2n)
    }
}

const obj = {
    values: [],
    update(limit) {
        this.values = []
        for (let i = 0; i < limit; i++) {
            this.values.push(fib(BigInt(i)))
        }
    },
  };

onconnect = (e) => Comlink.expose(obj, e.ports[0]);
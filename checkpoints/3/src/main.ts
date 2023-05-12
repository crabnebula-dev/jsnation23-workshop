import { WebviewWindow } from "@tauri-apps/api/window";

let InputEl: HTMLInputElement | null;
let OutputEl: HTMLElement | null;

function fib(x: bigint): bigint {
  if (x <= 1n) {
    return x
  } else {
    return fib(x - 1n) + fib(x - 2n)
  }
}

function calculate() {  
  if (OutputEl && InputEl) {
    const children = []

    const limit = parseInt(InputEl.value);


    for (let i = 0; i < limit; i++) {
      const n = document.createElement('li')
      n.textContent = fib(BigInt(i)).toString()
      children.push(n)
    }

    OutputEl.replaceChildren(...children)
  }
}

window.addEventListener("DOMContentLoaded", () => {
  InputEl = document.querySelector("#calc-input");
  OutputEl = document.querySelector("#calc-output");
  document.getElementById('calc-button')?.addEventListener("click", () => calculate())

  document.getElementById('new-window-button')?.addEventListener('click', () => {
    const webview = new WebviewWindow((Math.random() * 100000).toPrecision(5), {
      url: '/'
    });
    webview.once('tauri://created', function () {
      // webview window successfully created
      console.log('window successfully created');

    });
    webview.once('tauri://error', function (e) {
      // an error happened creating the webview window
      console.log('failed to create window', e);
    });
  })
});

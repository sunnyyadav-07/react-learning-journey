let count = 0;

function render() {
  document.getElementById("root").innerHTML = `
        <p>Counter app without React </p>
        <h1>Counter: ${count}</h1>
        <button onclick="increment()">Increment</button>
        <button onclick="decrement()">Decrement</button>
    `;
}

function increment() {
  count++;
  render();
}

function decrement() {
  count--;
  render();
}

render();

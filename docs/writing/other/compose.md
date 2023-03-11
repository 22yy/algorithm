# composeFn

```js
function compose(...fns) {
  let length = fns.length;
  for (let i = 0; i < length; i++) {
    let fn = fns[i];
    if (typeof fns[i] !== "function") {
      throw new TypeError(`Expected a function`);
    }
  }

  return function(...args) {
    let index = 0;
    let result;
    if (length) {
      result = fns[index].apply(this, args);
    } else {
      result = args;
    }
    while (++index < length) {
      result = fns[index].call(this, result)
    }
    return result;
  }
}
```

```js
function compose(...fns) {
  if (!fn.length) return (v) => v;
  if (fns.length === 1) return fns[0];
  return fns.reduce((pre, cur) => (...args) => {
    return pre(cur(...args))
  })
}
```

```js
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}

const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1))
```

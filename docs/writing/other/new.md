# new

```js
function myNew(fn, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  let result = fn.apply(obj, args);
  return typeof result === "object" ? result : obj;
}
```

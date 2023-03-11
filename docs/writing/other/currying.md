# 柯里化

```js
function Currying(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(arg2));
      };
    }
  }
  return curried;
}
```

````js
    function add(x, y, z) {
      return x + y + z;
    }
    let add2 = Currying(add);
    console.log(add2(10));
    console.log(add2(10)(20));
    console.log(add2(10)(20)(30));
    ```
````

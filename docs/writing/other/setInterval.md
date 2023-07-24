# setInterval

```js
let timer = null;
function myInterval(func, wait) {
  let interv = function () {
    func.call(null);
    timer = setTimeout(interv, wait);
  };
  timer = setTimeout(interv, wait);
}

myInterval(function () {
  console.log("myINterval");
}, 2000);
```

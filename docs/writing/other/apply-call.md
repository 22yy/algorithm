# apply-call

```js
Function.prototype.myApply = function (thisArg, otherArg) {
  thisArg =
    thisArg === null || thisArg === undefined ? window : Object(thisArg);
  Object.defineProperty(thisArg, "fn", {
    enumerable: false,
    configurable: true,
    value: this,
  });
  thisArg.fn(...otherArg); //隐式调用
  delete thisArg.fn;
};
```

```js
Function.prototype.myCall = function (thisArg, ...args) {
  thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg);

  Object.defineProperty(thisArg, "fn", {
    enumerable: false,
    configurable: true,
    value: this,
  });

  thisArg.fn(args);
  delete thisArg.fn;
};
```

# bind

```js
Function.prototype.myBind = function(thisArg, ...otherArg) {
  thisArg = (thisArg === null || thisArg === undefined) ? window : Object(thisArg);
  Object.defineProperty(thisArg, 'fn', {
    enumerable: false,
    configurable: true,
    value: this
  }) 
  
  return (...newArg) => {
    let allArg = [...otherArg, ...newArg];
    thisArg.fn(...allArg);
    delete thisArg.fn
  }
}
```
# promise.resolve 

promise.resolve(value) 可以将任何值转化为值为value，状态为fulfilled的promise   

如果传入的值本身为promise会原样返回它     

```js
Promise.myResolve = function(value) {
  if (value instanceof Promise) {
    return value;
  } 
  return new Promise(resolve => reslove(value));
}
```

# promise.any()  

空数组或者所有 Promise 都是 rejected，则返回状态是 rejected 的新 Promsie，且值为 AggregateError 的错误    

只要有一个是 fulfilled 状态的，则返回第一个是 fulfilled 的新实例   

其他情况都会返回一个 pending 的新实例    

```js
Promise.myAny = function(promiseArr) {
  let index = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, i) => {
      Promise.resolve(promise).then(val => {
        resolve(val);
      },
      err => {
        index++;
        if (index === promiseArr.length) {
          reject(new AggregateError('All promises were rejected'))
        } 
      })
    })
  })
 }
```

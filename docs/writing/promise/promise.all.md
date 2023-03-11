# promise.all
  
  - 得到一个新的Promise，该Promise的状态取决于promises的执行  
  - promises是一个迭代器，包含多个Promise  
  - 全部Promise成功，返回的Promise才成功，数据为所有Primsise成功的数据，并且顺序时按照传入的顺序排列   
  - 只要有一个Promise失败，则=返回的Pormise失败，原因是第一个Promise失败的原因  

```js
 Promise.myAll = function(promiseArr) {
    let index = 0;
    let result = [];
    return new Promise((resolve, reject) => {
      promiseArr.forEach((promise, i) => {
        Promise.resolve(promise).then(val => {
          index++;
          result[i] = val;
          if (index === promiseArr.length) {
            resolve(result);
          }
        }, 
        err => {
          reject(err)
        })
      })
    })
  }
```
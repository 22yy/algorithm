# promise.race()  

 Promise.race会返回一个由所有可迭代实例中第一个 fulfilled 或 rejected 的实例包装后的新实例

 ```js
  Promise.myRace = function(promiseArr) {
    return new Promise((resolve, reject) => {
      promiseArr.forEach((promise) => {
        Promise.resolve(promise).then(val => {
          resolve(val);
        },
        err => {
          reject(err)
        })
      })
    })
   }
 ```
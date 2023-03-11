# 深浅拷贝  

```js
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  // 是函数的话不需要深拷贝
  if (typeof obj !== 'object') return obj;
  if (hash.get(obj)) {
    return hash.get(obj)
  }
   
  // 找到的是所属类原型上的constructor， 指向当前类本身
  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;

}
```

```js
function deepClone(obj) {
  if (typeof obj !== 'object') return;
   if (obj === null) return obj;
   if (obj instanceof Date) return new Date(obj);
   if (obj instanceof RegExp) return new RegExp(obj);
   let newObj = Array.isArray(obj) ? [] : {};
   for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
   }
   return newObj;
}
```
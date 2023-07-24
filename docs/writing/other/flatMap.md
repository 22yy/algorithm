# faltMap

```js
const flatDeep = (arr) => {
  return arr.reduce((result, cur) => {
    return result.concat(Array.isArray(cur) ? flatDeep(cur) : cur);
  }, []);
};
```

```js
//ES6
function flatDeep(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
```

```js
function flatDeep(arr) {
  let res = [];
  arr.map((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flatDeep2(item));
    } else {
      res.push(item);
    }
  });
  return res;
}
```

```js
function flatten(arr) {
  return arr
    .join(",")
    .split(",")
    .map(function (item) {
      return parseInt(item);
    });
}
```

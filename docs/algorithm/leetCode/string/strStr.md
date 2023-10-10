# 实现 strStr()

## 28. 实现 strStr()

实现  strStr()  函数。

给你两个字符串  haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回   -1 。 当 needle 是空字符串时我们应当返回 0

### 暴力

```js
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  const n = haystack.length,
    m = needle.length;
  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
};
```

```js
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  const getNext = (needle) => {
    let next = [];
    let j = -1;
    next.push(j);
    for (let i = 0; i < needle.length; i++) {
      while (j >= 0 && needle[i] !== needle[j + 1]) {
        j = next[j];
      }
      if (needle[i] === needle[j + 1]) {
        j++;
      }
      next.push(j);
    }
    return next;
  };
  let next = getNext(needle);
  let j = -1;
  for (let i = 0; i < haystack.length; i++) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j];
    }
    if (haystack[i] === needle[j + 1]) {
      j++;
    }
    if (j === needle.length - 1) {
      return i - needle.length + 1;
    }
  }
  return -1;
};
```

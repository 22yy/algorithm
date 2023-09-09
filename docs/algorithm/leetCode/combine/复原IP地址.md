# 复原 IP 地址

判断子串是否合法

主要考虑到如下三点：

段位以 0 为开头的数字不合法  
段位里有非正整数字符不合法  
段位如果大于 255 了不合法

[链接](https://leetcode.cn/problems/restore-ip-addresses/description/)

```js
var restoreIpAddresses = function (s) {
  let res = [],
    path = [];
  backtracking(0);
  return res;
  function backtracking(index) {
    if (path.length > 4) return;
    if (path.length === 4 && index === s.length) {
      res.push(path.join("."));
      return;
    }
    for (let i = index; i < s.length; i++) {
      let str = s.slice(index, i + 1);
      if (str.length > 3 || +str > 255) break;
      if (str[0] === "0" && str.length > 1) break;
      path.push(str);
      backtracking(i + 1);
      path.pop();
    }
  }
};
```

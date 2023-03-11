# 转化为树状结构

```js
function transListToTree(list, root) {
  const res = [];
  list.forEach((item) => {
    // 2.首次传入空字符串  判断list的pid是否为空 如果为空就是一级节点
    if (item.pid === root) {
      // 找到之后就要去找item下面有没有子节点  以 item.id 作为 父 id, 接着往下找
      const children = transListToTree(list, item.id);

      if (children.length > 0) {
        item.children = children;
      }
      res.push(item);
    }
  });
  return res;
}
```

```js
let list = [
  { id: "1", name: "1234", pid: "" },
  { id: "11", name: "1234", pid: "1" },
  { id: "21", name: "1234", pid: "2" },
  { id: "2", name: "1234", pid: "" },
  { id: "22", name: "1234", pid: "2" },
];

console.log(transform(list, ""));
```

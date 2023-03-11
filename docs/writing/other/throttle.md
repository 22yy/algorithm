# 节流

```html
<body>
  <script>
    function coloring() {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      console.log("coloring");
      document.body.style.background = `rgba(${r}, ${g}, ${b})`;
    }

    function throttle(func, delay) {
      let timer;
      return function () {
        let args = arguments;
        let content = this;
        if (timer) return;
        timer = setTimeout(function () {
          func.apply(content, args);
          timer = null;
        }, delay);
      };
    }
    window.addEventListener("resize", throrrle(coloring, 3000));
  </script>
</body>
```

```js
function throttle(fn, interval, options = { leading: true, trailing: false }) {
  // 记录上一次开始的时间
  const { leading, trailing, resultCallback } = options;
  let lastTime = 0;
  let timer = null;

  const _throttle = function (...args) {
    return new Promise((resolve, reject) => {
      // 当前事件触发的时间
      const nowTime = new Date().getTime();
      // 是第一次开始并且第一次不希望执行函数，让lastTime = nowtTime
      if (!lastTime && !leading) lastTime = nowTime;
      // 计算还有多少时间需要触发函数
      const remainTime = interval - (nowTime - lastTime);
      if (remainTime <= 0) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        //  触发函数
        const result = fn.apply(this, args);
        if (resultCallback) resultCallback(result);
        resolve(result);
        //  保留上次触发的时间
        lastTime = nowTime;
        return;
      }
      if (trailing && !timer) {
        timer = setTimeout(() => {
          timer = null;
          lastTime = !leading ? 0 : new Date().getTime();
          const result = fn.apply(this, args);
          if (resultCallback) resultCallback(result);
          resolve(result);
        }, remainTime);
      }
    });
  };
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    lastTime = 0;
  };
  return _throttle;
}
```
```js
const inputEl = document.querySelector("input");
let counter = 0;
const inputChange = function (event) {
  console.log(`发送了${++counter}次请求`, this, event);
  return "1213";
};

const _throttle = throttle(inputChange, 3000, {
  leading: false,
  trailing: true,
  resultCallback: function(res) {
    console.log('resultCallback:', res)
  }
});

const tempCallback = (...args) => {
 _throttle.apply(inputEl, args).then(res => {
  console.log("Promise:", res)
 })
};
inputEl.oninput = tempCallback;
```

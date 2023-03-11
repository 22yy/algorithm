# 防抖  

```html
<body>
   <button>提交表单</button>
   <script>
     const button = document.querySelector('button')
     function upload() {
        console.log('already upload',this);
     }
     
     function debounce(func,delay) {
      let timer = null;
      return function() {
        let context = this;
        let args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          func.apply(context, args);
          timer = null;
        }, delay)
      }
     }

     button.addEventListener('click', debounce(upload,2000))
   </script>
</body>
```

```js
function debounce(fn, delay, immediate = false, resultCallback) {
  let timer = null;
  let isInvoke = false;

  const _debounce = function(...args) {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer);

      // 判断是否需要立即执行
      if (immediate && !isInvoke) {
        const result = fn.apply(this, args);
        if (resultCallback) resultCallback(result);
        resolve(result);
        isInvoke = true;
      } else {
        timer = setTimeout(() => {
          const result = fn.apply(this, args);
          if (resultCallback) resultCallback(result);
          resolve(result);
          isInvoke = false;
          timer = null;
        }, delay)
      }
    })
  }
  // 封装取消功能
  _debounce.cancel = function() {
    if (timer) clearTimeout(timer);
    timer = null;
    isInvoke = false;
  }
  
  return _debounce;
}
```
```js
const inputEl = document.querySelector('input');
let counter = 0;
const inputChange = function(event) {
  console.log(`发送了${++counter}次请求`, this, event);
  return '1213'
}

const debounceChange = debounce(inputChange, 3000, false, (res) => {
  console.log('拿到真正执行函数返回值:', res);
})

const tempCallback = (event) => {
  debounceChange(event).then(res => {
    console.log('Promise的返回结果:',res)
  })
}
inputEl.oninput = tempCallback
```

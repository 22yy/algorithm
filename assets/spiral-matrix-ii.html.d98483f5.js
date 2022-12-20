import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as o,a as n,d as e,b as s,e as c,r as l}from"./app.16a249d1.js";var i="/assets/spiral-matrix-ii.07118705.jpg";const u={},r=n("h1",{id:"_7-\u87BA\u65CB\u77E9\u9635-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-\u87BA\u65CB\u77E9\u9635-ii","aria-hidden":"true"},"#"),s(" 7.\u87BA\u65CB\u77E9\u9635 II")],-1),k=n("h2",{id:"_59-\u87BA\u65CB\u77E9\u9635-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_59-\u87BA\u65CB\u77E9\u9635-ii","aria-hidden":"true"},"#"),s(" 59.\u87BA\u65CB\u77E9\u9635 II")],-1),d={href:"https://leetcode.cn/problems/spiral-matrix-ii/",target:"_blank",rel:"noopener noreferrer"},m=s("\u9898\u76EE\u94FE\u63A5"),v=c('<p>\u7ED9\u5B9A\u4E00\u4E2A\u6B63\u6574\u6570 n\uFF0C\u751F\u6210\u4E00\u4E2A\u5305\u542B 1 \u5230 n^2 \u6240\u6709\u5143\u7D20\uFF0C\u4E14\u5143\u7D20\u6309\u987A\u65F6\u9488\u987A\u5E8F\u87BA\u65CB\u6392\u5217\u7684\u6B63\u65B9\u5F62\u77E9\u9635\u3002</p><p>\u793A\u4F8B:</p><p>\u8F93\u5165: 3 \u8F93\u51FA: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]</p><h3 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h3><p>\u6A21\u62DF\u8FC7\u7A0B\uFF0C\u575A\u6301\u5FAA\u73AF\u4E0D\u53D8\u91CF\u539F\u5219</p><p>\u6A21\u62DF\u987A\u65F6\u9488\u753B\u77E9\u9635\u7684\u8FC7\u7A0B:</p><p>\u586B\u5145\u4E0A\u884C\u4ECE\u5DE6\u5230\u53F3 \u586B\u5145\u53F3\u5217\u4ECE\u4E0A\u5230\u4E0B \u586B\u5145\u4E0B\u884C\u4ECE\u53F3\u5230\u5DE6 \u586B\u5145\u5DE6\u5217\u4ECE\u4E0B\u5230\u4E0A \u7531\u5916\u5411\u5185\u4E00\u5708\u4E00\u5708\u8FD9\u4E48\u753B\u4E0B\u53BB\u3002</p><p>\u6211\u4EEC\u8981\u753B\u6BCF\u56DB\u6761\u8FB9\uFF0C\u6BCF\u753B\u4E00\u6761\u8FB9\u90FD\u8981\u575A\u6301\u4E00\u81F4\u7684\u5DE6\u95ED\u53F3\u5F00\uFF0C\u6216\u8005\u5DE6\u5F00\u53F3\u95ED\u7684\u539F\u5219\uFF0C\u8FD9\u6837\u8FD9\u4E00\u5708\u624D\u80FD\u6309\u7167\u7EDF\u4E00\u7684\u89C4\u5219\u753B\u4E0B\u6765\u3002</p><p>\u6309\u7167\u5DE6\u95ED\u53F3\u5F00\u7684\u539F\u5219\uFF0C\u6765\u753B\u4E00\u5708</p><p><img src="'+i+`" alt="\u5DE6\u95ED\u53F3\u5F00"></p><p>\u6BCF\u79CD\u989C\u8272\u4EE3\u8868\u4E00\u6761\u8FB9\uFF0C\u5373\u904D\u5386\u7684\u957F\u5EA6\uFF0C\u6BCF\u4E00\u4E2A\u62D0\u89D2\u5904\u8BA9\u7ED9\u65B0\u7684\u4E00\u6761\u8FB9\u6765\u7EE7\u7EED\u753B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">generateMatrix</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> startX<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>startY<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//\u6BCF\u5FAA\u73AF\u4E00\u4E2A\u5708\u7684\u8D77\u59CB\u4F4D\u7F6E</span>
    <span class="token keyword">let</span> loop<span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u65CB\u8F6C\u5708\u6570</span>
    <span class="token keyword">let</span> offset<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//\u63A7\u5236\u6BCF\u4E00\u6761\u8FB9\u904D\u5386\u7684\u957F\u5EA6\uFF0C\u6BCF\u6B21\u5FAA\u73AF\u53F3\u8FB9\u754C\u6536\u7F29\u4E00\u4F4D</span>
    <span class="token keyword">let</span> mid<span class="token operator">=</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u4E2D\u95F4\u4F4D\u7F6E</span>
    <span class="token keyword">let</span> count<span class="token operator">=</span><span class="token number">1</span><span class="token comment">//\u7ED9\u77E9\u9635\u4E2D\u6BCF\u4E00\u4E2A\u7A7A\u683C\u8D4B\u503C</span>
    <span class="token keyword">let</span> i<span class="token punctuation">,</span>j<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>loop<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//\u4E00\u5708  \u6A21\u62DF\u586B\u5145\u4E0A\u884C\u4ECE\u5DE6\u5230\u53F3(\u5DE6\u95ED\u53F3\u5F00)</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span>j<span class="token operator">=</span>startY<span class="token punctuation">;</span>j<span class="token operator">&lt;</span>n<span class="token operator">-</span>offset<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          res<span class="token punctuation">[</span>startX<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>count<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//\u884C\u4E0D\u53D8</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//\u6A21\u62DF\u586B\u5145\u53F3\u5217\u4ECE\u4E0A\u5230\u4E0B(\u5DE6\u95ED\u53F3\u5F00</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span>i<span class="token operator">=</span>startX<span class="token punctuation">;</span>i<span class="token operator">&lt;</span>n<span class="token operator">-</span>offset<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//\u6A21\u62DF\u586B\u5145\u4E0B\u884C\u4ECE\u53F3\u5230\u5DE6(\u5DE6\u95ED\u53F3\u5F00)</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span>j<span class="token operator">&gt;</span>startY<span class="token punctuation">;</span>j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//\u6A21\u62DF\u586B\u5145\u5DE6\u5217\u4ECE\u4E0B\u5230\u4E0A(\u5DE6\u95ED\u53F3\u5F00)</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span>i<span class="token operator">&gt;</span>startX<span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//\u7B2C\u4E8C\u5708\u5F00\u59CB\u7684\u65F6\u5019\uFF0C\u8D77\u59CB\u4F4D\u7F6E\u8981\u5404\u81EA\u52A01\uFF0C \u4F8B\u5982\uFF1A\u7B2C\u4E00\u5708\u8D77\u59CB\u4F4D\u7F6E\u662F(0, 0)\uFF0C\u7B2C\u4E8C\u5708\u8D77\u59CB\u4F4D\u7F6E\u662F(1, 1)</span>
      startX<span class="token operator">++</span><span class="token punctuation">;</span>
      startY<span class="token operator">++</span><span class="token punctuation">;</span>
     <span class="token comment">//\u63A7\u5236\u6BCF\u4E00\u5708\u91CC\u6BCF\u4E00\u6761\u8FB9\u904D\u5386\u7684\u957F\u5EA6.\u4F8B\u5982n=4,\u7B2C\u4E00\u5708n-offset=3,\u7B2C\u4E8C\u5708n-offset=2;</span>
      offset<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u5982\u679Cn\u4E3A\u5947\u6570\u7684\u8BDD\uFF0C\u9700\u8981\u5355\u72EC\u7ED9\u77E9\u9635\u6700\u4E2D\u95F4\u7684\u4F4D\u7F6E\u8D4B\u503C</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">%</span><span class="token number">2</span><span class="token operator">===</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          res<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token operator">=</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function b(f,_){const a=l("ExternalLinkIcon");return t(),o("div",null,[r,k,n("p",null,[n("a",d,[m,e(a)])]),v])}var y=p(u,[["render",b],["__file","spiral-matrix-ii.html.vue"]]);export{y as default};

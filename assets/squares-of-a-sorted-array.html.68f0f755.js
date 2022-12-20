import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as e,a as n,d as o,b as s,e as c,r as u}from"./app.16a249d1.js";const l={},i=n("h1",{id:"_5-\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9","aria-hidden":"true"},"#"),s(" 5.\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9")],-1),r=n("h2",{id:"_977-\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_977-\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9","aria-hidden":"true"},"#"),s(" 977.\u6709\u5E8F\u6570\u7EC4\u7684\u5E73\u65B9")],-1),k={href:"https://leetcode.cn/problems/squares-of-a-sorted-array/",target:"_blank",rel:"noopener noreferrer"},d=s("\u9898\u76EE\u94FE\u63A5"),m=c(`<p>\u9898\u76EE\u63CF\u8FF0\uFF1A \u7ED9\u4F60\u4E00\u4E2A\u6309 \u975E\u9012\u51CF\u987A\u5E8F \u6392\u5E8F\u7684\u6574\u6570\u6570\u7EC4 nums\uFF0C\u8FD4\u56DE \u6BCF\u4E2A\u6570\u5B57\u7684\u5E73\u65B9 \u7EC4\u6210\u7684\u65B0\u6570\u7EC4\uFF0C\u8981\u6C42\u4E5F\u6309 \u975E\u9012\u51CF\u987A\u5E8F \u6392\u5E8F\u3002</p><p>\u793A\u4F8B 1\uFF1A \u8F93\u5165\uFF1Anums = [-4,-1,0,3,10] \u8F93\u51FA\uFF1A[0,1,9,16,100] \u89E3\u91CA\uFF1A\u5E73\u65B9\u540E\uFF0C\u6570\u7EC4\u53D8\u4E3A [16,1,0,9,100]\uFF0C\u6392\u5E8F\u540E\uFF0C\u6570\u7EC4\u53D8\u4E3A [0,1,9,16,100]</p><p>\u793A\u4F8B 2\uFF1A \u8F93\u5165\uFF1Anums = [-7,-3,2,3,11] \u8F93\u51FA\uFF1A[4,9,9,49,121]</p><h3 id="\u66B4\u529B\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u66B4\u529B\u6392\u5E8F" aria-hidden="true">#</a> \u66B4\u529B\u6392\u5E8F</h3><p>\u6BCF\u4E2A\u6570\u5E73\u65B9\u540E\u6392\u5E8F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortedSquares</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53CC\u6307\u9488\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488\u6CD5" aria-hidden="true">#</a> \u53CC\u6307\u9488\u6CD5</h3><p>\u6570\u7EC4\u6709\u5E8F\uFF0C\u8D1F\u6570\u5E73\u65B9\u4E4B\u540E\u53EF\u80FD\u6210\u4E3A\u6700\u5927\u6570\uFF0C\u56E0\u4E3A\u662F\u975E\u9012\u51CF\u6570\u7EC4\uFF0C\u6240\u4EE5\u6570\u7EC4</p><p>\u5E73\u65B9\u7684\u6700\u5927\u503C\u5C31\u5728\u6570\u7EC4\u7684\u4E24\u7AEF\uFF0C\u4E0D\u662F\u6700\u5DE6\u8FB9\u5C31\u662F\u6700\u53F3\u8FB9</p><p>\u53EF\u4EE5\u8003\u8651\u53CC\u6307\u9488\u6CD5\u4E86\uFF0Ci\u6307\u5411\u8D77\u59CB\u4F4D\u7F6E,j\u6307\u5411\u7EC8\u6B62\u4F4D\u7F6E</p><p>\u5B9A\u4E49\u65B0\u6570\u7EC4result,\u548Cnums\u6570\u7EC4\u4E00\u6837\u5927\u5C0F\uFF0Ck\u6307\u5411result\u6570\u7EC4\u7EC8\u6B62\u4F4D\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sortedSquares</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> j<span class="token operator">=</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> k<span class="token operator">=</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> result<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span>j<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">*</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     result<span class="token punctuation">[</span>k<span class="token operator">--</span><span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">*</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
     j<span class="token operator">--</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
     result<span class="token punctuation">[</span>k<span class="token operator">--</span><span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
     i<span class="token operator">++</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u8FD9\u6837\u5199\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sortedSquares</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> j<span class="token operator">=</span>nums<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
 <span class="token keyword">let</span> result<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;=</span>j<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&lt;</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//\u9996\u5C3E\u53CC\u6307\u9488\u6CD5\u8FDB\u884C\u6BD4\u8F83\u65F6\uFF0C\u4E0D\u7528\u5E73\u65B9\uFF0C\u76F4\u63A5\u5DE6\u503C\u53D6\u8D1F\u4E0E\u53F3\u503C\u8FDB\u884C\u6BD4\u8F83\u4E5F\u80FD\u5224\u65AD\uFF0C\u7CBE\u7B80\u4E86\u4EE3\u7801</span>
     result<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">)</span>
     j<span class="token operator">--</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
     result<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">)</span>
     i<span class="token operator">++</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 
 <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function v(b,h){const a=u("ExternalLinkIcon");return t(),e("div",null,[i,r,n("p",null,[n("a",k,[d,o(a)])]),m])}var _=p(l,[["render",v],["__file","squares-of-a-sorted-array.html.vue"]]);export{_ as default};

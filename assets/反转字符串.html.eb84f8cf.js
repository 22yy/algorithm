import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as e,b as n,d as o,e as s,a as c,r as i}from"./app.61f4c8a8.js";const l={},u=n("h1",{id:"\u53CD\u8F6C\u5B57\u7B26\u4E32",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53CD\u8F6C\u5B57\u7B26\u4E32","aria-hidden":"true"},"#"),s(" \u53CD\u8F6C\u5B57\u7B26\u4E32")],-1),r=n("h2",{id:"_344-\u53CD\u8F6C\u5B57\u7B26\u4E32",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_344-\u53CD\u8F6C\u5B57\u7B26\u4E32","aria-hidden":"true"},"#"),s(" 344.\u53CD\u8F6C\u5B57\u7B26\u4E32")],-1),k={href:"https://leetcode.cn/problems/reverse-string/",target:"_blank",rel:"noopener noreferrer"},d=s("344"),v=c(`<p>\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5176\u4F5C\u7528\u662F\u5C06\u8F93\u5165\u7684\u5B57\u7B26\u4E32\u53CD\u8F6C\u8FC7\u6765\u3002\u8F93\u5165\u5B57\u7B26\u4E32\u4EE5\u5B57\u7B26\u6570\u7EC4 s \u7684\u5F62\u5F0F\u7ED9\u51FA\u3002</p><p>\u4E0D\u8981\u7ED9\u53E6\u5916\u7684\u6570\u7EC4\u5206\u914D\u989D\u5916\u7684\u7A7A\u95F4\uFF0C\u5FC5\u987B\u539F\u5730\u4FEE\u6539\u8F93\u5165\u6570\u7EC4\u3001\u4F7F\u7528 O(1) \u7684\u989D\u5916\u7A7A\u95F4\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\u3002</p><h3 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse</h3><p>\u53D1\u73B0\u76F4\u63A5\u7528reverse\u53EF\u4EE5\u8FC7</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">reverseString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">reverseString</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>j<span class="token operator">=</span>s<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>j<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">,</span>j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span>s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5143\u97F3\u5B57\u6BCD" tabindex="-1"><a class="header-anchor" href="#\u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5143\u97F3\u5B57\u6BCD" aria-hidden="true">#</a> \u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5143\u97F3\u5B57\u6BCD</h2><p>\u95EE\u9898\u63CF\u8FF0: \u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u5143\u97F3 \u8F93\u5165\u63CF\u8FF0: \u5B57\u7B26\u4E32 \u8F93\u51FA\u63CF\u8FF0: \u53CD\u8F6C\u540E\u5B57\u7B26\u4E32 \u8F93\u5165\u6837\u4F8B: lenovo \u8F93\u51FA\u6837\u4F8B: lonove</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token function">read_line</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseVowels</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;u&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;E&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;I&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;O&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;U&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">let</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span>j<span class="token punctuation">)</span><span class="token punctuation">{</span> 
        <span class="token keyword">if</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span> j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            j<span class="token operator">--</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            i<span class="token operator">++</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">reverseVowels</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function m(b,h){const a=i("ExternalLinkIcon");return p(),e("div",null,[u,r,n("p",null,[n("a",k,[d,o(a)])]),v])}var g=t(l,[["render",m],["__file","\u53CD\u8F6C\u5B57\u7B26\u4E32.html.vue"]]);export{g as default};

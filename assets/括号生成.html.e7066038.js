import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as p,b as n,d as o,e as s,a as c,r as l}from"./app.645ca90b.js";const i={},u=n("h1",{id:"\u62EC\u53F7\u751F\u6210",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u62EC\u53F7\u751F\u6210","aria-hidden":"true"},"#"),s(" \u62EC\u53F7\u751F\u6210")],-1),r={href:"https://leetcode.cn/problems/generate-parentheses/description/",target:"_blank",rel:"noopener noreferrer"},k=s("\u94FE\u63A5"),d=c(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">generateParenthesis</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">generate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">*</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">generate</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">,</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">generate</span><span class="token punctuation">(</span>str <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">,</span> left<span class="token punctuation">,</span> right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(m,b){const a=l("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",r,[k,o(a)])]),d])}var h=t(i,[["render",v],["__file","\u62EC\u53F7\u751F\u6210.html.vue"]]);export{h as default};

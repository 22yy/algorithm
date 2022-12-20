import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,d as o,b as s,e as c,r as l}from"./app.16a249d1.js";const i={},u=n("h1",{id:"\u6700\u5927\u4E8C\u53C9\u6811",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6700\u5927\u4E8C\u53C9\u6811","aria-hidden":"true"},"#"),s(" \u6700\u5927\u4E8C\u53C9\u6811")],-1),r=n("h2",{id:"_654-\u6700\u5927\u4E8C\u53C9\u6811",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_654-\u6700\u5927\u4E8C\u53C9\u6811","aria-hidden":"true"},"#"),s(" 654.\u6700\u5927\u4E8C\u53C9\u6811")],-1),k={href:"https://leetcode.cn/problems/maximum-binary-tree/description/",target:"_blank",rel:"noopener noreferrer"},d=s("\u94FE\u63A5"),m=c(`<ol><li>\u627E\u5230\u6700\u5927\u503C\u548C\u5176\u4E0B\u6807</li><li>\u6700\u5927\u503C\u6240\u5728\u4E0B\u6807\u5DE6\u533A\u95F4\uFF0C\u6784\u9020\u5DE6\u5B50\u6811</li><li>\u53F3\u533A\u95F4\u6784\u9020\u53F3\u5B50\u6811</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">constructMaximumBinaryTree</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">let</span> maxValue <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token keyword">let</span> maxValueIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> maxValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           maxValue <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
           maxValueIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>maxValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//  \u4FDD\u8BC1\u5DE6\u533A\u95F4\u81F3\u5C11\u6709\u4E00\u4E2A\u503C</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>maxValueIndex <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">let</span> newArr <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>maxValueIndex<span class="token punctuation">)</span>
       node<span class="token punctuation">.</span>left <span class="token operator">=</span>  <span class="token function">constructMaximumBinaryTree</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
  <span class="token comment">//  \u4FDD\u8BC1\u53F3\u533A\u95F4\u81F3\u5C11\u6709\u4E00\u4E2A\u503C</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>maxValueIndex <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">let</span> newArr <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>maxValueIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
       node<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">constructMaximumBinaryTree</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> node<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(b,_){const a=l("ExternalLinkIcon");return t(),p("div",null,[u,r,n("p",null,[n("a",k,[d,o(a)])]),m])}var h=e(i,[["render",v],["__file","\u6700\u5927\u4E8C\u53C9\u681114.html.vue"]]);export{h as default};

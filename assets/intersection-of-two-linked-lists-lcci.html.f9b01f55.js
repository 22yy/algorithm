import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,d as o,b as s,e as c,r as l}from"./app.16a249d1.js";const i={},u=n("h1",{id:"_6-\u94FE\u8868\u76F8\u4EA4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-\u94FE\u8868\u76F8\u4EA4","aria-hidden":"true"},"#"),s(" 6.\u94FE\u8868\u76F8\u4EA4")],-1),r=n("h2",{id:"_02-07\u94FE\u8868\u76F8\u4EA4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_02-07\u94FE\u8868\u76F8\u4EA4","aria-hidden":"true"},"#"),s(" 02.07\u94FE\u8868\u76F8\u4EA4")],-1),d={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/",target:"_blank",rel:"noopener noreferrer"},k=s("\u9898\u76EE\u94FE\u63A5"),v=c(`<p>\u7ED9\u4F60\u4E24\u4E2A\u5355\u94FE\u8868\u7684\u5934\u8282\u70B9\xA0headA \u548C headB \uFF0C\u8BF7\u4F60\u627E\u51FA\u5E76\u8FD4\u56DE\u4E24\u4E2A\u5355\u94FE\u8868\u76F8\u4EA4\u7684\u8D77\u59CB\u8282\u70B9\u3002\u5982\u679C\u4E24\u4E2A\u94FE\u8868\u6CA1\u6709\u4EA4\u70B9\uFF0C\u8FD4\u56DE null \u3002</p><h3 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h3><p>\u6CE8\u610F\uFF0C\u4EA4\u70B9\u4E0D\u662F\u6570\u503C\u76F8\u7B49\uFF0C\u800C\u662F\u6307\u9488\u76F8\u7B49</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headA</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headB</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>headA <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> headB <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curA <span class="token operator">=</span> headA<span class="token punctuation">;</span>
    <span class="token keyword">let</span> curB <span class="token operator">=</span> headB<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curA <span class="token operator">!==</span> curB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curA <span class="token operator">=</span> curA <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headB <span class="token operator">:</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        curB <span class="token operator">=</span> curB <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> headA <span class="token operator">:</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> curA<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A<span class="token constant">O</span><span class="token punctuation">(</span>m<span class="token operator">+</span>n<span class="token punctuation">)</span>\uFF0C\u5176\u4E2Dm\u548Cn\u662F\u5206\u522B\u662F\u94FE\u8868headA\u548CheadB \u7684\u957F\u5EA6\u3002\u4E24\u4E2A\u6307\u9488\u540C\u65F6\u904D\u5386\u4E24\u4E2A\u94FE\u8868\uFF0C\u6BCF\u4E2A\u6307\u9488\u904D\u5386\u4E24\u4E2A\u94FE\u8868\u5404\u4E00\u6B21\u3002

\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1A<span class="token constant">O</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u54C8\u5E0C\u8868" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868" aria-hidden="true">#</a> \u54C8\u5E0C\u8868</h3><p>\u4F7F\u7528\u54C8\u5E0C\u96C6\u5408\u5B58\u50A8\u94FE\u8868\u8282\u70B9</p><p>\u904D\u5386\u94FE\u8868headA,\u5C06\u5176\u6BCF\u4E2A\u8282\u70B9\u52A0\u5165\u54C8\u5E0C\u8868\u4E2D\uFF0C\u7136\u540E\u904D\u5386\u94FE\u8868B\uFF0C\u5224\u65AD\u8282\u70B9\u662F\u5426\u5728\u54C8\u5E0C\u96C6\u5408\u4E2D</p><p>\u5982\u679C\u6709\u8282\u70B9\u5728\u54C8\u5E0C\u96C6\u5408\u4E2D\uFF0C\u5219\u8BE5\u8282\u70B9\u540E\u7684\u8282\u70B9\u90FD\u5728\u54C8\u5E0C\u96C6\u5408\u4E2D\uFF0C\u8BE5\u8282\u70B9\u5C31\u662F\u76F8\u4EA4\u7684\u8282\u70B9</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> curA <span class="token operator">=</span> headA<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>curA<span class="token punctuation">)</span><span class="token punctuation">;</span>
        curA <span class="token operator">=</span> curA<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> curB <span class="token operator">=</span>  headB<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>curB<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> curB<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            curB <span class="token operator">=</span> curB<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A<span class="token constant">O</span><span class="token punctuation">(</span>m<span class="token operator">+</span>n<span class="token punctuation">)</span>\uFF0C\u5176\u4E2Dm\u548Cn\u662F\u5206\u522B\u662F\u94FE\u8868headA\u548CheadB \u7684\u957F\u5EA6\u3002\u9700\u8981\u904D\u5386\u4E24\u4E2A\u94FE\u8868\u5404\u4E00\u6B21\u3002

\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1A<span class="token constant">O</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>\uFF0C\u5176\u4E2D m\u662F\u94FE\u8868headA\u7684\u957F\u5EA6\u3002\u9700\u8981\u4F7F\u7528\u54C8\u5E0C\u96C6\u5408\u5B58\u50A8\u94FE\u8868headA\u4E2D\u7684\u5168\u90E8\u8282\u70B9\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function m(h,b){const a=l("ExternalLinkIcon");return t(),p("div",null,[u,r,n("p",null,[n("a",d,[k,o(a)])]),v])}var y=e(i,[["render",m],["__file","intersection-of-two-linked-lists-lcci.html.vue"]]);export{y as default};

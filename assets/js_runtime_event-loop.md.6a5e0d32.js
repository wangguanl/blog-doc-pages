import{_ as s,c as n,o as a,d as l}from"./app.de1979c9.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"js/runtime/event-loop.md"}'),o={name:"js/runtime/event-loop.md"},p=l(`<p><strong>\u7A0B\u5E8F\u4E2D\u8BBE\u7F6E\u4E24\u4E2A\u7EBF\u7A0B</strong>\uFF1A</p><ul><li>\u4E00\u4E2A\u8D1F\u8D23\u7A0B\u5E8F\u672C\u8EAB\u7684\u8FD0\u884C\uFF0C\u79F0\u4E3A&quot;\u4E3B\u7EBF\u7A0B&quot;\uFF1B</li><li>\u53E6\u4E00\u4E2A\u8D1F\u8D23\u4E3B\u7EBF\u7A0B\u4E0E\u5176\u4ED6\u8FDB\u7A0B\uFF08\u4E3B\u8981\u662F\u5404\u79CDI/O\u64CD\u4F5C\uFF09\u7684\u901A\u4FE1\uFF0C\u88AB\u79F0\u4E3A&quot;Event Loop\u7EBF\u7A0B&quot;\uFF08\u53EF\u4EE5\u8BD1\u4E3A&quot;\u6D88\u606F\u7EBF\u7A0B&quot;\uFF09\u3002</li></ul><p><strong>\u6240\u6709\u4EFB\u52A1\u53EF\u4EE5\u5206\u6210\u4E24\u79CD</strong>\uFF0C</p><ul><li><p>\u4E00\u79CD\u662F\u540C\u6B65\u4EFB\u52A1\uFF08synchronous\uFF09\uFF0C\u540C\u6B65\u4EFB\u52A1\u6307\u7684\u662F\uFF0C\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6392\u961F\u6267\u884C\u7684\u4EFB\u52A1\uFF0C\u53EA\u6709\u524D\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u624D\u80FD\u6267\u884C\u540E\u4E00\u4E2A\u4EFB\u52A1\uFF1B</p></li><li><p>\u53E6\u4E00\u79CD\u662F\u5F02\u6B65\u4EFB\u52A1\uFF08asynchronous\uFF09\uFF0C\u5F02\u6B65\u4EFB\u52A1\u6307\u7684\u662F\uFF0C\u4E0D\u8FDB\u5165\u4E3B\u7EBF\u7A0B\u3001\u800C\u8FDB\u5165&quot;<strong>\u4EFB\u52A1\u961F\u5217</strong>&quot;\uFF08task queue\uFF09\u7684\u4EFB\u52A1\uFF0C\u53EA\u6709&quot;\u4EFB\u52A1\u961F\u5217&quot;\u901A\u77E5\u4E3B\u7EBF\u7A0B\uFF0C\u67D0\u4E2A\u5F02\u6B65\u4EFB\u52A1\u53EF\u4EE5\u6267\u884C\u4E86\uFF0C\u8BE5\u4EFB\u52A1\u624D\u4F1A\u8FDB\u5165\u4E3B\u7EBF\u7A0B\u6267\u884C\u3002</p><p><strong>\u5F02\u6B65\u4EFB\u52A1</strong>\u6709\u4EE5\u4E0B\u4E09\u79CD\u7C7B\u578B\uFF1A</p><ol><li><p>\u666E\u901A\u4E8B\u4EF6\uFF0C\u5982click\u3001resize\u7B49</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">div</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u8D44\u6E90\u52A0\u8F7D\uFF0C\u5982load\u3001error\u7B49</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">img</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5B9A\u65F6\u5668\uFF0C\u5305\u62ECsetInterval\u3001setTimeout\u7B49</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div></li></ol><p><strong>\u4EFB\u52A1</strong>\u53C8\u88AB\u5206\u4E3A\u4E24\u79CD\u7C7B\u578B\uFF1A</p><ul><li><p><strong>\u5B8F\u4EFB\u52A1\uFF08MacroTask\uFF09</strong></p><p>\u5BBF\u4E3B\u73AF\u5883\u63D0\u4F9B\u7684\uFF08\u6D4F\u89C8\u5668\u548Cnode\uFF09</p><p>script\u5168\u90E8\u4EE3\u7801\u3001setTimeout\u3001setInterval\u3002</p><p>\u6D4F\u89C8\u5668\u4E3A\u4E86\u80FD\u591F\u4F7F\u5F97JS\u5185\u90E8task\u4E0EDOM\u4EFB\u52A1\u80FD\u591F\u6709\u5E8F\u7684\u6267\u884C\uFF0C\u4F1A\u5728\u4E00\u4E2Atask\u6267\u884C\u7ED3\u675F\u540E\uFF0C\u5728\u4E0B\u4E00\u4E2A task \u6267\u884C\u5F00\u59CB\u524D\uFF0C\u5BF9\u9875\u9762\u8FDB\u884C\u91CD\u65B0\u6E32\u67D3 \uFF08task-&gt;\u6E32\u67D3-&gt;task-&gt;...\uFF09</p></li><li><p><strong>\u5FAE\u4EFB\u52A1\uFF08MicroTask\uFF09</strong></p><p>\u8BED\u8A00\u6807\u51C6\u63D0\u4F9B\u7684</p><p>Promise\u3001await</p><p>async\u51FD\u6570\u8868\u793A\u51FD\u6570\u91CC\u9762\u53EF\u80FD\u4F1A\u6709\u5F02\u6B65\u65B9\u6CD5\uFF0Cawait\u540E\u9762\u8DDF\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0Casync\u65B9\u6CD5\u6267\u884C\u65F6\uFF0C\u9047\u5230await\u4F1A\u7ACB\u5373\u6267\u884C\u8868\u8FBE\u5F0F\uFF0C\u7136\u540E\u628Aawait\u8868\u8FBE\u5F0F\u540E\u9762\u7684\u4EE3\u7801\u653E\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u91CC\uFF0C\u8BA9\u51FA\u6267\u884C\u6808\u8BA9\u540C\u6B65\u4EE3\u7801\u5148\u6267\u884C</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// \u7B2C2\u79D2\u65F6\u8F93\u51FA: 1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li></ul><p><strong>\u5B8F\u4EFB\u52A1\u4E0E\u5FAE\u4EFB\u52A1\u6267\u884C\u987A\u5E8F</strong>\uFF1A\u540C\u6B65\u2014&gt;\u5FAE\u4EFB\u52A1\u2014&gt;\u5B8F\u4EFB\u52A1</p><ul><li>\u6267\u884C\u6808\u5728\u6267\u884C\u5B8C\u540C\u6B65\u4EFB\u52A1\u540E\uFF0C\u67E5\u770B\u6267\u884C\u6808\u662F\u5426\u4E3A\u7A7A\uFF0C\u5982\u679C\u6267\u884C\u6808\u4E3A\u7A7A\uFF0C\u5C31\u4F1A\u53BB\u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\u662F\u5426\u4E3A\u7A7A\uFF0C\u5982\u679C\u4E3A\u7A7A\u7684\u8BDD\uFF0C\u5C31\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u5426\u5219\u5C31\u4E00\u6B21\u6027\u6267\u884C\u5B8C\u6240\u6709\u5FAE\u4EFB\u52A1\u3002</li><li>\u6BCF\u6B21\u5355\u4E2A\u5B8F\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\u662F\u5426\u4E3A\u7A7A\uFF0C\u5982\u679C\u4E0D\u4E3A\u7A7A\u7684\u8BDD\uFF0C\u4F1A\u6309\u7167\u5148\u5165\u5148\u51FA\u7684\u89C4\u5219\u5168\u90E8\u6267\u884C\u5B8C\u5FAE\u4EFB\u52A1\u540E\uFF0C\u8BBE\u7F6E\u5FAE\u4EFB\u52A1\u961F\u5217\u4E3Anull\uFF0C\u7136\u540E\u518D\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u5982\u6B64\u5FAA\u73AF\u3002 <img src="https://img.jbzj.com/file_images/article/202009/2020090211501426.png" alt="2020090211501426.png"></li></ul><p><strong>\u4E8B\u4EF6\u5FAA\u73AF</strong>\u5177\u4F53\u8FC7\u7A0B\uFF1A</p><ul><li>\u540C\u6B65\u4EFB\u52A1\u8FDB\u5165\u4E3B\u7EBF\u7A0B\uFF0C\u5F02\u6B65\u4EFB\u52A1\u8FDB\u5165Event Table\u5E76\u6CE8\u518C\u51FD\u6570\u3002</li><li>\u5F53\u5F02\u6B65\u4EFB\u52A1\u5B8C\u6210\u65F6\uFF0CEvent Table\u4F1A\u5C06\u8FD9\u4E2A\u51FD\u6570\u79FB\u5165Event Queue\u3002</li><li>\u4E3B\u7EBF\u7A0B\u5185\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u6267\u884C\u6808\u4E3A\u7A7A\uFF0C\u4F1A\u53BBEvent Queue\u8BFB\u53D6\u5BF9\u5E94\u7684\u51FD\u6570\uFF0C\u8FDB\u5165\u4E3B\u7EBF\u7A0B\u6267\u884C\u3002</li><li>\u4E0A\u8FF0\u8FC7\u7A0B\u4F1A\u4E0D\u65AD\u91CD\u590D\uFF0C\u4E5F\u5C31\u662F\u5E38\u8BF4\u7684Event Loop(\u4E8B\u4EF6\u5FAA\u73AF)\u3002</li></ul></li></ul>`,4),t=[p];function e(c,r,y,F,i,D){return a(),n("div",null,t)}const u=s(o,[["render",e]]);export{C as __pageData,u as default};
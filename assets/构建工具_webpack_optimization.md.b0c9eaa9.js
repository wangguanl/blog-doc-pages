import{_ as s,c as n,o as a,d as p}from"./app.de1979c9.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"optimization.splitChunks","slug":"optimization-splitchunks","link":"#optimization-splitchunks","children":[]},{"level":2,"title":"optimization.runtimeChunk","slug":"optimization-runtimechunk","link":"#optimization-runtimechunk","children":[]},{"level":2,"title":"Further Reading","slug":"further-reading","link":"#further-reading","children":[]}],"relativePath":"\u6784\u5EFA\u5DE5\u5177/webpack/optimization.md"}'),o={name:"\u6784\u5EFA\u5DE5\u5177/webpack/optimization.md"},l=p(`<h2 id="optimization-splitchunks" tabindex="-1">optimization.splitChunks <a class="header-anchor" href="#optimization-splitchunks" aria-hidden="true">#</a></h2><h4 id="\u5C06node-modules\u4F9D\u8D56\u6A21\u5757\u6253\u5305\u5230\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u4E2D\uFF0C\u4E0D\u4F1A\u6253\u5305\u5230main-js\u4E2D\uFF0C\u907F\u514Dmain-js\u6539\u52A8\u540E\u6839\u636Econtenthash\u91CD\u65B0\u751F\u6210\u65B0\u540D\u79F0\u7684\u4F9D\u8D56\u5305\uFF0C\u5BFC\u81F4\u6D4F\u89C8\u5668\u7F13\u5B58\u7684\u6587\u4EF6\u5931\u6548\uFF0C\u8981\u989D\u5916\u52A0\u8F7D\u9664\u53BBmain-js\u6539\u52A8\u7684\u4EE3\u7801\u3002" tabindex="-1">\u5C06node_modules\u4F9D\u8D56\u6A21\u5757\u6253\u5305\u5230\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u4E2D\uFF0C\u4E0D\u4F1A\u6253\u5305\u5230main.js\u4E2D\uFF0C\u907F\u514Dmain.js\u6539\u52A8\u540E\u6839\u636Econtenthash\u91CD\u65B0\u751F\u6210\u65B0\u540D\u79F0\u7684\u4F9D\u8D56\u5305\uFF0C\u5BFC\u81F4\u6D4F\u89C8\u5668\u7F13\u5B58\u7684\u6587\u4EF6\u5931\u6548\uFF0C\u8981\u989D\u5916\u52A0\u8F7D\u9664\u53BBmain.js\u6539\u52A8\u7684\u4EE3\u7801\u3002 <a class="header-anchor" href="#\u5C06node-modules\u4F9D\u8D56\u6A21\u5757\u6253\u5305\u5230\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u4E2D\uFF0C\u4E0D\u4F1A\u6253\u5305\u5230main-js\u4E2D\uFF0C\u907F\u514Dmain-js\u6539\u52A8\u540E\u6839\u636Econtenthash\u91CD\u65B0\u751F\u6210\u65B0\u540D\u79F0\u7684\u4F9D\u8D56\u5305\uFF0C\u5BFC\u81F4\u6D4F\u89C8\u5668\u7F13\u5B58\u7684\u6587\u4EF6\u5931\u6548\uFF0C\u8981\u989D\u5916\u52A0\u8F7D\u9664\u53BBmain-js\u6539\u52A8\u7684\u4EE3\u7801\u3002" aria-hidden="true">#</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FFCB6B;">splitChunks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// chunks: &#39;all&#39;,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">cacheGroups</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">vendor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chunk-vendors</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">chunks</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="optimization-runtimechunk" tabindex="-1">optimization.runtimeChunk <a class="header-anchor" href="#optimization-runtimechunk" aria-hidden="true">#</a></h2><p><a href="https://webpack.docschina.org/configuration/optimization/#optimizationruntimechunk" target="_blank" rel="noreferrer">https://webpack.docschina.org/configuration/optimization/#optimizationruntimechunk</a></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">optimization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// runtimeChunk: &#39;single&#39;,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">splitChunks</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">chunks</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div><p>splitChunks</p><p><a href="https://www.cnblogs.com/kwzm/p/10314438.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/kwzm/p/10314438.html</a></p><p><a href="https://zhuanlan.zhihu.com/p/152097785?from_voters_page=true" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/152097785?from_voters_page=true</a></p><h2 id="further-reading" tabindex="-1">Further Reading <a class="header-anchor" href="#further-reading" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/webpack/webpack.js.org/issues/652" target="_blank" rel="noreferrer">Issue 652</a></li></ul>`,11),e=[l];function t(r,c,i,F,h,D){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{u as __pageData,d as default};

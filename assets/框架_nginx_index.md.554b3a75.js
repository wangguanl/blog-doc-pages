import{_ as s,c as n,o as a,d as l}from"./app.de1979c9.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u6846\u67B6/nginx/index.md"}'),p={name:"\u6846\u67B6/nginx/index.md"},o=l(`<div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#676E95;">#user  nobody;</span></span>
<span class="line"><span style="color:#89DDFF;">worker_processes </span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#error_log  logs/error.log;</span></span>
<span class="line"><span style="color:#676E95;">#error_log  logs/error.log  notice;</span></span>
<span class="line"><span style="color:#676E95;">#error_log  logs/error.log  info;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">#pid        logs/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">events</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> worker_connections </span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">http</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> include </span><span style="color:#A6ACCD;">      mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> default_type </span><span style="color:#A6ACCD;"> application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#access_log  logs/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> sendfile </span><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;"> on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#tcp_nopush     on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> keepalive_timeout </span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#gzip  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;"> localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#charset koi8-r;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">  html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;"> index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> error_page </span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">502</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">503</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">504</span><span style="color:#A6ACCD;">  /50x.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/50x.html </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">  html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#    root           html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#    fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#    include        fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># concurs with nginx&#39;s one</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#location ~ /\\.ht {</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#    deny  all;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">#}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">gentry.mobi</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/api/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://123.56.217.228:9999/api/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/back/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://123.56.217.228:9998</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://123.56.217.228:9997</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># another virtual host using mix of IP-, name-, and port-based configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    listen       8000;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    listen       somename:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    server_name  somename  alias  another.alias;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#        root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># HTTPS server</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    listen       443 ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    server_name  localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    ssl_certificate      cert.pem;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    ssl_certificate_key  cert.key;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    ssl_session_timeout  5m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#        root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,1),e=[o];function c(t,r,C,A,y,i){return a(),n("div",null,e)}const E=s(p,[["render",c]]);export{F as __pageData,E as default};

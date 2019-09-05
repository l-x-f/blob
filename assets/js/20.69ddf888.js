(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{213:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"常用的nginx配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的nginx配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用的nginx配置")]),s._v(" "),e("p",[s._v("下面的配置文件加载在nginx的配置文件nginx.conf里的http字段里")]),s._v(" "),e("p",[s._v("1.http配置")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server {\n    listen 80; #监听端口\n    server_name example.com;  #域名或本地服务器ip\n      location / {\n        root   /home/web/dist; #站点静态文件所在目录\n        index  index.html index.htm; #入口文件\n\n        #前端history路由支持\n        try_files $uri $uri/ /index.html;\n    }\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("2.https配置")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server {\n    listen 80;\n    server_name  example.com;\n    rewrite ^(.*) https://example.com permanent;\n}\n \nserver {\n    listen 443;\n    server_name  example.com;\n    ssl on;\n    ssl_certificate  /etc/nginx/cert/example.com.pem;  #证书pem所在服务器地址\n    ssl_certificate_key  /etc/nginx/cert/example.com.key; #证书key所在服务器地址\n    ssl_session_timeout 5m;\n    ssl_protocols SSLv2 SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_prefer_server_ciphers on;\n \n    location / {\n        root /home/web/dist;\n        index  index.html index.htm;\n\n          #前端history路由支持\n        try_files $uri $uri/ /index.html?$query_string;\n        if (!-e $request_filename){\n            rewrite ^/(.*) /index.html last;\n        }\n        try_files $uri $uri/ /index.html =404;\n    }\n \n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br")])]),e("p",[s._v("3.同一个域名http与https两种方式都可访问")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#核心就是把ssl on；这行注释掉, ssl写在443端口后面, 这样http和https的链接都可以用\nserver {\n    listen 80;\n    listen 443 ssl; # ssl写在443端口后面\n    server_name  example.com;\n    # ssl on; # 这行注释掉\n    ssl_certificate  /etc/nginx/cert/1_example.com_bundle.crt;\n    ssl_certificate_key  /etc/nginx/cert/2_example.com.key;\n    ssl_session_timeout 5m;\n    ssl_protocols SSLv2 SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n    ssl_prefer_server_ciphers on;\n\n    location / {\n        root /usr/app/h5;\n        index  index.html index.htm;\n          #前端history路由支持\n        try_files $uri $uri/ /index.html?$query_string;\n        if (!-e $request_filename){\n            rewrite ^/(.*) /index.html last;\n        }\n\n    }\n\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])])])},[],!1,null,null,null);n.default=t.exports}}]);
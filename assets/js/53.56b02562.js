(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{430:function(t,e,s){"use strict";s.r(e);var a=s(11),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dokodemo-door"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dokodemo-door"}},[t._v("#")]),t._v(" Dokodemo-door")]),t._v(" "),s("ul",[s("li",[t._v("Name: "),s("code",[t._v("dokodemo-door")])]),t._v(" "),s("li",[t._v("Type: Inbound Protocol")])]),t._v(" "),s("p",[t._v("Dokodemo door (any door) is an inbound data protocol. It can listen to a local port and send all data entering this port to a port of the designated server, so as to achieve the effect of port mapping.")]),t._v(" "),s("h2",{attrs:{id:"inboundconfigurationobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inboundconfigurationobject"}},[t._v("#")]),t._v(" InboundConfigurationObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeout"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"followRedirect"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userLevel"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("address")]),t._v(": address")])]),t._v(" "),s("p",[t._v("Forward traffic to this address. It can be an IP address, like "),s("code",[t._v('"1.2.3.4"')]),t._v(", or a domain name, like "),s("code",[t._v('"v2ray.com"')]),t._v(". String type.")]),t._v(" "),s("p",[t._v("When "),s("code",[t._v("followRedirect")]),t._v(" (see below) is "),s("code",[t._v("true")]),t._v(", "),s("code",[t._v("address")]),t._v(" can be empty.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("port")]),t._v(": number")])]),t._v(" "),s("p",[t._v("Forward traffic to the specified port of the destination address, range [1, 65535], numeric type. Required parameters.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("network")]),t._v(': "tcp" | "udp" | "tcp,udp"')])]),t._v(" "),s("p",[t._v("The type of network protocol that can be received. For example, when it is specified as "),s("code",[t._v('"tcp"')]),t._v(", any gate will only receive TCP traffic. The default value is "),s("code",[t._v('"tcp"')]),t._v(".")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("timeout")]),t._v(": number")])]),t._v(" "),s("p",[t._v("The time limit for inbound data (seconds), the default value is 300.")]),t._v(" "),s("p",[t._v("After V2Ray 3.1 is equivalent to the "),s("code",[t._v("connIdle")]),t._v(" strategy corresponding to the user level")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("followRedirect")]),t._v(": true | false")])]),t._v(" "),s("p",[t._v("When the value is "),s("code",[t._v("true")]),t._v(", dokodemo-door will recognize the data forwarded by iptables and forward it to the corresponding destination address. For details, see the "),s("code",[t._v("tproxy")]),t._v(" setting in "),s("RouterLink",{attrs:{to:"/en_US/config/transport.html"}},[t._v("Transport Configuration")]),t._v(".")],1),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("userLevel")]),t._v(": number")])]),t._v(" "),s("p",[t._v("User level, all connections will use this user level.")]),t._v(" "),s("h2",{attrs:{id:"transparent-proxy-configuration-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transparent-proxy-configuration-example"}},[t._v("#")]),t._v(" Transparent proxy configuration example")]),t._v(" "),s("p",[t._v("Add a dokodemo-door inbound protocol in V2Ray:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp,udp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeout"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"followRedirect"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Configure iptables:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create new chain")]),t._v("\niptables -t nat -N V2RAY\niptables -t mangle -N V2RAY\niptables -t mangle -N V2RAY_MARK\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ignore your V2Ray server's addresses")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# It's very IMPORTANT, just be careful.")]),t._v("\niptables -t nat -A V2RAY -d "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.123")]),t._v(".123.123 -j RETURN\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ignore LANs and any other addresses you'd like to bypass the proxy")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# See Wikipedia and RFC5735 for full list of reserved networks.")]),t._v("\niptables -t nat -A V2RAY -d "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0/8 -j RETURN\niptables -t nat -A V2RAY -d "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.0/8 -j RETURN\niptables -t nat -A V2RAY -d "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.0/8 -j RETURN\niptables -t nat -A V2RAY -d "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".0.0/16 -j RETURN\niptables -t nat -A V2RAY -d "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".0.0/12 -j RETURN\niptables -t nat -A V2RAY -d "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0/16 -j RETURN\niptables -t nat -A V2RAY -d "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0/4 -j RETURN\niptables -t nat -A V2RAY -d "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240.0")]),t._v(".0.0/4 -j RETURN\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Anything else should be redirected to Dokodemo-door's local port")]),t._v("\niptables -t nat -A V2RAY -p tcp -j REDIRECT --to-ports "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add any UDP rules")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" route "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" default dev lo table "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" rule "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" fwmark "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" lookup "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\niptables -t mangle -A V2RAY -p udp --dport "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" -j TPROXY --on-port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),t._v(" --tproxy-mark 0x01/0x01\niptables -t mangle -A V2RAY_MARK -p udp --dport "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(" -j MARK --set-mark "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Apply the rules")]),t._v("\niptables -t nat -A OUTPUT -p tcp -j V2RAY\niptables -t mangle -A PREROUTING -j V2RAY\niptables -t mangle -A OUTPUT -j V2RAY_MARK\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
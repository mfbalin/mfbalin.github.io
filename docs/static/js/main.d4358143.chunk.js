(this.webpackJsonpmfbalin=this.webpackJsonpmfbalin||[]).push([[0],{10:function(e,a,t){e.exports=t(19)},15:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),s=t.n(r),c=(t(15),t(1)),i=t(2),o=t(4),m=t(3),u=t(6),d=t(9),p=t.n(d),h=(t(18),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.occupation,this.props.data.description),t=(this.props.data.address.city,this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),l.a.createElement("h3",null,l.a.createElement("span",null,a)),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},t))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright"," ",l.a.createElement("a",{title:"Muhammed Fatih Balin",href:"mfbal.in"},"Kaan Sancak")),l.a.createElement("li",null,"Design by"," ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=(this.props.data.bio,this.props.data.address.city),n=this.props.data.address.state,r=this.props.data.address.zip,s=this.props.data.phone,c=this.props.data.email,i=this.props.data.email2,o=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,t,l.a.createElement("br",null),n,", ",r),l.a.createElement("br",null),l.a.createElement("span",null,s),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:balin@gatech.edu"},c)),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:m.f.balin@gmail.com"},i)))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:o,className:"button",target:"_blank"},l.a.createElement("i",{className:"fa fa-download"}),"Check my CV")))))))}}]),t}(n.Component),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,a=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))})),t=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",{className:"newline"},e.description))})),n=this.props.data.skills.map((function(e){var a="images/tech/"+e.image;return l.a.createElement("div",{key:e.name,className:"columns feature-item"},l.a.createElement("img",{className:"skill",alt:e.name,src:a}),l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))}));return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"News"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},"  ",l.a.createElement("p",{className:"info"},"Summer 2021"),l.a.createElement("p",{className:"newline"},"I will be joining Pacific Northwest National Laboratory for an research internship this summer."))))),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{key:"Georgia Tech"},l.a.createElement("h3",null,"Georgia Tech"),l.a.createElement("p",{className:"info"},"Graduate Research Assistant",l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},"2019 - Present")),l.a.createElement("p",{className:"newline"},l.a.createElement("ul",null,l.a.createElement("li",null,"Working on HPC and graphanalytics as amember of TDALab."),l.a.createElement("li",null,"Worked on fast and efficient heuristic algorithms to solve symmetric rectilinear partitioning problem. We have published our work under ",l.a.createElement("a",{href:"https://github.com/GT-TDAlab/SARMA"},"SARMA")," library."),l.a.createElement("li",null,"Workod on Elga, a framework for computing local dynamic graph algorithms for streaming graphs in a distributed, elastic environment. Paper submitted to SC 21."),l.a.createElement("li",null,"Worked on streaming overlapping clustering in a distributed setting."),l.a.createElement("li",null,"Recently, I have started working on Multi-GPU GCN training framework in order to efficiently parallelize training of GCNs or its variants.")))),t)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Favorite Tech"))),l.a.createElement("div",null,l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",{className:"lead center"},e)),l.a.createElement("ul",{className:"bgrid-quarters s-bgrid-thirds cf"},n))))}}]),t}(n.Component),N=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.city,n=this.props.data.address.state,r=this.props.data.address.zip,s=this.props.data.phone,c=(this.props.data.email,this.props.data.contactmessage);return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},c),l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:balin@gatech.edu"},"balin@gatech.edu")),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:m.f.balin@gmail.com"},"m.f.balin@gmail.com")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns"},!1,l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null))),l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement("p",{className:"address"},e,l.a.createElement("br",null),a," ",l.a.createElement("br",null),t,", ",n," ",r,l.a.createElement("br",null),l.a.createElement("span",null,s))))))}}]),t}(n.Component),g=(n.Component,function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Work."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),t}(n.Component)),b=(n.Component,function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(i.a)(t,[{key:"getResumeData",value:function(){p.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}),l.a.createElement(v,{data:this.state.resumeData.resume}),l.a.createElement(g,{data:this.state.resumeData.portfolio}),l.a.createElement(N,{data:this.state.resumeData.main}),l.a.createElement(E,{data:this.state.resumeData.main}))}}]),t}(n.Component)),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(l.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.d4358143.chunk.js.map
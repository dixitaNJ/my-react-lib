(this["webpackJsonpdixita-lib-example"]=this["webpackJsonpdixita-lib-example"]||[]).push([[0],[,,function(e,t,n){e.exports=n(11)},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(3);var r=n(0),a=n.n(r),o=n(1),c=n.n(o);function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u="_3ybTi",l=function(e){var t=e.text;return a.a.createElement("div",{className:u},"Example Component: ",t)},p=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={clientIp:""},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n);var o=r.prototype;return o.componentDidMount=function(){var e=this;new Promise((function(e){var t=window,n=new(t.RTCPeerConnection||t.mozRTCPeerConnection||t.webkitRTCPeerConnection)({iceServers:[]}),r=function(){};n.createDataChannel(""),n.createOffer((function(e){return n.setLocalDescription(e,r,r)}),r),n.onicecandidate=function(t){try{t.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(e)}catch(n){}}})).then((function(t){return e.setState({clientIp:t})})).catch((function(e){return console.error(e)}))},o.render=function(){return a.a.createElement("div",null,"Your IP address is : ",this.state.clientIp)},r}(a.a.Component);n(10);var s=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(l,{text:"Create React Library Example \ud83d\ude04"}),a.a.createElement(p,null));c.a.render(a.a.createElement(s,null),document.getElementById("root"))}],[[2,1,2]]]);
//# sourceMappingURL=main.f70c83b1.chunk.js.map
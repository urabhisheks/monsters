(window.webpackJsonpmonters=window.webpackJsonpmonters||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),l=n(4),i=n(6),u=n(5),m=n(7),h=(n(14),n(15),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),d=(n(16),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return r.a.createElement(h,{key:e.id,monster:e})}))}),p=(n(17),function(e){var t=e.placeholder,n=e.onChange,a=e.value;return r.a.createElement("input",{className:"search",type:"text",placeholder:t,onChange:n,value:a})}),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={monsters:[],searchField:""},n.handleChange=function(e){n.setState({searchField:e.target.value})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t})})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(p,{placeholder:"search monsters",onChange:this.handleChange,value:this.state.searchField}),r.a.createElement(d,{monsters:a}))}}]),t}(a.Component);c.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.038905ef.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(2),c=a.n(l),s=(a(14),a(15),a(16),function(){return o.a.createElement("div",{className:"bg-success"},o.a.createElement("nav",{style:{textAlign:"center",display:"block"},className:"navbar  bg-success navbar-expand-lg navbar-light"},o.a.createElement("span",{className:"navbar-brand text-light "},"To-Do List")))}),r=a(3),i=a(4),m=a(6),u=a(5),D=a(7),g=function(e){return o.a.createElement("div",{className:"mx-5 showTask"},o.a.createElement("button",{className:"bg-secondary tick commonstyle2 text-light",onClick:function(){e.Completed(e.id,"toDoDone")}},"\u2713"),o.a.createElement("span",{className:"mt-3 text-light bg-dark commonstyle1 taskToDo"},e.taskData,o.a.createElement("button",{className:"bg-danger tickright commonstyle2 text-light",onClick:function(){e.Delete(e.id,"PermanentDelete")}},"\u2715")))},d=function(e){return o.a.createElement("div",{className:"mx-5 showTask"},o.a.createElement("button",{className:"bg-success tick commonstyle2 text-light",onClick:function(){e.reDo(e.id,"toDoNotDone")}},"\u2713"),o.a.createElement("span",{className:"mt-3 text-light bg-secondary commonstyle1 Done"},e.doneData,o.a.createElement("button",{className:"bg-danger tickright commonstyle2 text-light",onClick:function(){e.Delete(e.id,"PermanentDeleteDone")}},"\u2715")))},p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={ToDo:[],Done:[]},a.addTask=function(){var e=a.state.ToDo;e.push(a.refs.textInput.value),a.setState({ToDo:e}),a.refs.textInput.value="",localStorage.setItem("Data",e)},a.Completed=function(e,t){var n=a.state.ToDo,o=a.state.Done;"toDoDone"===t?(o.push(n.splice(e,1)[0]),localStorage.setItem("DoneData",o),localStorage.setItem("Data",n)):"toDoNotDone"===t&&(n.push(o.splice(e,1)[0]),localStorage.setItem("DoneData",o),localStorage.setItem("Data",n)),a.setState({ToDo:n,Done:o})},a.Delete=function(e,t){var n=a.state.ToDo,o=a.state.Done;"PermanentDelete"===t?(n.splice(e,1),localStorage.setItem("Data",n)):(o.splice(e,1),localStorage.setItem("DoneData",o)),a.setState({ToDo:n,Done:o})},a}return Object(D.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.state,t=e.ToDo,a=e.Done;localStorage.getItem("Data")?localStorage.getItem("Data").split(",").map(function(e){return t.push(e),1}):console.log("Nothing in Here"),localStorage.getItem("DoneData")?localStorage.getItem("DoneData").split(",").map(function(e){return a.push(e),1}):console.log("Nothing in Here"),this.setState({ToDo:t,Done:a})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"mx-5"},o.a.createElement("input",{type:"text",ref:"textInput",className:"bg-dark mt-3 text-light styletype1 commonstyle1",placeholder:"To-Do Task"}),o.a.createElement("button",{className:"bg-warning mt-3 tick commonstyle2",onClick:this.addTask},"+")),o.a.createElement("div",{className:"addTaskHere"},this.state.ToDo.map(function(t,a){return o.a.createElement(g,{key:a,taskData:t,Completed:e.Completed,Delete:e.Delete,id:e.state.ToDo.indexOf(t)})})),o.a.createElement("div",{className:"addTaskHere"},this.state.Done.map(function(t,a){return o.a.createElement(d,{key:a,doneData:t,reDo:e.Completed,Delete:e.Delete,id:e.state.Done.indexOf(t)})})))}}]),t}(n.Component);a(17);var h=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,null),o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.6badb33d.chunk.js.map
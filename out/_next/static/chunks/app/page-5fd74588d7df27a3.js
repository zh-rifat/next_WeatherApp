(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1005:function(e,t,s){Promise.resolve().then(s.bind(s,5477))},5477:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return D}});var l=s(7437);let a=e=>{let t=new Date(1e3*e),s=t.getHours()%12;return s+":"+("0"+t.getMinutes()).slice(-2)+" "+(s>=12?"PM":"AM")},i=e=>{let t=e.indexOf(" ");return -1===t?[e,""]:[e.slice(0,t),e.slice(t+1)]};var n=s(8472);let r="https://api.openweathermap.org/data/2.5",c="279a33fe288955d2850b205ba7040fd1",o=async e=>{try{return(await n.Z.get(r+"/weather?",{params:{q:e,appid:c,units:"metric"}})).data}catch(e){throw console.log(e),e}},d=async e=>{try{return(await n.Z.get(r+"/forecast?",{params:{q:e,appid:c,units:"metric"}})).data}catch(e){throw console.log(e),e}},m=async(e,t)=>{try{return(await n.Z.get(r+"/weather?",{params:{lat:e,lon:t,appid:c,units:"metric"}})).data}catch(e){throw console.log(e),e}},u=async(e,t)=>{try{return(await n.Z.get(r+"/forecast?",{params:{lat:e,lon:t,appid:c,units:"metric"}})).data}catch(e){throw console.log(e),e}},x=e=>"https://openweathermap.org/img/wn/".concat(e,"@2x.png");var h=s(2265),g=s(6648),p=e=>{let{imgSrc:t,title:s,value:a}=e;return(0,l.jsxs)("div",{className:"flex p-5 py-6 bg-slate-950 rounded-md items-center justify-start space-x-8 w-full",children:[(0,l.jsx)(g.default,{src:t,width:48,height:48,alt:"".concat(s,"-icon")}),(0,l.jsxs)("div",{className:"flex justify-end flex-col",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold text-gray-300 mb-2",children:s}),(0,l.jsx)("p",{className:"text-sm text-gray-400",children:a})]})]})},f=e=>{let{}=e,[t,s]=(0,h.useState)(""),[a,i]=(0,h.useState)("");return(0,h.useEffect)(()=>{let e=setInterval(()=>{s(new Date().toLocaleTimeString()),i(new Date().toDateString())},1e3);return()=>clearInterval(e)},[t]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-gray-400 md:text-lg text-sm",children:t}),(0,l.jsx)("h3",{className:"text-gray-400 md:text-lg text-sm",children:a})]})},v=e=>{var t,s,i,n,r;let{data:c}=e;if(!c)return null;let o=[{title:"Sunrise",imgSrc:"/weather/sunrise.svg",value:"".concat(a(null==c?void 0:null===(t=c.sys)||void 0===t?void 0:t.sunrise))},{title:"Sunset",imgSrc:"/weather/sunset.svg",value:"".concat(a(null==c?void 0:null===(s=c.sys)||void 0===s?void 0:s.sunset))},{title:"Wind",imgSrc:"/weather/wind.svg",value:"".concat(null==c?void 0:null===(i=c.wind)||void 0===i?void 0:i.speed," km/h")},{title:"Humidity",imgSrc:"/weather/humidity.svg",value:"".concat(null==c?void 0:null===(n=c.main)||void 0===n?void 0:n.humidity," %")},{title:"Feels Like",imgSrc:"/weather/feels.svg",value:"".concat(null==c?void 0:null===(r=c.main)||void 0===r?void 0:r.feels_like," \xb0C")},{title:"Visibility",imgSrc:"/weather/visibility.svg",value:"".concat(c.visibility," km")}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"bg-slate-950 md:p-10 p-5 py-20 rounded-md text-gray-300 flex flex-row items-center",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("h1",{className:"text-3xl md:text-5xl font-bold",children:[null==c?void 0:c.name,", ",null==c?void 0:c.sys.country]}),(0,l.jsx)("h3",{className:"text-xl text-gray-400",children:null==c?void 0:c.weather[0].main}),(0,l.jsxs)("h2",{className:"text-2xl md:text-4xl font-bold mt-16",children:[null==c?void 0:c.main.temp,"\xb0C"]}),(0,l.jsx)("div",{className:"mt-6"}),(0,l.jsx)(f,{})]}),(0,l.jsx)("div",{className:"ml-auto",children:(0,l.jsx)("img",{src:x(null==c?void 0:c.weather[0].icon)})})]}),(0,l.jsx)("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-3 my-3",children:o.map(e=>(0,l.jsx)(p,{title:e.title,imgSrc:e.imgSrc,value:e.value},e.title))})]})},w=s(8196),j=s(6356),y=s(8665),b=s(624),N=e=>{let{icon:t,summary:s,temperature:a,dateAndTime:n}=e,[r,c]=i(n),o=(0,y.WU)((0,b.D)(n),"h a");return(0,l.jsxs)("div",{className:"flex justify-between items-center px-3 w-full py-2 border border-slate-700 h-[150px]",children:[(0,l.jsxs)("div",{className:"flex flex-col justify-between items-center",children:[(0,l.jsx)("img",{src:x(t)}),(0,l.jsx)("span",{className:"text-base",children:o})]}),(0,l.jsxs)("div",{className:"my-auto flex justify-between items-center gap-3 flex-col",children:[(0,l.jsxs)("h1",{children:[a,"\xb0C"]}),(0,l.jsx)("h4",{children:s})]})]})},S=s(9424);s(1239);let k={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:3},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:2}};var _=e=>{let{data:t}=e;if(!t)return null;let s=t.list.reduce((e,t)=>{let s=(0,y.WU)((0,b.D)(t.dt_txt.split(" ")[0]),"EEEE, MMMM d");return e[s]||(e[s]=[]),e[s].push(t),e},{});return(0,l.jsxs)("div",{className:"flex flex-col gap-2 px-3 mt-4 w-full",children:[(0,l.jsx)("h1",{className:"text-slate-400 text-3xl font-bold my-6",children:"Weather Forecast"}),(0,l.jsx)("div",{className:" overflow-y-scroll  rounded-md  border border-slate-400 max-h-[700px] scrollbar-hide",children:Object.entries(s).map(e=>{let[t,s]=e;return(0,l.jsxs)("div",{className:"px-1 py-4 border-slate-950",children:[(0,l.jsx)("h2",{className:"p-3 text-slate-500",children:t}),(0,l.jsx)(S.default,{responsive:k,children:s.map(e=>(0,l.jsx)(N,{temperature:e.main.temp,summary:e.weather[0].main,icon:e.weather[0].icon,dateAndTime:e.dt_txt},e.dt_txt))})]},t)})})]})},E=s(8633),C=e=>{let{loading:t,color:s}=e;return(0,l.jsx)(E.Z,{color:s,loading:t,size:150,"aria-label":"Loading Spinner","data-testid":"loader"})};function D(){let[e,t]=(0,h.useState)("dhaka"),[s,a]=(0,h.useState)(null),[i,n]=(0,h.useState)(null),[r,c]=(0,h.useState)(!1),x=async()=>{c(!0),a(await o(e)),n(await d(e)),c(!1)},g=async()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(async e=>{let{latitude:t,longitude:s}=e.coords;c(!0),a(await m(t,s)),n(await u(t,s)),c(!1)},e=>{console.log(e)}):console.log("Geolocation is not supported by this browser.")};return(0,h.useEffect)(()=>{(async()=>{a(await o(e)),n(await d(e))})()},[]),console.log(s),(0,l.jsxs)("main",{className:"flex min-h-screen flex-col lg:flex-row bg-slate-900 p-5 md:p-10 justify-center items-center ",children:[r&&(0,l.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center",children:(0,l.jsx)(C,{loading:r,color:"#fff"})}),(0,l.jsxs)("section",{className:"h-full flex flex-col items-between weather lg:w-1/2 w-full flex-grow",children:[(0,l.jsxs)("div",{className:"search-bar flex flex-row my-6",children:[(0,l.jsx)("input",{type:"text",placeholder:"Search for city",className:"bg-slate-800 focus:ring-0 focus:outline-none p-3 outline-slate-400 rounded-sm w-1/2",onChange:e=>t(e.target.value),onKeyDown:e=>{"Enter"===e.key&&x()}}),(0,l.jsx)("button",{type:"submit",className:"bg-green-700 p-4 mx-2 rounded-sm",onClick:x,children:(0,l.jsx)(w.Goc,{})}),(0,l.jsx)("button",{className:"bg-green-700 p-4 mx-2 rounded-sm",onClick:g,children:(0,l.jsx)(j.A_X,{})})]}),(0,l.jsx)(v,{data:s})]}),(0,l.jsx)("section",{className:"w-full lg:w-1/2 flex-grow",children:(0,l.jsx)(_,{data:i})})]})}}},function(e){e.O(0,[960,51,614,670,971,23,744],function(){return e(e.s=1005)}),_N_E=e.O()}]);
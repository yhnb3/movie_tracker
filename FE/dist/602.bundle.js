"use strict";(self.webpackChunkfe=self.webpackChunkfe||[]).push([[602],{1602:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var c=t(5466),r=t(8041),o=t(3974),a=t(5653),i=t(7527),l=t(3656);function u(e){var n=e.section,t=(0,a.TH)(),u=(0,r.v9)(i.kQ),s=u.loading,d=u.hasErrors,f=u.data,p=u.page,g=u.isMount,m="https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat("36280866a80b71c69c0131b57e760ee2","&language=ko&page=").concat(p),E=(0,r.I0)(),v=function(e){e.target.scrollingElement.scrollHeight===window.scrollY+window.innerHeight&&E((0,i.oO)())};return(0,c.useEffect)((function(){E((0,i.df)()),E((0,i.d_)(m))}),[t]),(0,c.useEffect)((function(){return g&&(window.addEventListener("scroll",(0,o.debounce)((function(e){return v(e)}),15)),E((0,i.Nf)())),p>1&&E((0,i.$E)(m)),function(){window.removeEventListener("scroll",(0,o.debounce)((function(e){return v(e)}),15))}}),[p]),c.createElement("div",null,c.createElement("div",{className:"grid grid-cols-5 px-72 pt-30 py-28"},s?c.createElement("p",null,"loading...."):d?c.createElement("p",null,"api error page"):f.map((function(e){return c.createElement("div",{className:"h-list"},c.createElement(l.Wf,{content:e,key:e.id}))}))))}}}]);
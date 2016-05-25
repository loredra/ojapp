/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var l=void 0,p=!0,s=null,t=!1;function aa(){return function(a){return a}}function B(){return function(){}}function C(a){return function(b){this[a]=b}}function Q(a){return function(){return this[a]}}function R(a){return function(){return a}}var S;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==l?d[e]=b:d=d[e]?d[e]:d[e]={}}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function b(c,d,e,f,h,k,m){b.q.Init.call(this,c.g(),d,a.e.vf,e,f,h,k,s,p,m);this.Ri=c}function c(a){this.Init(a)}function d(a,b){this.Init(a,b)}function e(a,b,c,d,f,h,k,m,A,D){e.q.Init.call(this,a.g(),b,c,d,f,s,h,k,m,A,D);this.Ri=a}function f(){this.Init({alta:f.sj})}function h(a){this.Init(a.g(),a.dispatchEvent,a);this.Ri=a}function k(a){this.Ri=a}a.sh=function(a,b,c){this.Init(a,b,c)};a.j.u(a.sh,a.Ne);a.sh.newInstance=function(b,c,d){return new a.sh(b,c,d)};a.sh.prototype.Init=function(b,
d,e){a.sh.q.Init.call(this,b,d,e);this.K=new h(this);this.K.Gg(this);a.o.Ta()||this.K.ss(new c(this.K));this.Bh=new f;this.Zb=[]};a.sh.prototype.SI=function(b,c){if(!b||!c){var d=m.xo(this,b,c);this.Pka=d;b||(b=d.hq?d.YKa*d.t$:0);c||(c=d.hq?d.APa*d.Pba:0)}return new a.$j(b,c)};a.sh.prototype.va=function(b,c,d){this.zj=this.ya;var e=this.Wu,f=this.Ab?this.Ab:0,h=this.Lb?this.Lb:0;this.K.je();this.Zb=[];this.Wu=[];this.Pka=s;this.Qp&&(this.ya.removeChild(this.Qp),this.Qp=s);this.Rb&&(this.Wx=p,this.Rb.stop());
this.Mf(b);var k=this.g();if(!c&&!d){if(k.Eb.style.display="block",c=this.SI(),a.F.l2(k,c.a,c.b),d=a.F.zqa(k),c.a==d.a&&c.b!=d.b?(this.Lb=d.b,c=this.SI(s,this.Lb),a.F.l2(k,c.a,this.Lb),this.Ab=a.F.zqa(k).a):c.a!=d.a&&c.b==d.b?(this.Ab=d.a,c=this.SI(this.Ab,s),a.F.l2(k,this.Ab,c.b),this.Lb=a.F.zqa(k).b):(this.Ab=d.a,this.Lb=d.b),this.Ab!=c.a||this.Lb!=c.b)this.Pka=s}else this.Ab=c,this.Lb=d;this.ya=new a.ca(k);this.k(this.ya);m.va(this,this.ya,new a.U(0,0,this.Ab,this.Lb),this.Pka);this.zj?"none"!=
this.T.animationOnDataChange&&b&&(b=new a.Ap(k,s),b.Yp(e,this.Wu),this.Rb=b.lv()):this.Rb=this.q3a();this.Rb?(a.F.l2(k,Math.max(f,this.Ab),Math.max(h,this.Lb)),this.K.bl(this),this.Qp&&this.ya.removeChild(this.Qp),this.Rb.Tf(this.y8,this),this.Rb.play()):this.y8()};a.sh.prototype.Mf=function(b){b?this.T=this.Bh.an(b):this.T||(this.T=this.sE());a.o.$i()||(this.T.animationOnDisplay="none",this.T.animationOnDataChange="none");b=this.T.selectionMode;this.Zc="single"==b?new a.Tc(a.Tc.Rz):"multiple"==b?
new a.Tc(a.Tc.Oz):s;this.K.IB(this.Zc)};a.sh.prototype.y8=function(){this.zj&&(this.removeChild(this.zj),this.zj.qa(),this.zj=s);this.Rb&&(this.Rb=s,this.K.Gg(this),this.Qp&&this.ya.k(this.Qp));a.F.l2(this.g(),this.Ab,this.Lb);this.K.rs(this.Zb[0]);this.Zc&&this.Zc.Tt(this.T.selection,this.Zb);a.Tg.Le(this.T.highlightedCategories,this.Zb,"any"==this.T.highlightMatch);this.vr();this.Wx||this.LE();this.Wx=s};a.sh.prototype.Ua=Q("K");a.sh.prototype.wsa=C("Zb");a.sh.prototype.wk=Q("Zb");a.sh.prototype.vhb=
function(a){this.Wu.push(a)};a.sh.prototype.uhb=C("Qp");a.sh.prototype.Geb=function(){for(var a=0,b=0;b<this.Zb.length;b++)a+=this.Zb[b].getCount();return a};a.sh.prototype.mb=function(){return a.Qa.hs(this.T.animationDuration)/1E3};a.sh.prototype.q3a=function(){var b=this.T.animationOnDisplay,c=this.mb(),d=this.g(),e=new a.U(0,0,this.Ab,this.Lb);if(a.hc.isSupported(b))return a.hc.LD(d,b,this.ya,e,c);var f=[];if("popIn"==b)for(b=0;b<this.Wu.length;b++){var h=this.Wu[b];f.push(new a.xs(d,h,p,c))}else if("none"!=
b){for(b=0;b<this.Wu.length;b++){var h=this.Wu[b],k=new a.Pd(d,h,c),z,A;m.Tb(this)?(z=m.Ara(this)?this.Ab:0,A=h.mj(),h.rz(z),k.ea.J(a.B.Q,h,h.mj,h.rz,A)):(z=m.zra(this)?this.Lb:0,A=h.nj(),h.sz(z),k.ea.J(a.B.Q,h,h.nj,h.sz,A));f.push(k)}f.push(a.hc.LD(d,a.hc.MB,this.ya,e,c))}return 0<f.length?new a.Eh(d,f):s};a.sh.prototype.qa=function(){this.K&&(this.K.bl(this),this.K.qa(),this.K=s);a.sh.q.qa.call(this)};a.sh.prototype.Le=function(b){var c=this.v();c.highlightedCategories=a.Dc.Ca(b);a.Tg.Le(b,this.wk(),
"any"==c.highlightMatch)};a.sh.prototype.select=function(b){this.v().selection=a.Dc.Ca(b);this.Zc&&this.Zc.Tt(b,this.wk())};a.sh.prototype.Jm=function(){return a.D.ah(this.v(),"componentName",a.D.Ka,"PICTOCHART")};a.sh.prototype.mi=function(){this.xBa||(this.xBa=new k(this));return this.xBa};a.j.u(k,a.Wd);k.prototype.Ko=function(a){return(a=this.Ri.Ua().eb(a))&&a instanceof d?"item["+this.Ri.wk().indexOf(a)+"]":s};k.prototype.oi=function(b){if(b==a.Wd.iC)return this.wE(this.Ri);var c=b.indexOf("[");
return 0<c&&"item"===b.substring(0,c)&&(b=parseInt(b.substring(c+1,b.length-1)),b=this.Ri.wk()[b])?b.ib():s};k.prototype.getItem=function(a){if(a=this.Ri.wk()[a]){var b={};b.color=a.ql();b.tooltip=a.ee();b.id=a.getId();b.name=a.getName();b.count=a.getCount();b.selected=a.tb();return b}return s};k.prototype.pU=function(){return this.Ri.wk().length};a.j.u(h,a.K);h.prototype.Cp=function(b,c,d){b=this.Ri.v();"none"!=b.hoverBehavior&&(c=c.ze?c.ze():[],b.highlightedCategories=d?c.slice():s,d=a.Wa.WG(b.highlightedCategories,
d),c=a.Qa.hs(b.hoverBehaviorDelay),this.RH.Gf(d,this.Ri.wk(),c,"any"==b.highlightMatch))};h.prototype.wQ=function(a){(a=this.eb(a.target))&&(!a.ob||!a.ob())&&this.hx(a)};h.prototype.FE=function(a){(a=this.eb(a.target))&&a.ob&&a.ob()&&this.hx(a)};h.prototype.DW=function(a){(a=this.eb(a.target))&&(!a.ob||!a.ob())&&this.hx(a)};h.prototype.Pv=function(a){(a=this.eb(a.target))&&(!a.ob||!a.ob())&&this.hx(a)};h.prototype.DH=function(a){var b=this.eb(a.target);b&&(b.ob&&b.ob())&&(a.preventDefault(),a.stopPropagation(),
this.hx(b))};h.prototype.hx=function(b){b instanceof d&&b.Ij()&&this.Ek(a.Wa.xba(b.getId()))};a.j.u(f,a.Ya);f.sj={animationOnDisplay:"none",animationOnDataChange:"none",animationDuration:750,drilling:"off",hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,layout:"horizontal",layoutOrigin:"topStart",selection:[],selectionMode:"none",_defaultColor:"#a6acb1",_defaultSize:32,_defaultShape:"rectangle",_gapRatio:0.25,_textStyle:new a.e(a.Ya.h3+
"color: #252525;"),_statusMessageStyle:new a.e(a.Ya.h3+"color: #252525;"),_tooltipStyle:new a.e("border-collapse: separate; border-spacing: 1px"),_tooltipLabelStyle:new a.e("color: #737373; padding: 0px 2px"),_tooltipValueStyle:new a.e("color: #333333; padding: 0px 2px")};a.j.u(e,a.Kf);e.prototype.nh=function(b,c){var d=new a.Pd(this.g(),this,0.75*this.Ri.mb()),e=d.ea,f=this.ho();this.Xp(c.ho());e.J(a.B.cg,this,this.ho,this.Xp,f);c.P(0);b.add(d,1)};e.prototype.Xj=function(b){b.add(new a.Kj(this.g(),
this,0.5*this.Ri.mb()),0)};e.prototype.Ui=function(b){this.P(0);b.add(new a.Ah(this.g(),this,0.5*this.Ri.mb()),2)};e.prototype.ho=function(){return[this.mj(),this.nj(),this.getWidth(),this.getHeight()]};e.prototype.Xp=function(a){this.rz(a[0]);this.sz(a[1]);this.Xa(a[2]);this.sb(a[3])};a.j.u(d,a.ca);d.mA=0;d.prototype.Init=function(b,c){d.q.Init.call(this,b.g(),s,c.id);this.Ri=b;this.lo=c;this.pc=c.id!=s?c.id:c.name!=s?c.name:"_defaultId"+d.mA;d.mA++;this.dd=this.jl=t;this.RFa=new a.N(0,0);(this.ob()||
this.Ij())&&this.setCursor("pointer");b.Ua().jb(this,this)};d.prototype.iMa=function(){var a=this.lo.columnSpan;return a!=s&&0<=a?a:1};d.prototype.CNa=function(){var a=this.lo.rowSpan;return a!=s&&0<=a?a:1};d.prototype.getCount=function(){var a=this.lo.count;return a!=s?Math.max(a,0):1};d.prototype.Bc=function(){return this.lo.shape||this.Ri.v()._defaultShape};d.prototype.yc=function(){return this.lo.color||this.Ri.v()._defaultColor};d.prototype.Fn=function(){return this.lo.borderColor};d.prototype.Fj=
function(){return this.lo.borderWidth};d.prototype.g1=function(){return this.lo.source};d.prototype.Rqa=function(){return this.lo.sourceSelected};d.prototype.Pqa=function(){return this.lo.sourceHover};d.prototype.Qqa=function(){return this.lo.sourceHoverSelected};d.prototype.getName=function(){return this.lo.name};d.prototype.getId=Q("pc");d.prototype.ee=function(){return this.lo.shortDesc};d.prototype.Ij=function(){var a=this.lo.drilling;return a&&"inherit"!=a?"on"==a:"on"==this.Ri.v().drilling};
d.prototype.zk=function(){return this.ob()&&this.Ij()};d.prototype.qjb=function(){this.Sf("img");this.gv()};d.prototype.vg=function(){var b=this.Ri.v(),c=this.Ri.v().tooltip;if(c){var b=this.Ri.g().Rf(),d={id:this.getId(),name:this.getName(),count:this.getCount(),color:this.yc()};return b.Uw(c,d)}if(this.ee()!=s)return this.ee();c="";(d=this.getName())&&(c=a.Pe.dU("td",b._tooltipLabelStyle)+d+"\x3c/td\x3e");d=a.o.$(this.Ri.g());b._tooltipLabelStyle.oa(a.e.NE,d?"left":"right");b._tooltipValueStyle.oa(a.e.NE,
d?"right":"left");return a.Pe.dU("table",b._tooltipStyle)+"\x3ctr\x3e"+c+a.Pe.dU("td",b._tooltipValueStyle)+this.Zja()+"\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e"};d.prototype.ql=function(){return this.yc()};d.prototype.Zja=function(){return a.D.ah(this.Ri.v(),"labelCountWithTotal",a.D.Ka,"COUNT_WITH_TOTAL",[this.getCount(),this.Ri.Geb()])};d.prototype.ob=function(){return"none"!=this.Ri.v().selectionMode};d.prototype.tb=Q("jl");d.prototype.rc=function(a){this.jl=a;this.gv();for(var c=0;c<this.Gb();c++){var d=
this.Za(c);(d instanceof b||d instanceof e)&&d.rc(a)}};d.prototype.vd=function(){for(var a=0;a<this.Gb();a++){var c=this.Za(a);(c instanceof b||c instanceof e)&&c.vd()}};d.prototype.Sc=function(){for(var a=0;a<this.Gb();a++){var c=this.Za(a);(c instanceof b||c instanceof e)&&c.Sc()}};d.prototype.Ue=function(){return[this]};d.prototype.Id=function(){var b=[],c=this.Ri.v();this.ob()&&b.push(a.D.ah(c,this.tb()?"stateSelected":"stateUnselected",a.D.Ka,this.tb()?"STATE_SELECTED":"STATE_UNSELECTED"));this.Ij()&&
b.push(a.D.ah(c,"stateDrillable",a.D.Ka,"STATE_DRILLABLE"));c=this.getName();c=this.ee()!=s?this.ee():c==s?this.Zja():a.D.na(a.D.Ka,"COLON_SEP_LIST",[c,this.Zja()]);return a.ja.uk(c,b)};d.prototype.gv=function(){a.o.Gi()||this.Bd("label",this.Id())};d.prototype.ze=function(){return this.lo.categories||[this.getId()]};d.prototype.pe=function(b){var d=this.Ri.Ua().Db;return b.type==a.ra.Fe||d.xv(b)?this:d.aj(b)?c.pe(this.Ri,this,b):s};d.prototype.Ig=function(a){return this.V(a)};d.prototype.Cm=function(){return this.ib()};
d.prototype.Uf=function(){this.dd=p;this.vd()};d.prototype.Od=function(){this.dd=t;this.Sc()};d.prototype.Qd=Q("dd");d.prototype.qib=C("RFa");d.prototype.jqa=Q("RFa");a.j.u(c,a.Db);c.prototype.YD=function(a){return this.aj(a)&&!a.ctrlKey};c.prototype.xv=function(b){return b.keyCode==a.G.xi&&b.ctrlKey};c.pe=function(b,c,d){var e=m.Ara(b),f=m.zra(b);d=d.keyCode==a.G.lg&&e||d.keyCode==a.G.ng&&!e||d.keyCode==a.G.gi&&f||d.keyCode==a.G.Cg&&!f;b=b.wk();d=a.fa.nb(b,c)+(d?1:-1);return d<b.length&&0<=d?b[d]:
c};c.prototype.Ak=function(b){var d=this.Ra.Ze();return d&&b.keyCode==a.G.wi?(this.Ra.hx(d),a.K.sc(b),d):c.q.Ak.call(this,b)};a.j.u(b,a.pa);b.prototype.nh=function(b,c){var d=new a.Pd(this.g(),this,0.75*this.Ri.mb()),e=d.ea,f=this.ud();this.ga(c.ud().Ca());e.J(a.B.vq,this,this.ud,this.ga,f);f=this.ho();this.Xp(c.ho());e.J(a.B.cg,this,this.ho,this.Xp,f);c.P(0);b.add(d,1)};b.prototype.Xj=function(b){b.add(new a.Kj(this.g(),this,0.5*this.Ri.mb()),0)};b.prototype.Ui=function(b){this.P(0);b.add(new a.Ah(this.g(),
this,0.5*this.Ri.mb()),2)};b.prototype.ho=function(){return[this.mj(),this.nj(),this.getWidth(),this.getHeight()]};b.prototype.Xp=function(a){this.rz(a[0]);this.sz(a[1]);this.Xa(a[2]);this.sb(a[3])};var m={};a.j.u(m,a.j);m.va=function(c,d,f,h){var k=c.g(),y=new a.ka(k,f.x,f.y,f.a,f.b);y.gc();d.k(y);h||(h=m.xo(c,f.a,f.b));if(h.hq){c.wsa(h.hq);for(var y=c.v()._gapRatio,x=m.Tb(c),z=m.zra(c),A=m.Ara(c),D=new a.HH,G=0,K=0,I=0,L=0;L<h.hq.length;L++){for(var M=h.hq[L],E=M.iMa(),P=M.CNa(),N=E*h.t$,$=P*h.Pba,
ia=M.getCount(),la=0,oa=p,va;0<ia;){if(E!=G||P!=K)I=0;0==I&&(va=m.NDa(D,E,P,h.YKa,h.APa,x));if(va==s)break;var wa=va.bpa*h.t$+N/2,ua=va.Oba*h.Pba+$/2,wa=f.x+(A?f.a-wa:wa),ua=f.y+(z?f.b-ua:ua),Ia=Math.min(1-I,ia),ma,Va,ka,Ca;x?(ma=wa-N/2,Va=z?ua+$*(0.5-Ia-I):ua+$*(I-0.5),ka=N,Ca=$*Ia):(ma=A?wa+N*(0.5-Ia-I):wa+N*(I-0.5),Va=ua-$/2,ka=N*Ia,Ca=$);var Da;1==Ia?(Da=M.getId()+"_"+la,la++):Da=Math.random();if(M.g1())Da=new e(c,wa,ua,N,$,M.g1(),M.Rqa(),M.Pqa(),M.Qqa(),Da+"_I");else{var O=new a.ka(k,ma,Va,ka,
Ca);O.gc();M.k(O);Da=new b(c,M.Bc(),wa,ua,N-h.t$*y,$-h.Pba*y,Da+"_S");Da.fb(M.yc());Da.Jb(M.Fn(),s,M.Fj());Da.yP(M.yc())}1>Ia&&(O=new a.Md,O.Ke(ma,Va,ka,Ca),Da.Xe(O));oa&&(M.qib(new a.N(wa,ua)),oa=t);M.k(Da);c.vhb(Da);ia-=Ia;I=(I+Ia)%1}d.k(M);M.qjb();G=E;K=P}}else m.lq(c,d,f)};m.xo=function(b,c,e){var f=b.v(),h=f.items;if(!h)return{};for(var k=a.fa.sO(f.hiddenCategories),x=[],z=0,A=1,D=1,G=0;G<h.length;G++)if(h[G]!=s){var K=new d(b,h[G]);if(!k||!a.fa.OU(k,K.ze())){var I=K.iMa(),L=K.CNa();I>A&&(A=
I);L>D&&(D=L);z+=I*L*K.getCount();x.push(K)}}if(0==z)return{};h=f.columnWidth;k=f.rowHeight;if(!c||!e)h||(h=k?k:f._defaultSize),k||(k=h);b=m.Tb(b);G=f.columnCount;f=f.rowCount;!G&&!f&&(c&&e?b?f=m.yR(Math.sqrt(z*e/c),D):G=m.yR(Math.sqrt(z*c/e),A):c?G=Math.max(Math.floor(c/h),1):e?f=Math.max(Math.floor(e/k),1):b?f=m.yR(Math.sqrt(z),D):G=m.yR(Math.sqrt(z),A));G?f||(f=m.yR(z/G,D)):G=m.yR(z/f,A);c&&e&&(h||(h=k?k:Math.min(c/G,e/f)),k||(k=h));return 0>=G||0>=f||0>=h||0>=k?{}:{hq:x,YKa:G,APa:f,t$:h,Pba:k}};
m.yR=function(a,b){return Math.ceil(a/b)*b};m.NDa=function(a,b,c,d,e,f){if(f)return(a=m.NDa(a,c,b,e,d,t))?{bpa:a.Oba,Oba:a.bpa}:s;for(f=0;f<e-c+1;f++)for(var h=0;h<d-b+1;h++)if(m.x0a(a,h,f,b,c))return m.t6a(a,h,f,b,c),{bpa:h,Oba:f};return s};m.x0a=function(a,b,c,d,e){for(var f=0;f<e;f++)for(var h=0;h<d;h++)if(a.get(b+h,c+f))return t;return p};m.t6a=function(a,b,c,d,e){for(var f=0;f<e;f++)for(var h=0;h<d;h++)a.put(b+h,c+f,p)};m.lq=function(b,c,d){var e=b.v(),f=a.D.ah(e,"labelNoData",a.D.Ka,"NO_DATA");
c=a.Aa.lq(c,f,d.Ca(),b.Ua(),e._statusMessageStyle);b.uhb(c)};m.Tb=function(a){return"vertical"==a.v().layout};m.zra=function(a){a=a.v().layoutOrigin;return"bottomStart"==a||"bottomEnd"==a};m.Ara=function(b){var c=b.v().layoutOrigin,c="topEnd"==c||"bottomEnd"==c;return a.o.$(b.g())?!c:c};a.Bb(a,"PictoChart",a.sh);a.Bb(a.sh,"newInstance",a.sh.newInstance);a.Bb(a.sh.prototype,"destroy",a.sh.prototype.qa);a.Bb(a.sh.prototype,"getAutomation",a.sh.prototype.mi);a.Bb(a.sh.prototype,"highlight",a.sh.prototype.Le);
a.Bb(a.sh.prototype,"render",a.sh.prototype.va);a.Bb(a.sh.prototype,"select",a.sh.prototype.select);a.Bb(k.prototype,"getDomElementForSubId",k.prototype.oi);a.Bb(k.prototype,"getItem",k.prototype.getItem);a.Bb(k.prototype,"getItemCount",k.prototype.pU)})(dvt);
  return dvt;
});

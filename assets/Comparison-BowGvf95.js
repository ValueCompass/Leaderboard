import{a as te,g as oe,m as we,b as De}from"./common-BloaLxzF.js";import{E as Fe,a as Ve,b as Ee}from"./el-radio-group-B2pssnbq.js";import{E as $e,a as Ae}from"./el-popover-BWMtrD_h.js";import{d as ze,E as Me,a as Te,b as Re,c as He,f as je,g as Be,e as Oe}from"./el-select-ByEC1d3S.js";import{E as Le,a as Ie}from"./linesGL-DWfDhHdO.js";import{r as l,y as se,h as K,o as c,c as x,b as e,_ as ne,d as g,p as he,l as fe,a as Pe,w as F,F as E,g as T,i as N,t as z,n as Ue,e as R,v as B,f as U,j as G,E as Ne,G as Ge,k as le,I as qe}from"./index-B73o2Y6U.js";import{i as be}from"./index-DNSscJ2R.js";import"./el-input-CUgKgR0U.js";const Ze="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22%2022V10H26V22H38V26H26V38H22V26H10V22H22Z'%20fill='%23C2C2C2'/%3e%3c/svg%3e",Ke={class:""},me={__name:"echart",setup(D,{expose:$}){const V=l(null);let b=null;return $({setRadarChart:(v,m,p)=>{let t=[];p?t=p:t=Object.keys(v[0][m]);let s=t.filter(i=>i!="model_name").map((i,u)=>({name:i,color:(u==0,"#000"),axisLabel:{show:u==0},min:-1,max:1})),n=[],C=[];for(let i=0;i<v.length;i++){let u=[];for(let y=0;y<s.length;y++)u.push(v[i][m][s[y].name]);n.push({name:v[i].model_name,value:u,areaStyle:{opacity:0,color:"#1093FF"},lineStyle:{width:2,color:v[i].color},itemStyle:{color:v[i].color}}),C.push(v[i].model_name)}b.setOption({legend:{data:C,textStyle:{fontSize:16,color:"black"}},radar:{splitArea:{areaStyle:{color:["rgba(0,0,0,0.05)","rgba(0,0,0,0.03)"]}},splitNumber:5,axisName:{fontSize:16,color:"black",formatter:function(i){return i.split("&").join(`&
`)}},triggerEvent:!0,indicator:s},series:[{type:"radar",symbolSize:8,itemStyle:{color:"#4992ff"},data:n}]})}}),se(async()=>{await K(),b=be(V.value);const v={radar:{splitArea:{areaStyle:{color:["rgba(0,0,0,0.05)","rgba(0,0,0,0.03)"]}},axisLabel:{show:!0,fontSize:14},axisName:{fontSize:14,color:"#fff"},triggerEvent:!0,indicator:[{name:"Benevolence",max:1,color:"#ffd000"},{name:"Achievement",max:1,axisLabel:{show:!1}},{name:"Universalism",max:1,axisLabel:{show:!1}},{name:"Tradition",max:1,axisLabel:{show:!1}},{name:"Stimulation",max:1,axisLabel:{show:!1}},{name:"Self-direction",max:1,axisLabel:{show:!1}},{name:"Security",max:1,axisLabel:{show:!1}},{name:"Power",max:1,axisLabel:{show:!1}},{name:"Hedonism",max:1,axisLabel:{show:!1}},{name:"Conformity",max:1,axisLabel:{show:!1}}]}};b.setOption(v)}),(v,m)=>(c(),x("div",null,[e("div",Ke,[e("div",null,[e("div",null,[e("div",{class:"chart",ref_key:"chartDom",ref:V,style:{width:"1000px",height:"850px",margin:"0 auto"}},null,512)])])])]))}},ye=D=>(he("data-v-44ea58fc"),D=D(),fe(),D),Je={class:""},Qe={class:"echart-list"},We=ye(()=>e("p",null,"Schwartz Theory of Basic Values",-1)),Xe=ye(()=>e("p",null,"Moral Foundation Theory",-1)),Ye=ye(()=>e("p",null,"Diverse Safety Risks",-1)),ea={__name:"Visualization",setup(D,{expose:$}){const V=l(null),b=l(null),w=l(null);l(null);const v=l(null);return $({setRadarChart:(p,t)=>{v.value=p,V.value.setRadarChart(p,"Schwartz_data",t?t.Schwartz_data:null),b.value.setRadarChart(p,"MFT_data",t?t.MFT_data:null),w.value.setRadarChart(p,"Risk_data",t?t.Risk_data:null)}}),(p,t)=>(c(),x("div",null,[e("div",Je,[e("div",Qe,[e("div",null,[We,g(me,{ref_key:"chartDom1",ref:V},null,512)]),e("div",null,[Xe,g(me,{ref_key:"chartDom2",ref:b},null,512)]),e("div",null,[Ye,g(me,{ref_key:"chartDom3",ref:w},null,512)])])])]))}},aa=ne(ea,[["__scopeId","data-v-44ea58fc"]]),la={class:"chart-box"},ta={class:"result-main"},oa={class:"chart-main"},sa={class:"card-item"},na={__name:"ValueSpace",setup(D,{expose:$}){var V=null,b=["#71AD8A","#A27BBB","#7186C9","#ACD291","#E195D0","#ED8B5E","#96C8E0","#F3CF7F","#E38380","#C49361","#71AD8A","#A27BBB","#7186C9","#ACD291","#E195D0","#ED8B5E","#96C8E0","#F3CF7F","#E38380","#C49361","#71AD8A","#A27BBB","#7186C9","#ACD291","#E195D0","#ED8B5E","#96C8E0","#F3CF7F","#E38380","#C49361"];function w(t){console.log(t),m=be(v.value);const s="path://M1 11C6.52285 11 11 6.52285 11 1H13C13 6.52285 17.4772 11 23 11V13C17.4772 13 13 17.4772 13 23H11C11 17.4772 6.52285 13 1 13V11Z",n=[{type:"scatter3D",data:t.model,symbolSize:24,symbol:s,itemStyle:{opacity:1},label:{show:!0,formatter:"{b}",textStyle:{color:"#fff",fontSize:16,backgroundColor:"rgba(255,255,255,0)"}}}];t.model.forEach((u,y)=>{const d=t.node.slice(y*30,y*30+30);n.push({name:u.name,type:"scatter3D",data:d,symbolSize:8,symbol:s,label:{show:!1,formatter:""},itemStyle:{color:b[y],opacity:1}})}),n.push({name:"Geocultural sphere",type:"scatter3D",data:t.culture,symbolSize:18,itemStyle:{opacity:1,color:"#1093FF"},label:{show:!0,formatter:"{b}",textStyle:{color:"#fff",fontSize:16,backgroundColor:"rgba(255,255,255,0)"}}}),V=Object.assign([],n);const C={legend:{show:!0,width:"1100",textStyle:{color:"#fff"}},tooltip:{appendToBody:!0,className:"tooltip",hideDelay:1e3,enterable:!0,triggerOn:"click",backgroundColor:"#0A111F",borderColor:"#0A111F",textStyle:{color:"#fff"},formatter:function(u){return u.data.type=="node"?`<div style="padding: 6px 28px;">
                  <pre style="text-align: left; white-space: pre-line;">${u.data.name}</pre>
                </div>`:""}},xAxis3D:{type:"value"},yAxis3D:{type:"value"},zAxis3D:{type:"value"},grid3D:{axisLine:{lineStyle:{color:"rgba(255,255,255,0.3)"}},axisPointer:{show:!1},splitLine:{lineStyle:{color:"rgba(255,255,255,0.3)"}},viewControl:{autoRotate:!0,autoRotateSpeed:4,autoRotateAfterStill:1,distance:130},top:"6%"},series:n};m.setOption(C);var i=!1;m.on("click",function(u){const y=m.getOption().series;u.data.type=="model"&&(i=!0,y.forEach(d=>{d.name&&d.name!=u.name&&(d.itemStyle={opacity:.1}),d.name||d.data.forEach(A=>{A.name!=u.name&&(A.itemStyle={opacity:.1})})}),m.setOption({series:y}))}),m.on("mousemove",function(u){i&&(m.setOption({series:V}),i=!1)})}const v=l(null);let m=null;return $({setValueSpacesData:async t=>{const s=t.map(function(y){return y.model_name});console.log(s);const n=await te.get("./data/value_space.json");console.log(n.data);let i=n.data;const u={culture:[],model:[],node:[]};u.culture=i.tsne_cultures.map((y,d)=>({name:i.tsne_culture_caption[d],value:y})),u.model=i.tsne_models.map((y,d)=>({name:i.tsne_model_caption[d],value:y,type:"model",itemStyle:{color:b[d],opacity:1}})),w(u)}}),se(async()=>{await K()}),(t,s)=>(c(),x("div",null,[e("div",la,[e("div",ta,[e("div",oa,[e("div",sa,[e("div",{class:"chart",style:{width:"1180px",height:"900px"},ref_key:"chartDom",ref:v},null,512)])])])])]))}},ra=ne(na,[["__scopeId","data-v-5b49de02"]]),ca={class:""},ia={__name:"CulturalAlignment",setup(D,{expose:$}){const V=l(null);let b=null;const w=l(),v=l();let m=[];const p=async()=>te.get("./data/value_sim_heatmap.json").then(s=>{w.value=s.data;const n={};for(let C=0;C<s.data.models.length;C++)n[s.data.models[C]]=s.data.cosine_sim_matrix[C];v.value=n}),t=s=>{let n=[];if(s){let d=[];for(var C=0;C<s.length;C++)d.push(v.value[s[C]]);n={cosine_sim_matrix:d,models:s,countries:m}}else n={cosine_sim_matrix:[w.value.cosine_sim_matrix[0]],models:[w.value.models[0]],countries:m};console.log("modelNameList",s,n);var i=[];for(let d=0;d<n.cosine_sim_matrix.length;d++)for(let A=0;A<n.countries.length;A++)i.push([d,A,n.cosine_sim_matrix[d][A]]);const u=n.models,y=i.map(function(d){return[d[1],d[0],(d[2]*100).toFixed(3)||"-"]});b.setOption({yAxis:{type:"category",data:u,splitArea:{show:!0},axisLabel:{color:"#000",fontSize:16}},series:[{name:"Punch Card",type:"heatmap",data:y,label:{show:!0},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})};return $({setHotChart:t}),se(async()=>{await K(),await p(),m=w.value.countries;const s=w.value.models;b=be(V.value);const n={tooltip:{position:"top"},grid:{height:"50%",top:"10%",left:"2%",containLabel:!0},xAxis:{type:"category",data:m,splitArea:{show:!0},axisLabel:{color:"#000",fontSize:16}},yAxis:{type:"category",data:s,splitArea:{show:!0},axisLabel:{color:"#000",fontSize:16}},visualMap:{min:0,max:100,calculable:!0,orient:"horizontal",left:"center",bottom:"15%",color:["#690320","#E0785F","#eeeeee","#4795C3","#083669"],textStyle:{color:"#000"}}};b.setOption(n),t()}),(s,n)=>(c(),x("div",null,[e("div",ca,[e("div",null,[e("div",null,[e("div",{class:"chart",ref_key:"chartDom",ref:V,style:{width:"1200px",height:"600px",margin:"0 auto"}},null,512)])])])]))}},J=D=>(he("data-v-a6f59050"),D=D(),fe(),D),ua={class:"content-filter"},da={class:"panel-content"},_a=J(()=>e("div",{class:"title"},"Applied filters",-1)),va={class:"panel-row"},pa=J(()=>e("div",{class:"filter-name"},"Measurement Date",-1)),ma={class:"panel-tags"},ha={class:"title"},fa={class:"panel-row"},ba=J(()=>e("div",{class:"filter-name"},"Schwartz Value Theory",-1)),ya={class:"panel-tags"},ga={class:"panel-row"},xa=J(()=>e("div",{class:"filter-name"},"Moral Foundation Theory",-1)),Ca={class:"panel-tags"},Sa={class:"panel-row"},ka=J(()=>e("div",{class:"filter-name"},"Diverse Safety Risks",-1)),wa={class:"panel-tags"},Da={class:"panel-row"},Fa=J(()=>e("div",{class:"filter-name"},"LLMs' Unique Values",-1)),Va={class:"panel-tags"},Ea={__name:"selectBox",emits:["fitterChange"],setup(D,{emit:$}){l();const V={multiple:!0},b=l([]),w=l(!1),v=l(null),m=l(0);let p=Pe({});const t=[{value:0,label:"Universal"},{value:1,label:"Schwartz Value Theory",children:[{value:0,label:"Achievement"},{value:1,label:"Benevolence"},{value:2,label:"Conformity"},{value:3,label:"Hedonism"},{value:4,label:"Power"},{value:5,label:"Security"},{value:6,label:"Self-direction"},{value:7,label:"Stimulation"},{value:8,label:"Tradition"},{value:9,label:"Universalism"}]},{value:2,label:"Moral Foundation Theory",children:[{value:0,label:"Authority/Subversion"},{value:1,label:"Care/Harm"},{value:2,label:"Fairness/Cheating"},{value:3,label:"Loyalty/Betrayal"},{value:4,label:"Sanctity/Degradation"}]},{value:3,label:"Diverse Safety Risks",children:[{value:0,label:"Misinformation Harms"},{value:1,label:"Representation & Toxicity Harms"},{value:2,label:"Socioeconomic Harms"},{value:3,label:"Human Autonomy & Integrity Harms"},{value:4,label:"Malicious Use"},{value:5,label:"Information & Safety Harms"}]},{value:4,label:"LLMs' Unique Values",children:[{value:0,label:"User-Oriented"},{value:1,label:"Self-Competent"},{value:2,label:"Idealistic"},{value:3,label:"Social"},{value:4,label:"Ethical"},{value:5,label:"Professional"}]}],s=l("2024/7"),n=[{value:"2024/7",label:"2024/7"}],C=o=>{b.value=b.value.filter(h=>h[0]!==o.parent||h[1]!==o.key),y(b.value)},i=o=>{K(()=>{H()})},u=$,y=o=>{console.log("handleChange",o),m.value=o.length,p={};const h=[];o.length>0&&o.forEach(S=>{p[S[0]]=p[S[0]]||[],(S[1]||S[1]==0)&&(p[S[0]].push({name:t[S[0]].children[S[1]].label,key:S[1],parent:S[0]}),h.push(t[S[0]].children[S[1]].label))}),u("fitterChange",p),K(()=>{H()})},d=()=>{b.value=[],y(b.value),K(()=>{H()})},A=()=>{w.value=!w.value,v.value.style.maxHeight?v.value.style.maxHeight=null:v.value.style.maxHeight=v.value.scrollHeight+"px"},H=()=>{w.value&&(v.value.style.maxHeight=v.value.scrollHeight+"px")};return(o,h)=>{const S=Fe,re=ze,Q=Ve,M=Me,ce=Te,O=Re;return c(),x("div",null,[e("div",ua,[g(M,{modelValue:s.value,"onUpdate:modelValue":h[1]||(h[1]=_=>s.value=_),placeholder:"Measurement Date",onChange:i,style:{width:"200px"}},{default:F(()=>[g(Q,{modelValue:s.value,"onUpdate:modelValue":h[0]||(h[0]=_=>s.value=_),style:{width:"100%"}},{default:F(()=>[(c(),x(E,null,T(n,_=>g(re,{key:_.value,label:_.label,value:_.value},{default:F(()=>[g(S,{value:_.value},{default:F(()=>[N(z(_.label),1)]),_:2},1032,["value"])]),_:2},1032,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),g(ce,{class:"select",modelValue:b.value,"onUpdate:modelValue":h[2]||(h[2]=_=>b.value=_),options:t,props:V,style:{width:"240px","margin-left":"20px"},"show-all-levels":!1,"collapse-tags":!0,onChange:y,placeholder:"Measurement Dimension"},null,8,["modelValue"]),e("span",{class:"filter-btn",onClick:d},"Reset Filter"),e("span",{class:Ue(["show-filter",{"is-show":w.value}]),onClick:A},null,2)]),e("div",{class:"panel-box",ref_key:"panel",ref:v},[e("div",da,[_a,R(e("div",va,[pa,e("div",ma,[g(O,{type:"info"},{default:F(()=>[N(z(s.value),1)]),_:1})])],512),[[B,s.value]]),e("div",ha,"Measurement Dimension("+z(m.value)+")",1),R(e("div",fa,[ba,e("div",ya,[(c(!0),x(E,null,T(U(p)[1],_=>(c(),G(O,{key:_.key,closable:"",type:"info",onClose:q=>C(_)},{default:F(()=>[N(z(_.name),1)]),_:2},1032,["onClose"]))),128))])],512),[[B,U(p)[1]]]),R(e("div",ga,[xa,e("div",Ca,[(c(!0),x(E,null,T(U(p)[2],_=>(c(),G(O,{key:_.key,closable:"",type:"info",onClose:q=>C(_)},{default:F(()=>[N(z(_.name),1)]),_:2},1032,["onClose"]))),128))])],512),[[B,U(p)[2]]]),R(e("div",Sa,[ka,e("div",wa,[(c(!0),x(E,null,T(U(p)[3],_=>(c(),G(O,{key:_.key,closable:"",type:"info",onClose:q=>C(_)},{default:F(()=>[N(z(_.name),1)]),_:2},1032,["onClose"]))),128))])],512),[[B,U(p)[3]]]),R(e("div",Da,[Fa,e("div",Va,[(c(!0),x(E,null,T(U(p)[4],_=>(c(),G(O,{key:_.key,closable:"",type:"info",onClose:q=>C(_)},{default:F(()=>[N(z(_.name),1)]),_:2},1032,["onClose"]))),128))])],512),[[B,U(p)[4]]])])],512)])}}},$a=ne(Ea,[["__scopeId","data-v-a6f59050"]]),P=D=>(he("data-v-f932a787"),D=D(),fe(),D),Aa={class:"bg comparison-template main-container"},za={class:"title-content"},Ma=P(()=>e("h2",null,"Compare Pool",-1)),Ta={class:"compare-model-list"},Ra=["onClick"],Ha={class:"name"},ja={class:"point-num"},Ba=P(()=>e("span",{class:"point"},"points",-1)),Oa={class:"top-item-content"},La=P(()=>e("span",{class:"type-icon"},null,-1)),Ia={class:"dev"},Pa={class:"date"},Ua={key:0,class:"max-num-tip"},Na=P(()=>e("p",{style:{}},"The maximum number of comparisons supported is 5",-1)),Ga=[Na],qa=P(()=>e("img",{src:Ze,alt:"add-model"},null,-1)),Za=P(()=>e("p",null,"Add",-1)),Ka=[qa,Za],Ja={class:"chart-box"},Qa={class:"chart-tab"},Wa={class:"chart-main",style:{}},Xa={class:"table-box"},Ya=P(()=>e("h4",null,"Schwartz Theory of Basic Values",-1)),el=P(()=>e("h4",null,"Moral Foundations Theory",-1)),al=P(()=>e("h4",null,"Diverse Safety Risks",-1)),ll={__name:"Comparison",setup(D){const $=l(null),V=l(null),b=l(null);l(null);const w=["rgba(16, 147, 255, 1)","rgba(172, 210, 145, 1)","rgba(113, 134, 201, 1)","rgba(162, 123, 187, 1)","rgba(225, 149, 208, 1)"],v=[{name:"Table",index:0},{name:"Visualization",index:1},{name:"Cultural Alignment",index:2},{name:"Value Space",index:3}];var m=null,p=null,t=null,s=null,n=null,C=null,i=null;const u=l(),y=l([]),d=l(),A=l(!1),H=l([]),o=l([]),h=l([]),S=f=>te.get(f),re=async()=>{try{te.all([S("./data/models_info.json"),S("./data/Schwartz_scores.json"),S("./data/Schwartz_cases.json"),S("./data/Risk_scores.json"),S("./data/Risk_cases.json"),S("./data/MFT_scores.json"),S("./data/MFT_cases.json")]).then(te.spread(function(f,a,j,L,k,ee,pe){i=f.data.data,u.value=oe(f.data.data),m=oe(a.data.data),p=j.data.data,t=oe(L.data.data),s=k.data.data,n=oe(ee.data.data),C=pe.data.data,ge=we(m,t,n);for(let I in u.value){const ae=De(I,[],ge);u.value[I].points=(ae*100).toFixed(3)}H.value=Object.keys(u.value),q.value=Object.keys(m[H.value[0]]),W.value=q.value,ue.value=Object.keys(t[H.value[0]]),Y.value=ue.value,ie.value=Object.keys(n[H.value[0]]),X.value=ie.value,o.value.push(H.value[0]),O()}))}catch(f){console.error("Fetch error:",f)}},Q=(f,a)=>a.label=="model_name"?f[a.label]:(f[a.label]*100).toFixed(3),M=l(0),ce=f=>{console.log(f),M.value=f.index},O=()=>{A.value=!1,console.log(o.value),o.value.length>5&&alert("最多可添加5个model"),Ce(),y.value=""},_=(f,a)=>{o.value.length<=1||(o.value.splice(a,1),O())},q=l([]),ie=l([]),ue=l([]),W=l([]),X=l([]),Y=l([]),de=l([]),_e=l([]),ve=l([]),Ce=()=>{h.value=[],o.value.length>5&&alert("最多可添加5个model");var f=[];for(let a=0;a<o.value.length&&!(a>=5);a++){console.log(h.value);let j=!1;h.value.forEach(k=>{console.log("item",k,o.value[a]),k.model_name==o.value[a]&&(j=!0),f.push(k.color)});let L=w.filter(k=>f.every(ee=>ee!=k));if(!j){let k={};k.color=L[0],k.model_name=o.value[a],k.model_info=u.value[o.value[a]],k.Schwartz_data=m[o.value[a]],k.Risk_data=t[o.value[a]],k.MFT_data=n[o.value[a]],h.value.push(k)}}console.log("checkedModelDetailList.value",h.value),de.value=[],_e.value=[],ve.value=[];for(let a=0;a<h.value.length;a++){let j={};j=m[o.value[a]],j.model_name=o.value[a],de.value.push(j);let L={};L=t[o.value[a]],L.model_name=o.value[a],ve.value.push(L);let k={};k=n[o.value[a]],k.model_name=o.value[a],_e.value.push(k)}$.value.setRadarChart(h.value),V.value.setHotChart(o.value),console.log("checkedModelDetailList.value",h.value),b.value.setValueSpacesData(h.value)};Ne(()=>{}),Ge(),se(()=>{re()});let ge=null;const Se=f=>{console.log("filerData",f),f[1]?W.value=f[1].map(a=>a.name):W.value=q.value,f[2]?X.value=f[2].map(a=>a.name):X.value=ie.value,f[3]?Y.value=f[3].map(a=>a.name):Y.value=ue.value,$.value.setRadarChart(h.value,{Schwartz_data:W.value,MFT_data:X.value,Risk_data:Y.value})};return(f,a)=>{const j=Ee,L=je,k=Be,ee=$e,pe=Ie,xe=Le,I=Oe,ae=He,ke=Ae;return c(),x("div",Aa,[e("div",null,[e("div",za,[Ma,e("div",Ta,[e("ul",null,[(c(!0),x(E,null,T(h.value,(r,Z)=>(c(),x("li",{key:r,style:qe({"border-color":r.color})},[e("span",{class:"close-comparison",onClick:tl=>_(r.model_name,Z)},null,8,Ra),e("p",Ha,z(r.model_name),1),e("p",ja,[N(z(r.model_info.points),1),Ba]),e("div",Oa,[g(j,{effect:"customized",content:"Proprietary",placement:"top"},{default:F(()=>[La]),_:1}),e("span",Ia,z(r.model_info.developer),1),e("span",Pa,z(r.model_info["release date"].split(" ")[0]),1)])],4))),128)),h.value.length>=5?(c(),x("div",Ua,Ga)):le("",!0),h.value.length<5?R((c(),x("div",{key:1,class:"add-model",onClick:a[0]||(a[0]=r=>A.value=!0)},Ka)),[[ke,d.value]]):le("",!0),g(ee,{ref_key:"popoverRef",ref:d,visible:A.value,placement:"right-start",width:576,trigger:"click","virtual-triggering":"",persistent:""},{default:F(()=>[e("div",null,[g(k,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=r=>o.value=r),max:5},{default:F(()=>[(c(!0),x(E,null,T(H.value,r=>(c(),G(L,{key:r,value:r},{default:F(()=>[N(z(r),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e("div",{style:{display:"flex","justify-content":"flex-end","margin-top":"20px","padding-right":"20px"}},[e("button",{onClick:O},"Submit")])])]),_:1},8,["visible"])])])])]),e("div",Ja,[e("div",Qa,[g(xe,{modelValue:M.value,"onUpdate:modelValue":a[2]||(a[2]=r=>M.value=r),onTabClick:ce},{default:F(()=>[(c(),x(E,null,T(v,r=>g(pe,{key:r.index,label:"   "+r.name+"   ",name:r.index},null,8,["label","name"])),64))]),_:1},8,["modelValue"])]),e("div",Wa,[R(g($a,{onFitterChange:Se},null,512),[[B,M.value==0||M.value==1]]),R(e("div",Xa,[Ya,g(ae,{data:de.value,border:"",style:{width:"100%"}},{default:F(()=>[g(I,{prop:"model_name",label:"Model"}),(c(!0),x(E,null,T(W.value,(r,Z)=>(c(),x(E,{key:Z},[r!="model_name"?(c(),G(I,{key:0,prop:r,label:r,formatter:Q},null,8,["prop","label"])):le("",!0)],64))),128))]),_:1},8,["data"]),el,g(ae,{data:_e.value,border:"",style:{width:"100%"}},{default:F(()=>[g(I,{prop:"model_name",label:"Model"}),(c(!0),x(E,null,T(X.value,(r,Z)=>(c(),x(E,{key:Z},[r!="model_name"?(c(),G(I,{key:0,prop:r,label:r,formatter:Q},null,8,["prop","label"])):le("",!0)],64))),128))]),_:1},8,["data"]),al,g(ae,{data:ve.value,border:"",style:{width:"100%"}},{default:F(()=>[g(I,{prop:"model_name",label:"Model"}),(c(!0),x(E,null,T(Y.value,(r,Z)=>(c(),x(E,{key:Z},[r!="model_name"?(c(),G(I,{key:0,prop:r,label:r,formatter:Q},null,8,["prop","label"])):le("",!0)],64))),128))]),_:1},8,["data"])],512),[[B,M.value==0]]),R(e("div",null,[g(aa,{ref_key:"VisualizationComponentProps",ref:$},null,512)],512),[[B,M.value==1]]),R(e("div",null,[g(ra,{ref_key:"ValueSpaceComponentProps",ref:b},null,512)],512),[[B,M.value==3]]),R(e("div",null,[g(ia,{ref_key:"CulturalAlignmentComponentProps",ref:V},null,512)],512),[[B,M.value==2]])])])])}}},_l=ne(ll,[["__scopeId","data-v-f932a787"]]);export{_l as default};
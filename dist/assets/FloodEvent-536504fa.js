import{o as t,c as l,a as s,b as _,F as g,j as r,d as u,t as b,e as v,n as d,q as m,s as h,v as j,w as f,x as w,y,z as k,B as x,C as R,D as F,E as M,G as C,H as N,I as S,J as G,K as I,L as J,M as T,N as z,O as A,P as B,Q as E,R as H,S as L,T as P,U,V,W,X as $,Y as D,Z as K,$ as O,a0 as q,a1 as Q,a2 as X,a3 as Y,a4 as Z,a5 as __,a6 as i_,a7 as a_,a8 as e_,a9 as o_,aa as p_,ab as t_,ac as l_,ad as s_,ae as g_,af as b_,ag as n_,ah as c_,ai as r_,aj as u_,ak as v_,al as d_,am as m_,an as h_,ao as j_,ap as f_,aq as w_,ar as y_,as as k_,at as x_,au as R_,av as F_,aw as M_,ax as C_,ay as N_,az as S_,aA as G_,aB as I_,aC as J_,aD as T_,aE as z_,aF as A_,aG as B_,aH as E_,aI as H_,aJ as L_,aK as P_,aL as U_,aM as V_,aN as W_,aO as $_,aP as D_,aQ as K_,aR as O_,aS as q_,aT as Q_,aU as X_,aV as Y_,aW as Z_,aX as _i,aY as ii,aZ as ai,a_ as ei,a$ as oi,b0 as pi,b1 as ti,b2 as li,b3 as si}from"./index-a5853cc7.js";const gi={class:"py-8 px-8 lg:py-20 lg:px-20 mob:px-4",style:{"background-color":"#EAF7F3","min-height":"100vh"}},bi=_("div",{class:"row text-center mb-5"},[_("div",{class:"text-[2.8rem] md:text-[3.08rem] font-extrabold cabin uppercase"}," flood maps ")],-1),ni={class:""},ci={class:""},ri={class:"grid grid-cols-2 mob:grid-cols-1 gap-6"},ui=["href"],vi={class:"pic hover:scale-105 duration-500"},di=["src"],mi={class:"C31 mt-3 uppercase text-[#134A39] text-[1rem] lg:text-[1rem] font-bold mob:text-[0.7rem]"},hi={class:"bg-brandgreen text-white px-4 py-4 rounded-md font-bold hover:bg-primary500 transition w-[40%] text-center mx-auto cursor-pointer text-[0.7rem] uppercase mt-4"},wi={__name:"FloodEvent",setup(ji){function p(i){return i.trim().split(/\s+/).length}function e(i,o){return p(i),p(i)>12?i.split(" ").splice(0,o).join(" ")+"...":i}const n=[{link:"https://www.arcgis.com/apps/webappviewer/index.html?id=2b0fa66b05534e7780e7396234b7c6f3",title:"Flood Susceptibility Map of Ikorodu",formatTitle:e("Global Flood Risk Assessment - Regional Realities",11),src:"floodmap3.jpeg",id:1,tag:"map"},{link:"https://africageoportal.maps.arcgis.com/apps/webappviewer/index.html?id=d07dba63dbd84fbbb555d6c6087759f3",title:"Flood Susceptibility Map of Ilorin",formatTitle:e("using geospatial technology in geohazard mapping saves lives",11),src:"floodmap2.jpeg",id:3,tag:"map"},{link:"https://africageoportal.maps.arcgis.com/apps/webappviewer/index.html?id=7cba8204d65c4ceda63c7c89e632606b",title:"Flood Susceptibility Map of Maiduguri City",formatTitle:e("All about GRMI hashnode mapathon",11),src:"floodmap1.jpeg",id:4,tag:"map"},{link:"https://africageoportal.maps.arcgis.com/apps/webappviewer/index.html?id=1205a4ecde984a55841f93e837828a70",title:"Flood Susceptibility Map of Ilorin",src:"ins20.png",id:2,tag:"map"},{link:"https://storymaps.arcgis.com/stories/39d5b1d1e2114b74aebdf8fe73ecb993",title:"Strengthening Community Resilience through Collaborative Geo-Hazard Risk Mapping in Jos North, Nigeria",formatTitle:e("Strengthening Community Resilience through Collaborative Geo-Hazard Risk Mapping in Jos North, Nigeria",11),src:"ins7.png",tag:"storymap",id:7},{link:"https://storymaps.arcgis.com/stories/528572dd623141589a03bbba059df683",title:"Mapping of Flood-Prone Areas in Kogi State Nigeria",formatTitle:e("Strengthening Community Resilience through Collaborative Geo-Hazard Risk Mapping in Jos North, Nigeria",11),src:"ins21.png",tag:"storymap",id:7}],c=i=>new URL(Object.assign({"../../public/GRMI.ico":d,"../../public/amuwo.png":m,"../../public/award1.jpeg":h,"../../public/award2.jpeg":j,"../../public/award3.jpeg":f,"../../public/award4.jpeg":w,"../../public/award5.jpeg":y,"../../public/award6.jpg":k,"../../public/award7.jpg":x,"../../public/award8 - Copy.png":R,"../../public/award8.png":F,"../../public/awareness.JPG":M,"../../public/bama.png":C,"../../public/birnin-kebbi.png":N,"../../public/damboa.png":S,"../../public/default.jfif":G,"../../public/default1.png":I,"../../public/esri - Copy.jpeg":J,"../../public/esri.jpeg":T,"../../public/etsako.png":z,"../../public/extent_map.png":A,"../../public/fair.png":B,"../../public/flood-risk.JPG":E,"../../public/floodmap1.jpeg":H,"../../public/floodmap2.jpeg":L,"../../public/floodmap3.jpeg":P,"../../public/fufore.png":U,"../../public/girei.png":V,"../../public/ikorodu.png":W,"../../public/ikorodu1.png":$,"../../public/ins1.png":D,"../../public/ins10.png":K,"../../public/ins11.png":O,"../../public/ins12.jpg":q,"../../public/ins13.jpg":Q,"../../public/ins15.jpeg":X,"../../public/ins16.jpeg":Y,"../../public/ins17.jpeg":Z,"../../public/ins18.jpg":__,"../../public/ins19.png":i_,"../../public/ins2.png":a_,"../../public/ins20.png":e_,"../../public/ins21.png":o_,"../../public/ins22.png":p_,"../../public/ins23.jpg":t_,"../../public/ins23.webp":l_,"../../public/ins3.png":s_,"../../public/ins4.png":g_,"../../public/ins5.png":b_,"../../public/ins6.png":n_,"../../public/ins7.png":c_,"../../public/ins8.png":r_,"../../public/ins9.png":u_,"../../public/insight1.png":v_,"../../public/lagos.png":d_,"../../public/lagos1.png":m_,"../../public/leeds.jpeg":h_,"../../public/lekki.png":j_,"../../public/lekki1.png":f_,"../../public/logoBenue.png":w_,"../../public/maiduguri.png":y_,"../../public/mapathon.jpeg":k_,"../../public/mapathon1.jpeg":x_,"../../public/monguno1.png":R_,"../../public/paper1.jpeg":F_,"../../public/paper2.jpeg":M_,"../../public/paper3.jpeg":C_,"../../public/paper4.jpeg":N_,"../../public/paper5.jpeg":S_,"../../public/partner1.png":G_,"../../public/partner2.png":I_,"../../public/partner3.png":J_,"../../public/partner4.png":T_,"../../public/photo1.jpg":z_,"../../public/photo10.jpg":A_,"../../public/photo11.jpg":B_,"../../public/photo12.jpg":E_,"../../public/photo13.jpg":H_,"../../public/photo14.jpg":L_,"../../public/photo15.jpg":P_,"../../public/photo16.jpg":U_,"../../public/photo17.jpg":V_,"../../public/photo18.jpg":W_,"../../public/photo19.jpg":$_,"../../public/photo2.jpg":D_,"../../public/photo20.jpg":K_,"../../public/photo21.jpg":O_,"../../public/photo3.jpg":q_,"../../public/photo4.jpg":Q_,"../../public/photo5.jpg":X_,"../../public/photo6.jpg":Y_,"../../public/photo7.jpg":Z_,"../../public/photo8.jpg":_i,"../../public/photo9.jpg":ii,"../../public/podcast.jpeg":ai,"../../public/pub-2.jpg":ei,"../../public/report1.png":oi,"../../public/testimony1.jpeg":pi,"../../public/testimony2.jpg":ti,"../../public/testimony3.png":li,"../../public/userImg.png":si})[`../../public/${i}`],self.location).href;return(i,o)=>(t(),l(g,null,[s(u),_("div",gi,[_("div",null,[bi,_("div",ni,[_("div",ci,[_("div",ri,[(t(),l(g,null,r(n,a=>_("a",{href:a.link,key:a.id,class:"transition p-4 rounded-[0.5rem] cursor-pointer",target:"_blank"},[_("div",vi,[_("img",{src:c(a.src),class:"img-fluid overflow-hidden h-[15rem] w-full object-fill rounded-t-[0.5rem]",alt:"Responsive image"},null,8,di)]),_("div",mi,b(a.title),1),_("div",hi," view "+b(a.tag),1)],8,ui)),64))])])])])]),s(v)],64))}};export{wi as default};
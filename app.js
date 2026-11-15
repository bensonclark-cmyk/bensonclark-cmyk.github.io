(function(){
var S=window.SITE||{},M=window.MAPS||[],C=window.CHALLENGE||{days:[]};
function $(i){return document.getElementById(i)}
function e(t,c,x){var n=document.createElement(t);if(c)n.className=c;if(x!=null)n.textContent=x;return n}
function pic(src,alt,msg){msg=msg||'Image not added yet';if(!src)return e('div','noimg',msg);var i=e('img');i.alt=alt||'';i.loading='lazy';i.onerror=function(){i.replaceWith(e('div','noimg',msg))};i.src=src;return i}
function imgs(m){var a=m.images||(m.image?[m.image]:[]);return a.map(function(x){return typeof x==='string'?{src:x}:x})}
document.title=S.name+', maps and geospatial work';
$('name').textContent=S.name;$('role').textContent=S.role||'';
(S.intro||[]).forEach(function(t){$('intro').appendChild(e('p',null,t))});

var dlg=$('dlg'),cur=[],ix=0,gi=0;
function show(items,i,g){cur=items;ix=i;gi=g||0;var m=items[i],list=imgs(m),info=$('dinfo'),fig=$('dfig'),pick=list[gi]||{};
fig.textContent='';var main=e('div','dmain');if(m.embed){var fr=e('iframe');fr.src=m.embed;fr.title=m.title;fr.loading='lazy';fr.setAttribute('allowfullscreen','');main.appendChild(fr)}else main.appendChild(pic(pick.src,m.title,m.link?'Interactive map':null));fig.appendChild(main);
if(pick.caption)fig.appendChild(e('p','cap',pick.caption));
if(list.length>1){var th=e('div','thumbs');list.forEach(function(x,k){var b=e('button');b.type='button';b.setAttribute('aria-label','Image '+(k+1));b.setAttribute('aria-current',k===gi);b.appendChild(pic(x.src,''));b.onclick=function(){show(cur,ix,k)};th.appendChild(b)});fig.appendChild(th)}
info.textContent='';info.appendChild(e('p','soft',m.when));info.appendChild(e('h3',null,m.title));
if(m.description)info.appendChild(e('p',null,m.description));
var dl=e('dl');[['Data',m.data],['CRS',m.crs],['Tools',m.tools]].forEach(function(r){if(r[1]){dl.appendChild(e('dt',null,r[0]));dl.appendChild(e('dd',null,r[1]))}});
if(dl.children.length)info.appendChild(dl);
if(m.link){var a=e('a',null,'Open interactive map');a.href=m.link;a.target='_blank';a.rel='noopener';info.appendChild(a)}
$('prev').disabled=i===0;$('next').disabled=i===items.length-1;
if(!dlg.open)dlg.showModal()}
$('prev').onclick=function(){if(ix>0)show(cur,ix-1)};
$('next').onclick=function(){if(ix<cur.length-1)show(cur,ix+1)};
$('close').onclick=function(){dlg.close()};
dlg.addEventListener('click',function(ev){if(ev.target===dlg)dlg.close()});
document.addEventListener('keydown',function(ev){if(!dlg.open)return;if(ev.key==='ArrowLeft')$('prev').onclick();if(ev.key==='ArrowRight')$('next').onclick()});

var cat='All';
function works(){var box=$('works');box.textContent='';
var list=M.filter(function(m){return cat==='All'||m.category===cat}).sort(function(a,b){return Number(b.year)-Number(a.year)});
var shown=list.map(function(m){return Object.assign({},m,{when:m.year+(m.category?', '+m.category:'')})});
var years=[];list.forEach(function(m){if(years.indexOf(m.year)<0)years.push(m.year)});
years.forEach(function(y){var g=e('div','yr');g.appendChild(e('h3',null,y));var grid=e('div','grid');
shown.forEach(function(m,i){if(m.year!==y)return;var c=e('div','card'),l=imgs(m),k=0,msg=(m.link||m.embed)?'Interactive map':null;
c.setAttribute('role','button');c.tabIndex=0;
var t=e('div','thumb'),cv=e('div','cv');function cover(n){cv.textContent='';cv.appendChild(pic(l[n]&&l[n].src,m.title,msg))}cover(0);t.appendChild(cv);
if(l.length>1){var d=e('div','dots');l.forEach(function(x,n){var b=e('button');b.type='button';b.setAttribute('aria-label','Show image '+(n+1)+' of '+l.length);b.setAttribute('aria-current',n===0);
b.onclick=function(ev){ev.stopPropagation();k=n;cover(n);Array.prototype.forEach.call(d.children,function(z,j){z.setAttribute('aria-current',j===n)})};d.appendChild(b)});t.appendChild(d)}
c.appendChild(t);
c.appendChild(e('strong',null,m.title));if(m.category)c.appendChild(e('span',null,m.category));
c.onclick=function(){show(shown,i,k)};
c.onkeydown=function(ev){if(ev.target===c&&(ev.key==='Enter'||ev.key===' ')){ev.preventDefault();show(shown,i,k)}};
grid.appendChild(c)});
g.appendChild(grid);box.appendChild(g)})}
var cats=[];M.forEach(function(m){if(m.category&&cats.indexOf(m.category)<0)cats.push(m.category)});
if(cats.length>1)['All'].concat(cats).forEach(function(c){var b=e('button',null,c);b.type='button';b.setAttribute('aria-pressed',c===cat);
b.onclick=function(){cat=c;Array.prototype.forEach.call($('chips').children,function(x){x.setAttribute('aria-pressed',x.textContent===c)});works()};$('chips').appendChild(b)});
works();

$('ctitle').textContent=(C.year?C.year+' ':'')+(C.title||'30 Day Map Challenge');
var done=(C.days||[]).slice().sort(function(a,b){return a.day-b.day}).map(function(d){return Object.assign({},d,{when:'Day '+d.day+(C.year?', '+C.year:'')})});
$('cintro').textContent=(C.intro||'')+(done.length?' '+done.length+' of 30 done.':'');
for(var n=1;n<=30;n++){(function(n){var idx=done.findIndex(function(d){return d.day===n});var c;
if(idx<0){c=e('div','day');c.appendChild(e('b',null,n))}
else{var f=imgs(done[idx])[0];c=e('button','day');c.type='button';c.title=done[idx].title;c.appendChild(pic(f&&f.src,done[idx].title));c.appendChild(e('b',null,n));c.onclick=function(){show(done,idx)}}
$('days').appendChild(c)})(n)}

(S.experience||[]).forEach(function(x){var li=e('li');li.appendChild(e('span',null,x.when));li.appendChild(e('div',null,x.what));$('exp').appendChild(li)});
(S.credentials||[]).forEach(function(x){$('cred').appendChild(e('li',null,x))});
$('tools').textContent=(S.tools||[]).join(', ');
(S.services||[]).forEach(function(x){var d=e('div');d.appendChild(e('h3',null,x.title));d.appendChild(e('p',null,x.text));$('svc').appendChild(d)});
$('ctext').textContent=S.contactText||'';
$('email').textContent=S.email||'';$('email').href='mailto:'+(S.email||'');
$('loc').textContent=S.location||'';
(S.links||[]).forEach(function(l,i){if(i)$('links').appendChild(document.createTextNode('   '));var a=e('a',null,l.label);a.href=l.url;a.target='_blank';a.rel='noopener';$('links').appendChild(a)});
$('foot').textContent='\u00a9 '+new Date().getFullYear()+' '+S.name+'. Data sources and credits are listed on each map.';
})();

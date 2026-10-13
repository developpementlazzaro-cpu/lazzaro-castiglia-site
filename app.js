(() => {
'use strict';
const iconPaths = {
  'search':'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.34-4.34"/>',
  'search-x':'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.34-4.34M8.5 8.5l5 5m0-5-5 5"/>',
  'arrow-right':'<path d="M5 12h14m-7-7 7 7-7 7"/>',
  'arrow-up-right':'<path d="M7 17 17 7M7 7h10v10"/>',
  'arrow-up':'<path d="m5 12 7-7 7 7M12 5v14"/>',
  'layout-dashboard':'<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  'library':'<path d="M3 3v18M7 3v18M11 3v18m3-18 7 18M3 21h18"/>',
  'route':'<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 17V8a3 3 0 0 1 3-3h2m2 0h3m2 2v9a3 3 0 0 1-3 3h-3"/>',
  'bookmark':'<path d="M19 21 12 16 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  'external-link':'<path d="M15 3h6v6M10 14 21 3"/><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/>',
  'menu':'<path d="M4 6h16M4 12h16M4 18h16"/>',
  'file-text':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  'layers':'<path d="m12 2 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5"/>',
  'shield-check':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  'shield-alert':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v4m0 4h.01"/>',
  'compass':'<circle cx="12" cy="12" r="10"/><path d="m16 8-3 5-5 3 3-5 5-3z"/>',
  'heart-pulse':'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/><path d="M3 12h5l2-3 3 6 2-3h6"/>',
  'swords':'<path d="m14.5 17.5 3-3L6.5 3.5 3 3l.5 3.5 11 11zM13 19l6 3 3-3-3-6"/><path d="M14.5 6.5 17.5 3 21 3l-.5 3.5-3 3M3 21l3-6 3 3-3 3z"/>',
  'car':'<path d="M5 17h14l1-6-2-5H6l-2 5 1 6zM5 11h14M7 17v3m10-3v3"/><circle cx="7.5" cy="14" r=".5"/><circle cx="16.5" cy="14" r=".5"/>',
  'sparkles':'<path d="m12 3-1.6 5.4L5 10l5.4 1.6L12 17l1.6-5.4L19 10l-5.4-1.6L12 3zM5 18l.7 2.3L8 21l-2.3.7L5 24l-.7-2.3L2 21l2.3-.7L5 18z"/>',
  'chevrons-down':'<path d="m7 10 5 5 5-5M7 4l5 5 5-5"/>',
  'chevron-down':'<path d="m6 9 6 6 6-6"/>',
  'shuffle':'<path d="m18 14 4 4-4 4M18 2l4 4-4 4"/><path d="M2 18h3c6 0 6-12 12-12h5M2 6h3c2.8 0 4 2.4 5 5m3 2c1.5 3 2.8 5 4 5h5"/>',
  'x':'<path d="M18 6 6 18M6 6l12 12"/>',
  'check':'<path d="m20 6-11 11-5-5"/>',
  'copy':'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  'play':'<path d="m8 5 12 7-12 7V5z"/>',
  'link':'<path d="M10 13a5 5 0 0 0 7 .5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>'
};
const icon = name => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name]||iconPaths['file-text']}</svg>`;
document.querySelectorAll('[data-icon]').forEach(node => {node.innerHTML=icon(node.dataset.icon)});
const escapeHTML = s => String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const normalize = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
let dataset;try {dataset=JSON.parse(document.getElementById('wiki-data').textContent)}catch(err){console.error('Wiki content missing',err);return}
const groups=dataset.groups;const terms=groups.flatMap(g=>g.terms);const termById=new Map(terms.map(t=>[t.id,t]));
const essential=new Set(['metagaming','powergaming','force-rp','fail-rp','fear-rp-no-fear','pain-rp-no-pain','combat-logging','freekill-rdm','vdm-carkill','chicken-run','bunny-hop-bunny-hopping','usebug-exploit']);
const storageKey='lazzena-codex-bookmarks-v1';
let bookmarks=new Set();try{bookmarks=new Set(JSON.parse(localStorage.getItem(storageKey)||'[]').filter(s=>termById.has(s)))}catch{}
let filterMode='all', query='', expandAll=false, toastTimer=null, paletteSelection=0, paletteItems=[];
const $=selector=>document.querySelector(selector);
const groupEl=$('#glossary-groups');const searchInput=$('#search-input');const paletteInput=$('#palette-input');
const count=$('#result-count');const empty=$('#empty-state');const clear=$('#clear-filters');

$('#count-terms').textContent=String(terms.length).padStart(2,'0');
const chapterNav=$('#chapter-nav');chapterNav.innerHTML=groups.map((g,i)=>`<a href="#cat-${g.id}" data-jump="${g.id}"><span class="chapter-number">${String(i+1).padStart(2,'0')}</span><span>${escapeHTML(g.title)}</span><span class="chapter-amount">${g.count}</span></a>`).join('');
$('#category-tiles').innerHTML=groups.map((g,i)=>`<a class="category-tile" href="#cat-${g.id}" data-jump="${g.id}"><div class="tile-head"><span class="tile-icon">${icon(g.icon)}</span><span class="tile-index">/ ${String(i+1).padStart(2,'0')}</span></div><h3>${escapeHTML(g.title)}</h3><span class="tile-foot"><span>${g.count} définitions</span><span>${icon('arrow-up-right')}</span></span></a>`).join('');

function filterTerm(t){
 if(filterMode==='favorites'&&!bookmarks.has(t.id))return false;
 if(filterMode==='frequent'&&!essential.has(t.id))return false;
 if(!query)return true;
 const haystack=normalize([t.name,t.definition,t.good,t.bad,groups.find(g=>g.id===t.category)?.title||''].join(' '));
 return normalize(query).split(' ').every(part=>haystack.includes(part));
}
function renderRule(t,index){
 const isSaved=bookmarks.has(t.id),isEssential=essential.has(t.id);
 return `<article class="rule-card${expandAll?' open':''}" id="regle-${escapeHTML(t.id)}" data-rule="${escapeHTML(t.id)}">
  <div class="rule-top"><span class="rule-index">${String(index+1).padStart(2,'0')}</span>
   <div class="rule-body"><h4 class="rule-title">${escapeHTML(t.name)} ${isEssential?'<span class="tag-essential">ESSENTIEL</span>':''}</h4><p class="rule-description">${escapeHTML(t.definition)}</p></div>
   <div class="rule-actions"><button type="button" class="rule-button bookmark-btn${isSaved?' saved':''}" data-bookmark="${escapeHTML(t.id)}" aria-label="${isSaved?'Retirer des':'Ajouter aux'} favoris : ${escapeHTML(t.name)}" title="${isSaved?'Retirer des favoris':'Ajouter aux favoris'}">${icon('bookmark')}</button><button type="button" class="rule-button expand-btn" data-expand="${escapeHTML(t.id)}" aria-label="${expandAll?'Replier':'Afficher les exemples pour'} ${escapeHTML(t.name)}" aria-expanded="${expandAll?'true':'false'}">${icon('chevron-down')}</button></div>
  </div>
  <div class="rule-details"><div class="example-box good-box"><div class="example-heading">${icon('check')} BON RÉFLEXE RP</div><p>${escapeHTML(t.good)}</p></div><div class="example-box bad-box"><div class="example-heading">${icon('x')} COMPORTEMENT À ÉVITER</div><p>${escapeHTML(t.bad)}</p></div><div class="share-row"><button type="button" class="copy-link" data-copy="${escapeHTML(t.id)}">${icon('link')} Copier le lien vers cette règle</button></div></div>
 </article>`;
}
function render(){
 let total=0;let output='';
 for(const g of groups){const list=g.terms.filter(filterTerm);if(!list.length)continue;total+=list.length;
 output+=`<section class="rule-group" id="cat-${g.id}"><div class="group-heading"><span class="group-marker">${icon(g.icon)}</span><div><h3>${escapeHTML(g.title)}</h3><p>${escapeHTML(g.intro)}</p></div><span class="group-count">${String(list.length).padStart(2,'0')} NOTIONS</span></div><div class="rule-list">${list.map(t=>renderRule(t,terms.indexOf(t))).join('')}</div></section>`;
 }
 groupEl.innerHTML=output;
 count.textContent=`${total} notion${total>1?'s':''} affichée${total>1?'s':''}`;
 empty.hidden=total>0;
 clear.hidden=filterMode==='all'&&!query;
 $('#favorite-count').textContent=bookmarks.size;
 for(const btn of document.querySelectorAll('.filter')){const selected=btn.dataset.filter===filterMode;btn.classList.toggle('active',selected);btn.setAttribute('aria-pressed',String(selected))}
 $('#expand-all').innerHTML=icon(expandAll?'chevron-down':'chevrons-down')+(expandAll?' Tout replier':' Tout développer');
}
function toast(text){const el=$('#toast');el.textContent=text;el.classList.add('shown');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('shown'),2300)}
function setFilter(mode){filterMode=mode;render();}
function clearFilters(){filterMode='all';query='';searchInput.value='';expandAll=false;render()}
function toggleCard(id,makeOpen){const el=document.getElementById('regle-'+id);if(!el)return;const open=makeOpen===undefined?!el.classList.contains('open'):makeOpen;el.classList.toggle('open',open);const btn=el.querySelector('.expand-btn');if(btn)btn.setAttribute('aria-expanded',String(open))}
function jumpToRule(id,scroll=true){if(!termById.has(id))return;clearFilters();const el=document.getElementById('regle-'+id);if(!el)return;toggleCard(id,true);if(scroll){el.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}if(history.replaceState)history.replaceState(null,'','#regle-'+id)}
function jumpToCategory(id){clearFilters();requestAnimationFrame(()=>document.getElementById('cat-'+id)?.scrollIntoView({behavior:'smooth',block:'start'}))}
function bookmark(id){if(bookmarks.has(id))bookmarks.delete(id);else bookmarks.add(id);try{localStorage.setItem(storageKey,JSON.stringify([...bookmarks]))}catch{};render();toast(bookmarks.has(id)?'Ajouté aux favoris':'Retiré des favoris')}
function copyLink(id){const url=new URL(location.href);url.hash='regle-'+id;const target=url.toString();(navigator.clipboard?.writeText?.(target)||Promise.reject()).then(()=>toast('Lien de la règle copié')).catch(()=>{const field=document.createElement('textarea');field.value=target;document.body.appendChild(field);field.select();document.execCommand('copy');field.remove();toast('Lien de la règle copié')})}
function scrollToSelector(id){document.querySelector(id)?.scrollIntoView({behavior:'smooth'})}
render();
searchInput.addEventListener('input',event=>{query=event.target.value;render()});
$('#expand-all').addEventListener('click',()=>{expandAll=!expandAll;render()});
$('#clear-filters').addEventListener('click',clearFilters);$('#empty-clear').addEventListener('click',clearFilters);
document.querySelector('.filter-bar').addEventListener('click',event=>{const btn=event.target.closest('[data-filter]');if(btn)setFilter(btn.dataset.filter)});
$('#favorites-nav').addEventListener('click',()=>{setFilter('favorites');scrollToSelector('#concepts');closeSidebar()});
$('#hero-explore').addEventListener('click',()=>scrollToSelector('#concepts'));
$('#hero-random').addEventListener('click',()=>jumpToRule(terms[Math.floor(Math.random()*terms.length)].id));
$('#back-top').addEventListener('click',()=>scrollToSelector('#accueil'));
document.addEventListener('click',event=>{
 const toggle=event.target.closest('[data-expand]');if(toggle){toggleCard(toggle.dataset.expand);return}
 const card=event.target.closest('.rule-card');if(card&&!event.target.closest('button,a')){toggleCard(card.dataset.rule);return}
 const saved=event.target.closest('[data-bookmark]');if(saved){bookmark(saved.dataset.bookmark);return}
 const copied=event.target.closest('[data-copy]');if(copied){copyLink(copied.dataset.copy);return}
 const jump=event.target.closest('[data-jump]');if(jump){event.preventDefault();jumpToCategory(jump.dataset.jump);closeSidebar()}
});
const sceneContent=[
 {badge:'CAS PRATIQUE / 001',title:'Une arme pointée sur toi.',body:'Lors d’un contrôle, une personne armée t’ordonne de garder les mains visibles. La scène doit tenir compte du danger, tout en laissant de la place au dialogue et aux réactions.',good:'Tu montres tes mains, négocies calmement et joues une crainte réaliste.',bad:'Tu cours vers ton agresseur sans raison plausible ou imposes qu’il ne peut pas réagir.',link:'fear-rp-no-fear'},
 {badge:'CAS PRATIQUE / 002',title:'La fuite en plein Los Santos.',body:'Une patrouille prend ton véhicule en chasse. Tu descends dans une ruelle étroite : tu dois continuer à jouer une personne physique, pas un personnage avec des mouvements impossibles.',good:'Tu changes d’itinéraire de façon crédible et assumes les risques de ta fuite.',bad:'Tu zigzagues de manière irréaliste devant les tirs pour esquiver la mécanique du jeu.',link:'chicken-run'},
 {badge:'CAS PRATIQUE / 003',title:'L’accident a des conséquences.',body:'Tu percutes un mur à forte vitesse. Même si ton personnage peut encore se déplacer techniquement, son état physique doit correspondre à la violence du choc.',good:'Tu ralentis tes gestes, signales des douleurs et donnes matière à jouer aux secours.',bad:'Tu repars sprinter immédiatement comme si aucune collision ne s’était produite.',link:'pain-rp-no-pain'}
];
function renderScene(index){const s=sceneContent[index];$('#scenario-panel').innerHTML=`<span class="scene-badge">${escapeHTML(s.badge)}</span><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.body)}</p><div class="scene-options"><div class="scene-option good"><span>${icon('check')}</span><span>${escapeHTML(s.good)}</span></div><div class="scene-option bad"><span>${icon('x')}</span><span>${escapeHTML(s.bad)}</span></div></div><button type="button" class="scenario-link" data-scene-link="${s.link}">Comprendre la règle liée ${icon('arrow-right')}</button>`;
 for(const tab of document.querySelectorAll('.scenario-tab')){const active=Number(tab.dataset.scene)===index;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active))}
}
renderScene(0);document.querySelector('.scenario-tabs').addEventListener('click',e=>{const b=e.target.closest('.scenario-tab');if(b)renderScene(Number(b.dataset.scene))});$('#scenario-panel').addEventListener('click',e=>{const btn=e.target.closest('[data-scene-link]');if(btn)jumpToRule(btn.dataset.sceneLink)});

// Responsive sidebar
const sidebar=$('#sidebar'),dim=$('#mobile-dim'),menu=$('#mobile-menu');
function closeSidebar(){sidebar.classList.remove('mobile-open');dim.hidden=true;menu.setAttribute('aria-expanded','false')}
menu.addEventListener('click',()=>{const open=!sidebar.classList.contains('mobile-open');sidebar.classList.toggle('mobile-open',open);dim.hidden=!open;menu.setAttribute('aria-expanded',String(open))});dim.addEventListener('click',closeSidebar);
document.querySelectorAll('.side-link[href],.side-brand').forEach(link=>link.addEventListener('click',closeSidebar));

// Cmd+K / Ctrl+K search palette
const overlay=$('#search-overlay');
function openSearch(){overlay.hidden=false;overlay.setAttribute('aria-hidden','false');paletteSelection=0;paletteInput.value='';renderPalette();setTimeout(()=>paletteInput.focus(),30)}
function closeSearch(){overlay.hidden=true;overlay.setAttribute('aria-hidden','true')}
function matchesPalette(){const q=normalize(paletteInput.value);return (q?terms.filter(t=>normalize(t.name+' '+t.definition).includes(q)):terms.filter(t=>essential.has(t.id))).slice(0,12)}
function renderPalette(){paletteItems=matchesPalette();if(paletteSelection>=paletteItems.length)paletteSelection=0;$('#palette-results').innerHTML=paletteItems.length?paletteItems.map((t,i)=>`<button type="button" class="palette-item${i===paletteSelection?' selected':''}" data-palette-index="${i}"><span>${icon('file-text')}</span><div><strong>${escapeHTML(t.name)}</strong><small>${escapeHTML(groups.find(g=>g.id===t.category)?.title||'')} · ${escapeHTML(t.definition).slice(0,88)}${t.definition.length>88?'…':''}</small></div><span class="palette-arrow">${icon('arrow-up-right')}</span></button>`).join(''):'<div class="palette-empty">Aucun résultat. Essaie un autre mot-clé.</div>'}
function choosePalette(i){const term=paletteItems[i];if(!term)return;closeSearch();jumpToRule(term.id)}
$('#top-search').addEventListener('click',openSearch);document.querySelector('[data-close-search]').addEventListener('click',closeSearch);paletteInput.addEventListener('input',()=>{paletteSelection=0;renderPalette()});$('#palette-results').addEventListener('click',e=>{const btn=e.target.closest('[data-palette-index]');if(btn)choosePalette(Number(btn.dataset.paletteIndex))});
document.addEventListener('keydown',e=>{
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();overlay.hidden?openSearch():closeSearch();return}
 if(e.key==='Escape'){closeSearch();closeSidebar();return}
 if(!overlay.hidden){if(e.key==='ArrowDown'){e.preventDefault();paletteSelection=(paletteSelection+1)%Math.max(paletteItems.length,1);renderPalette()}else if(e.key==='ArrowUp'){e.preventDefault();paletteSelection=(paletteSelection-1+Math.max(paletteItems.length,1))%Math.max(paletteItems.length,1);renderPalette()}else if(e.key==='Enter'){e.preventDefault();choosePalette(paletteSelection)}return}
 if(e.key==='/'&&document.activeElement?.tagName!=='INPUT'&&document.activeElement?.tagName!=='TEXTAREA'){e.preventDefault();searchInput.focus();scrollToSelector('#concepts')}
});
// Deep links and scroll reading progress
function processHash(){const hash=decodeURIComponent(location.hash.slice(1));if(hash.startsWith('regle-')){const termId=hash.slice(6);if(termById.has(termId))jumpToRule(termId,false)}}
window.addEventListener('hashchange',processHash);requestAnimationFrame(()=>{processHash();if(location.hash.startsWith('#regle-'))document.querySelector(location.hash)?.scrollIntoView({block:'start'})});
let scheduled=false;function onScroll(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{const doc=document.documentElement;const max=doc.scrollHeight-innerHeight;$('#reading-line').style.width=(max>0?100*scrollY/max:0)+'%';scheduled=false})}
addEventListener('scroll',onScroll,{passive:true});onScroll();
})();
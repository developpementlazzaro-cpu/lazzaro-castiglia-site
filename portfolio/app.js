const header=document.getElementById('site-header');
function updateNav(){header.classList.toggle('sticky',window.scrollY>45)}
window.addEventListener('scroll',updateNav,{passive:true});updateNav();
const nav=document.getElementById('main-nav');
const toggle=document.getElementById('menu-toggle');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const modal=document.getElementById('reservation-modal');
const result=document.getElementById('form-result');
const date=document.getElementById('guest-date');
const today=new Date();date.min=today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
let prior=null;
function showModal(){prior=document.activeElement;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');result.textContent='';document.getElementById('guest-name').focus()}
function hideModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');if(prior)prior.focus()}
document.querySelectorAll('[data-open-reservation]').forEach(el=>el.addEventListener('click',showModal));
document.querySelectorAll('[data-close-reservation]').forEach(el=>el.addEventListener('click',hideModal));
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))hideModal()});
document.getElementById('reservation-form').addEventListener('submit',e=>{e.preventDefault();result.textContent='Ceci est une démonstration : aucune donnée n’a été transmise et aucune réservation n’a été enregistrée.'});
document.getElementById('year').textContent=String(new Date().getFullYear());
const menuData={
 signature:[["L'assiette du jardin","Légumes de saison · herbes fraîches · notes citronnées","18 €"],["La pièce du moment","Cuisson juste · jus maison · garniture du marché","29 €"],["La douceur Sésame","Création sucrée · textures délicates · gourmandise","12 €"]],
 midi:[["Le déjeuner frais","Assiette colorée · légumes croquants · pain grillé","16 €"],["L'instant gourmand","Suggestion de saison · cuisson minute · herbes","21 €"],["La note sucrée","Dessert imaginé selon le marché","9 €"]]
};
document.querySelectorAll('[data-menu]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-menu]').forEach(t=>{t.classList.toggle('active',t===button);t.setAttribute('aria-selected',String(t===button))});
 document.getElementById('panel-menu').setAttribute('aria-labelledby',button.id);
 menuData[button.dataset.menu].forEach((dish,i)=>{const n=i+1;document.getElementById('dish-name-'+n).textContent=dish[0];document.getElementById('dish-desc-'+n).textContent=dish[1];document.getElementById('dish-price-'+n).textContent=dish[2]});
}));
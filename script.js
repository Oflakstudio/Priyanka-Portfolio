const ASSET='https://raw.githubusercontent.com/Oflakstudio/Priyanka-vishwakarma-portfolio/main/assets';
const image=(file)=>`${ASSET}/images/${file}`;
const projects={
  azure:{index:'01',kicker:'Azure Heirloom / Collection',title:'Azure Heirloom',description:'Womenswear research and design centered on blue, ivory and gold, with references to Banaras heritage, weaving, embroidery and decorative detail.',details:['Collection direction: womenswear','Material language: weaving, embroidery, embellishment','Documentation: collection boards, garment views and detail studies'],images:['the-azure-hairloom-01.jpg','the-azure-hairloom-02.jpg','the-azure-hairloom-03.jpg','the-azure-hairloom-04.jpg','the-azure-hairloom-05.jpg','the-azure-hairloom-06.jpg','the-azure-hairloom-07.jpg']},
  womenswear:{index:'02',kicker:'Womenswear / Design Studies',title:'Womenswear Design Studies',description:'Seven concept directions exploring contemporary, occasion, evening and fusion-inspired silhouettes.',details:['Draping and layered silhouettes','Cut-outs, gathered details and statement sleeves','Fitted and flowing forms across front/side/back development'],images:['aurelia.jpg','rayaa.jpg','modern-duality.jpg','refiend-contrast.jpg','the-amaranthine-form.jpg','rangrezz-01.jpg','the-royal-blue-garden.jpg','rangrezz-02.jpg','rangrezz-03.jpg','rangrezz-04.jpg','rangrezz-05.jpg']},
  textile:{index:'03',kicker:'Textile / Surface',title:'Textile & Surface Development',description:'A material-led study of tie-and-dye and shibori directions developed as surface language for fashion.',details:['Diagonal stripe','Horizontal shibori','Curved-line pattern and diamond shibori','Fabric and manipulation studies'],images:['textile-surface.jpg','fabric.jpg','manipulations.jpg','colour-story.jpg']},
  creative:{index:'04',kicker:'Archive / Supporting Work',title:'Creative Archive',description:'Supporting studies across colour, craft, collage, styling research and visual development.',details:['Fabric and mixed-media experiments','Patchwork and collage','Accessories and styling research','Colour-led visual studies'],images:['additional-work.jpg','colarge.jpg','accessories-style-comparison.jpg','colour-story.jpg']}
};

const header=document.getElementById('siteHeader');
const mobile=document.getElementById('mobileNav');
const mobileToggle=document.getElementById('navMobile');
const modal=document.getElementById('modal');
const modalClose=document.getElementById('modalClose');
const modalKicker=document.getElementById('modalKicker');
const modalIndex=document.getElementById('modalIndex');
const modalTitle=document.getElementById('modalTitle');
const modalDescription=document.getElementById('modalDescription');
const modalDetails=document.getElementById('modalDetails');
const gallery=document.getElementById('modalGallery');

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>32),{passive:true});
function setMenu(open){mobile.classList.toggle('open',open);mobileToggle.classList.toggle('open',open);mobileToggle.setAttribute('aria-expanded',String(open));mobile.setAttribute('aria-hidden',String(!open));document.body.classList.toggle('lock',open)}
mobileToggle.addEventListener('click',()=>setMenu(!mobile.classList.contains('open')));
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>setMenu(false)));

function openProject(key){
  const p=projects[key]; if(!p)return;
  modalKicker.textContent=p.kicker;
  modalIndex.textContent=p.index;
  modalTitle.textContent=p.title;
  modalDescription.textContent=p.description;
  modalDetails.innerHTML=p.details.map(item=>`<p>${item}</p>`).join('');
  gallery.innerHTML=p.images.map((file,i)=>`<img src="${image(file)}" alt="${p.title} — image ${i+1}" ${i>1?'loading="lazy"':''}>`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('lock');
  modalClose.focus();
}
function closeProject(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('lock')}

document.querySelectorAll('[data-project]').forEach(el=>el.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();openProject(el.dataset.project)}));
modalClose.addEventListener('click',closeProject);
document.querySelector('[data-close]').addEventListener('click',closeProject);
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeProject();setMenu(false)}});

document.getElementById('contactForm').addEventListener('submit',event=>{event.preventDefault();document.getElementById('formSuccess').classList.add('show');event.currentTarget.reset()});

const ASSET='https://raw.githubusercontent.com/Oflakstudio/Priyanka-vishwakarma-portfolio/main/assets';
const image=file=>`${ASSET}/images/${file}`;
const projects={
 azure:{index:'01',kicker:'Collection / Azure Heirloom',title:'Azure Heirloom',description:'A womenswear collection inspired by spirituality, architecture, traditional weaving, and the visual heritage of Banaras.',details:['Palette: blue, ivory and gold.','Woven references, embroidery, decorative borders and embellished details.','Full-look documentation with front, side, back and close-up views.'],images:['the-azure-hairloom-01.jpg','the-azure-hairloom-02.jpg','the-azure-hairloom-03.jpg','the-azure-hairloom-04.jpg','the-azure-hairloom-05.jpg','the-azure-hairloom-06.jpg','the-azure-hairloom-07.jpg']},
 womenswear:{index:'02',kicker:'Design series / Womenswear',title:'Womenswear Design Series',description:'Seven womenswear concepts across contemporary, occasion, evening and fusion-inspired silhouettes.',details:['Draping, layered forms, cut-outs, gathered details and statement sleeves.','Fitted and flowing silhouettes explored through iterative development.','Supporting research covers fabric, colour, construction and inspiration.'],images:['aurelia.jpg','rayaa.jpg','modern-duality.jpg','refiend-contrast.jpg','the-amaranthine-form.jpg','rangrezz-01.jpg','the-royal-blue-garden.jpg','rangrezz-02.jpg','rangrezz-03.jpg','rangrezz-04.jpg','rangrezz-05.jpg']},
 textile:{index:'03',kicker:'Textile / Surface development',title:'Textile & Surface Development',description:'A textile study connecting handcrafted surface techniques with outfit direction.',details:['Diagonal stripe, horizontal shibori, curved-line and diamond shibori experiments.','Pattern, texture and visual effect documented through swatches and boards.','Surface decisions translated into proposed garment applications.'],images:['textile-surface.jpg','fabric.jpg','manipulations.jpg','colour-story.jpg']},
 creative:{index:'04',kicker:'Creative archive',title:'Surface, Styling & Visual Research',description:'Additional creative work spanning craft, patchwork, styling research and image-led development.',details:['Fabric painting and mixed-media surface work.','Patchwork and collage experiments.','Accessories research and colour-led visual studies.'],images:['additional-work.jpg','colarge.jpg','accessories-style-comparison.jpg','colour-story.jpg']}
};
const topbar=document.getElementById('topbar');
window.addEventListener('scroll',()=>topbar.classList.toggle('scrolled',window.scrollY>40),{passive:true});
const panel=document.getElementById('mobilePanel');
const menuToggle=document.getElementById('menuToggle');
function closeMenu(){menuToggle.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');panel.classList.remove('open');panel.setAttribute('aria-hidden','true');document.body.style.overflow=''}
menuToggle.addEventListener('click',()=>{const open=!panel.classList.contains('open');menuToggle.classList.toggle('open',open);menuToggle.setAttribute('aria-expanded',String(open));panel.classList.toggle('open',open);panel.setAttribute('aria-hidden',String(!open));document.body.style.overflow=open?'hidden':''});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>closeMenu()));
const modal=document.getElementById('modal');
const modalClose=document.getElementById('modalClose');
const modalKicker=document.getElementById('modalKicker');
const modalIndex=document.getElementById('modalIndex');
const modalTitle=document.getElementById('modalTitle');
const modalDescription=document.getElementById('modalDescription');
const modalDetails=document.getElementById('modalDetails');
const modalGallery=document.getElementById('modalGallery');
function openProject(key){const p=projects[key];if(!p)return;modalKicker.textContent=p.kicker;modalIndex.textContent=p.index;modalTitle.textContent=p.title;modalDescription.textContent=p.description;modalDetails.innerHTML=p.details.map(t=>`<p>${t}</p>`).join('');modalGallery.innerHTML=p.images.map((file,i)=>`<img src="${image(file)}" alt="${p.title} — board ${i+1}" class="${i===0?'full':''}" loading="lazy">`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeProject(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-project]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openProject(el.dataset.project)}));
modalClose.addEventListener('click',closeProject);document.querySelector('[data-close]').addEventListener('click',closeProject);document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProject();closeMenu()}});
const form=document.getElementById('contactForm');
form.addEventListener('submit',e=>{e.preventDefault();document.getElementById('formSuccess').classList.add('show');form.reset()});

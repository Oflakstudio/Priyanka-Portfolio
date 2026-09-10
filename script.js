const ASSET='https://raw.githubusercontent.com/Oflakstudio/Priyanka-vishwakarma-portfolio/main/assets';
const image=(file)=>`${ASSET}/images/${file}`;

const projects={
  azure:{index:'01',kicker:'Azure Heirloom / Collection',title:'Azure Heirloom',description:'A womenswear collection inspired by spirituality, architecture, traditional weaving, and the visual heritage of Banaras.',details:['Palette: blue, ivory and gold.','Research translated through weaving, embroidery, decorative borders and embellished details.','Collection documentation includes front, side, back and close-up studies.'],images:['the-azure-hairloom-01.jpg','the-azure-hairloom-02.jpg','the-azure-hairloom-03.jpg','the-azure-hairloom-04.jpg','the-azure-hairloom-05.jpg','the-azure-hairloom-06.jpg','the-azure-hairloom-07.jpg']},
  womenswear:{index:'02',kicker:'Womenswear / Design Studies',title:'Womenswear Design Studies',description:'Seven womenswear concepts exploring contemporary, occasion, evening and fusion-inspired silhouettes.',details:['Draping and layered silhouettes.','Cut-outs, gathered details and statement sleeves.','Fitted and flowing forms developed across front, side and back views.'],images:['aurelia.jpg','rayaa.jpg','modern-duality.jpg','refiend-contrast.jpg','the-amaranthine-form.jpg','rangrezz-01.jpg','the-royal-blue-garden.jpg','rangrezz-02.jpg','rangrezz-03.jpg','rangrezz-04.jpg','rangrezz-05.jpg']},
  textile:{index:'03',kicker:'Textile / Surface Development',title:'Textile & Surface Development',description:'A focused material study of tie-and-dye, shibori, pattern and fabric manipulation developed for fashion application.',details:['Diagonal stripe, horizontal shibori, curved-line and diamond-shibori directions.','Material, colour and surface studies documented alongside outfit applications.','Supporting research includes fabric and manipulation experiments.'],images:['textile-surface.jpg','fabric.jpg','manipulations.jpg','colour-story.jpg']},
  creative:{index:'04',kicker:'Archive / Supporting Work',title:'Creative Archive',description:'Additional studies across fabric painting, patchwork, beadwork, accessory research and colour-led visual development.',details:['Fabric painting and mixed-media studies.','Patchwork and collage compositions.','Beadwork embroidery and surface decoration.','Traditional and contemporary accessories research.'],images:['additional-work.jpg','colarge.jpg','accessories-style-comparison.jpg','colour-story.jpg']}
};

const header=document.getElementById('topbar');
const mobile=document.getElementById('mobileMenu');
const mobileButton=document.getElementById('menuButton');
const modal=document.getElementById('projectModal');
const modalClose=document.getElementById('modalClose');
const gallery=document.getElementById('modalGallery');
const form=document.getElementById('contactForm');

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>24),{passive:true});

function setMenu(open){
  mobile.classList.toggle('open',open);
  mobile.setAttribute('aria-hidden',String(!open));
  mobileButton.setAttribute('aria-expanded',String(open));
  mobileButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  document.body.classList.toggle('lock',open);
}

mobileButton.addEventListener('click',()=>setMenu(!mobile.classList.contains('open')));
document.querySelectorAll('.mobile-menu a,.desktop-nav a,.accent-link').forEach(link=>link.addEventListener('click',()=>setMenu(false)));

function openProject(key){
  const p=projects[key];
  if(!p)return;
  document.getElementById('modalKicker').textContent=p.kicker;
  document.getElementById('modalNumber').textContent=p.index;
  document.getElementById('modalTitle').textContent=p.title;
  document.getElementById('modalDescription').textContent=p.description;
  document.getElementById('modalDetails').innerHTML=p.details.map(item=>`<p>${item}</p>`).join('');
  gallery.innerHTML=p.images.map((file,i)=>`<img src="${image(file)}" alt="${p.title} — board ${i+1}" ${i>1?'loading="lazy"':''}>`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('lock');
  modalClose.focus();
}

function closeProject(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('lock');
}

document.querySelectorAll('.project-trigger').forEach(trigger=>{
  trigger.addEventListener('click',()=>openProject(trigger.dataset.project));
  trigger.addEventListener('keydown',event=>{
    if((event.key==='Enter'||event.key===' ') && trigger.getAttribute('role')==='button'){
      event.preventDefault();
      openProject(trigger.dataset.project);
    }
  });
});

modalClose.addEventListener('click',closeProject);
document.querySelector('[data-close]').addEventListener('click',closeProject);
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){closeProject();setMenu(false)}
});

form.addEventListener('submit',event=>{
  event.preventDefault();
  document.getElementById('formSuccess').classList.add('show');
  form.reset();
});

// Normalize one legacy asset filename so the new static page stays resilient.
document.querySelectorAll('img').forEach(img=>{
  const bad='https://raw.githubusercontent.com/Oflakstudio/Priyanka-vishwakarma/main/assets/assets/images/colour-story.jpg';
  if(img.src===bad)img.src=image('colour-story.jpg');
});

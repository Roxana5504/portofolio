'use strict';
const projectData = {
  "tripfi": {
    "eyebrow": "WEB APPLICATION / JAVA",
    "title": "TripFi — Travel Budget App",
    "intro": "A personal software project: a web-mobile application created to make travel budgeting and spending easier to organise.",
    "tags": [
      "Java",
      "Web-mobile app",
      "Travel budgeting"
    ],
    "points": [
      "Designed the application interface for a mobile-first experience.",
      "Built travel budget features including budget tracking and trip selection.",
      "Worked on the product logic, interface and implementation rather than a marketing-only concept."
    ],
    "image": "tripfi.webp",
    "imageAlt": "Actual screenshot of the TripFi travel budget web-mobile application",
    "imageNote": "Real screenshot supplied from the original application presentation.",
    "metrics": []
  },
  "blade-web": {
    "eyebrow": "WEBSITE DESIGN / WORDPRESS",
    "title": "BladeOnLawn — WordPress Website",
    "intro": "Website design and functional implementation for a UK gardening and lawn care services company.",
    "tags": [
      "WordPress",
      "Website design",
      "Responsive layout"
    ],
    "points": [
      "Designed the visual structure and website layout for the gardening service.",
      "Worked on WordPress implementation and site functionality.",
      "Organised service information and clear contact calls to action."
    ],
    "image": "blade-site.webp",
    "imageAlt": "Actual screenshot of the BladeOnLawn WordPress website",
    "imageNote": "Real homepage screenshot from the completed BladeOnLawn website.",
    "metrics": []
  },
  "blade-ads": {
    "eyebrow": "GOOGLE ADS / LOCAL SERVICE LEADS",
    "title": "BladeOnLawn — Google Ads",
    "intro": "Search advertising for a UK gardening company, focused on bringing in local enquiries.",
    "tags": [
      "Google Ads",
      "Local services",
      "Conversions"
    ],
    "points": [
      "Managed Google Ads advertising for a gardening and lawn-care business.",
      "Worked on converting relevant search intent into enquiries.",
      "The supplied performance screenshot records 600 Google Ads conversions."
    ],
    "image": "blade-google-ads.webp",
    "imageAlt": "Actual Google Ads screenshot showing 600 conversions",
    "imageNote": "Actual account results. Conversions are platform-reported, and may include different conversion actions.",
    "metrics": [
      [
        "600",
        "Conversions"
      ],
      [
        "8.96K",
        "Clicks"
      ],
      [
        "6.33%",
        "Conv. rate"
      ]
    ]
  },
  "budapest": {
    "eyebrow": "GOOGLE ADS / BUDAPEST CLEANING SERVICES",
    "title": "Cleaning Services — Budapest",
    "intro": "Local Google Ads campaigns targeting Budapest for a cleaning services company. The client paused ads because the team could no longer fulfil the volume of enquiries.",
    "tags": [
      "Google Ads",
      "Budapest",
      "Local enquiries"
    ],
    "points": [
      "Ran geographic targeting focused on Budapest, Hungary.",
      "Monitored enquiry performance and the campaign’s search visibility.",
      "Campaigns were paused at the client’s request after demand exceeded operational capacity."
    ],
    "image": "budapest-google-ads.webp",
    "imageAlt": "Actual anonymous Google Ads performance screenshot for Budapest cleaning services",
    "imageNote": "Account names, account IDs and private account information removed by excluding those screenshot regions.",
    "metrics": [
      [
        "38",
        "Conversions"
      ],
      [
        "70%",
        "Impr. share"
      ],
      [
        "120",
        "Clicks"
      ]
    ]
  },
  "metal": {
    "eyebrow": "GOOGLE ADS / METAL FABRICATION LEAD GENERATION",
    "title": "Metal Fabrication — Google Ads",
    "intro": "One search campaign targeting Romania and another targeting the rest of Europe for a metal fabrication and metal construction company. Campaigns ran for approximately one month.",
    "tags": [
      "Google Ads",
      "B2B manufacturing",
      "Romania & Europe"
    ],
    "points": [
      "Structured separate targeting for Romanian and European search demand.",
      "Focused the campaigns on qualified enquiries for metal fabrication and metal construction services.",
      "Ads were paused after the business received more enquiries than it could accommodate."
    ],
    "image": "metal-google-ads.webp",
    "imageAlt": "Actual anonymous Google Ads performance screenshot for metal fabrication",
    "imageNote": "Account names, account IDs and private account information removed by excluding those screenshot regions.",
    "metrics": [
      [
        "15",
        "Conversions"
      ],
      [
        "11.06%",
        "CTR"
      ],
      [
        "921",
        "Clicks"
      ]
    ]
  }
  ,"andre-web": {
    "eyebrow": "WEBSITE DESIGN / WIX + EMBEDDED HTML",
    "title": "Andre Mitchell — Responsive Comedy Website",
    "intro": "A fully functional website for stand-up comedian Andre Mitchell, built in Wix with custom HTML embedded code on a tight timeline. Designed to work beautifully across desktop and mobile.",
    "tags": [
        "Wix",
        "HTML / CSS",
        "Responsive design",
        "Booking enquiry form",
        "YouTube embed"
    ],
    "points": [
        "Designed and implemented a complete multi-section website using custom HTML embedded in Wix.",
        "Made the layout responsive for both desktop and mobile devices.",
        "Integrated a YouTube comedy trailer with autoplay behaviour on site visit.",
        "Implemented a functional booking / quote-request form to capture event enquiries.",
        "Delivered the website in a short timeframe while keeping its visual identity and navigation consistent."
    ],
    "images": [
        {
            "src": "andre-desktop.webp",
            "alt": "Desktop screenshot of the Andre Mitchell comedy website showing the homepage, quote buttons and YouTube trailer",
            "caption": "DESKTOP VIEW — Homepage, calls to action and embedded YouTube trailer"
        },
        {
            "src": "andre-mobile.webp",
            "alt": "Mobile screenshot of the Andre Mitchell website showing the Why Andre section and a responsive feature card",
            "caption": "MOBILE VIEW — Responsive layout and content cards"
        }
    ],
    "metrics": []
}
};
const filterButtons = [...document.querySelectorAll('.filter')];
const projectCards = [...document.querySelectorAll('.project-card')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const selected=button.dataset.filter;
  filterButtons.forEach(b=>{const isSelected=b===button;b.classList.toggle('active',isSelected);b.setAttribute('aria-pressed',String(isSelected));});
  projectCards.forEach(card=>{card.hidden=selected!=='all'&&!card.dataset.category.split(/\s+/).includes(selected);});
}));
const dialog=document.getElementById('case-dialog');
let dialogTrigger=null;
const tags=document.getElementById('case-tags');
const points=document.getElementById('case-points');
const caseImage=document.getElementById('case-image');
const caseImageNote=document.getElementById('case-image-note');
const caseMetrics=document.getElementById('case-metrics');
const caseGallery=document.getElementById('case-gallery');
const caseProof=document.querySelector('.dialog-proof');
projectCards.forEach(card=>card.querySelector('.project-open').addEventListener('click',event=>{
  const data=projectData[card.dataset.project];if(!data)return;
  dialogTrigger=event.currentTarget;
  document.getElementById('case-eyebrow').textContent=data.eyebrow;
  document.getElementById('case-title').textContent=data.title;
  document.getElementById('case-intro').textContent=data.intro;
  tags.replaceChildren(...data.tags.map(tag=>{const el=document.createElement('span');el.textContent=tag;return el;}));
  points.replaceChildren(...data.points.map(point=>{const el=document.createElement('li');el.textContent=point;return el;}));
  // Preserve the original single-image proof for existing projects.
  // Show a two-image desktop/mobile gallery only when the project supplies one.
  const galleryImages=Array.isArray(data.images)?data.images:[];
  if(galleryImages.length){
    caseProof.hidden=true;
    caseGallery.hidden=false;
    caseGallery.replaceChildren(...galleryImages.map((item,i)=>{
      const figure=document.createElement('figure');
      figure.className='gallery-shot '+(i===0?'gallery-desktop':'gallery-mobile');
      const frame=document.createElement('div');frame.className='gallery-media';
      const img=document.createElement('img');img.src=item.src;img.alt=item.alt;
      img.loading='lazy';img.decoding='async';
      frame.appendChild(img);
      const caption=document.createElement('figcaption');
      const index=document.createElement('span');index.textContent=String(i+1).padStart(2,'0')+' / '+String(galleryImages.length).padStart(2,'0');
      const copy=document.createElement('span');copy.textContent=item.caption;
      caption.append(index,copy);
      figure.append(frame,caption);
      return figure;
    }));
    caseImage.removeAttribute('src');
  }else{
    caseGallery.hidden=true;
    caseGallery.replaceChildren();
    caseProof.hidden=false;
    caseImage.src=data.image;
    caseImage.alt=data.imageAlt;
    caseImageNote.textContent=data.imageNote;
  }
  caseMetrics.replaceChildren(...data.metrics.map(([value,label])=>{const box=document.createElement('div');const number=document.createElement('strong');number.textContent=value;const copy=document.createElement('span');copy.textContent=label;box.append(number,copy);return box;}));
  caseMetrics.hidden=data.metrics.length===0;
  if(typeof dialog.showModal==='function')dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
dialog.addEventListener('close',()=>dialogTrigger?.focus());
const mobileToggle=document.querySelector('.mobile-nav-button');
const mobileNav=document.getElementById('mobile-nav');
mobileToggle.addEventListener('click',()=>{const expanded=mobileToggle.getAttribute('aria-expanded')==='true';mobileToggle.setAttribute('aria-expanded',String(!expanded));mobileToggle.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');mobileNav.hidden=expanded;});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;mobileToggle.setAttribute('aria-expanded','false');mobileToggle.setAttribute('aria-label','Open navigation');}));
const navLinks=[...document.querySelectorAll('.desktop-nav a')];
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}})},{rootMargin:'-25% 0px -65% 0px'});
  document.querySelectorAll('section[id]').forEach(section=>observer.observe(section));
}
document.getElementById('year').textContent=String(new Date().getFullYear());

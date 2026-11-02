'use strict';
const projectData = {
  maisy: {
    eyebrow:'SOCIAL GROWTH / META ADS', title:'Maisy & Dadda',
    intro:'A social media growth project focused on finding a clearer content direction and testing new audiences across Facebook and Instagram.',
    tags:['Meta Ads','Audience growth','Competitive research'],
    points:['Audited Instagram and Facebook performance, including content formats and promoted posts.','Reviewed competitor content and identified stronger creative directions.','Built a four-week content roadmap and a structured new-audience Meta Ads test.','Planned tracking, exclusions and a testing approach to compare Facebook and Instagram audiences.']
  },
  homesellers: {
    eyebrow:'SERVICE BUSINESS ADS / REAL ESTATE',title:'International Home Sellers',
    intro:'Google Ads campaigns designed around people who want to sell their homes, across multiple European languages.',
    tags:['Google Ads','Lead generation','Multilingual campaigns'],
    points:['Researched seller-intent searches and filtered out buyer, rental and irrelevant traffic.','Structured ad groups, headlines and search terms by intent.','Adapted campaign language for Spanish, Portuguese, Italian, German, French and Polish.','Prepared negative keyword structures and practical campaign setup guidance.']
  },
  ecommerce: {
    eyebrow:'E-COMMERCE ADS / CONVERSION STRATEGY',title:'E-commerce Performance',
    intro:'A performance-first approach to online stores, linking ad relevance, landing-page experience and conversion measurement.',
    tags:['Google Ads','E-commerce','Conversion tracking'],
    points:['Worked on paid search planning and campaign structures for e-commerce websites.','Considered product intent, conversion actions and store-to-ad-platform measurement.','Worked with platforms such as Shopify and Google Ads to support advertising workflows.','Focused on clean campaign structure and decisions grounded in useful performance data.']
  },
  'andre-email': {
    eyebrow:'EMAIL MARKETING / OUTREACH',title:'Andre Mitchell — Outreach',
    intro:'A targeted outreach programme promoting comedy performances to college teams, country clubs and private member communities.',
    tags:['Email marketing','YAMM','Audience segments'],
    points:['Developed short, personal-sounding outreach email sequences.','Worked with lists of college and venue contacts, with segmentation and data cleanup.','Planned message variations, follow-ups and A/B testing.','Connected messages with landing pages, a sizzle reel and booking calls to action.']
  },
  'andre-web': {
    eyebrow:'WEBSITE CREATION / LEAD CAPTURE',title:'Andre Mitchell — Booking Pages',
    intro:'An organised landing-page experience built to help event organisers explore the offer and request a quote.',
    tags:['Wix','HTML / CSS','Formspree'],
    points:['Created and improved pages for colleges, testimonials, the comedian’s story and quote requests.','Built HTML/CSS pages for deployment on Netlify and embedding within Wix.','Connected request forms with Formspree and a thank-you page.','Worked on page navigation, embedded browsing behaviour and clearer lead-generation pathways.']
  },
  rhapsody: {
    eyebrow:'YOUTUBE ADS / VIDEO MARKETING',title:'Rhapsody Digital Entertainment',
    intro:'A multi-channel publishing and paid video project for educational entertainment content.',
    tags:['YouTube Shorts','Social media','Analytics'],
    points:['Developed publishing plans for long-form episodes and short-form clips.','Coordinated distribution plans across YouTube, Instagram, Facebook, TikTok and other channels.','Worked on a US-focused YouTube Shorts advertising setup and creative selection.','Structured recurring reporting across video and social performance metrics.']
  },
  danny: {
    eyebrow:'GOOGLE ADS / LOCAL SERVICES',title:"Danny's Gardening",
    intro:'Search advertising setup for a UK gardening service, with attention to locally relevant leads and accurate tracking.',
    tags:['Google Ads','Service business','Conversion tracking'],
    points:['Prepared a search advertising structure built around gardening service intent.','Configured conversion measurement and campaign settings.','Supported the first stage of campaign launch and post-launch monitoring.','Focused on attracting relevant local service enquiries rather than broad, low-intent traffic.']
  },
  melange: {
    eyebrow:'BRAND STRATEGY / SOCIAL GROWTH',title:'The Band Mélange',
    intro:'A growth strategy and creative content roadmap for a music brand with an eclectic sound and story.',
    tags:['Growth strategy','Content planning','Music'],
    points:['Prepared a 90-day marketing and social media growth plan.','Organised content themes, publishing ideas and audience development priorities.','Recommended a practical creative workflow for consistent brand storytelling.','Connected platform-specific content ideas with longer-term brand awareness goals.']
  },
  agents: {
    eyebrow:'B2B GOOGLE ADS / PROPERTY',title:'Real Estate Agent Recruitment',
    intro:'Multilingual search planning to connect sellers with real estate professionals and property agencies.',
    tags:['Google Ads','B2B lead generation','Six languages'],
    points:['Structured campaigns in Spanish, Polish, Portuguese, French, German and Italian.','Researched seller and agent-recruitment search intent, with exclusion planning.','Wrote and localised search ad headlines and supporting copy.','Developed ad group structures with clear English naming for easier management.']
  },
  tracking: {
    eyebrow:'TECHNICAL MARKETING / ANALYTICS',title:'Conversion Tracking Systems',
    intro:'Technical marketing work that makes conversion signals more dependable across websites, analytics tools and ad platforms.',
    tags:['GTM','GA4','Microsoft Ads UET'],
    points:['Worked with Google Tag Manager and Google Analytics 4 event measurement.','Implemented and troubleshot conversion tags, including Microsoft Ads UET.','Investigated tracking across websites and domains and debugged misconfigured tags.','Improved the clarity of the connection between forms, on-site actions and advertising reports.']
  }
};
const filterButtons = [...document.querySelectorAll('.filter')];
const projectCards = [...document.querySelectorAll('.project-card')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const selected=button.dataset.filter;
  filterButtons.forEach(b=>{const isSelected=b===button;b.classList.toggle('active',isSelected);b.setAttribute('aria-pressed',String(isSelected));});
  projectCards.forEach(card=>{card.hidden=selected!=='all'&&card.dataset.category!==selected;});
}));
const dialog=document.getElementById('case-dialog');
let dialogTrigger=null;
const tags=document.getElementById('case-tags');
const points=document.getElementById('case-points');
projectCards.forEach(card=>card.querySelector('.project-open').addEventListener('click',event=>{
  const data=projectData[card.dataset.project];if(!data)return;
  dialogTrigger=event.currentTarget;
  document.getElementById('case-eyebrow').textContent=data.eyebrow;
  document.getElementById('case-title').textContent=data.title;
  document.getElementById('case-intro').textContent=data.intro;
  tags.replaceChildren(...data.tags.map(tag=>{const el=document.createElement('span');el.textContent=tag;return el;}));
  points.replaceChildren(...data.points.map(point=>{const el=document.createElement('li');el.textContent=point;return el;}));
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

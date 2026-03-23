const BADGE_DIR='assets/badges/';
const CERTS = [
  { id:'clf-c02', code:'CLF-C02', name:'Cloud Practitioner', level:'Foundational', color:'#64748b', total:0, href:'coming-soon.html?cert=clf-c02', built:false, topics:['Value & pricing','Shared responsibility','Global infrastructure','Core services'], desc:'High-level cloud fundamentals, pricing basics, security concepts, and core AWS service awareness.', badge:BADGE_DIR+'clf-c02.png' },
  { id:'aif-c01', code:'AIF-C01', name:'AI Practitioner', level:'Foundational', color:'#64748b', total:0, href:'coming-soon.html?cert=aif-c01', built:false, topics:['GenAI use cases','Model basics','AWS AI stack','Responsible AI'], desc:'Intro-level AI concepts, generative AI workflows, responsible AI, and AWS AI service awareness.', badge:BADGE_DIR+'aif-c01.png' },
  { id:'dva-c02', code:'DVA-C02', name:'Developer', level:'Associate', color:'#06b6d4', total:476, href:'dva-c02.html', built:true, topics:['App integration','Serverless','Data stores','Observability','CI/CD'], desc:'Application development on AWS with serverless patterns, event-driven design, deployment, and monitoring.', badge:BADGE_DIR+'dva-c02.png' },
  { id:'saa-c03', code:'SAA-C03', name:'Solutions Architect', level:'Associate', color:'#06b6d4', total:35, href:'saa-c03.html', built:true, topics:['Resilient design','Secure architectures','Performance','Cost optimization','Networking'], desc:'Architecture design across reliability, security, performance efficiency, and cost optimization.', badge:BADGE_DIR+'saa-c03.png' },
  { id:'dea-c01', code:'DEA-C01', name:'Data Engineer', level:'Associate', color:'#06b6d4', total:0, href:'coming-soon.html?cert=dea-c01', built:false, topics:['Ingestion','Transformation','Storage','Streaming','Governance'], desc:'Data pipelines, transformation patterns, analytics storage, streaming, and operational governance on AWS.', badge:BADGE_DIR+'dea-c01.png' },
  { id:'cloudops-c01', code:'CloudOps-C01', name:'CloudOps Engineer', level:'Associate', color:'#06b6d4', total:0, href:'coming-soon.html?cert=cloudops-c01', built:false, topics:['Operations','Monitoring','Incident response','Resilience','Automation'], desc:'Operational excellence for AWS workloads, including monitoring, troubleshooting, automation, and recovery.', badge:BADGE_DIR+'cloudops-c01.png' },
  { id:'mla-c01', code:'MLA-C01', name:'Machine Learning Engineer', level:'Associate', color:'#06b6d4', total:0, href:'coming-soon.html?cert=mla-c01', built:false, topics:['Data prep','Training','Evaluation','Deployment','MLOps'], desc:'Machine learning lifecycle on AWS from data preparation to model deployment and operational monitoring.', badge:BADGE_DIR+'mla-c01.png' },
  { id:'genai-developer-pro', code:'GenAI-Dev-Pro', name:'Generative AI Developer', level:'Professional', color:'#f97316', total:0, href:'coming-soon.html?cert=genai-developer-pro', built:false, topics:['LLM apps','Orchestration','Evaluation','Security','Production ops'], desc:'Production-grade generative AI solution development with orchestration, evaluation, security, and scale.', badge:BADGE_DIR+'genai-dev-pro.png' },
  { id:'sap-c02', code:'SAP-C02', name:'Solutions Architect', level:'Professional', color:'#f97316', total:0, href:'coming-soon.html?cert=sap-c02', built:false, topics:['Complex systems','Migration','Hybrid design','Governance','Cost control'], desc:'Advanced architecture for complex AWS estates, migrations, governance, and enterprise-scale tradeoffs.', badge:BADGE_DIR+'sap-c02.png' },
  { id:'dop-c02', code:'DOP-C02', name:'DevOps Engineer', level:'Professional', color:'#f97316', total:0, href:'coming-soon.html?cert=dop-c02', built:false, topics:['Delivery pipelines','Reliability','Observability','Security automation','Operations'], desc:'Continuous delivery, observability, reliability engineering, and secure operational automation on AWS.', badge:BADGE_DIR+'dop-c02.png' },
  { id:'ans-c01', code:'ANS-C01', name:'Advanced Networking', level:'Specialty', color:'#ec4899', total:0, href:'coming-soon.html?cert=ans-c01', built:false, topics:['Hybrid connectivity','Routing','DNS','Segmentation','Performance'], desc:'Advanced AWS and hybrid networking design, routing strategy, DNS, security boundaries, and performance.', badge:BADGE_DIR+'ans-c01.png' },
  { id:'mls-c01', code:'MLS-C01', name:'Machine Learning', level:'Specialty', color:'#ec4899', total:0, href:'coming-soon.html?cert=mls-c01', built:false, topics:['Problem framing','Feature work','Model tuning','Deployment','Optimization'], desc:'Advanced ML design decisions on AWS, from problem framing and tuning to deployment and optimization.', badge:BADGE_DIR+'mls-c01.png' },
  { id:'scs-c02', code:'SCS-C02', name:'Security', level:'Specialty', color:'#ec4899', total:35, href:'scs-c02.html', built:true, topics:['Identity','Detection','Data protection','Infrastructure security','Incident response'], desc:'Security specialization across identity, threat detection, infrastructure protection, and incident response.', badge:BADGE_DIR+'scs-c02.png' }
];

var currentLevel = 'all';

function readProgress(certId){try{var raw=localStorage.getItem('aws-quiz-progress-'+certId);if(!raw)return{mastered:0,seen:0};var p=JSON.parse(raw);var mastered=0,seen=0;for(var key in p){var e=p[key];if(e&&(e.correct>0||e.incorrect>0))seen++;if(e&&e.correct>=1)mastered++;}return{mastered:mastered,seen:seen};}catch(e){return{mastered:0,seen:0};}}

function filterCerts(level) {
  currentLevel = level;
  document.querySelectorAll('.level-pill').forEach(function(p){ p.classList.toggle('active', p.dataset.level === level); });
  buildCards();
}

function buildFilterBar() {
  var bar = document.getElementById('level-filter-bar');
  var levels = ['all','Foundational','Associate','Professional','Specialty'];
  var labels = {all:'All'};
  var counts = {all:CERTS.length};
  levels.slice(1).forEach(function(l){ counts[l] = CERTS.filter(function(c){return c.level===l;}).length; labels[l]=l; });
  bar.innerHTML = levels.map(function(l){
    return '<button class="level-pill'+(l==='all'?' active':'')+'" data-level="'+l+'" onclick="filterCerts(\''+l+'\')">'+
      (l==='all'?'All':l)+'<span class="level-count">('+counts[l]+')</span></button>';
  }).join('');
}

function buildCards(){
  var grid = document.getElementById('cert-grid');
  var list = currentLevel === 'all' ? CERTS : CERTS.filter(function(c){ return c.level === currentLevel; });
  var html = '';
  for(var i=0;i<list.length;i++){
    var cert=list[i];
    var levelClass='level-'+cert.level.toLowerCase();
    var prog=readProgress(cert.id);
    var pct=cert.total>0?Math.round((prog.mastered/cert.total)*100):0;
    var topics=cert.topics.map(function(t){return '<span class="cert-topic">'+t+'</span>';}).join('');
    var C=106.81;var progressHtml=cert.built?('<div class="cert-progress-wrap"><div class="prog-ring-row"><div class="prog-ring-wrap"><svg class="prog-ring" width="52" height="52" viewBox="0 0 52 52"><circle class="prog-ring-bg" cx="26" cy="26" r="17"/><circle class="prog-ring-fill" cx="26" cy="26" r="17" style="stroke:'+cert.color+';stroke-dasharray:'+C+';stroke-dashoffset:'+(C*(1-pct/100)).toFixed(2)+'"/></svg><div class="prog-ring-inner"><span class="prog-ring-pct">'+pct+'%</span></div></div><div class="prog-ring-labels"><span class="prog-ring-count">'+prog.mastered+' / '+cert.total+'</span><span class="prog-ring-sub">questions mastered</span></div></div></div>'):'';
  html+='<a class="cert-card '+levelClass+(cert.built?'':' coming-soon')+'" href="'+cert.href+'" style="--cert-color:'+cert.color+'">'+ 
      (!cert.built?'<span class="coming-soon-badge">Coming Soon</span>':'')+
      '<img class="cert-card-badge-img" src="'+cert.badge+'" alt="'+cert.code+' badge" loading="lazy">'+ 
      '<div class="cert-badge">'+cert.level+'</div>'+
      '<div class="cert-code">'+cert.code+'</div>'+
      '<div class="cert-name">'+cert.name+'</div>'+
      '<div class="cert-desc">'+cert.desc+'</div>'+
      '<div class="cert-topics">'+topics+'</div>'+
      progressHtml+
      '<div class="cert-footer">'+
        '<span class="cert-qcount">'+(cert.total>0?cert.total+' questions':'In progress')+'</span>'+
        '<span class="cert-cta">'+(cert.built?'Study Now &rarr;':'View Status &rarr;')+'</span>'+
      '</div>'+
    '</a>';
  }
  grid.innerHTML = html;
}

function togglePortalTheme(){var html=document.documentElement;var current=html.getAttribute('data-theme');var next=current==='dark'?'light':'dark';html.setAttribute('data-theme',next);localStorage.setItem('theme',next);document.getElementById('theme-toggle').textContent=next==='dark'?'🌙':'☀️';}
(function(){var t=localStorage.getItem('theme')||'dark';document.getElementById('theme-toggle').textContent=t==='dark'?'🌙':'☀️';})();
buildFilterBar();
buildCards();

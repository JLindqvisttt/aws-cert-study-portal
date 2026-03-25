const APP_RELEASE = '1.0.0';
window.FEEDBACK_API_URL = '';
window.FEEDBACK_API_TOKEN = '';

function toggleTheme(){
  var html=document.documentElement;
  var next=(html.getAttribute('data-theme')==='dark')?'light':'dark';
  html.setAttribute('data-theme',next);
  localStorage.setItem('theme',next);
  document.getElementById('theme-toggle').textContent=next==='dark'?'◐':'◑';
}
(function(){var t=localStorage.getItem('theme')||'dark';document.getElementById('theme-toggle').textContent=t==='dark'?'◐':'◑';})();

function showStatus(kind, msg){
  var el=document.getElementById('fb-status');
  el.className='fb-status '+kind;
  el.textContent=msg;
  el.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function injectReleaseTag(){
  var footer=document.querySelector('.portal-footer');
  if(!footer||footer.querySelector('.app-release-tag')) return;
  var sep=document.createElement('span'); sep.className='footer-sep app-release-tag'; sep.innerHTML='&middot;';
  var rel=document.createElement('span'); rel.className='app-release-tag'; rel.textContent='Release '+APP_RELEASE;
  footer.appendChild(sep); footer.appendChild(rel);
}

function prefillFeedbackDraft(){
  var params = new URLSearchParams(location.search);
  if(params.get('draft') !== '1') return;
  try{
    var raw = localStorage.getItem('aws-feedback-draft');
    if(!raw) return;
    var draft = JSON.parse(raw);
    if(draft.type) document.getElementById('type').value = draft.type;
    if(draft.cert) document.getElementById('cert').value = draft.cert;
    if(draft.message) document.getElementById('message').value = draft.message;
    localStorage.removeItem('aws-feedback-draft');
    showStatus('ok','Question details were prefilled. Add your note and submit when feedback integration is enabled.');
  }catch(e){
    localStorage.removeItem('aws-feedback-draft');
  }
}

function setFeedbackInactiveState(){
  if(window.FEEDBACK_API_URL) return;
  var btn=document.getElementById('submit-btn');
  if(btn){
    btn.disabled=true;
    btn.title='Feedback integration coming soon';
  }
  showStatus('err','Feedback integration is temporarily inactive. Slack/API setup is coming soon.');
}

document.getElementById('feedback-form').addEventListener('submit', async function(e){
  e.preventDefault();
  if(!window.FEEDBACK_API_URL){
    showStatus('err','Feedback integration is temporarily inactive. Slack/API setup is coming soon.');
    return;
  }
  var btn=document.getElementById('submit-btn');
  btn.disabled=true; btn.textContent='Sending...';
  var payload={
    name:document.getElementById('name').value.trim(),
    email:document.getElementById('email').value.trim(),
    type:document.getElementById('type').value,
    cert:document.getElementById('cert').value,
    message:document.getElementById('message').value.trim(),
    source:'aws-cert-study-portal',page:location.href,ua:navigator.userAgent
  };
  try{
    var headers={'Content-Type':'application/json'};
    if(window.FEEDBACK_API_TOKEN) headers['x-feedback-token']=window.FEEDBACK_API_TOKEN;
    var res=await fetch(window.FEEDBACK_API_URL,{method:'POST',headers:headers,body:JSON.stringify(payload)});
    var data=await res.json().catch(function(){return{};});
    if(!res.ok) throw new Error(data.error||('HTTP '+res.status));
    showStatus('ok','\u2713 Feedback sent. Thank you!');
    document.getElementById('feedback-form').reset();
  }catch(err){
    showStatus('err','\u2717 Could not send: '+err.message);
  }finally{
    btn.disabled=false; btn.textContent='Send Feedback \u2192';
  }
});

injectReleaseTag();
setFeedbackInactiveState();
prefillFeedbackDraft();

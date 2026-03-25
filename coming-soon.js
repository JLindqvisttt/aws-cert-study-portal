const APP_RELEASE = '1.0.0';

function toggleTheme() {
  var html = document.documentElement;
  var next = (html.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  document.getElementById('theme-toggle').textContent = next === 'dark' ? '◐' : '◑';
}
(function () {
  var t = localStorage.getItem('theme') || 'dark';
  document.getElementById('theme-toggle').textContent = t === 'dark' ? '◐' : '◑';
  var p = new URLSearchParams(window.location.search);
  var cert = p.get('cert') || 'Certification';
  document.getElementById('cert-code').textContent = cert.toUpperCase();
  var footer = document.querySelector('.portal-footer');
  if (footer && !footer.querySelector('.app-release-tag')) {
    var sep = document.createElement('span');
    sep.className = 'footer-sep app-release-tag';
    sep.innerHTML = '&middot;';
    var rel = document.createElement('span');
    rel.className = 'app-release-tag';
    rel.textContent = 'Release ' + APP_RELEASE;
    footer.appendChild(sep);
    footer.appendChild(rel);
  }
})();

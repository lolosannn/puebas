// Scale the fixed 1440px design to fit any viewport width.
(function () {
  var page = document.getElementById('page');
  var DESIGN_WIDTH = 1440;

  function fit() {
    var vw = window.innerWidth;
    var scale = vw < DESIGN_WIDTH ? vw / DESIGN_WIDTH : 1;
    page.style.transform = 'scale(' + scale + ')';
    page.style.height = (page.scrollHeight * scale) + 'px';
    document.body.style.minHeight = (page.getBoundingClientRect().height) + 'px';
  }

  window.addEventListener('resize', fit);
  window.addEventListener('load', fit);
  fit();
})();

// Auto-load real images dropped into /images — replaces each placeholder
// block (.ph) with the matching photo, matched by its data-asset label.
document.addEventListener('DOMContentLoaded', function () {
  var EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

  function slugify(label) {
    var base = label.split('—')[0].trim();
    return base
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function tryExtensions(slug, extIndex, onFound) {
    if (extIndex >= EXTENSIONS.length) return;
    var url = 'images/' + slug + '.' + EXTENSIONS[extIndex];
    var img = new Image();
    img.onload = function () { onFound(url); };
    img.onerror = function () { tryExtensions(slug, extIndex + 1, onFound); };
    img.src = url;
  }

  document.querySelectorAll('.ph[data-asset]').forEach(function (el) {
    var slug = slugify(el.getAttribute('data-asset'));
    tryExtensions(slug, 0, function (url) {
      var img = document.createElement('img');
      img.src = url;
      img.alt = '';
      img.className = el.className;
      img.style.cssText = el.style.cssText + ';object-fit:cover;display:block;';
      el.replaceWith(img);
    });
  });
});

// Propuesta Gastronómica tabs
document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('.propuesta__tab');
  var panels = document.querySelectorAll('.propuesta__panel');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      var panel = document.querySelector('.propuesta__panel[data-panel="' + tab.dataset.tab + '"]');
      if (panel) panel.classList.add('active');
    });
  });
});

// FAQ accordion
document.addEventListener('DOMContentLoaded', function () {
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var trigger = item.querySelector('.faq-question');
    trigger.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      faqItems.forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });
});

// Budget form (Presupuesto) — front-end only feedback
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('budget-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var successBox = document.getElementById('budget-success');
    form.style.display = 'none';
    if (successBox) successBox.style.display = 'flex';
  });
});

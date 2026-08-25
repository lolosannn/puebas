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

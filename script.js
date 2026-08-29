/* ==========================================================================
   EDLAN BUILDERS AND SUPPLIERS — Site script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 8px 24px rgba(14,23,64,0.35)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  /* ---------- Hero slideshow ---------- */
  var slides = document.querySelectorAll('.slide');
  var dotsWrap = document.querySelector('.slide-dots');
  if (slides.length) {
    var current = 0;
    slides[0].classList.add('active');

    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var dot = document.createElement('button');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', 'Show slide ' + (i + 1));
        dot.addEventListener('click', function () { goToSlide(i); });
        dotsWrap.appendChild(dot);
      });
    }

    function goToSlide(index) {
      slides[current].classList.remove('active');
      if (dotsWrap) dotsWrap.children[current].classList.remove('active');
      current = index;
      slides[current].classList.add('active');
      if (dotsWrap) dotsWrap.children[current].classList.add('active');
    }

    setInterval(function () {
      goToSlide((current + 1) % slides.length);
    }, 5000);
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- Loading overlay (logo as loading indicator) ---------- */
  var overlay = document.getElementById('loadOverlay');

  function showLoader() {
    if (overlay) overlay.classList.add('show');
  }
  function hideLoader() {
    if (overlay) overlay.classList.remove('show');
  }

  // Hide loader once the page has fully rendered (covers the case where
  // this page itself was reached via a loader-triggering link).
  window.addEventListener('load', function () {
    setTimeout(hideLoader, 350);
  });

  // Trigger the logo loader on internal page navigation.
  document.querySelectorAll('a[data-nav]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href || href.startsWith('#') || link.target === '_blank') return;
      e.preventDefault();
      showLoader();
      setTimeout(function () { window.location.href = href; }, 550);
    });
  });

  /* ---------- Contact form ---------- */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      showLoader();

      var name = form.querySelector('#name').value.trim();
      var phone = form.querySelector('#phone').value.trim();
      var service = form.querySelector('#service').value;
      var message = form.querySelector('#message').value.trim();

      var body = 'Name: ' + name + '%0D%0APhone: ' + phone +
                 '%0D%0AService needed: ' + service +
                 '%0D%0A%0D%0A' + encodeURIComponent(message);
      var subject = encodeURIComponent('Website enquiry from ' + (name || 'a visitor'));

      setTimeout(function () {
        window.location.href = 'mailto:edlanbid@gmail.com?subject=' + subject + '&body=' + body;
        hideLoader();
        var confirmBox = document.getElementById('formConfirm');
        if (confirmBox) confirmBox.style.display = 'block';
        form.reset();
      }, 700);
    });
  }

  /* ---------- Any generic button that should show the loader briefly ---------- */
  document.querySelectorAll('[data-loader]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      showLoader();
      setTimeout(hideLoader, 900);
    });
  });

});
        

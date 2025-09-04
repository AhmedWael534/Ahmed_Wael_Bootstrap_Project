// custom-scripts.js
document.addEventListener("DOMContentLoaded", function () {


  // Tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (el) {
    new bootstrap.Tooltip(el);
  });

  // Popovers
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  popoverTriggerList.forEach(function (el) {
    new bootstrap.Popover(el);
  });

  // Toast button (index)
  var toastBtn = document.getElementById('showToastBtn');
  var toastEl = document.getElementById('promoToast');
  if (toastBtn && toastEl) {
    var toast = new bootstrap.Toast(toastEl);
    toastBtn.addEventListener('click', function () {
      toast.show();
    });
  }

  // Form validation (Bootstrap recommended pattern)
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // show success alert if present (contact page)
        var successAlert = document.getElementById('formAlert');
        if (successAlert) {
          successAlert.classList.remove('d-none');
        } else {
          // fallback: simple alert
          alert('✅ Form submitted (demo)');
        }
        event.preventDefault(); // demo: prevent actual submit
        form.reset();
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Spinner: hide after short delay and show specials (index)
  window.addEventListener('load', function () {
    var spinner = document.getElementById('spinner');
    var specials = document.getElementById('specials-content');
    if (spinner && specials) {
      setTimeout(function () {
        spinner.style.display = 'none';
        specials.style.display = 'block';
      }, 1500); // 1.5s
    }
  });

  // Filtering  (index and menu)
  var filterBtns = document.querySelectorAll('.filter-btn');
  var menuItems = document.querySelectorAll('.menu-item');

  function setActiveFilterButton(clicked) {
    filterBtns.forEach(function (b) {
      b.classList.remove('active');
    });
    clicked.classList.add('active');
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      setActiveFilterButton(btn);
      menuItems.forEach(function (item) {
        if (filter === 'all') {
          item.style.display = '';
        } else {
          // items classes
          if (item.classList.contains(filter)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        }
      });

      // optional: smooth scroll to specials/menu area if on other page
      var specialsSection = document.getElementById('specials');
      if (specialsSection) {
        specialsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Smooth scroll for hash links in nav
  document.querySelectorAll('a.nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Ensure menu items visible on load (menu page)
  if (document.getElementById('menu-grid')) {
    menuItems.forEach(function (item) {
      item.style.display = '';
    });
  }

});
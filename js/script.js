function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText;
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  document.dispatchEvent(new CustomEvent('includesLoaded'));
}

function initNavbar() {
  var navbar = document.getElementById('siteNavbar')
  if (!navbar) return

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled')
    } else {
      navbar.classList.remove('navbar-scrolled')
    }
  })

  var path = window.location.pathname.split('/').pop() || 'index.html'
  var pageName = path.replace('.html', '') || 'index'

  document.querySelectorAll('.nav-link[data-page]').forEach(function (link) {
    if (link.getAttribute('data-page') === pageName) {
      link.classList.add('active')
    }
  })
}

document.addEventListener('includesLoaded', initNavbar)

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', function () {
          const selectElement = this.nextElementSibling;
          selectElement.classList.toggle('hidden');
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Example: Add event listeners to the build guide items
  document.querySelectorAll('.guide').forEach(guide => {
      guide.addEventListener('click', () => {
          alert(`You clicked on ${guide.querySelector('h3').textContent}`);
      });
  });
});




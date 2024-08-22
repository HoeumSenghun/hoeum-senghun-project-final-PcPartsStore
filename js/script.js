function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText;
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

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




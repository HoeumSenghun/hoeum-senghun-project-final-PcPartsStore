document.addEventListener('includesLoaded', function () {
  if (!document.body.classList.contains('landing-page')) return

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.15 })

  document.querySelectorAll('.feature-card, .product-card, .build-card, .step-card, .category-card').forEach(function (el) {
    el.classList.add('fade-up')
    observer.observe(el)
  })
})

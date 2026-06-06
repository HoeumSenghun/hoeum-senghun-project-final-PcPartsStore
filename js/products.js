document.addEventListener('includesLoaded', function () {
  var categoryBtns = document.querySelectorAll('.category-btn')
  var sections = document.querySelectorAll('.product-category')

  categoryBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      categoryBtns.forEach(function (b) { b.classList.remove('active') })
      btn.classList.add('active')
    })
  })

  if (sections.length && categoryBtns.length) {
    window.addEventListener('scroll', function () {
      var scrollPos = window.scrollY + 140
      sections.forEach(function (section) {
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          var id = section.getAttribute('id')
          categoryBtns.forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('href') === '#' + id)
          })
        }
      })
    })
  }

  var filterBtns = document.querySelectorAll('.guide-filter-btn')
  var buildCards = document.querySelectorAll('.full-build-card')

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter')
      filterBtns.forEach(function (b) { b.classList.remove('active') })
      btn.classList.add('active')

      buildCards.forEach(function (card) {
        var type = card.getAttribute('data-type') || ''
        if (filter === 'all' || type.indexOf(filter) !== -1) {
          card.classList.remove('hidden-build')
        } else {
          card.classList.add('hidden-build')
        }
      })
    })
  })
})

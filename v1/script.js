(function () {
  var links = document.querySelectorAll('a[href^="https://wa.me/"]');
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      // noop analytics hook
    });
  });
})();

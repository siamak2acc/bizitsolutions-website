(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".primary-nav");
  var year = document.querySelector("[data-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var path = window.location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll(".primary-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href) {
      return;
    }

    var normalized = href.replace(/\/$/, "") || "/";
    if (normalized === path || (path.indexOf(normalized) === 0 && normalized !== "/")) {
      link.classList.add("is-active");
    }
  });
})();

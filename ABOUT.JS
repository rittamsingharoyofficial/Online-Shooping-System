(function () {
    const Header = document.querySelector(".js-page-header");
    const hideHeader = new Headroom(Header, {
      offset: 100,
      tolerance: 5,
      classes: {
        initial: "header--fixed",
        pinned: "slideDown",
        unpinned: "slideUp",
        top: "top",
        notTop: "not-top"
      }
    });
    hideHeader.init();
    window.addEventListener("scroll", () => {
      if (window.pageYOffset === 0) {
        Header.classList.remove("slideDown");
      }
    });
  })();
  
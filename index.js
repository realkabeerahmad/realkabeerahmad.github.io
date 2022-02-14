window.addEventListener("scroll", reveal);
$(function () {
  $(window).on("scroll", function () {
    var WindowTop = $(window).scrollTop();
    $("section").each(function (i) {
      if (
        WindowTop > $(this).offset().top - 100 &&
        WindowTop < $(this).offset().top + $(this).outerHeight(true)
      ) {
        $(".navlink").removeClass("active");
        $(".navbar li").eq(i).find("a").addClass("active");
      }
    });
  });

  $("a[href*=\\#]:not([href=#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });
});
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("activate");
    } else {
      reveals[i].classList.remove("activate");
    }
  }
}

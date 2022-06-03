// desktop menu
$(".toggle-btn").click(function () {
  $("#menu-toggle").toggle();
});
// mobile menu
$(".toggle-menu-btn").click(function () {
  $("#mobile-menu").toggle();
});
// nav-dropdown
$(document).on("click", ".menu-toggled", function (e) {
  e.stopPropagation();
  $(".menu-toggled").not($(this)).removeClass("active");
  $(this).toggleClass("active");
});

$(document).on("click", function () {
  $(".menu-toggled").removeClass("active");
});

$(document).on("click", ".menu-content", function (e) {
  e.stopPropagation();
});
//myCarousel
$("section.rəqəmsal .carousel .carousel-item").each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

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

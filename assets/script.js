// desktop menu
$(".toggle-btn").click(function () {
  $("#menu-toggle").toggle();
});
// mobile menu
$(".toggle-menu-btn").click(function () {
  $("#mobile-menu").toggle();
});

// accordion;

$(".panel-collapse").on("show.bs.collapse", function () {
  $(this).siblings(".panel-heading").addClass("active");
});

$(".panel-collapse").on("hide.bs.collapse", function () {
  $(this).siblings(".panel-heading").removeClass("active");
});
// nav-tabs-toggle
$(".nav-tabs-toggle").click(function () {
  $("#myTabContent").toggle();
});

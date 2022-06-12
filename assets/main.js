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
// elanlarCarousel
$("section.elanlar .carousel .carousel-item").each(function () {
  var minPerSlide = 3;
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
// xabar-page
$(function () {
  $("#xaberdatepicker").datepicker({
    showOtherMonths: true,
    firstDay: 1,
    selectOtherMonths: true,
    changeMonth: true,
    changeYear: true,
  });
});
// filterdatepicker
$(function () {
  $("#filterdatepicker").datepicker({
    showOtherMonths: true,
    firstDay: 1,
    selectOtherMonths: true,
    changeMonth: true,
    changeYear: true,
  });
});
// eventCalender
$(function () {
  $("#eventCalender").datepicker({
    showOtherMonths: true,
    changeMonth: true,
    changeYear: false,
    showButtonPanel: false,
    dateFormat: "MM yy",
    onClose: function (dateText, inst) {
      $(this).datepicker(
        "setDate",
        new Date(inst.selectedYear, inst.selectedMonth, 1)
      );
    },
  });
  $("#eventCalender").on("change", function () {
    var selected = $(this).val();
    document.getElementById("eventCalenderResult").innerHTML = selected;
  });
});

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
// filter-btn
$(".filter-btn,.close-btn").click(function () {
  $("#filter-search").toggle();
});

// tabs-to-dropdown
const $tabsToDropdown = $(".tabs-to-dropdown");

function generateDropdownMarkup(container) {
  const $navWrapper = container.find(".nav-wrapper");
  const $navPills = container.find(".nav-pills");
  const firstTextLink = $navPills.find("li:first-child a").text();
  const $items = $navPills.find("li");
  const markup = `
    <div class="dropdown d-lg-none">
      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${firstTextLink}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
        ${generateDropdownLinksMarkup($items)}
      </div>
    </div>
  `;
  $navWrapper.prepend(markup);
}

function generateDropdownLinksMarkup(items) {
  let markup = "";
  items.each(function () {
    const textLink = $(this).find("a").text();
    markup += `<a class="dropdown-item" href="#">${textLink}</a>`;
  });

  return markup;
}

function showDropdownHandler(e) {
  // works also
  //const $this = $(this);
  const $this = $(e.target);
  const $dropdownToggle = $this.find(".dropdown-toggle");
  const dropdownToggleText = $dropdownToggle.text().trim();
  const $dropdownMenuLinks = $this.find(".dropdown-menu a");
  const dNoneClass = "d-none";
  $dropdownMenuLinks.each(function () {
    const $this = $(this);
    if ($this.text() == dropdownToggleText) {
      $this.addClass(dNoneClass);
    } else {
      $this.removeClass(dNoneClass);
    }
  });
}

function clickHandler(e) {
  e.preventDefault();
  const $this = $(this);
  const index = $this.index();
  const text = $this.text();
  $this.closest(".dropdown").find(".dropdown-toggle").text(`${text}`);
  $this
    .closest($tabsToDropdown)
    .find(`.nav-pills li:eq(${index}) a`)
    .tab("show");
}

function shownTabsHandler(e) {
  // works also
  //const $this = $(this);
  const $this = $(e.target);
  const index = $this.parent().index();
  const $parent = $this.closest($tabsToDropdown);
  const $targetDropdownLink = $parent.find(".dropdown-menu a").eq(index);
  const targetDropdownLinkText = $targetDropdownLink.text();
  $parent.find(".dropdown-toggle").text(targetDropdownLinkText);
}

$tabsToDropdown.each(function () {
  const $this = $(this);
  const $pills = $this.find('a[data-toggle="pill"]');

  generateDropdownMarkup($this);

  const $dropdown = $this.find(".dropdown");
  const $dropdownLinks = $this.find(".dropdown-menu a");

  $dropdown.on("show.bs.dropdown", showDropdownHandler);
  $dropdownLinks.on("click", clickHandler);
  $pills.on("shown.bs.tab", shownTabsHandler);
});

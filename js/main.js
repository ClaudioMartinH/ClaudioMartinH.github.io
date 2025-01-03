(function ($) {
  "use strict";

  $(".nav-menu").superfish({
    animation: { opacity: "show" },
    speed: 400,
  });

  if ($(".top-header h2").length == 1) {
    var typed_strings = $(".top-header p").text();
    var typed = new Typed(".top-header h2", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container")
      .clone()
      .prop({ id: "mobile-nav" });
    $mobile_nav.find("> ul").attr({ class: "", id: "" });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function (e) {
      $(this).next().toggleClass("menu-item-active");
      $(this).nextAll("ul").eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  $(".nav-menu a, #mobile-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        1500,
        "easeInOutExpo"
      );

      if ($(this).parents(".nav-menu").length) {
        $(".nav-menu .menu-active").removeClass("menu-active");
        $(this).closest("li").addClass("menu-active");
      }
    }
  });

  $(".header").sticky({ topSpacing: 0, zIndex: "50" });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $(".skills").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
  function changeLanguage(lang) {
    const links = document.querySelectorAll("header nav ul li a");
    links.forEach((link) => {
      const title = link.getAttribute(`data-title-${lang}`);
      link.setAttribute("title", title);
    });

    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element) => {
      element.style.display =
        element.getAttribute("data-lang") === lang ? "" : "none";
    });

    document.documentElement.lang = lang;
    const languageSelector = document.getElementById("languageSelector");
    if (languageSelector) {
      languageSelector.value = lang;
    }

    updateCVDownload(lang);
  }
})(jQuery);

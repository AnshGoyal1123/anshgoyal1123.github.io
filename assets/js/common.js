$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});

// Provide a vanilla JS fallback for navbar toggles when Bootstrap's jQuery plugin is unavailable.
document.addEventListener("DOMContentLoaded", function () {
  var bootstrapCollapseAvailable =
    typeof window.jQuery !== "undefined" &&
    typeof window.jQuery.fn !== "undefined" &&
    typeof window.jQuery.fn.collapse !== "undefined";

  if (bootstrapCollapseAvailable) {
    return;
  }

  var togglers = document.querySelectorAll(".navbar-toggler");
  if (!togglers.length) {
    return;
  }

  var breakpointLookup = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  };

  togglers.forEach(function (toggler) {
    var navbar = toggler.closest(".navbar");
    var expandAt = 0;
    if (navbar) {
      var expandClass = Array.from(navbar.classList).find(function (cls) {
        return cls.indexOf("navbar-expand") === 0;
      });

      if (expandClass) {
        var parts = expandClass.split("-");
        var size = parts[2];
        if (size && breakpointLookup[size]) {
          expandAt = breakpointLookup[size];
        }
      }
    }

    var targetSelector =
      toggler.getAttribute("data-target") ||
      toggler.getAttribute("data-bs-target") ||
      (toggler.hasAttribute("aria-controls") ? "#" + toggler.getAttribute("aria-controls") : null);

    if (!targetSelector) {
      return;
    }

    try {
      var collapseTarget = document.querySelector(targetSelector);
      if (!collapseTarget) {
        return;
      }

      toggler.addEventListener("click", function (event) {
        event.preventDefault();

        var isOpen = collapseTarget.classList.contains("show");
        collapseTarget.classList.toggle("show", !isOpen);
        collapseTarget.style.display = isOpen ? "none" : "";
        toggler.classList.toggle("collapsed", isOpen);
        toggler.setAttribute("aria-expanded", (!isOpen).toString());
      });

      // Ensure the initial hidden state matches Bootstrap's expectation.
      if (!collapseTarget.classList.contains("show")) {
        collapseTarget.style.display = "none";
      }

      var syncForResize = function () {
        if (expandAt && window.innerWidth >= expandAt) {
          collapseTarget.style.display = "";
          toggler.classList.add("collapsed");
          toggler.setAttribute("aria-expanded", "true");
          collapseTarget.classList.remove("show");
        } else {
          if (collapseTarget.classList.contains("show")) {
            collapseTarget.style.display = "";
            toggler.classList.remove("collapsed");
            toggler.setAttribute("aria-expanded", "true");
          } else {
            collapseTarget.style.display = "none";
            toggler.classList.add("collapsed");
            toggler.setAttribute("aria-expanded", "false");
          }
        }
      };

      syncForResize();
      window.addEventListener("resize", syncForResize);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn("Navbar fallback toggle failed:", error);
    }
  });
});

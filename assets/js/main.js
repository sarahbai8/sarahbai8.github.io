$(document).ready(function() {
  // Smooth scrolling
  // ----------------

  $("a").smoothScroll({ offset: -100 });

  // Back to top arrow
  // -----------------

  $(window).on("scroll", debounce(checkScrollFn, 1000));
  checkScrollFn();
});

function checkScrollFn() {
  var $window = $(window),
    $backToTop = $(".back-to-top"),
    className = "back-to-top--show";
  if ($window.scrollTop() > $window.height() * 0.7) {
    $backToTop.addClass(className);
  } else {
    $backToTop.removeClass(className);
  }
}

// adapted from https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait) {
  var timeout;
  return function() {
    var ctx = this,
      args = arguments,
      laterFn = function() {
        timeout = null;
        func.apply(ctx, args);
      };
    clearTimeout(timeout);
    setTimeout(laterFn, wait);
  };
}

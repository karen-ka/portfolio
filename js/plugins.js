// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
// function linkToAbTesting() {
//   location.href = 'abtesting.html';
// }

// $("#grid-abtesting").click(function(e) {
//   e.preventDefault();
//   console.log(e)
//   window.location.href ='testing.html';
//   // alert( "Handler for .click() called." );
// });

// $(".grid-item").click(function() {
//   alert( "Handler for .click() called." );
// });
window.onload = function () {
  main();
};

// main function then window onload
function main () {
  var $box = document.querySelector('.box');

  $box.addEventListener('touchstart', handleTouchStart, false);

  var startPosition = {};

  $box.style.touchAction = 'auto';
  $box.style.userSelect = 'none';
  $box.style.webkitUserDrag = 'none';
  $box.style.webkitTapHighlightColor = 'rgba(0, 0, 0, 0)';

  $box.style.transitionProperty = 'transform';
  $box.style.webkitTransitionProperty = 'transform';

  $box.style.transitionTimingFunction = 'cubic-bezier(0,0,0.25,1)';
  $box.style.webkitTransitionTimingFunction = 'cubic-bezier(0,0,0.25,1)';

  function handleTouchStart (event) {
    var position = {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };

    startPosition = position;

    $box.style.transitionDuration = '60ms';
    $box.style.webkitTransitionDuration = '60ms';

    $box.addEventListener('touchmove', handleTouchMove, false);
    $box.addEventListener('touchend', handleTouchEnd, false);
  }

  function handleTouchMove (event) {
    var position = {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };

    var detla = {
      x: position.x - startPosition.x,
      y: position.y - startPosition.y,
    };

    var transformStr = `translate3d(${detla.x}px, ${detla.y}px, 0px)`;

    $box.style.transform = transformStr;
    $box.style.webkitTransform = transformStr;
  }

  function handleTouchEnd (event) {
    var position = {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };

    var detla = {
      x: position.x - startPosition.x,
      y: position.y - startPosition.y,
    };

    var transformStr = `translate3d(0px, 0px, 0px)`;
    $box.style.transform = transformStr;
    $box.style.webkitTransform = transformStr;

    $box.style.transitionDuration = '300ms';
    $box.style.webkitTransitionDuration = '300ms';

    setTimeout(function () {
      $box.style.transitionDuration = '0';
      $box.style.webkitTransitionDuration = '0';
    }, 300);

    $box.removeEventListener('touchmove', handleTouchMove, false);
    $box.removeEventListener('touchend', handleTouchEnd, false);
  }
}

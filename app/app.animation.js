angular.module("quizapp").animation(".quiz", function quizAnimationFactory() {
  return {
    addClass: fadeInAnimation,
    removeClass: fadeOutAnimation,
  };

  function fadeInAnimation(element, className, done) {
    lement
      .css({
        display: "block",
        position: "absolute",
        top: 500,
        left: 0,
      })
      .animate(
        {
          top: 0,
        },
        done
      );

    return function animateInEnd(wasCanceled) {
      if (wasCanceled) element.stop();
    };
  }
  function fadeOutAnimation(element, className, done) {
    if (className !== "selected") return;

    element
      .css({
        position: "absolute",
        top: 0,
        left: 0,
      })
      .animate(
        {
          top: -500,
        },
        done
      );

    return function animateOutEnd(wasCanceled) {
      if (wasCanceled) element.stop();
    };
  }
});

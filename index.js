(async () => {
  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  // Delete template message

  // Delete subscription message
  const subscription = document.getElementById("modal_planes_register");
  subscription.remove();

  // Unblur everytime content gets blurred
  while (true) {
    var allClasses = [];

    var allElements = document.querySelectorAll("*");

    for (var i = 0; i < allElements.length; i++) {
      var classes = allElements[i].className.toString().split(/\s+/);
      for (var j = 0; j < classes.length; j++) {
        var cls = classes[j];
        if (cls && allClasses.indexOf(cls) === -1) allClasses.push(cls);
      }
    }

    allClasses.forEach((el) => {
      var els = document.getElementsByClassName(el);
      for (var i = 0; i < els.length; i++) {
        els[i].style.removeProperty("filter");
      }
    });

    await sleep(750);
  }
})();

'use strict';

(function () {
  var msnry;

  if (! window.hasOwnProperty('Masonry')) {
    Typekit.load();
    return;
  }

  function triggerMasonry() {
    // don't proceed if masonry has not been initialized
    if (! msnry) { return; }
    msnry.layout();
  }

  // initialize masonry on document ready
  docReady(function() {
    msnry = new Masonry('.project-section', {
      gutter: 10,
      itemSelector: '.project',
      columnWidth: 325,
    });
  });

  // trigger masonry when fonts have loaded
  Typekit.load({
    active: triggerMasonry,
    inactive: triggerMasonry
  });
}());

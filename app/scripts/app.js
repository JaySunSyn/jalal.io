/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Jays elements are ready to rock! Contact: jfathi.mail@gmail.com');

    var headerPanel = document.querySelector('#headerPanel');

    headerPanel.addEventListener('content-scroll', function(event) {
      var scroller = event.detail.target;
      var pageLanding = document.querySelector('#pageLanding');
      pageLanding.scrollChanged(scroller.scrollTop);

    });


    // get scroll advice
    var pageProjects = document.querySelector('#pageProjects');
    pageProjects.addEventListener('scroll-advice', function(event) {
      var element = document.getElementById(event.detail);
      
      var yPosition = 0;
    
      // while(element) {
      //     yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      // }

      var headerPanel = document.querySelector('#headerPanel');
      // headerPanel.measureHeaderHeight;
      console.log(headerPanel.header.offsetHeight);
      headerPanel.scroller.scrollTop = element.offsetTop; 

    });

  });


  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    document.querySelector('body').removeAttribute('unresolved');

    // Ensure the drawer is hidden on desktop/tablet
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    // drawerPanel.forceNarrow = true;
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

})(document);

// TODO: Decide if we still want to suggest wrapping as it requires
// using webcomponents.min.js.
// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
// )(wrap(document));

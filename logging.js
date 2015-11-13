navigator.serviceWorker.getRegistration().then(function(reg) {
  function showWaitingMessage() {
    console.log("New service worker installed");
  }

  reg.addEventListener('updatefound', function() {
    var installing = reg.installing;
    reg.installing.addEventListener('statechange', function() {
      if (installing.state == 'installed') {
        console.log("New ServiceWorker installed.");
        // give it a second to see if it activates immediately
        setTimeout(function() {
          if (installing.state == 'activated') {
            serviceWorkerNotify.classList.add("notify");
          }
          else {
            showWaitingMessage();
          }
        }, 1000);
      }
      else if (installing.state == 'redundant') {
        console.log("Error installing ServiceWorker");
      }
    });
  });

  if (reg.waiting) {
    showWaitingMessage();
  }
});

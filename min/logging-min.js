navigator.serviceWorker.getRegistration().then(function(e){function t(){console.log("A new ServiceWorker is waiting to become active. It can't become active now because pages are still open that are controlled by the older version. Either close those tabs, or shift+reload them (which loads them without the ServiceWorker). That will allow the new version to become active, so it'll be used for the next page load.")}e.addEventListener("updatefound",function(){console.log("Found a new ServiceWorker!");var o=e.installing;e.installing.addEventListener("statechange",function(){"installed"==o.state?(console.log("New ServiceWorker installed."),setTimeout(function(){"activated"==o.state?console.log("New ServiceWorker activated! Reload to load this page with the new ServiceWorker."):t()},1e3)):"redundant"==o.state&&console.log("The new worker failed to install")})}),e.waiting&&t()});
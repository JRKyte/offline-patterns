if (!navigator.serviceWorker.controller) {
  console.log("This page is not controlled by a ServiceWorker");
}
else {
  console.log("You can view this page offline");
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then((req) => {
      console.log('Yes, it did.', req)
    })
    .catch((err) => {
      console.error("No it didn't. This happened: ", err)
    })
}

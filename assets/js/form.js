// ==================== FORM JS ====================
const scriptURL = 'https://script.google.com/macros/s/AKfycbyPl6DYLz8aTimibvK6xeB7S4uINPeC6-71EbWlS6787MTjCKioVE1o3ehzJFwxgwVUgg/exec'
const form = document.forms['notyourwizzz']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
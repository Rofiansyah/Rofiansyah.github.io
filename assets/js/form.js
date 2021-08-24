// ==================== FORM JS ====================
const scriptURL = 'https://script.google.com/macros/s/AKfycbyPl6DYLz8aTimibvK6xeB7S4uINPeC6-71EbWlS6787MTjCKioVE1o3ehzJFwxgwVUgg/exec'
const form = document.forms['notyourwizzz']
const send = document.querySelector('.button-send')
const loading = document.querySelector('.button-loading')
const alert = document.querySelector('.section__title_3')


  form.addEventListener('submit', e => {
    e.preventDefault()

    // sending
    loading.classList.toggle('d-none')
    send.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // loading
        loading.classList.toggle('d-none')
        send.classList.toggle('d-none')
        alert.classList.toggle('d-none')

        // reset form
        form.reset()

        console.log('Success!', response)
    })
      .catch(error => console.error('Error!', error.message))
  })

  if(alert){
    alert.addEventListener('click', () =>{
      alert.classList.toggle('d-none')
    })
  }
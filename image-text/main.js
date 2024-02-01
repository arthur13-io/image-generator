import './style.css'

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const prompt = new FormData(form);
    const response = await fetch('http://localhost:8080/dream', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        prompt: prompt.get('prompt')
      })
    })
    const { image } = await response.json();
    const result = document.querySelector('#result')
    result.innerHTML = `<img src =${image} width="512"/>`
});

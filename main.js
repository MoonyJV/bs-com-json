document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('data.json')
    const destinos = response.json()
    console.log(destinos)
})
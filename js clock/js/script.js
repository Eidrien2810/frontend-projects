const $screen = document.getElementById('screen');
setInterval(() => {
    $screen.textContent = new Date().toLocaleTimeString().slice(0, 8)
}, 0)
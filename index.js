const keyframes = document.createElement('style');

const container = document.getElementById('container');

window.addEventListener('keypress', (event) => {
// Keyframes
    keyframes.innerHTML = `
    @keyframes rain {
        0% {
            transform: scale(0.8, 1.2) translateY(-800px);
        }
        50% {
            transform: scale(1.4, 0.6);
        }
        70% {
            transform: scale(0.9, 1.1) 
            translateY(${-100 - Math.round(Math.random() * 100)}px) 
            translateX(${Math.round(Math.random() * 300) - 150}px) scale(0);
        }
        100% {
            transform: scale(0.9, 1.1) 
            translateY(${-100 - Math.round(Math.random() * 0)}px) 
            translateX(${Math.round(Math.random() * 300) - 150}px) scale(0);
        }
    }
    `
    document.body.appendChild(keyframes);

// Typing
    const letter = document.createElement('span');
    
    letter.style.animation = `1 normal linear forwards rain ${1200 + Math.round(Math.random() * 800)}ms`

    letter.innerHTML = `${event.key}`

    letter.style.left = `${Math.round(Math.random() * 100)}%`

    container.appendChild(letter);
});

setInterval(()=>{container.firstChild.remove()}, 2000);
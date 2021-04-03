let container = document.getElementById('container');

window.addEventListener('keypress', (event) => {
    let num = Math.round(Math.random()*2);
    
    const letter = document.createElement('span');
    
    letter.style.animation = `1 normal ease-in-out forwards rain${num} ${1000+Math.random()*500}ms`

    letter.innerHTML = `${event.key}`

    letter.style.left = `${Math.round(Math.random()*100)}%`
    
    container.appendChild(letter);
});

setInterval(()=>{container.firstChild.remove()}, 2000);
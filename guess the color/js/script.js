function getRgbColor(){
    let color = [];
    let random;
    for(let i = 0; i < 3; i++) {
        random = Math.floor(Math.random() * 255) + 1;
        color.push(random);
    }
    return `rgb(${color.join(',')})`;
}
const $ = item => document.querySelector(item);
const $_ = item => document.querySelectorAll(item);

const $content = $('.content');
const $chosenColor = $('h1 span');
const $newColor = $('#new-color');
$newColor.addEventListener('click', () => setColor());

const $gameModes = $('.menu div');
let mode = null;
let selected;
let lives = 3;
$gameModes.addEventListener('click', e => {
    if(e.target.dataset.mode && e.target.tagName !== "div"){
        mode = e.target.dataset.mode;
        e.target.classList.toggle('selected')
        selected = e.target;
        alert(`${mode} mode`)
    }
    if (mode == 'easy'){
        $gameModes.children[1].classList.add('not-selected')
        $gameModes.children[1].classList.remove('selected')
        $gameModes.children[0].classList.add('selected')
    } else {
        
        $gameModes.children[0].classList.add('not-selected')
        $gameModes.children[0].classList.remove('selected')
        $gameModes.children[1].classList.add('selected')
        
    }
})
function setColor (){
    for (let i = 0; i < $content.children.length; i++) {
    const element = $content.children[i];
    element.style.backgroundColor = getRgbColor()
    
    }
    $chosenColor.textContent = $content.children[Math.floor(Math.random() * $content.children.length)].style.backgroundColor;
    lives = 3;
}
setColor();
$content.addEventListener('click', (e) => {
    if (e.target.tagName !== 'MAIN'){
        if ($chosenColor.textContent == e.target.style.backgroundColor){
            alert('You win!!')
            setColor()
        } else {
            if (lives <= 0){
            alert('You lost')
            setColor()
            return;
            }    
            if (mode == 'hard'){
                lives--;
                alert(`${mode} mode, ${lives} lives remaining`)
            } else {
                alert('try again')
            }
            e.target.style.backgroundColor = `#ff4f4f`;
        }
    }
    
});
/* 
    // capturar los clicks .menu article
    definir dos modos (facil y dificil)
    poner el color de fondo en el modo que presionemos de modo tal de que si ya hemos presionado un modo y presionamos otro el color anterior se quita
*/

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', ()=> {
    const coverElement = document.querySelector('.cover');
    const iconElement1 = document.querySelector('.heart1');
    const iconElement2 = document.querySelector('.heart2');
    const iconElement3 = document.querySelector('.heart3');

    coverElement.classList.add('open-cover');
    btnCloseElement.disabled = false;
    btnOpenElement.disabled = true;

    setTimeout(()=>{
        coverElement.style.zIndex = -1;

        const paperElement = document.querySelector('.paper');
        paperElement.classList.remove('close-paper');
        paperElement.classList.add('open-paper');
    }, 300)

    setTimeout(() => {
        iconElement1.classList.add('flotar-hearts');
        iconElement2.classList.add('flotar-hearts');
        iconElement3.classList.add('flotar-hearts'); // Inicia la animación de flotar
    }, 500);
})

btnCloseElement.addEventListener('click', ()=> {
    btnCloseElement.disabled = true  ;
    btnOpenElement.disabled = false;


    const coverElement = document.querySelector('.cover');
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('open-paper');
    paperElement.classList.add('close-paper');

    setTimeout(()=>{
        coverElement.style.zIndex = 0;
        coverElement.classList.remove('open-cover');
    }, 300)
})



let siguiente = document.getElementById('next');
let anterior = document.getElementById('prev');

let carousel = document.querySelector('.carousel');
let Slider = document.querySelector('.carousel .list');
let thumbnail = document.querySelector('.carousel .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnail.appendChild(thumbnailItems[0]);// se mueve la primera miniatura al final
let tiempoRemoveBoton = 3000;
let siguienteImagen = 7000;

siguiente.onclick = function(){
    anteriorSiguiente('next');    
}

anterior.onclick = function(){
    anteriorSiguiente('prev');    
}
let tiempoDeEsperaAnimacion;
let temporizadorAutomatico = setTimeout(() => {
    next.click();
}, siguienteImagen)
function anteriorSiguiente(type){
    let imagenPortada = document.querySelectorAll('.carousel .list .item');
    let imagenMiniatura = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        Slider.appendChild(imagenPortada[0]);
        thumbnail.appendChild(imagenMiniatura[0]);
        carousel.classList.add('next');
    }else if(type === 'prev'){
        Slider.prepend(imagenPortada[imagenPortada.length - 1]);
        thumbnail.prepend(imagenMiniatura[imagenMiniatura.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(tiempoDeEsperaAnimacion);
    tiempoDeEsperaAnimacion = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, tiempoRemoveBoton);

    clearTimeout(temporizadorAutomatico);
    temporizadorAutomatico = setTimeout(() => {
        next.click();
    }, siguienteImagen)
}


var autoBtn1 = document.getElementById('auto-btn1')
var autoBtn2 = document.getElementById('auto-btn2')
var autoBtn3 = document.getElementById('auto-btn3')
var autoBtn4 = document.getElementById('auto-btn4')

function slide1(){
    autoBtn1.setAttribute('class', 'color')

    autoBtn2.removeAttribute('class', 'color')
    autoBtn3.removeAttribute('class', 'color')
    autoBtn4.removeAttribute('class', 'color')
}

function slide2(){
    autoBtn2.setAttribute('class', 'color')

    autoBtn1.removeAttribute('class', 'color')
    autoBtn3.removeAttribute('class', 'color')
    autoBtn4.removeAttribute('class', 'color')
}

function slide3(){
    autoBtn3.setAttribute('class', 'color')

    autoBtn1.removeAttribute('class', 'color')
    autoBtn2.removeAttribute('class', 'color')
    autoBtn4.removeAttribute('class', 'color')
}

function slide4(){
    autoBtn4.setAttribute('class', 'color')

    autoBtn1.removeAttribute('class', 'color')
    autoBtn2.removeAttribute('class', 'color')
    autoBtn3.removeAttribute('class', 'color')
}

function verMais(){
    var imgG = document.getElementsByClassName('oculto')

    for(var i = 0; i < 3; i++){
    imgG[i].classList.remove('disabled')
    }

    linkGaleria()
}

function linkGaleria(){
    var linkG = document.getElementsByClassName('ver-mais-galeria')

    linkG[0].classList.add('disabled') 
    linkG[1].classList.remove('disabled') 
}
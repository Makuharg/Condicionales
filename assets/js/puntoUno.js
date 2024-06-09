let img = document.querySelector('.imgUno');
img.onclick = modificarBorde;


function modificarBorde() {
    let clickImg = document.querySelector('img');

    if (clickImg.style.border != '2px solid red') {
        clickImg.style.border = '2px solid red';
    } else {
        clickImg.style.border = 'none';
    }
}

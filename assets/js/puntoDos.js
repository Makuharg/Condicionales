let button = document.querySelector('button');
button.onclick = totalStickers;

function totalStickers() {
    let input1 = document.querySelector('.inputNumber1').value
    let input2 = document.querySelector('.inputNumber2').value
    let input3 = document.querySelector('.inputNumber3').value
    let parrafo = document.querySelector('.parrafo');
    let totalStickers = (Number(input1) + Number(input2) + Number(input3));

    if (totalStickers <= 10) { 
        parrafo.innerHTML = 'Llevas ' + totalStickers + ' stickers';
    } else {
        parrafo.innerHTML = 'Llevas demasiados stickers';
    }
}
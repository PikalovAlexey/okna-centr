let frame = document.getElementById('frame');
let quiz = document.getElementsByClassName('frame__quiz');
let ellips = document.getElementsByClassName('ellips');
let frame_end = document.getElementById('frame__contant_end');
let frame_main_ask = document.getElementById('frame__contant_container');
let messeger_block = Array.from(document.getElementsByClassName('frame__contant_message'))

let counter = 0;
quiz[counter].style.display = 'block';

function showNewAsk() {
    quiz[counter].style.display = 'none';
    ellips[counter].classList.toggle('ellips_active');
    ellips[counter].style.backgroundColor = '#a2d8f7';
    counter++
    
    if (counter < quiz.length) {
        quiz[counter].style.display = 'block';
        ellips[counter].classList.toggle('ellips_active');
    }
    else {
        ellips[counter].classList.toggle('ellips_active');
        frame_end.style.display = 'block';
        frame_main_ask.style.display = 'none';
    }       

}

function closeOpenFrame() {
    frame.classList.toggle('close')
}

function hide() {
    messeger_block.forEach(element => {
        if(element.classList.contains('active_message')) {
            element.classList.remove('active_message')
        }
    });
    this.classList.toggle('active_message')
}
messeger_block.forEach(element => {
    element.onclick = hide
});
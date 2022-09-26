let frame = document.getElementById('frame');
let quiz = document.getElementsByClassName('frame__quiz');
let ellips = document.getElementsByClassName('ellips');
let frame_end = document.getElementById('frame__contant_end');
let frame_main_ask = document.getElementById('frame__contant_container');

let currently_ask_number = 0;
quiz[currently_ask_number].style.display = 'block';

function showNewAsk() {
    quiz[currently_ask_number].style.display = 'none';
    ellips[currently_ask_number].classList.toggle('ellips_active');
    ellips[currently_ask_number].style.backgroundColor = '#a2d8f7';
    currently_ask_number++
    
    if (currently_ask_number < quiz.length) {
        quiz[currently_ask_number].style.display = 'block';
        ellips[currently_ask_number].classList.toggle('ellips_active');
    }
    else {
        ellips[currently_ask_number].classList.toggle('ellips_active');
        frame_end.style.display = 'block';
        frame_main_ask.style.display = 'none';
    }       

}

function closeOpenFrame() {
    frame.classList.toggle('close')
}

function choice_of_messager() { 
    let messeger_block = Array.from(document.getElementsByClassName('frame__contant_message'))
    let choice_of_messager;
    messeger_block.forEach(element => {
        if(element.classList.contains('active_message')) {
            element.classList.remove('active_message')
        }
    });
    this.classList.toggle('active_message')
    choice_of_messager = this.getAttribute("name")
}


function added_function_onclick_for_messagers() {
    let messeger_block = Array.from(document.getElementsByClassName('frame__contant_message'))
    messeger_block.forEach(element => {
        element.onclick = choice_of_messager
    });
    
}

added_function_onclick_for_messagers()

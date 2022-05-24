function get_obj_resoult_quiz() {
    let arr_resoult = {}
    let quiz_block = document.getElementsByClassName('frame__quiz')
    let ask = []
    let answer_inputs_radio = []

    for(i=0; i < quiz_block.length; i++){
        ask[i] = quiz_block[i].getElementsByClassName('ask')[0].innerHTML;
        answer_inputs_radio[i] = quiz_block[i].getElementsByTagName('input')
        
        for (j=0; j < answer_inputs_radio[i].length; j++) {
            if(answer_inputs_radio[i][j].checked) {
                arr_resoult[ask[i]] = answer_inputs_radio[i][j].getAttribute('id')
                break
            }
            arr_resoult[ask[i]] = null
        }
    }
    console.log(arr_resoult)
}


get_obj_resoult_quiz()
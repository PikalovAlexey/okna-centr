function data_collection() {
    let object_date = get_obj_resoult_quiz()
    console.log(object_date)
    test(object_date)
}

function test(data) {
    fetch('php/sendMessage.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
    }).then(res => res.json())
      .then(res => console.log(res))
}

function get_obj_resoult_quiz() {
    // Note bane!!! Function is O(N2)!!!!!
    let obj_resoult = {}
    let quiz_block = document.getElementsByClassName('frame__quiz')
    let ask = []
    let answer_inputs_radio = []

    for(i=0; i < quiz_block.length; i++){
        ask[i] = quiz_block[i].getElementsByClassName('ask')[0].innerHTML;
        answer_inputs_radio[i] = quiz_block[i].getElementsByTagName('input')
        
        for (j=0; j < answer_inputs_radio[i].length; j++) {
            if(answer_inputs_radio[i][j].checked) {
                obj_resoult[ask[i]] = answer_inputs_radio[i][j].getAttribute('id')
                break
            }
            obj_resoult[ask[i]] = null
        }
    }
    obj_resoult['Телефон'] = document.getElementById('phone_quiz').value;
    obj_resoult['Предпочитаемый способ связи'] = get_value_choice_of_messager()
    return obj_resoult
}

function get_value_choice_of_messager() {
    let messeger_block = Array.from(document.getElementsByClassName('frame__contant_message'))
    for (i=0; i < messeger_block.length; i++) {
        if (messeger_block[i].classList.contains('active_message')) {
            return messeger_block[i].getAttribute('name')
        }
    }
}
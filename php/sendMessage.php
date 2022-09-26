<?php 

$data = json_decode(file_get_contents("php://input"));
date_default_timezone_set("Europe/Moscow");
$date = date('D, H:i:s');

$txt = 'Новая заявка! %0A%0A';
foreach($data as $key => $value) { 
    if(!$value){
        $value = 'нет данных';
    }
    $txt .= "<b>".$key."</b> -  ".$value."%0A"; 
}
$txt .= "%0A<b>Время</b>: ".$date;

fopen('https://api.telegram.org/bot5655462294:AAEQUloIjyZ9kTyKPewqhRY50Swg5I0iStc/sendMessage?chat_id=548425373&parse_mode=html&text='.$txt,'r');

echo(json_encode($data));

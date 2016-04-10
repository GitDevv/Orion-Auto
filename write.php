<?php
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $select = htmlspecialchars(trim($_POST['select']));



    $message = "Имя: $name  \nНомер: $phone \nПочта:$email \nВыбраный заказ: $select ";

    $to = 'v.belza008@gmail.com';
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n"; 

    $result = mail($to, "Заказ c Orion-auto: $phone", $message, $headers);
?>

 
 
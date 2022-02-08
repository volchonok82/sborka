<?php
// Файлы phpmailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

// настройки PHPMailer
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    $mail->isHTML(true);

    // Настройки почты под разные системы(https://snipp.ru/php/smtp-phpmailer)
    $mail->Host = 'ssl://smtp.yandex.ru';
    $mail->Port = 465;
    $mail->Username = 'moyakorzina2@yandex.ru'; //логин на почте
    $mail->Password = 'sgeqipcwitestxcb'; //!не сохрянять https://yandex.ru/support/id/authorization/app-passwords.html


    $mail->setFrom('moyakorzina2@yandex.ru', 'Письмо с вашего сайта'); //Адрес самой почты и имя отправителя
    $mail->addAddress('moyakorzina2@yandex.ru'); //получатель письма
    // $mail->addAddress('moyakorzina3@yandes.ru'); //еще один если нужен

    //-----------------------------------------------------------------
    // формирование письма
    $mail->Subject = "Тема письма"; //тема письма

    // перебираем все ключи и значения и формируем таблицу
    $c = true;
    foreach ($_POST as $key => $value) {
        if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
            $body .= "
      " . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
      </tr>
      ";
        }
    }
    $body = "<table style='width: 100%;'>$body</table>";

    // Прикрепление файлов
    $file = $_FILES['file'];

    if (!empty($file['name'][0])) {
        for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
            $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
            $filename = $file['name'][$ct];
            if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
                $mail->addAttachment($uploadfile, $filename);
                $rfile[] = "Файл $filename прикреплен";
            } else {
                $rfile[] = "Не удалось прикрепить файл $filename";
            }
        }
    }

    // задаем письму тело
    $mail->Body = $body;
    $mail->send();
    $message = 'Данные отправлены';
} catch (Exception $e) {
    $message = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// ответ для js
$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

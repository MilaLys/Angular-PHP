<?php
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

if($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header( "HTTP/1.1 200 OK" );
    exit();
}

$connection = @new mysqli('localhost', 'root', '', 'auth_tutorial');
if ($connection->connect_error) {
    die($connection->connect_error);
}

$content = file_get_contents('php://input');
$data = json_decode($content, true);

$insert = $connection->query("INSERT INTO `users` SET 
  `name` = '{$data['username']}', 
  `password` = '{$data['password']}'");

if(!$insert){
    die($connection->error);
}

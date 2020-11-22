<?php
require_once 'mdrza.service.php';

$mdrzaService = new MdrzaService();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type");

// return json to client
echo $mdrzaService->listTeams();
?>

<?php
require_once 'mdrza.service.php';

$mdrzaService = new MdrzaService();

// return json to client
echo $mdrzaService->listTeams();
?>

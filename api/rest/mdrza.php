<?php
require_once '../service/core.service.php';
$coreService = new CoreService();

require_once $coreService->requireConfig();
require_once '../service/mdrza.service.php';

$coreService->setHeader();

$mdrzaService = new MdrzaService();
echo $mdrzaService->listTeams();
?>

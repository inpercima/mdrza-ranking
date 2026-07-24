<?php
require_once '../service/core.service.php';
$coreService = new CoreService();

require_once $coreService->requireConfig();
require_once '../service/list.service.php';

$coreService->setHeader();

$listService = new ListService();
echo $listService->getList();
?>

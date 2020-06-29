<?php
class MdrzaService {

  /**
   * constructor
   */
  public function __construct() {}

  /**
   * List teams and ranking from https://www.mit-dem-rad-zur-arbeit.de
   */
  public function listTeams() {
    $response = file_get_contents('https://www.mit-dem-rad-zur-arbeit.de/api/teamranking.php?_=' . time());
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    return $response;
  }
}
?>

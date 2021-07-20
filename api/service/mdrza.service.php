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
    return file_get_contents('https://www.mit-dem-rad-zur-arbeit.de/api/teamranking.php?trid=98&_=' . time());
  }
}
?>

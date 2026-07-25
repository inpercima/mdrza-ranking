<?php

class ListService {

  private const API_URL = "https://www.mdrza.de/api/statistik/teamranking/3";

  /**
   * constructor
   */
  public function __construct() {}

  /**
   * List all items from a public list from the team ranking API with their details.
   */
  public function getList() {
    $data = $this->fetchList();
    return json_encode($this->map($data));
  }

  /**
   * Fetches a public list from the mdrza team ranking API with the hard coded ID 3.
   */
  private function fetchList() {
    $url = self::API_URL;
    $response = @file_get_contents($url);
    if ($response === false) {
      return (object) [];
    }
    $mdrza = json_decode($response);
    if ($mdrza === null || !isset($mdrza->data)) {
      return (object) [];
    }
    return $mdrza->data;
  }

  /**
   * Map data for the result.
   */
  private function map($data) {
    return array_map(fn($value) => (object) [
      'name' => $value->teamname,
      'sumKm' => (float) $value->summe,
      'sumDays' => (int) $value->tage,
      'member' => (int) $value->AnzTeammember,
      'avgKm' => (float) $value->AvgKM,
      'avgDays' => (int) $value->AvgDays,
      'rank' => $value->rank
    ], $data);
  }
}
?>

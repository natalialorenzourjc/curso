<?php

/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2013 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Model\Entity;

use Application\Model\AbstractModel;
use Zend\Db\Adapter\Adapter;
use Zend\Db\TableGateway\TableGateway;

class MasterTable extends TableGateway
{
  /**
   * @param string $query
   * @param array $params
   * @return array
   */

  protected function executeQueryArray($query, $params = [])
  {
    $db = $this->adapter;
    $stmt = $db->query($query);
    $rs = $this->resultSetPrototype->initialize($stmt->execute($params));
    $data = [];
    foreach ($rs as $row) {
      $data[] = $row;
    }
    return $data;
  }
}

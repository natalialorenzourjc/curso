<?php
namespace Application\Model\Entity;

use Zend\Db\TableGateway\TableGateway;

class Usuario extends MasterTable
{
  const TABLE_NAME = 'USUARIO_NAT';

  public function __construct($dbAdapter)
  {
    parent::__construct(self::TABLE_NAME, $dbAdapter);
  }

  public function getAllData()
  {
    return $this->select()->toArray();
  }

  public function getDataId($login)
  {
    $sql = "select * from " . self::TABLE_NAME . " where login = :login ";

    $params = [
      ':login' => $login
    ];

    $data = $this->executeQueryArray($sql, $params);
    return $data;
  }

  public function addData ($data) {
    return $this->insert($data);
  }

  public function updateData ($id, $data) {
    $where = ["LOGIN" => $id];
    return $this->update($data, $where);
  }

  public function deleteData($id)
  {
    $where = ["LOGIN" => $id];
    return parent::delete($where);
  }
}

<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Application\Model\Entity\Curso;
use Zend\Db\Adapter\Adapter;
use Zend\Http\Response;
use Application\Model\Entity\Curso;

class CursoController extends MasterController
{
  /** @var Adapter */
  private $dbAdapter; //conexion a la bd
  private $usuario;
  /**
   * IndexController constructor.
   * @param $dbAdapter
   */
  public function __construct($dbAdapter)
  {
    $this->dbAdapter = $dbAdapter;
    $this->curso = new Curso($this->dbAdapter);
  }

  public function create($data)
  {  die ("muerte");
    $data =  $this->array_change_key_case_recursive($data, CASE_UPPER);
    $res = $this->curso->addData($data);
    $data =  $this->array_change_key_case_recursive($data, CASE_LOWER);

    $response = $this->getResponse();
    $response->getHeaders()->addHeaders([
      'Access-Control-Allow-Origin' => '*',
      'Access-Control-Allow-Methods' => '*'
    ]);
    $response->setContent(json_encode($data));

    if ($res == true) {
      $response->setStatusCode(200);
    } else {
      $response->setStatusCode(500);
    }
    return $response;
  }

  public function getList()
  {

    $data = $this->curso->getAllData();
    /*
     * Por defecto nos devuelve las keys en mayúsuclas
     * Dos opciones:
     * - Convertirlo a minúsculas antes de devolverlo
     * - En el Angular definir los campos de los objetos en mayúsculas
     */
    $data =  $this->array_change_key_case_recursive($data, CASE_LOWER);

    /** @var Response $response */
    $response = $this->getResponse();
    $response->getHeaders()->addHeaders([
      'Access-Control-Allow-Origin' => '*',
      'Access-Control-Allow-Methods' => '*'
    ]);
    $response->setContent(json_encode($data));
    $response->setStatusCode(200);//comprueba que esta correcto
    return $response;
  }

  public function get($id)
  {

    $data = $this->curso->getDataId($id);

    /** @var Response $response */
    $response = $this->getResponse();
    $response->getHeaders()->addHeaders([
      'Access-Control-Allow-Origin' => '*',
      'Access-Control-Allow-Methods' => '*'
    ]);
    $response->setContent(json_encode($data));
    $response->setStatusCode(200);
    return $response;
  }

  public function options()
  {
    /** @var Response $response */
    $response = $this->getResponse();
    $response->getHeaders()->addHeaders([
      'Access-Control-Allow-Origin' => "*",
      'Access-Control-Allow-Methods' => 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers' => 'Origin, Content-Type, X-Auth-Token',
      'Content-Type' => 'application/json'
    ]);
    return $response;
  }

  public function update($id, $data)
  {
    $data =  $this->array_change_key_case_recursive($data, CASE_UPPER);
    $res = $this->usuario->updateData($id,$data);
    $data =  $this->array_change_key_case_recursive($data, CASE_LOWER);

    $response = $this->getResponse();
    $response->getHeaders()->addHeaders([
      'Access-Control-Allow-Origin' => '*',
      'Access-Control-Allow-Methods' => '*'
    ]);
    $response->setContent(json_encode($data));

    if ($res == true) {
      $response->setStatusCode(200);
    } else {
      $response->setStatusCode(500);
    }
    return $response;
  }

  public function delete($id)
  { die ("muerte");
    $res = $this->curso->deleteData($id);

    $response = $this->getResponse();
    $response->getHeaders()->addHeaders([
      'Access-Control-Allow-Origin' => '*',
      'Access-Control-Allow-Methods' => '*'
    ]);
    $response->setContent(json_encode($id));

    if ($res == true) {
      $response->setStatusCode(200);
    } else {
      $response->setStatusCode(500);
    }
    return $response;
  }
}

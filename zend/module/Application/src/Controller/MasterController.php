<?php

/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractRestfulController;

class MasterController extends AbstractRestfulController{
  public function array_change_key_case_recursive($arr, $case = CASE_LOWER)
  {
    return array_map(function($item) use($case) {
      if(is_array($item))
        $item = $this->array_change_key_case_recursive($item, $case);
      return $item;
    },array_change_key_case($arr, $case));
  }

}

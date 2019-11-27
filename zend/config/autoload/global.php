<?php
/***
 * Global Configuration Override
 *
 * You can use this file for overriding configuration values from modules, etc.
 * You would place values in here that are agnostic to the environment and not
 * sensitive to security.
 *
 * @NOTE: In practice, this file will typically be INCLUDED in your source
 * control, so do not include passwords or other sensitive information in this
 * file.
 */

return [
  'db' => [
    'driver' => 'OCI8',
    //'connection_string' => 'apis.urjc.es:2490/dbcurso',
    'connection_string' => '(description=(address=(host=apis.urjc.es)(protocol=tcp)(port=2490))(connect_data=(SERVICE_NAME=dbcurso)(SERVER = DEDICATED)))',
    'character_set' => 'AL32UTF8',
    'username' => 'curso',
    'password' => 'urjc2019'
  ]
];

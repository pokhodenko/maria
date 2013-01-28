<?php
/**
* Implementation of hook_imagecache_default_presets().
*/
function front_page_imagecache_default_presets() {
  $presets = array();
$presets['image_preview_1280'] = array (
  'presetname' => 'image_preview_1280',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '100',
        'height' => '100',
      ),
    ),
  ),
);
$presets['main_image_1280'] = array (
  'presetname' => 'main_image_1280',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '900',
        'height' => '404',
      ),
    ),
  ),
);

$presets['image_preview_1366'] = array (
  'presetname' => 'image_preview_1366',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '110',
        'height' => '110',
      ),
    ),
  ),
);
$presets['main_image_1366'] = array (
  'presetname' => 'main_image_1366',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '999',
        'height' => '444',
      ),
    ),
  ),
);
$presets['contacts_background_1366'] = array (
  'presetname' => 'contacts_background_1366',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '1332',
        'height' => '555',
      ),
    ),
  ),
);
$presets['maria_photo_1366'] = array (
  'presetname' => 'maria_photo_1366',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '220',
        'height' => '110',
      ),
    ),
  ),
);

  return $presets;
}
?>
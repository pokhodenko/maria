<?php
/**
* Implementation of hook_imagecache_default_presets().
*/
function front_page_imagecache_default_presets() {
  $presets = array();
$presets['image_preview_1024'] = array (
  'presetname' => 'image_preview_1024',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '80',
        'height' => '80',
      ),
    ),
  ),
);
$presets['main_image_1024'] = array (
  'presetname' => 'main_image_1024',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '729',
        'height' => '324',
      ),
    ),
  ),
);
$presets['contacts_background_1024'] = array (
  'presetname' => 'contacts_background_1024',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '972',
        'height' => '405',
      ),
    ),
  ),
);
$presets['maria_photo_1024'] = array (
  'presetname' => 'maria_photo_1024',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '160',
        'height' => '80',
      ),
    ),
  ),
);
/*************************************************/
  
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
        'width' => '909',
        'height' => '404',
      ),
    ),
  ),
);
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
$presets['contacts_background_1280'] = array (
  'presetname' => 'contacts_background_1280',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '1212',
        'height' => '505',
      ),
    ),
  ),
);

$presets['maria_photo_1280'] = array (
  'presetname' => 'maria_photo_1280',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '200',
        'height' => '100',
      ),
    ),
  ),
);

/*************************************************/
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
/*************************************************/
$presets['main_image_1440'] = array (
  'presetname' => 'main_image_1440',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '1044',
        'height' => '464',
      ),
    ),
  ),
);
$presets['image_preview_1440'] = array (
  'presetname' => 'image_preview_1440',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '115',
        'height' => '115',
      ),
    ),
  ),
);
$presets['contacts_background_1440'] = array (
  'presetname' => 'contacts_background_1440',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '1392',
        'height' => '464',
      ),
    ),
  ),
);

$presets['maria_photo_1440'] = array (
  'presetname' => 'maria_photo_1440',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '230',
        'height' => '115',
      ),
    ),
  ),
);
/*************************************************/


$presets['image_preview_1600'] = array (
  'presetname' => 'image_preview_1600',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '130',
        'height' => '130',
      ),
    ),
  ),
);
$presets['main_image_1600'] = array (
  'presetname' => 'main_image_1600',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '1179',
        'height' => '524',
      ),
    ),
  ),
);
$presets['contacts_background_1600'] = array (
  'presetname' => 'contacts_background_1600',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '1572',
        'height' => '655',
      ),
    ),
  ),
);
$presets['maria_photo_1600'] = array (
  'presetname' => 'maria_photo_1600',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '260',
        'height' => '130',
      ),
    ),
  ),
);
/*************************************************/
$presets['image_preview_1920'] = array (
  'presetname' => 'image_preview_1920',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '150',
        'height' => '150',
      ),
    ),
  ),
);
$presets['main_image_1920'] = array (
  'presetname' => 'main_image_1920',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '1359',
        'height' => '604',
      ),
    ),
  ),
);
$presets['contacts_background_1920'] = array (
  'presetname' => 'contacts_background_1920',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '1812',
        'height' => '755',
      ),
    ),
  ),
);
$presets['maria_photo_1920'] = array (
  'presetname' => 'maria_photo_1920',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_resize',
      'data' => 
      array (
        'width' => '300',
        'height' => '150',
      ),
    ),
  ),
);
  return $presets;
}
?>
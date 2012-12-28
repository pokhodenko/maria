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
        'action' => 'imagecache_scale_and_crop',
        'data' =>
        array (
          'width' => '100',
          'height' => '100',
        ),
      ),
    ),
  );

 $presets['image_preview_1200'] = array (
  'presetname' => 'image_preview_1200',
  'actions' => 
  array (
    0 => 
    array (
      'weight' => '0',
      'module' => 'imagecache',
      'action' => 'imagecache_scale',
      'data' => 
      array (
        'width' => '200',
        'height' => '',
        'upscale' => 1,
      ),
    ),
  ),
);

  return $presets;
}
?>
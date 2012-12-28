<?php

function front_page_cron() {
  $link = array(
      'type' => 'custom',
      'id' => 3,
      'loc' => 'gallery/images/1920/345',
      'priority' => 0.5,
      'changefreq' => 0,
      'language' => ''
  );
  xmlsitemap_link_save($link);
  global $base_url, $screen_widths;
  $cookies = array(
      'width' => '1920',
      'hash' => '#789456',
  );
  $data = front_page_get_content();
  $data = $data->nodes;
  foreach ($data as $node) {
    foreach ($screen_widths as $width) {
      $cookies['width'] = $width;
      $cookies['hash'] = '#'.$node->nid;
      
      get_page_data('http://drupal.local/gallery/'.$node->taxonomy, $cookies);
    }
  }
}

function get_page_data($url, $cookies) {
  $cookies_str = '';
  foreach ($cookies as $key => $value) {
    $cookies_str .= $key . '=' . $value . ';';
  }
  $ch = curl_init();
  $timeout = 5;
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
  curl_setopt($ch, CURLOPT_COOKIE, $cookies_str);

  $data = curl_exec($ch);
  curl_close($ch);
  return $data;
}
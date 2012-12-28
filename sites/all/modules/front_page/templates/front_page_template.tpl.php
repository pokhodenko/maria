<div class="content" >
  <div class="gallery">
    <div class="right_sidebar">
      <?php foreach ($content->nodes as $page_number => $content_page): ?>
        <div class="page_<?php echo $page_number; ?>">
          <?php if ($page_number == $content->current_page): ?>
            <?php foreach ($content_page as $key => $node): ?>
              <div id="<?php echo $node->nid;?>" class="image">
                <img src="<?php echo $node->field_image_preview; ?>"/>
              </div>


            <?php endforeach; ?>
          <?php endif; ?>
        </div>

      <?php endforeach; ?>

    </div>
    <div class="left_sidebar">
      <div id="main_image">
        
      </div>
    </div>
  </div>
  <div class="clear-block">
    <div class="my_title">
      <h2><?php echo $content->title ?></h2>
      <?php echo 'hash = ' . $_COOKIE['hash'] . ' width = ' . $_COOKIE['width'] . ' uri = ' . request_uri(); ?>
    </div>
    <div>
      <p> Count right now in cache is <?php echo $content->count; ?></p>
    </div>
    <div>
      <p>
        <?php echo $content->body ?>
      </p>
    </div>


    <?php // echo '<pre>';print_r($content);echo '</pre>'; ?>
  </div>
  

</div>

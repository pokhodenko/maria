<div class="main_content" >
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
     
      <div id="image-slider-wrapper">
            <?php
            $x_parts = PARTS_X;
            $y_parts = PARTS_Y;

            $parts = array();

            for ($i = 0; $i < $y_parts; $i++) {
                $parts[$i] = array();
                for ($j = 0; $j < $x_parts; $j++) {
                    $parts[$i][$j] = $j;
                }
            }
            ?>
            <?php foreach ($parts as $key => $partx): ?>
                <div id="row_<?php echo $key; ?>" class="row">
                    <?php foreach ($partx as $part): ?>
                        <div id="row_<?php echo $key; ?>_part_<?php echo $part; ?>" class="part"></div>
                    <?php endforeach; ?>
                </div>


            <?php endforeach; ?>
        </div>
         <div id="main_image">
        
      </div>
    </div>
  </div>
  <div class="clear-block">
  <?php/*  <div class="my_title">
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
  
*/?>
</div>

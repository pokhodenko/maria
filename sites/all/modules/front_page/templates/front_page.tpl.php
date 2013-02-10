<?php
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$nodes = array();
?>
<div class="main_content">

    <?php
    foreach ($content->nodes as $page): 
         foreach ($page as $node): 
            if (sizeof($nodes)<48){
                $nodes[] = $node;
            }
            endforeach; 
     endforeach; 
     $nodes_count = sizeof($nodes);
     while(sizeof($nodes)<48){
         //echo (rand(0,$nodes_count));
         $nodes[] = $nodes[rand(0,$nodes_count)];
         //$nodes[] = $nodes[2];
     }
     shuffle ($nodes);
     ?>
    
    <?php foreach ($nodes as $id=>$node): ?>
        <div id="<?php echo $id; ?>" class="front_page_image">
            <a href="<?php echo url('gallery/' . $node->taxonomy.'/'.$node->page_number, array('fragment' => 'item_' . $node->nid)); ?>">
                <img class="greyscale" src="<?php echo $node->field_image_preview; ?>"/>
            </a>
        </div>
    <?php endforeach; ?>
    
    <?php // echo '<pre>' . print_r($content, true) . '</pre>'; ?>
</div>

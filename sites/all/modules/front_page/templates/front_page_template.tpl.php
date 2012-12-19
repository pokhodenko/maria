<div class="content" >
    <div class="my_title">
        <h2><?php echo $content->title ?></h2>
    </div>
    <div>
        <p> Count right now in cache is <?php echo $content->count; ?></p>
    </div>
    <div>
        <p>
            <?php echo $content->body ?>
        </p>
    </div>
    <?php foreach($content->nodes as $key=>$node): ?>
    <div class="image">
        <a class="zoom" href="<?php echo $node->field_main_image; ?>" ><img src="<?php echo $node->field_image_preview;?>"/></a>
    </div>

    <?php endforeach; ?>
    <?php echo '';// echo '<pre>';print_r($content);echo '</pre>'; ?>
</div>

<div class="clear-block relative contacts">
    <div id="contact_information" class="main_content">
        <div id="contacts_right">
            <div class="contact_item">
                <?php print $node->field_left_side_title[0]['view']; ?>
            </div>
            <div id="contacts_skype" class="contact_item">
                <?php print $node->field_skype[0]['view']; ?>
            </div>
            <div id="contacts_email" class="contact_item">
                <?php print $node->field_contact_email[0]['view']; ?>
            </div>
            <div class="contact_item">
                <?php print $node->field_contacts_signature[0]['view']; ?>
            </div>
        </div>
        <div id="contacts_left">  
            <?php if (!empty($node->field_photo[0]['view'])): ?> 
                <div class="page_photo">
                    <?php echo $node->field_photo[0]['view'] ?>
                </div>
            <?php endif; ?>
            <div class="body">
                <?php print $node->content['body']['#value']; ?>
            </div>
        </div>

    </div>
    <div class="contacts_background" >
        <div id="image-slider-wrapper">
            <?php
            $x_parts = 12;
            $y_parts = 4;

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
    </div>

    <?php //echo '<pre>'. print_r($node,true).'</pre>'; ?>
</div>
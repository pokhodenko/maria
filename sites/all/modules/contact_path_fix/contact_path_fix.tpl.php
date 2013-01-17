<div class="clear-block">
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

    <?php //echo '<pre>'. print_r($node,true).'</pre>'; ?>
</div>
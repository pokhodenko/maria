<div class="node clear-block">
  <div class="content">
    <?php if (!empty($node->field_photo[0]['view'])): ?> 
      <div class="page_photo">
        <?php echo $node->field_photo[0]['view'] ?>
      </div>
    <?php endif; ?>
    <div class="body">
      <?php print $node->content['body']['#value']; ?>
    </div>
  </div>
    <?php// print_r($node);?>
</div>
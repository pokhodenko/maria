<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="js/jquery-1.4.2.js"></script>
        <script type="text/javascript" src="js/test.js"></script>
        <link rel="stylesheet" href="css/test.css" type="text/css" />
    </head>
    <body>
        <div class="image-wrapper">
            <?php
            $x_parts = 8;
            $y_parts = 3;
            $part_size_x = 100;
            $part_size_y = 100;

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
    </body>
</html>

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function (){
    //$('a.zoom').fancybox();
    $.getJSON("/ajax_load_params",function(data){
        $.each(data,function(k,v){
            Params[k] = v;
        })
    });
    $.getJSON("/ajax_images_list",function(data){
        Images = new Object();
        $.each(data,function(k,v){
            var img = new Image();
            img.src = v;
            Images[k] = img;
        })
    });
    $('.right_sidebar .image').hover(function(){
        $(this).animate({
            opacity:'1'
        },150);
    });
    $('.right_sidebar .image').mouseout(function(){
        $(this).animate({
            opacity:'0.4'
        },150);
    });
    $('.right_sidebar .image').click(function(){
        $('.right_sidebar .image').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('id');
    
        //replace_element_backbround('#main_image',id);
    //$('.left_sidebar .main_image').html(data);
    /*
    $.get("/gallery-image/"+id+"/"+get_imagecache_suffix(), function(data){
      $('.left_sidebar').html(data);
    });*/
    
    });

});
function replace_element_backbround(element_selector,node_id){
    if (Images[node_id]==undefined){
        alert ('undefined');
    }
    else{
        $(element_selector).each(function(){
            $(this).css('background-image','url('+Images[node_id]['src']+')');   
        }
        );
        console.log('url('+Images[node_id]['src']+')');
    }
}


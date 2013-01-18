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
        var first_image = $('.image:first');
        Images[first_image.attr('id')].onload = function(){
            if (window.location.hash==''){
                first_image.click();
            }
            else{
                var el = window.location.hash.split('item_').join('');
                if ($(el).size()>0){
                    $(el).click();
                }
            }
        }
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
    }
}


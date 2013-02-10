/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function (){
    //$('a.zoom').fancybox();
    $('#main_image').addClass('image_loading');
    $.getJSON("/ajax_load_params",function(data){
        $.each(data,function(k,v){
            Params[k] = v;
        })
        /* setTimeout(function(){
            params_loaded();
        },1000);*/
        $.getJSON("/ajax_images_list/"+Drupal.settings.gallery.language+'/'+$('.image:first').attr('id'),function(data){
            Images = new Object();
            $.each(data,function(k,v){
                var img = new Image();
                img.src = v;
                Images[k] = img;
            })
            var first_image = $('.image:first');
            params_loaded();
            Images[first_image.attr('id')].onload = function(){
           
                        
                if (window.location.hash==''){
                    
                    $(document).ready(function(){
                            first_image.click();
                        });
               
                }
                else{
                    var el = window.location.hash.split('item_').join('');
                    if ($(el).size()>0){
                        /*
                        setTimeout(function(){
                            $(el).click();
                        },1000);*/
                        $(document).ready(function(){
                            $(el).click();
                        });
                        //$(el).click();
                    }
                }
            }

        });
    });
    
    $('.right_sidebar .image,.front_page_image').hover(function(){      
        $(this).animate({
            opacity:'1'         
        },150);
    });
    $('.right_sidebar .image,.front_page_image').mouseout(function(){
        $(this).animate({
            opacity:'0.7'
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


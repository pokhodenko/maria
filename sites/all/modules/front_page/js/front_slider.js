/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var part_size_x = 100;
var part_size_y = 100;
/*@TODO
 *сделать подгрузку параметров аяксом 
 *
 * 1)animation function name
 * 2)Колличество квадратов по горизотали 
 * 3)Колличество квадратов по вертикали
 * 4)размер изображения по x
 * 5)размер изображения по y
 **/
Slider_params = new Object();
Slider_params.max_animation_timeout = 0;
Slider_params.animation_completed = true;
Slider_params['timeouts'] = new Object();


$(document).ready(function(){
  
 
 
    /*$.getJSON("/ajax_load_params",function(data){
        $.each(data,function(k,v){
            Params[k] = v;
            
        })
        setTimeout(function(){
            params_loaded();
        },100);
    });
    */
    $(".left_sidebar").bind("mouseenter",function(){
        $('.portfolio_description').slideDown("fast");
    }).bind("mouseleave",function(){
        $('.portfolio_description').slideUp("fast");
    });
});
function params_loaded(){
    
    setCookie('page', '1');
    animate_front_page(10);
    
    $('.image').click(function(){
        id = $(this).attr('id');
        //alert(id);
        
       
        if (Slider_params.animation_completed == true){
            showElementDescription(id);
            $('.image').removeClass('active');
            $(this).addClass('active');
            Params.manually_changed_hash = false;
            window.location.hash='item_'+id;
            replace_element_backbround('.part',id);
            Slider_params['timeouts'] = new Object();
            startAnimation(id,5);
            
            
        }
        
    });
    $('.pagination_element a').click(function(){
        $('.pagination_element a').removeClass('active');
        $(this).addClass('active');
    //var id = $(this).attr('id').split('page_').join("");
        
    //setCookie('page', id);
    //window.location.hash = $(this).attr('href').split('#').join('');
    //window.location.reload();
    //return false;
    });

}
function showElementDescription(id){
    $('.element_description').hide();
    $('#desc_'+id).show();
    
}

function startAnimation(node_id,speed){
    
    $('#main_image').removeClass('image_loading');
    Slider_params.animation_completed = false;
    Slider_params.max_animation_timeout = 0;
    $('.part').each(function (){
        $(this).css('opacity','0');
    });
    //setTimeout(replace_element_backbround('.part',node_id),speed*100);
    
    $('.right_sidebar').addClass('animation');
    $('.part').each(function (){
        id = $(this).attr('id');
        args = id.split("_");
        position_x = -(args[3]*Params[get_imagecache_suffix()].part_size_x);
        position_y = -(args[1]*Params[get_imagecache_suffix()].part_size_y);
    
        //((args[3])+(args[1]*4))*10
        setTimeout('set_prop('+id+','+position_x+','+position_y+')', generate_timeout(args[3],args[1],speed));
        
    // $(this).css('background-position',position_x+'px '+position_y+'px' );
    });
    
    setTimeout(function(){
        replace_element_backbround('#main_image',node_id);
        $('.right_sidebar').removeClass('animation');
        Slider_params.animation_completed = true;
    },parseInt(Slider_params.max_animation_timeout)+parseInt(500));
}
function set_prop(id,position_x,position_y){
    $(id).css('width',Params[get_imagecache_suffix()].part_size_x+'px');
    $(id).css('height',Params[get_imagecache_suffix()].part_size_y+'px');
  
    $(id).css('left',(0-position_x)+'px');
    $(id).css('top',(0-position_y)+'px');
    $(id).css('background-position',position_x+'px '+position_y+'px' );
    //$(id).animate({opacity:'1'},200+Math.floor(Math.random()*1000));
    $(id).animate({
        opacity:'1'
    },500);

}
function get_part_size_x(image_size_x,part_count_x){
    return image_size_x/part_count_x;
}
function get_part_size_y(image_size_y,part_count_y){
    return image_size_y/part_count_y;
}
function randomize_assoc(){
    
}
function generate_timeout(column,row,speed){
    
   
    //timeout = (parseInt(column)+parseInt(row))*speed;
    
    timeout = (Math.floor(Math.random()*100))*speed;

    if (Slider_params['timeouts'][timeout]=='1'){
        generate_timeout(column,row,speed);
    }
    Slider_params['timeouts'][timeout] = '1';
    if (Slider_params.max_animation_timeout<timeout){
        Slider_params.max_animation_timeout = timeout;
    }
    return timeout;
}

function create_parts_array(x_parts,y_parts){
    parts = new Array();
        
    for(i=0;i<y_parts;i++){
        parts.i=new Array();
        for(j=0;j<x_parts;j++){
            parts.i.j=j;
        }
    }
    return parts;
}
function animate_front_page(speed){
    Front_page = new Object();
    Front_page.timeouts = new Object();
    var count = $('.front_page_image').size();
    $('.front_page_image').each(function(){
        var id = $(this).attr("id");
        generate_front_page_timeout(count,id,speed)
        
    });
    $('.front_page_image').each(function(){
        var id = $(this).attr("id");
        setTimeout(function(){
            $('#'+id).animate({
                opacity:'0.7'
            },500);
            
        },Front_page.timeouts[id]);
        
    });
    
}
function generate_front_page_timeout(count,id,speed){
    var timeout = (Math.floor(Math.random()*count))*speed;
    /*if (isNaN(timeout)){
        generate_front_page_timeout(count,id,speed)
    }*/
    for (var key in Front_page.timeouts){
        if (Front_page.timeouts[key]==timeout){
            generate_front_page_timeout(count,id,speed)
        }
    }
    Front_page.timeouts[id]=timeout; 
}
function change_opacity(id){
    
}

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
$(document).ready(function(){
  
 
 
    $.getJSON("/ajax_load_params",function(data){
        $.each(data,function(k,v){
            Params[k] = v;
            
        })
        params_loaded();
    });
});
function params_loaded(){
    $('.image').click(function(){
        id = $(this).attr('id');
        //alert(id);
        
        if (Slider_params.animation_completed==true){
            $('.image').removeClass('active');
            $(this).addClass('active');
            replace_element_backbround('.part',id);
            startAnimation(id,10);
        }
        
    });
}

function startAnimation(node_id,speed){
    Slider_params.animation_completed = false;
    Slider_params.max_animation_timeout = 0;
    $('.part').each(function (){
        $(this).css('opacity','0');
    });
    //setTimeout(replace_element_backbround('.part',node_id),speed*100);
    
    $('.part').each(function (){
        id = $(this).attr('id');
        args = id.split("_");
        //console.log(args[1]);
        position_x = -(args[3]*Params.part_size_x);
        position_y = -(args[1]*Params.part_size_y);
    
        //((args[3])+(args[1]*4))*10
        setTimeout('set_prop('+id+','+position_x+','+position_y+')', generate_timeout(args[3],args[1],speed));
        
    // $(this).css('background-position',position_x+'px '+position_y+'px' );
    });
    console.log(Slider_params.max_animation_timeout);
    setTimeout(function(){
      replace_element_backbround('#main_image',node_id);
      Slider_params.animation_completed = true;
    },parseInt(Slider_params.max_animation_timeout)+parseInt(600));
}
function set_prop(id,position_x,position_y){
    $(id).css('width',Params.part_size_x+'px');
    $(id).css('height',Params.part_size_y+'px');
  
    $(id).css('left',(0-position_x)+'px');
    $(id).css('top',(0-position_y)+'px');
    $(id).css('background-position',position_x+'px '+position_y+'px' );
    //$(id).animate({opacity:'1'},200+Math.floor(Math.random()*1000));
    $(id).animate({
        opacity:'1'
    },600);

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
    
   
    timeout = (parseInt(column)+parseInt(row))*speed;
    timeout = (Math.floor(Math.random()*100))*speed;
    //console.log(timeout);
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

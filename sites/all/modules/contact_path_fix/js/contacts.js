/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function (){
    
    startContactsAnimation()
});
function startContactsAnimation(){
    Slider_params.max_animation_timeout = 0;
    Params.part_size_x = 111;
    Params.part_size_y = 111;
    $('#contact_information').css('opacity','0');
    $('.part').each(function (){
        $(this).css('opacity','0');
    });
    //setTimeout(replace_element_backbround('.part',node_id),speed*100);
    $('#contacts_right').hide();
    $('#contacts_left').hide();
    $('.part').each(function (){
        id = $(this).attr('id');
        args = id.split("_");
        
        position_x = -(args[3]*Params.part_size_x);
        position_y = -(args[1]*Params.part_size_y);
    
        //((args[3])+(args[1]*4))*10
        setTimeout('set_prop('+id+','+position_x+','+position_y+')', generate_timeout(args[3],args[1],10));
        
    // $(this).css('background-position',position_x+'px '+position_y+'px' );
    });
    
    setTimeout(function(){
        
        //replace_element_backbround('#main_image',node_id);
        $('.contacts_background').remove();
        $('#contact_information').css('opacity','1');
        $('#contacts_right').fadeIn("slow");
        $('#contacts_left').fadeIn("slow");
        
        Slider_params.animation_completed = true;
    },parseInt(Slider_params.max_animation_timeout)+parseInt(600));
}



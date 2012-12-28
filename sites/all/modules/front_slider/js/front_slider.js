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
$(document).ready(function(){
  $('.part').each(function (){
    id = $(this).attr('id');
    args = id.split("_");
    //console.log(args[1]);
    position_x = -(args[3]*part_size_x);
    position_y = -(args[1]*part_size_y);
    //((args[3])+(args[1]*4))*10
    setTimeout('set_prop('+id+','+position_x+','+position_y+')', generate_timeout(args[3],args[1],100));
  // $(this).css('background-position',position_x+'px '+position_y+'px' );
  });
 
  $.getJSON("ajax_load_params",function(data){$.each(data,function(k,v){Params[k] = v;})});
});
function set_prop(id,position_x,position_y){
  $(id).css('background-position',position_x+'px '+position_y+'px' );
  //$(id).animate({opacity:'1'},200+Math.floor(Math.random()*1000));
  $(id).animate({
    opacity:'1'
  },400);

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
  console.log(timeout);
    
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

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var Params = new Object();
Params.manually_changed_hash = true;

function setCookie(key, value) {  
  var expires = new Date();  
  expires.setTime(expires.getTime() + 31536000000); //1 year  
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString()+';path=/';  
}  
  
function getCookie(key) {  
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');  
  return keyValue ? keyValue[2] : null;  
}
function setAllCookies(){
  setCookie('hash', window.location.hash)
  setCookie('width', get_imagecache_suffix());
}
function get_imagecache_suffix() {
  
    if ( window.innerWidth >= 1920) {
      return 1920;
    } else if ( window.innerWidth >= 1600) {
      return 1600;
    } else if ( window.innerWidth >= 1400) {
      return 1440;
    } else if ( window.innerWidth >= 1366) {
      return 1366;
    } else if ( window.innerWidth >= 1280) {
      return 1280;
    } else if ( window.innerWidth < 1024) {
      return 1024;
    } else {
      return 1024;
    }
  
}
if (window.location.hash!=''){
  if (getCookie('hash')!=window.location.hash){
    setAllCookies();
    window.location.reload();
  }
}else{
  setCookie('hash', '');
}
if (getCookie('width')==null){
  setAllCookies();
  window.location.reload();
}
$(document).ready(function(){
  setAllCookies();
  
  $(window).hashchange(function(){
    setAllCookies();
    if (Params.manually_changed_hash==true){
      window.location.reload();
    }
    Params.manually_changed_hash = true;
  });
  $(window).resize(function() {
    setAllCookies();
  });
});


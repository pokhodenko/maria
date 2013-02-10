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
  setCookie('hash', window.location.hash.split('item_').join(''));
  setCookie('width', get_imagecache_suffix());
}
function get_imagecache_suffix() {
    
    var width = window.innerWidth || document.documentElement.clientWidth;
    //return 1920;
    if ( width >= 1920) {
      return 1920;
    } else if ( width >= 1600) {
      return 1600;
    } else if ( width >= 1400) {
      return 1440;
    } else if ( width >= 1366) {
      return 1366;
    } else if ( width >= 1280) {
      return 1280;
    } else if ( width < 1024) {
      return 1024;
    } else {
      return 1024;
    }
  
}
if (window.location.hash!=''){
  if ((get_hash_from_cookie(getCookie('hash')))!=window.location.hash){
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
function get_hash_from_cookie(cookie_hash){
  cookie_hash = cookie_hash.split('#').join('');
  setCookie('hash', '#item_'+cookie_hash);
  return '#item_'+cookie_hash;
}


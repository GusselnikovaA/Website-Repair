mapShown = false; 
$(document).ready(function (){

 $(window).scroll(function() {
    if (!mapShown){
     if($(window).scrollTop() + $(window).height() > $(document).height() - 640) {      
      showmap();
      mapShown = true;
     }
    }
 });
 
});

function showmap(){
 var script   = document.createElement("script");
 script.type  = "text/javascript";
 script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8b6fd3eadeccabf260e6ab64623216c4e4813293ad16efdb0832faeb3465f5b4&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false";
 document.getElementById("map").appendChild(script);
}

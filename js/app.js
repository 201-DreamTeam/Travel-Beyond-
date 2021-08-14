'use strict';


let img_array = ['/img/Thailand/Doi\ Inthanon\ National\ Park\,\ Ban\ Luang\,\ Thailand.jfif', '/img/Thailand/Phi Phi Islands, Phuket, Thailand.jfif','/img/Thailand/Samujana Villa, Koh Samui, Thailand.jfif'];

let img = document.getElementById('img1');


// waiting
//http://www.endmemo.com/js/pause.php
// function wait(ms) {
//     let d = new Date();
//     let d2 = null;
//     do { d2 = new Date(); }
//     while (d2 - d < ms);
// }
// function sleep(miliseconds) {
//     var currentTime = new Date().getTime();
 
//     while (currentTime + miliseconds >= new Date().getTime()) {
//     }
//  }
// for (let i = 0; i < img_array.length; i++) {
//     img.src = img_array[i];
//     sleep(1000);

// }


// function change_pic(i){
//     img.src=img_array[i];
// }

for (let i = 0; i < 3; i++) {

    // create a closure to preserve the value of "i"
    (function(i){
  
      window.setTimeout(function(){
        img.src=img_array[i];
      },  2000);
  
    }(i));
  
  }





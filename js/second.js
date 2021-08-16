'use strict';

let object_array = JSON.parse(localStorage.data);
console.log(object_array);


for (let i=0;i<object_array.length;i++){
  let str = '';
  if (object_array[i].seemore === 1){
    str += `<div class="sectionTwoDiv">
    <h3>${object_array[i].name}</h3>
  
    <!--image slider start-->
    <div class="slider">
        <div class="slides">
            <!--radio buttons start-->
            <input type="radio" name="radio-btn" id="radio11">
            <input type="radio" name="radio-btn" id="radio21">
            <input type="radio" name="radio-btn" id="radio31">
            <input type="radio" name="radio-btn" id="radio41">
            <!--radio buttons end-->
            <!--slide images start-->
            <div class="slide first">
                <img src="/${object_array[i].resturants_img[0]}" alt="">
            </div>
            <div class="slide">
            <img src="/${object_array[i].resturants_img[1]}" alt="">
            </div>
            <div class="slide">
            <img src="/${object_array[i].imgPresturants_imgath[2]}" alt="">
            </div>
            <div class="slide">
            <img src="/${object_array[i].resturants_img[3]}" alt="">
            </div>
            
            <!--slide images end-->
            <!--automatic navigation start-->
            <div class="navigation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
                <div class="auto-btn4"></div>
            </div>
            <!--automatic navigation end-->
        </div>
        <!--manual navigation start-->
        <div class="navigation-manual">
        <label for="radio1${i}" class="manual-btn"></label>
        <label for="radio2${i}" class="manual-btn"></label>
        <label for="radio3${i}" class="manual-btn"></label>
        <label for="radio4${i}" class="manual-btn"></label>
        </div>
        <!--manual navigation end-->
    </div>
    <!--image slider end-->
  
  
    <div class="container">
  
        <h4>Main Resturants</h4>
        <ul>
            <li>Resturant#1: ${object_array[i].resturants[0]}</li>
            <li>Resturant#2: ${object_array[i].resturants[1]}</li>
            <li>Resturant#3: ${object_array[i].resturants[2]}</li>
            <li>Resturant#4: ${object_array[i].resturants[3]}</li>
        </ul>
        <h4>Best Hotels</h4>
        <ul>
            <li>Hotel#1: ${object_array[i].hotels[0]}</li>
            <li>Hotel#2: ${object_array[i].hotels[1]}</li>
            <li>Hotel#3: ${object_array[i].hotels[2]}</li>
            <li>Hotel#4: ${object_array[i].hotels[3]}</li>
        </ul>
        <h4>Landmarks</h4>
        <ul>
            <li>landmark#1: ${object_array[i].landmarks[0]}</li>
            <li>landmark#2: ${object_array[i].landmarks[1]}</li>
            <li>landmark#3: ${object_array[i].landmarks[2]}</li>
            <li>landmark#4: ${object_array[i].landmarks[3]}</li>
        </ul>;`;
    document.getElementById('second').innerHTML = str;
  }
}

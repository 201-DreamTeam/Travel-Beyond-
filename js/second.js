'use strict';

let object_array = JSON.parse(localStorage.data);
console.log(object_array);


for (let i=0;i<object_array.length;i++){
    let str = '';
    if (object_array[i].seemore === 1){
        str += `<div class="sectionTwoDiv">
    <h3>${MainC.mainCArr[i].name}</h3>
  
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
                <img src="./img/${MainC.mainCArr[i].imgPath[0]}" alt="">
            </div>
            <div class="slide">
            <img src="./img/${MainC.mainCArr[i].imgPath[1]}" alt="">
            </div>
            <div class="slide">
            <img src="./img/${MainC.mainCArr[i].imgPath[2]}" alt="">
            </div>
            <div class="slide">
            <img src="./img/${MainC.mainCArr[i].imgPath[3]}" alt="">
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
            <label for="radio11" class="manual-btn"></label>
            <label for="radio21" class="manual-btn"></label>
            <label for="radio31" class="manual-btn"></label>
            <label for="radio41" class="manual-btn"></label>
        </div>
        <!--manual navigation end-->
    </div>
    <!--image slider end-->
  
  
    <div class="container">
  
        <h4>Quick Facts</h4>
        <ul>
            <li>Population: ${MainC.mainCArr[i].facts[0]}</li>
            <li>Capital: ${MainC.mainCArr[i].facts[1]}</li>
            <li>Official Language: ${MainC.mainCArr[i].facts[2]}</li>
            <li>Best Known For: ${MainC.mainCArr[i].facts[3]}</li>
        </ul>
  
    </div>
    <button onclick="next('${MainC.mainCArr[i].name}');">vote</button>
    <a href="/html/second.html" onclick="requestinfo('${MainC.mainCArr[i].name}');"><button>see more </button></a>
    

  </div>`;
  document.getElementById('second').innerHTML = str;
}
}
'use strict';

let object_array = JSON.parse(localStorage.data);
console.log(object_array);


for (let i = 0; i < object_array.length; i++) {
    let str = '';
    if (object_array[i].seemore === 1) {
        str += `<div class="sectionTwoDiv">
    <h3>${object_array[i].name}</h3>
  
    <!--image slider start-->
    <div class="slider">
        <div class="slides">
            <!--radio buttons start-->
            <input type="radio" name="radio-btn" id="radio11">
            <input type="radio" name="radio-btn" id="radio21">
            <input type="radio" name="radio-btn" id="radio31}">
            <input type="radio" name="radio-btn" id="radio41">
            <!--radio buttons end-->
            <!--slide images start-->
            <div class="slide first">
                <img src="${object_array[i].resturants_img[0]}" alt="">
            </div>
            <div class="slide">
            <img src="${object_array[i].resturants_img[1]}" alt="">
            </div>
            <div class="slide">
            <img src="${object_array[i].resturants_img[2]}" alt="">
            </div>
            <div class="slide">
            <img src="${object_array[i].resturants_img[3]}" alt="">
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
       <div class="rest">
            <h4>Top Resturant Picks</h4>
        <ul>
            <li><h5>Resturant Option 1:</h5> ${object_array[i].resturants[0]}</li>
            <li><h5>Resturant Option 2:</h5> ${object_array[i].resturants[1]}</li>
            <li><h5>Resturant Option 3:</h5> ${object_array[i].resturants[2]}</li>
            <li><h5>Resturant Option 4:</h5> ${object_array[i].resturants[3]}</li>
        </ul>
       </div> 
        <!--image slider start-->
    <div class="slider">
        <div class="slides">
            <!--radio buttons start-->
            <input type="radio" name="radio-btn" id="radio12">
            <input type="radio" name="radio-btn" id="radio22">
            <input type="radio" name="radio-btn" id="radio32">
            <input type="radio" name="radio-btn" id="radio42">
            <!--radio buttons end-->
            <!--slide images start-->
            <div class="slide first">
                <img src="${object_array[i].hotels_imgs[0]}" alt="">
            </div>
            <div class="slide">
            <img src="${object_array[i].hotels_imgs[1]}" alt="">
            </div>
            <div class="slide">
            <img src="${object_array[i].hotels_imgs[2]}" alt="">
            </div>
            <div class="slide">
            <img src="${object_array[i].hotels_imgs[3]}" alt="">
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
        <label for="radio12" class="manual-btn"></label>
        <label for="radio22" class="manual-btn"></label>
        <label for="radio32" class="manual-btn"></label>
        <label for="radio42" class="manual-btn"></label>
        </div>
        <!--manual navigation end-->
    </div>
    <!--image slider end-->
    <div class="hotel">
        <h4>Best Rated Hotels</h4>
        <ul>
            <li><h5>Hotel Option 1:</h5> ${object_array[i].hotels[0]}</li>
            <li><h5>Hotel Option 2:</h5> ${object_array[i].hotels[1]}</li>
            <li><h5>Hotel Option 3:</h5> ${object_array[i].hotels[2]}</li>
            <li><h5>Hotel Option 4:</h5> ${object_array[i].hotels[3]}</li>
        </ul>
</div>
        <!--image slider start-->
        <div class="slider">
            <div class="slides">
                <!--radio buttons start-->
                <input type="radio" name="radio-btn" id="radio13">
            <input type="radio" name="radio-btn" id="radio23">
            <input type="radio" name="radio-btn" id="radio33">
            <input type="radio" name="radio-btn" id="radio43">
                <!--radio buttons end-->
                <!--slide images start-->
                <div class="slide first">
                    <img src="${object_array[i].landmarks_imgs[0]}" alt="">
                </div>
                <div class="slide">
                <img src="${object_array[i].landmarks_imgs[1]}" alt="">
                </div>
                <div class="slide">
                <img src="${object_array[i].landmarks_imgs[2]}" alt="">
                </div>
                <div class="slide">
                <img src="${object_array[i].landmarks_imgs[3]}" alt="">
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
            <label for="radio13" class="manual-btn"></label>
            <label for="radio23" class="manual-btn"></label>
            <label for="radio33" class="manual-btn"></label>
            <label for="radio43" class="manual-btn"></label>
            </div>
            <!--manual navigation end-->
        </div>
        <!--image slider end-->
        <div class="land">
        <h4>Must Go To Landmarks</h4>
        <ul>
            <li><h5>landmark Option 1:</h5> ${object_array[i].landmarks[0]}</li>
            <li><h5>landmark Option 2:</h5> ${object_array[i].landmarks[1]}</li>
            <li><h5>landmark Option 3:</h5> ${object_array[i].landmarks[2]}</li>
            <li><h5>landmark Option 4:</h5> ${object_array[i].landmarks[3]}</li>
        </ul>
        </div>;`;
        document.getElementById('second').innerHTML = str;
    }
}

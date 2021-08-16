'use strict';


let allImg = [
  'Africa/Betty\'s Bay, South Africa.jfif',
  'Africa/Harold Porter National Botanical Garden, Betty\'s Bay, South Africa.jfif',
  'Africa/Blyde River Canyon, South Africa.jfif' ,
  'Africa/Nature\'s Valley, South Africa.jfif',
  'Africa/Cape Town, South Africa.jfif',
  'Africa/Simon\'s Town, Cape Town, South Africa.jfif',

  'Czech/Charles Bridge, Prague, Czech Republic.jfif',
  'Czech/Prague, Czechia.jfif',
  'Czech/St.Charles Bridge, Prague, Czechia.jfif',
  'Czech/Charles Bridge, Prague, Praha, Czech Republic.jfif',
  'Czech/Prague, Prague, Czechia.jfif',
  'Czech/Prague, Czech Republic, snow.jfif',
  'Czech/Prague, czech republic.jfif',

  'Italy/Cinque Terre, La Spezia, Italie.jfif',
  'Italy/Giardino Bardini, Firenze, Italy.jfif',
  'Italy/Rialto Bridge, Venezia, Italy.jfif',
  'Italy/Cinque Terre, La Spezia, Italy.jfif',
  'Italy/Manarola, Italy.jfif',
  'Italy/San Gimignano, Province of Siena, Italy.jfif',
  'Italy/Colosseo, Rome, Italy.jfif',
  'Italy/Metropolitan City of Rome, Italy.jfif',

  'Netherlands/Amsterdam Architecture, Netherlands.jfif',
  'Netherlands/Groningen, Netherlands.jfif',
  'Netherlands/Swifterband, Netherlands.jfif',
  'Netherlands/Amsterdam, Netherlands.jfif',
  'Netherlands/Netherlands.jfif',

  'Portugal/Jardim do Torel, Lisboa, Portugal.jfif',
  'Portugal/Lisbon, Portugal.jfif',
  'Portugal/Porto Bridge, Portugal.jfif',
  'Portugal/Porto, Portugal.jfif',
  'Portugal/Lisbon Top View, Portugal.jfif',
  'Portugal/Porto Alleys, Portugal.jfif',
  'Portugal/Porto Sunset, Portugal.jfif',

  'Thailand/Ao Nag, Thailand.jfif' ,
  'Thailand/Ko Lipe, Thailand.jfif',
  'Thailand/Phi Phi Islands, Phuket, Thailand.jfif',
  'Thailand/Doi Inthanon National Park, Ban Luang, Thailand.jfif',
  'Thailand/Maya Bay, Ko Phi Phi, Thailand.jfif',
  'Thailand/Samujana Villa, Koh Samui, Thailand.jfif',

  'Croatia/Boats of Cavtat, Cavtat, Croatia.jfif',
  'Croatia/Dubrovnik, Croatia.jfif',
  'Croatia/Šibenik, Croatia.jfif',
  'Croatia/Bol, Croatia.jfif',
  'Croatia/Put Zlatnog rata, Bol, Croatia.jfif',

  'Greece/Antiparos, Greece.jfif',
  'Greece/Fira, Thera, Greece.jfif',
  'Greece/Mýkonos, Greece.jfif',
  'Greece/Santorini, Greece.jfif',
  'Greece/Chania, Greece.jfif',
  'Greece/Mykonos, Greece.jfif',
  'Greece/Oia, Greece.jfif',
  'Greece/Top View Santorini, Greece.jfif',

  'Indonesia/Aling-Aling Waterfall, Indonesia.jfif',
  'Indonesia/Broken Beach (Pasih Uug), Bunga Mekar, Indonesia..jfif',
  'Indonesia/Penida Island, Indonesia.jfif',
  'Indonesia/Bali, Indonesia.jfif',
  'Indonesia/Candi Plaosan, Indonesia.jfif',
  'Indonesia/Special Region of Yogyakarta, Indonesia.jfif',

  'Mexico/Guanajuato, Mexico.jfif',
  'Mexico/San Miguel de Allende, Guanajuato, Mexico.jfif',
  'Mexico/San Miguel de Allendee, Mexico.jfif',
  'Mexico/Querétaro, Qro., Mexico.jfif',
  'Mexico/San Miguel de Allende, Mexico.jfif',

];

let facts = [
  ['quisquam necessitatibus vel ea veniam fugiat sit accusamus quod quidem. Placeat?', 'asdads', 'asdasd', 'asdasd'],
  ['', '', '', ''],
  ['', 'quisquam necessitatibus vel ea veniam fugiat sit accusamus quod quidem. Placeat?', '', ''],
  ['', '', '', ''],
  ['quisquam necessitatibus vel ea veniam fugiat sit accusamus quod quidem. Placeat?', '', '', ''],
  ['asdasd', 'asdasd', '', 'asdasd'],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', '']
];

let resturants = [
  ['The Phatt Chef, Thabo Mofutsanyana',
  'L’Orange Bleue,Thaba Pitsi Nature Reserve, Limpopo',
  'Crocafellas, Kruger National Park',
  'The Tasting Room, Cape Town'] //Africa
  ['Na slamníku, Czech Restaurant, Starý Bubeneč' ,
  'Kuchyň, Unique Experience Restaurant, Hradčanské náměst' ,
  'Portfolio Restaurant, Fine Dining Restaurant, Nové Město' ,
  'Café Savoy, Czech & French Restaurant, Malá Strana'], //Czech
  ['steria Francescana (Modena)' ,
  'La Pergola dell’Hotel Rome Cavalieri' ,
  'Le Calandre (Rubano, Padova)' ,
  'Reale (Località Casadonna, Castel di Sangro, L’Aquila)'],//Italy
  ['fiamily' ,'fish' ,'anything' ,'eatmore'], //Netherlands
  ['fiamily' ,'fish' ,'anything' ,'eatmore'], //Portugal
  ['fiamily' ,'fish' ,'anything' ,'eatmore'], //Thailand
  ['fiamily' ,'fish' ,'anything' ,'eatmore'], //Croatia
  ['fiamily' ,'fish' ,'anything' ,'eatmore'], //Greece
  ['fiamily' ,'fish' ,'anything' ,'eatmore'], //Indonesia
  ['fiamily' ,'fish' ,'anything' ,'eatmore'] //Mexico
];

let hotels = [ 
  ['sleepwill' ,'take a rest' ,'anything' ,'luxury'], //africa
  ['sleepwill' ,'take a rest' ,'anything' ,'luxury'], //Czech
  ['sleepwill' ,'take a rest' ,'anything' ,'luxury'], //Italy
  ['sleepwill' ,'take a rest' ,'anything' ,'luxury'], //Netherlands
  ['sleepwill' ,'take a rest' ,'anything' ,'luxury'], //Portugal
  ['sleepwill' ,'take a rest' ,'anything' ,'luxury'], //Thailand
  ['sleepwill' ,'take a rest' ,'anything' ,'luxury'], //Croatia
  ['sleepwill' ,'take a rest' ,'anything' ,'luxury'], //Greece
  ['sleepwill' ,'take a rest' ,'anything' ,'luxury'], //Indonesia
  ['sleepwill' ,'take a rest' ,'anything' ,'luxury'] //Mexico

];
let resturants_img = [

];

let hotels_imgs = [

];

let landmarks = [

];
// let li;

// let minNum =0;
let contryArr=['Africa','Czech','Italy','Netherlands','Portugal','Thailand','Croatia',
  'Greece','Indonesia','Mexico'];


// let result=document.getElementById('result');
// // let botton=document.getElementById('submit');
// let imgSection=document.getElementById('section');
// let imgRender=document.getElementById('voteimg');

/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function MainC (name , imgPath = [] ,clickCon =0, discription = '',
 facts = [],resturants =[],resturants_img=[],hotels=[],hotels_imgs=[],landmarks=[]) {
  this.name=name;
  this.imgPath=imgPath;
  //this.contryName=contryName;
  // this.showCoun = showCoun;
  this.description = discription;
  this.facts = facts;
  this.resturants = resturants;
  this.resturants_img= resturants_img;
  this.hotels=hotels;
  this.hotels_imgs = hotels_imgs;
  this.landmarks=landmarks;
  this.clickCon=clickCon;
  this.seemore =0;
  MainC.mainCArr.push(this);
/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
MainC.mainCArr =[];

for (let i = 0; i < contryArr.length ; i++) {
  let img = [];
  for ( let j = 0; j < allImg.length - 1; j++) {
    if(contryArr[i] === allImg[j].split('/')[0]) {
      img.push(allImg[j]);
    }
  }

  //take input from the datat storage 
  new MainC (contryArr[i], img, JSON.parse(localStorage.data)[i].clickCon, '', facts[i],resturants[i],resturants_img[i],hotels[i],hotels_imgs[i],landmarks[i]);
}


// let h1Elem=document.createElement('h1');
// let randomImg =0;
// let h2=document.createElement('h2');

render();
function render() { // !rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

  let str = '';
  for(let i = 0; i < MainC.mainCArr.length; i++) {
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
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiMhWB9c2QJaT0jrS_uNfz4vVPmW2ocsFuw&usqp=CAU">
    <span id = '${MainC.mainCArr[i].name}1'>${MainC.mainCArr[i].clickCon}</span>
    <div class="container">
  
        <h4>Quick Facts</h4>
        <ul>
            <li>Population: ${MainC.mainCArr[i].facts[0]}</li>
            <li>Capital: ${MainC.mainCArr[i].facts[1]}</li>
            <li>Official Language: ${MainC.mainCArr[i].facts[2]}</li>
            <li>Best Known For: ${MainC.mainCArr[i].facts[3]}</li>
        </ul>
  
    </div>
    <button onclick="next('${MainC.mainCArr[i].name}' );">vote</button>
    <a href="/html/second.html" onclick="requestinfo('${MainC.mainCArr[i].name}');"><button>see more </button></a>
    

  </div>`;
  }
  // on span we should update the votes number ;
  document.getElementById('mainSection').innerHTML = str;
}
  // randomImg ++;

  // console.log(randomImg);
  // imgRender.src=`/img/${MainC.mainCArr[randomImg].imgPath}`;

  // h2.textContent=allImg[randomImg].split('/')[0];
  // imgSection.appendChild(h2);

  // MainC.mainCArr[randomImg].showCoun++;

  // if (minNum >= MainC.mainCArr.length-3) {

  //   h1Elem.textContent='Vote Finish Please click on Show Result Button to See the Progress';
  //   imgSection.appendChild(h1Elem);
  // }


  // minNum++;


  // if (minNum <= MainC.mainCArr.length-3 ) {
  //   setTimeout('render()',2000);
  //   // chart();
  // }
//   console.log(minNum);
//   console.log(MainC.mainCArr.length-1);


// let africa=0,czech=0,italy=0,netherlands=0,portugal=0,thailand=0,croatia=0,
//   greece=0,indonesia=0,mexico=0,newZealand=0,sriLanka=0;

// let click=[africa,czech,italy,netherlands,portugal,thailand,croatia,greece,indonesia,
//   mexico,newZealand,sriLanka
// ];

//render();
// function updateCounter(i) {
//   let likes = 0 ;

//   for (let i in MainC.mainCArr[i].name){
//     likes ++ ;
//   }

//   let cart_count = document.getElementById("itemCount") 
//   cart_count.textContent = item_count;  
  

// }

/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//imgRender.addEventListener('click',next);
function next(name){
  //if ( minNum >= MainC.mainCArr.length) {
 //   imgRender.removeEventListener('click',next);
 // }
  for (let i = 0; i < MainC.mainCArr.length; i++) {


    if (MainC.mainCArr[i].name === name ) {
      MainC.mainCArr[i].clickCon++;
      document.getElementById(name+"1").innerHTML= MainC.mainCArr[i].clickCon;
    }
  }
  localStorage.data = JSON.stringify(MainC.mainCArr);
  
//  sumcont();
}
function requestinfo (name){
  for (let i = 0; i < MainC.mainCArr.length; i++) {


    if (MainC.mainCArr[i].name === name ) {
      MainC.mainCArr[i].seemore++;
};
}
localStorage.data = JSON.stringify(MainC.mainCArr);
}
/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let nameArr = [];
// function sumcont() {

//   let ul = document.createElement( 'ul' );
//   result.appendChild( ul );
//   li = document.createElement( 'li' );


//   li.textContent = `${MainC.mainCArr[randomImg].contryName} had ${click}`;
//   nameArr.push(MainC.mainCArr[randomImg].contryName);
//   ul.appendChild( li );
// }
// botton.addEventListener('click',shoewchart);
// function shoewchart{


// }

//chart();
/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function chart(){
//   let ctx = document.getElementById('myChart').getContext('2d');
//   let myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
// }

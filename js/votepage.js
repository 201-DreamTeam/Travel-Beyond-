'use strict';


let africaImgs = [
  'Africa/Betty\'s Bay, South Africa.jfif',
  'Africa/Harold Porter National Botanical Garden, Betty\'s Bay, South Africa.jfif',
  'Africa/Blyde River Canyon, South Africa.jfif' ,
  'Africa/Nature\'s Valley, South Africa.jfif',
  'Africa/Cape Town, South Africa.jfif',
  'Africa/Simon\'s Town, Cape Town, South Africa.jfif'
  
];
let czechImgs = [

  'Czech/Charles Bridge, Prague, Czech Republic.jfif',
  'Czech/Prague, Czechia.jfif',
  'Czech/St.Charles Bridge, Prague, Czechia.jfif',
  'Czech/Charles Bridge, Prague, Praha, Czech Republic.jfif',
  'Czech/Prague, Prague, Czechia.jfif',
  'Czech/Prague, Czech Republic, snow.jfif',
  'Czech/Prague, czech republic.jfif'

];
let italyImgs = [

  'Italy/Cinque Terre, La Spezia, Italie.jfif',
  'Italy/Giardino Bardini, Firenze, Italy.jfif',
  'Italy/Rialto Bridge, Venezia, Italy.jfif',
  'Italy/Cinque Terre, La Spezia, Italy.jfif',
  'Italy/Manarola, Italy.jfif',
  'Italy/San Gimignano, Province of Siena, Italy.jfif',
  'Italy/Colosseo, Rome, Italy.jfif',
  'Italy/Metropolitan City of Rome, Italy.jfif'

];
let netherlandsImgs = [


  'Netherlands/Amsterdam Architecture, Netherlands.jfif',
  'Netherlands/Groningen, Netherlands.jfif',
  'Netherlands/Swifterband, Netherlands.jfif',
  'Netherlands/Amsterdam, Netherlands.jfif',
  'Netherlands/Netherlands.jfif'


];
let portugalImgs = [

  'Portugal/Jardim do Torel, Lisboa, Portugal.jfif',
  'Portugal/Lisbon, Portugal.jfif',
  'Portugal/Porto Bridge, Portugal.jfif',
  'Portugal/Porto, Portugal.jfif',
  'Portugal/Lisbon Top View, Portugal.jfif',
  'Portugal/Porto Alleys, Portugal.jfif',
  'Portugal/Porto Sunset, Portugal.jfif'

];
let thailandImgs = [

  'Thailand/Ao Nag, Thailand.jfif' ,
  'Thailand/Ko Lipe, Thailand.jfif',
  'Thailand/Phi Phi Islands, Phuket, Thailand.jfif',
  'Thailand/Doi Inthanon National Park, Ban Luang, Thailand.jfif',
  'Thailand/Maya Bay, Ko Phi Phi, Thailand.jfif',
  'Thailand/Samujana Villa, Koh Samui, Thailand.jfif'


];
let croatiaImgs = [

  'Croatia/Boats of Cavtat, Cavtat, Croatia.jfif',
  'Croatia/Dubrovnik, Croatia.jfif',
  'Croatia/Šibenik, Croatia.jfif',
  'Croatia/Bol, Croatia.jfif',
  'Croatia/Put Zlatnog rata, Bol, Croatia.jfif'


];
let greeceImgs = [

  'Greece/Antiparos, Greece.jfif',
  'Greece/Fira, Thera, Greece.jfif',
  'Greece/Mýkonos, Greece.jfif',
  'Greece/Santorini, Greece.jfif',
  'Greece/Chania, Greece.jfif',
  'Greece/Mykonos, Greece.jfif',
  'Greece/Oia, Greece.jfif',
  'Greece/Top View Santorini, Greece.jfif'


];
let indonesiaImgs = [

  'Indonesia/Aling-Aling Waterfall, Indonesia.jfif',
  'Indonesia/Broken Beach (Pasih Uug), Bunga Mekar, Indonesia..jfif',
  'Indonesia/Penida Island, Indonesia.jfif',
  'Indonesia/Bali, Indonesia.jfif',
  'Indonesia/Candi Plaosan, Indonesia.jfif',
  'Indonesia/Special Region of Yogyakarta, Indonesia.jfif'

];
let mexicoImgs = [

  'Mexico/Guanajuato, Mexico.jfif',
  'Mexico/San Miguel de Allende, Guanajuato, Mexico.jfif',
  'Mexico/San Miguel de Allendee, Mexico.jfif',
  'Mexico/Querétaro, Qro., Mexico.jfif',
  'Mexico/San Miguel de Allende, Mexico.jfif'


];
let newZealand=[
  'New Zealand/Lake Matheson, New Zealand.jfif' ,
  'New Zealand/Mount Maunganui, Tauranga, New Zealand.jfif',
  'New Zealand/Lake Pukaki, New Zealand.jfif',
  'New Zealand/Otago Beach, New Zealand..jfif',
  'New Zealand/Lake Tekapo, New Zealand.jfif',
  'New Zealand/Otago Coast, New Zealand..jfif',
  'New Zealand/Mount Maunganui Sheep, Tauranga, New Zealand.jfif' ,
  'New Zealand/Sutherland Falls, Fiordland National Park, New Zealand.jfif'
];

let sriLankaImgs = [

  'Sri Lanka/Kaluketiya Watta Rd, Maaliyadda, Sri Lanka.jfif' ,
  'Sri Lanka/Petti Petti Mirissa, Bandaramulla, Mirissa, Sri Lanka.jfif',
  'Sri Lanka/Sri Lanka.jfif',
  'Sri Lanka/Mirissa, Sri Lanka.jfif',
  'Sri Lanka/Sri Lanka Sea.jfif'

];
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

  'New Zealand/Lake Matheson, New Zealand.jfif' ,
  'New Zealand/Mount Maunganui, Tauranga, New Zealand.jfif',
  'New Zealand/Lake Pukaki, New Zealand.jfif',
  'New Zealand/Otago Beach, New Zealand..jfif',
  'New Zealand/Lake Tekapo, New Zealand.jfif',
  'New Zealand/Otago Coast, New Zealand..jfif',
  'New Zealand/Mount Maunganui Sheep, Tauranga, New Zealand.jfif' ,
  'New Zealand/Sutherland Falls, Fiordland National Park, New Zealand.jfif',

  'Sri Lanka/Kaluketiya Watta Rd, Maaliyadda, Sri Lanka.jfif' ,
  'Sri Lanka/Petti Petti Mirissa, Bandaramulla, Mirissa, Sri Lanka.jfif',
  'Sri Lanka/Sri Lanka.jfif',
  'Sri Lanka/Mirissa, Sri Lanka.jfif',
  'Sri Lanka/Sri Lanka Sea.jfif',

];

let all_img = [africaImgs,czechImgs,italyImgs,netherlandsImgs,portugalImgs,thailandImgs,croatiaImgs,greeceImgs,
  indonesiaImgs,mexicoImgs,newZealand,sriLankaImgs
];
// console.log(all_img);
let li;

let minNum =0;
let contryArr=['Africa','Czech','Italy','Netherlands','Portugal','Thailand','Croatia',
  'Greece','Indonesia','Mexico','New Zealand','Sri Lanka'];


let result=document.getElementById('result');
let imgSection=document.getElementById('section');
let imgRender=document.getElementById('voteimg');

/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function MainC (name , imgPaths ,showCoun =0,clickCont =0) {
  this.name=name;
  this.imgPaths=imgPaths;
  this.showCoun = showCoun;
  this.clickCont=clickCont;

  MainC.mainCArr.push(this);
/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
MainC.mainCArr =[];

for (let i = 0; i < all_img.length - 1; i++) {
  new MainC (contryArr[i],all_img[i]);
  // for (let j = 0; j <all_img[i].length; j++) {
  //   new MainC (contryArr[i],all_img[i][j]);

    // console.log(all_img[i][j]);
  }


console.log(MainC.mainCArr);

let h1Elem=document.createElement('h1');
let randomImg =0;
let h2=document.createElement('h2');

function render() { // !rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

  randomImg ++;

  // console.log(randomImg);

  for (let i =0;i<MainC.mainCArr[randomImg].length;i++){
    imgRender.src=`/img/${MainC.mainCArr[randomImg].imgPaths}`;
    //waiting for 5 sec
    // h2.textContent=MainC.mainCArr[randomImg];
  }
  console.log(`/img/${MainC.mainCArr[randomImg].imgPaths}`);

  imgSection.appendChild(h2);

  MainC.mainCArr[randomImg].showCoun++;

  if (minNum >= MainC.mainCArr.length-3) {

    h1Elem.textContent='Vote Finish Please click on Show Result Button to See the Progress';
    imgSection.appendChild(h1Elem);
  }


  minNum++;


  if (minNum <= MainC.mainCArr.length-3 ) {
    setTimeout('render()',500);

  }
  // console.log(minNum);
  // console.log(MainC.mainCArr.length-1);
}


render();


/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

imgRender.addEventListener('click',next);
function next(){
  console.log('hello ',MainC.mainCArr);
  if ( minNum >= MainC.mainCArr.length) {
    imgRender.removeEventListener('click',next);
  }
  for (let i = 0; i < MainC.mainCArr.length; i++) {

    if (MainC.mainCArr[randomImg].contryName === contryArr[i]) {

      // clickCon[i]++;
    }

  }
  // MainC.mainCArr[randomImg].clickCon++;
  // console.log(MainC.mainCArr[randomImg].name);
  sumcont();
}

/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let nameArr = [];
function sumcont() {
  let ul = document.createElement( 'ul' );
  result.appendChild( ul );
  li = document.createElement( 'li' );



  li.textContent = `${MainC.mainCArr[randomImg].contryName} had ${MainC.mainCArr[randomImg].clickCont}`;

  // nameArr.push(MainC.mainCArr[randomImg].contryName);
  ul.appendChild( li );


}

// console.log(nameArr);

// sumcont();
/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


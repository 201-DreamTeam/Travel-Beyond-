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

  ['', '', '', ''],//africa
  ['', '', '', ''],//Czech
  ['', '', '', ''], //Italy
  ['', '', '', ''], //Netherlands
  ['', '', '', ''], //Portugal
  ['', '', '', ''], //Thailand
  ['', '', '', ''], //Croatia
  ['', '', '', ''], //Greece
  ['', '', '', ''], //Indonesia
  ['', '', '', ''] //Mexico

];

let resturants = [
  ['The Phatt Chef, Thabo Mofutsanyana',
    'L’Orange Bleue,Thaba Pitsi Nature Reserve, Limpopo',
    'Crocafellas, Kruger National Park',
    'The Tasting Room, Cape Town'], //Africa
  ['Na slamníku, Czech Restaurant, Starý Bubeneč' ,
    'Kuchyň, Unique Experience Restaurant, Hradčanské náměst' ,
    'Portfolio Restaurant, Fine Dining Restaurant, Nové Město' ,
    'Café Savoy, Czech & French Restaurant, Malá Strana'], //Czech
  ['steria Francescana (Modena)  Contacts:www.osteriafrancescana.it reserve@osteriafrancescana.it Via Stella 22, Modena+39-059-223912' ,
    'La Pergola dell’Hotel Rome Cavalieri Contacts: www.romecavalieri.it romhi.lapergolareservations@waldorfastoria.com Via Cadlolo 101, Roma +39-06-35092152.' ,
    'Le Calandre (Rubano, Padova) Contacts: www.alajmo.it info@alaimo.it Via Liguria 1, Località Sarmeola, Rubano +39-049-630303' ,
    'Reale (Località Casadonna, Castel di Sangro, L’Aquila) Contacts: www.ristorantereale.it info@ristorantereale.it Contrada Santa Liberata, località Casadonna, Castel di Sangro +39-0864-69382.'],//Italy
  ['. De Librije ★★★ address: 13-15 Broerenkerkplein, Zwolle' ,
    'Inter Scaldes Address:  2 Zandweg, Kruiningen' ,
    '. De Lindenhof ★★☆ Address: 77 Beulakerweg, Giethoorn' ,
    'De Kromme Watergang ★★☆ Address: 6 Slijkplaat, Hoofdplaat'], //Netherlands
  ['-The Yeatman, Porto ua do Choupelo (Santa Marinha), 345, 4400-088 Vila Nova de Gaia, Portugal ' ,
    '-Casa de Chá da Boa NovaAvenida da Liberdade nº 1681, 4450-718 Leça da Palmeira Porto, Portugal' ,
    '-O PaparicoRua de Costa Cabral 23434200-232 Porto, Portugal 22 540 0548' ,
    '-Esporão No Porto Rua do Almada 5014050-039 Porto, Portugal22 019 0153'], //Portugal
  ['-Blue Elephant, Bangkok 233 Thanon Sathon Tai, Yannawa, Bangkok 10120, Thailand' ,
    '-Eat Me, Bangkok Just off Convent Road (in Soi Pipat 2) Silom, Bangkok, Thailand' ,
    '-Cafe des Amis, Pattaya Thappraya Road Soi 11, 391/6, Moo 10, Pattaya 20150, Thailand' ,
    '-Goji Kitchen & Bar, Bangkok 99 Sukhumvit Soi 22, Klong Ton, Klong Toey, Bangkok, Thailand '], //Thailand
  ['-Bowa Restaurant Pakljena 3 Suđurađ 20000 ' ,
    '-Restaurant Ankora Ante Starcevica 2 Dubrovnik 20000' ,
    '-Trattoria Carmen Kneza Damjana Jude 10 Dubrovnik 20000' ,
    '-Bistro Izvor Rožat Gornji 1A Rožat 20236'], //Croatia
  ['-Tudor Hall Vasileos Georgiou A 3, Athina 105 64, Greece' ,
    '-Spondi Pirronos 5, Athina 116 36, Greece ' ,
    '-Matsuhisa Apollonos 40, Vouliagmeni 166 71, Greece ' ,
    '-Orizontes Aristippou 1 Lykavittos, Athens Greece'], //Greece
  ['-Ku De Ta Jl. Kayu Aya No.9, Seminyak, Kuta, Kabupaten Badung, Bali 80361, Indonesia' ,
    '-Holliday Restaurant Pertokoan Pandanaran, Jl. Pandanaran No.6, Pekunden, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50241, Indonesia' ,
    '-Kaum Bali Jl. Petitenget No.51B, Seminyak, Kuta, Kabupaten Badung, Bali 83061, Indonesia' ,
    '-Waroeng Tugu Hotel Tugu Bali, JL. Pantai Batu Bolong, Badung, Canggu Beach, Canggu, Denpasar, Kabupaten Badung, Bali, Indonesia'], //Indonesia
  ['-Pujol in Mexico City Pujol, Tennyson 133, Polanco, Polanco IV Secc, 11550 Ciudad de México, CDMX, Mexico +52 55 5545 4111' ,
    '-El Mural de los Poblanos in Puebla City El Mural, 16 de Septiembre 506, Centro, 72000 Puebla, Pue, Mexico +52 222 242 0503' ,
    '-Quintonil in Mexico City Quintonil, Av. Isaac Newton 55, Polanco, Polanco IV Secc, 11560 Ciudad de México, CDMX, Mexico+52 55 5280 1660' ,
    '-Los Toneles in San Luis Potosí Los Tonels, Av. Estatuto Jurídico 1040, Burócrata, 78270 San Luis, S.L.P., Mexico +52 444 817 9230'] //Mexico
];

let hotels = [
  ['Parker Cottage Guesthouse Carstens Street, Tamboerskloof, 8001 Cape Town, South Africa' ,
    'Antrim Villa by Antrim Collection 12 Antrim Road, Greenpoint , Three Anchor Bay, 8005 Cape Town, South Africa' ,
    'Park Inn by Radisson Cape Town Foreshore 29 Heerengracht Street, Foreshore, Cape Town CBD, 8001 Cape Town, South Africa – Great location - show map' ,
    'Radisson RED Hotel V&A Waterfront Cape Town Silo 6, Silo Square, V&A Waterfront, Waterfront, 8001 Cape Town, South Africa '], //africa
  ['La BallerinaHotel Dittrichova 20, Prague, Prague Region, Czech Republic' ,'Eurostars ThaliaHotel Narodni Trida 13, Prague, Prague Region, Czech Republic' ,
    'Hotel Three StorksHotel Valdstejnske Naemsti 8, Prague, Prague Region, Czech Repu' ,
    'nodata'], //Czech
  ['The St. Regis Venice' ,
    'Hotel Principe Di Savoia - Dorchester Collection' ,
    'Forte Village Resort - Il Castello' ,
    'San Clemente Palace Kempinski Venice'], //Italy
  ['Swissotel Amsterdam Damrak 96, 1012 LP Amsterdam The Netherlands 00 31 20 225 1720' ,
    'The Hoxton, Amsterdam Herengracht 255, 1016 BJ Amsterdam The Netherlands' ,
    'NH Collection Amsterdam Grand Hotel Krasnapolsky Dam 9, 1012 JS Amsterdam The Netherlands 00 34 913 98 46 38' ,
    'Ambassade Hotel Herengracht 341, 1016 AZ Amsterdam The Netherlands 00 31 20 555 0222'], //Netherlands
  ['-Tivoli Carvoeiro Algarve Resort Carvoeiro, Algarve, Portugal' ,
    '-Hospedaria Tavira, Algarve, Portugal' ,
    '-Memmo Príncipe Real Lisbon, Portugal' ,
    '-Vila Vita Parc Armação de Pera, Algarve, Portugal '], //Portugal
  ['-Four Seasons Resort Koh Samui Mae Nam, Koh Samui, Thailand' ,
    '-Six Senses Yao Noi Ko Yao Noi, Phuket, Thailand' ,
    '-Kamalaya Koh Samui Koh Samui, Thailand' ,
    '-Mandarin Oriental Bangkok angkok, Thailand'], //Thailand
  ['-Hotel Navis Volosko, Opatija, Croatia' ,
    '-Hotel LemongardenSutivan, Brac, Croatia' ,
    '-Palmizana Hotel Hvar, Croatia' ,
    '-Valamar Isabella Miramare Sveti Nikola Island, Poreč, Croatia'], //Croatia
  ['-Perivolas Santorini, Greece' ,
    '-Kókkini Porta Rossa Rhodes, Greece' ,
    '-Hotel Phaedra Hydra, Saronic Islands, Greece ' ,
    '-The Rooster Antiparos, Greece'], //Greece
  ['-Four Seasons at Jimbaran BayBali, Indonesia' ,
    '-AmandariUbud, Bali, Indonesia' ,
    '-Nihi Sumba Sumba, Indonesia' ,
    '-Hanging Gardens of Bali Ubud, Bali, Indonesia'], //Indonesia
  ['-JW Marriott Cancun Resort & Spa, Cancun, Mexico' ,
    '-The Cape Los Cabos, Baja California, Mexico' ,
    '-Amalys Luxury Resort, Santa Maria de Colotepec, Mexico' ,
    '-One&Only Palmilla, Los Cabos, Baja California, Mexico'] //Mexico

];
let resturants_img = [
  ['/img/travel/africa rest/2.       Crocafellas, Kruger National Park.jfif',
   '/img/travel/africa rest/3.       L’Orange Bleue,Thaba Pitsi Nature Reserve, Limpopo.jfif',
    '/img/travel/africa rest/4.       The Phatt Chef, Thabo Mofutsanyana.jpg',
     '/img/travel/africa rest/The Tasting Room, Cape Town.jfif'],//africa
  ['/img/travel/czech resturants/Café Savoy, Czech & French Restaurant, Malá Strana.jpg',
   '', '', ''],//Czech
  ['', '', '', ''], //Italy
  ['', '', '', ''], //Netherlands
  ['', '', '', ''], //Portugal
  ['', '', '', ''], //Thailand
  ['', '', '', ''], //Croatia
  ['', '', '', ''], //Greece
  ['', '', '', ''], //Indonesia
  ['', '', '', ''] //Mexico

];

let hotels_imgs = [
  ['', '', '', ''],//africa
  ['', '', '', ''],//Czech
  ['', '', '', ''], //Italy
  ['', '', '', ''], //Netherlands
  ['', '', '', ''], //Portugal
  ['', '', '', ''], //Thailand
  ['', '', '', ''], //Croatia
  ['', '', '', ''], //Greece
  ['', '', '', ''], //Indonesia
  ['', '', '', ''] //Mexico

];

let landmarks = [['The Big Hole, Kimberle Kimberley was put on the mining map when it became clear, it the late 1860s, that the area is rich in diamonds',
  'The Castle of Good Hope, Cape Town One of the oldest buildings in South Africa, Castle of Good Hope, completed in 1666, was the hub of political and military activity in the country.',
  'Isandlwana Battlefield, Isandlwanahe Battle of Isandlwana took place on January 22, 1879, when approximately 20,000 Zulu warriors, under King Cetshwayo’s command, successfully ambushed and defeated a British camp.',
  'Nelson Mandela Capture Site, KwaZulu-Natal Nelson Mandela’s arrest occurred on August 5, 1962, at this spot in KwaZulu-Natal after which The Rivonia Treason Trial followed.'],//africa
['Cathedral of St. Peter and St. Paul This neo-Gothic cathedral is famous for the bells that always ring noon at 11 A.M., a tradition that dates back to a 1645 siege by the Swedes.',
  'Staromestske namesti The most significant square of historical Prague, it was founded in the 12th century and has been witness to many historical events',
  'Diana Lookout Toweriana is perhaps the most popular tourist attraction in Karlovy Vary. Take the funicular from colonnade street to get direct to this beautiful place incl.',
  'Villa Tugendhat this modernist landmark is an outstanding example of the international architectural style that flourished in 1920s Europe.'],//Czech
['Piazza Navona, Rome Piazza Navona, translated into English as Navona Square, was initially built as a sporting stadium by Emperor Domitian in 86 BC.'
  , 'Roman Forum, Rome The Roman Forum is adjacent to Palatine Hill so you can easily walk from one historical site to another but they have separate entrances.',
  'Colosseum, Rome The Colosseum is regarded as a main symbol of the city and is one of the most-visited and famous historical landmarks in Italy.',
  'Trevi Fountain, Rome . The Baroque-style water fountain is one of the largest fountains you can find in Rome.'], //Italy
['The Rijksmuseum The Rijksmuseum is one of the most notable landmarks of the Netherlands. This is actually the National Museum for Art and History and the largest art museum in the country. It’s located in Amsterdam in the area of Museumplein.',
  'Erasmus Bridge One of the Netherlands ‘ most famous landmarks is the 802-meter long, cable-stayed Erasmus Bridge in Rotterdam. Even though this bridge’s construction started in 1986, it was only finished in 1996, when Queen Beatrix inaugurated it.',
  'Anne Frank House and Museum The Anne Frank House is a biographical museum dedicated to Anne Frank, a Jewish teen who is best known for her memoir “The Diary of a Young Girl.” It is located in Prinsengracht 263, Amsterdam, where she lived in hiding for over two years during World War II.',
  'Damrak Houses in Amsterdam Another one of the best landmarks of the Netherlands located in Amsterdam are the Damrak Houses. You can find these near the central train station of Amsterdam'], //Netherlands
['-Famous Portugal Landmarks – Dom Luis Bridge The Dom Luis Bridge is a double-deck metal bridge located in the northern city of Porto.',
  '-Benagil Sea Cave The Algarve region is known for gorgeous beaches, dramatic coastlines, cliffs and caves',
  '-Pena Palace – Landmarks of Portugal  It’s perched on a hill in the lush Sintra Mountains and contrasts beautifully with the forested landscape.',
  '- Belém Tower – Famous Landmarks of Portugal It was built using lioz limestone between 1514 and 1519.'], //Portugal
['-The Grand Palace, Bangkok Collection of impressive temples and structures in Rattanakosin.',
  '-Sukhothai Historical Park, Sukhothai Founded in 1238, Sukhothai is one of Thailand’s most spectacular archaeological sites that previously formed the capital of the Thai Empire for around 140 years.',
  '-Wat Rong Khun, Chiang Rai It is one of the most spectacular and fascinating landmarks in Thailand.',
  '-Wat Phrathat Doi Suthep, Chiang Mai It is home to a glittering golden pagoda surrounded by beautiful pavilions, buildings and statues including a relic of the Lord Buddha.'], //Thailand
['-Plitvice Lakes Listed as a UNESCO World Heritage site since 1979, Plitvice Lakes forms an incredible national park in Croatia.',
  '-Zlatni Rat Beach Known as the Golden Horn of Croatia, Zlatni Rat Beach is a stretch of golden sands and pebble beach next to deep blue waters.',
  '-Cetina River source Sometimes referred to as Glavas Source or Glavas Wellspring. The source is a reservoir more than 150m (490ft) deep.',
  '-Mount BiokovoIt the highest mountain in Croatia, with its summit at 1762m (5780ft) above sea level.'], //Croatia
['-Parthenon Parthenon sits high over a complex of temples defined as the Acropolis of Athens, committed to the Greek goddess Athena. ',
  '-Olympia Olympia sits on the western side of the Peloponnese, one of Greece’s biggest archaeological sites. ',
  '-Spinalonga Island Located near the northeastern coast of Crete, Spinalonga Island is a fascinating piece of history you must add to your Greece bucket list.',
  '-Canal d’Amour, Corfu Swoon over one of the most famous natural landmarks in Corfu, the Channel of Love, just outside the village of Sidari on the northwestern coast of the isle.'], //Greece
['-Ubud Monkey Forest Located on the island of Bali, the Ubud Monkey Forest is a nature reserve and a temple complex that is home to three 14th-century temples',
  '-Krakatau Island This island is famous for being the site of one of the largest volcanic eruptions in modern history and also for earning a shout-out in the B-52’s song, “Lava.”',
  '-Mount Bromo Krakatau is not the only volcano in Indonesia that you can hike up. Mount Bromo, which is located in East Java, is probably the most famous natural landmark in Indonesia.',
  '-Borobudur Borobudur is a spectacular and large Buddhist monument that was built on top of a hill in Java between 778 and 850 CE. '], //Indonesia
['-San Miguel de Allende In the Bajio mountains of Central Mexico, there is a small colonial destination known as San Miguel de Allende. The city is bursting with history.',
  '-Monarch Butterfly Biosphere Reserve The annual Monarch butterfly migration is one of nature’s great spectacles and a top attraction for visitors to Mexico’s central highlands.',
  '-El Malecon The boardwalk in Puerto Vallarta, also known as El Malecon, is a marvellous seaside promenade that border the blue waters of the Pacific.',
  '-Uxmal The ancient Mayan city of Uxmal is one of the most historically and culturally significant attractions in Mexico. Roughly 55 km (35 miles) south of Merida in Yucatan.'] //Mexico

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
  new MainC (contryArr[i], img, localStorage.data ? JSON.parse(localStorage.data)[i].clickCon : 0, '', facts[i],resturants[i],resturants_img[i],hotels[i],hotels_imgs[i],landmarks[i]);
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
            <input type="radio" name="radio-btn" id="radio1${i}">
            <input type="radio" name="radio-btn" id="radio2${i}">
            <input type="radio" name="radio-btn" id="radio3${i}">
            <input type="radio" name="radio-btn" id="radio4${i}">
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
            <label for="radio1${i}" class="manual-btn"></label>
            <label for="radio2${i}" class="manual-btn"></label>
            <label for="radio3${i}" class="manual-btn"></label>
            <label for="radio4${i}" class="manual-btn"></label>
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
      document.getElementById(name+'1').innerHTML= MainC.mainCArr[i].clickCon;
    }
  }
  localStorage.data = JSON.stringify(MainC.mainCArr);

//  sumcont();
}
function requestinfo (name){
  for (let i = 0; i < MainC.mainCArr.length; i++) {


    if (MainC.mainCArr[i].name === name ) {
      MainC.mainCArr[i].seemore++;
    }
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



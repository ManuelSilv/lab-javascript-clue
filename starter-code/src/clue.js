// Characters
var mrGreen = {

first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
};

var drOrchid= {

first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"
};

var profPlum = {

first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer" 
};

var missScarlet = {

first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
};

var mrsPeacock = {

first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", 
occupation:   "Socialité"

};

var mrMustard  = {

first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"

};

// Characters Array
var characters = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Weapons object in an array

var weapons =[ {name: "rope", weight: 10},{name: "knife", weight: 8},{name: "candlestick", weight: 2},
              {name: "dumbbell", weight: 30},{name: "poison",weight: 2},{name: "axe",  weight: 15},
              {name: "bat", weight: 13},{name: "trophy", weight: 25},{name: "pistol", weight: 20} ];

// Rooms Array
var rooms = ['Dinning Room','Conservatory','Kitchen','Study','Library','Billiard Room',
'Lounge','Ballroom','Hall','Spa','Living Room','Observatory','Theater','Guest House','Patio'];
 
//function randomSelector
function randomSelector(characters, weapons, rooms){
  return {
    character: characters[Math.floor(Math.random()*characters.length)],
    weapon: weapons[Math.floor(Math.random()*weapons.length)],
    room: rooms[Math.floor(Math.random()*rooms.length)]
  }
}

function otherRandomSelector(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

var mystery = function(arr1, arr2, arr3) {
  var object = {
    character:otherRandomSelector(arr1),
    weapon:otherRandomSelector(arr2),
    room: otherRandomSelector(arr3)
  }
   return object
}

console.log("Mystery Object, ", mystery(characters, weapons, rooms))

var character = randomSelector(characters, weapons, rooms).character.first_name;
var weapon =  randomSelector(characters, weapons, rooms).weapon.name;
var room =  randomSelector(characters, weapons, rooms).room;
console.log(character)

let mysteryEnvelope = {
  murderer: {},
  room: {},
  weapon: {}
}
mysteryEnvelope = randomSelector(characters, weapons, rooms);
console.log(mysteryEnvelope)

function revealMystery(theEnvelope) {
  console.log(`${mysteryEnvelope.murderer.first_name} $
  {mysteryEnvelope.murderer.last_name}
  murdered Mr. body with a ${anEnvelope.weapon.name}
  in the $ ${anEnvelope.room.name}`)

  document.getElementById("murderer")
}

document.getElementById("play").onclick= function(){
  document.getElementById("murderer").forEach(characters.first_name);
  }

  





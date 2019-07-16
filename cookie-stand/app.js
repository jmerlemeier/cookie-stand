'use strict';


//Store my DOM node in a variable
var ulFirstPike = document.getElementById('pike-cookie-list');
var ulSeaTac = document.getElementById('seatac-cookie-list');
var ulSeatteCenter = document.getElementById('seattlecenter-cookie-list');
var ulCapHill = document.getElementById('capitolhill-cookie-list');
var ulAlki = document.getElementById('alki-cookie-list');

//Hour Array
var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Locations Array
var allLocations = [];

//TABLE
var tableBody = document.getElementById('table');

//1st and Pike Location min23, max65, ave6.3
// GLOBAL CONSTRUCTOR-----------------------------

function Location(name, mincust, maxcust, avecookie) {
  this.name = name;
  this.mincust =  mincust;
  this.maxcust = maxcust;
  this.avecookie = avecookie;
  this.cookieTotal = 0;
  this.randcustArr = [];
  this.randcookieArr = [];
  this.unorderedArr = [];
  allLocations.push(this);
}

// RANDOM CUSTOMER METHOD PROTOTYPE----------------
Location.prototype.randcust = 
function(){
  for(var i  = 0; i < hourArr.length; i++){
    var random = Math.floor(Math.random() * (this.maxcust-this.mincust) + this.mincust);
    this.randcustArr.push(random);
  }
  console.log('I am inside FirstPike-randcust');
};

// RANDOM COOKIES METHOD PROTOTYPE-----------------
Location.prototype.randcookies = 
function(){
  for(var i = 0; i < this.randcustArr.length; i++){
    this.randcookieArr.push(Math.floor(this.randcustArr[i]*this.avecookie));
    this.cookieTotal += (this.randcookieArr[i]);
    }
    console.log('I am inside SeaTac-randcookies');
};
    
// RANDOMCUSTOMER METHOD PROTOTYPE----------------
Location.prototype.unordered = 
function() {
for(var i = 0; i < hourArr.length; i++){
  this.unorderedArr.push(`${hourArr[i]}: ${this.randcookieArr[i]} cookies`);
  }
  console.log('I am inside SeaTac-unorderedArr');
  console.log(this.unorderedArr);
  };
  // RENDER NEEDS TO BE A PROTOYPE--------------------
Location.prototype.render = function(){
    this.randcust();
    this.randcookies();
    this.unordered();

    for(var i=0; i < hourArr.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = this.unorderedArr[i];
      ulFirstPike.appendChild(liEl);
    }
    var liEl = document.createElement('li');
    liEl.textContent = `TOTAL: ${this.cookieTotal} cookies`;
    ulFirstPike.appendChild(liEl);
};

// Instances-----------------------------------
new Location('1st and Pike', 23, 65, 6.3);
new Location('SeaTac', 3, 24, 6.3);
new Location('Seattle Center', 11, 38, 3.7);
new Location('Capitol Hill', 20, 38, 2.3);
new Location('Alki', 2, 16, 4.6);

// CALL YOUR RENDER!!!-----------------------------
for(var i = 0; i < allLocations.length; i++){
  allLocations[i].render();
};

// TABLE TIME-!!!!!!!!!!!!!---------------------------
// HEADER
function makeHeader (){
  // declaring elements
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  // appends
  tableBody.appendChild(trEl);
  // content
  thEl.textContent = 'gibberish';
  // appends
  trEl.appendChild(thEl); 
};
makeHeader();


// Make a Header (loop through an array)
//  - add text: thEl.textContent = 'stuffinarray';
//  - append th to tr: trEl.appendChild(thEl);
//  - append tr to the tableBody: tableBody.appendChild(trEl);

// use for loop to iterate through array to make the table
// var headerText = array?
      // for(var i = 0, i < headerText.length, i++) {
      //   var thEl = document.createElement('th');
      //   thEl.textContent = headerText[i];
      // };

// use constructor function info to render - use a for loop
//  - create tr
//  - append to tableBody
//  - create td
//  - add content
//  - append to tr 



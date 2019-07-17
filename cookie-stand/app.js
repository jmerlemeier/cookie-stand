'use strict';


//Store my DOM node in a variable
var ulFirstPike = document.getElementById('pike-cookie-list');
var ulSeaTac = document.getElementById('seatac-cookie-list');
var ulSeatteCenter = document.getElementById('seattlecenter-cookie-list');
var ulCapHill = document.getElementById('capitolhill-cookie-list');
var ulAlki = document.getElementById('alki-cookie-list');

// Global Variable
//Hour Array
var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// Locations Array
var allLocations = [];
//TABLE Variable
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
//********HEADER************
//LOCATION************
function makeHeader (){
var trEl = document.createElement('tr');
var tdEl = document.createElement('td');
tdEl.textContent = 'Location';
trEl.appendChild(tdEl);
tableBody.appendChild(trEl);

//Hours************
for(var i=0; i < hourArr.length; i++){
    // declaring elements
    var thEl = document.createElement('th');
    // appends
    // content
    thEl.textContent = hourArr[i];
    // appends
    trEl.appendChild(thEl); 
  };

//TOTAL************
  var tdElement = document.createElement('td');
tdElement.textContent = 'Total';
trEl.appendChild(tdElement);
tableBody.appendChild(trEl);
};
makeHeader();

//********STORE ROWS************
//MAKE NAME of STORE
//Hard Code first bit
//loop
//hard code last bit

//FIRST AND PIKE**
Location.prototype.randcookieArr = 
function makeStoreRow (){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = '1st and Pike';
  trEl.appendChild(tdEl);
  tableBody.appendChild(trEl);

  //AVERAGE COOKIE SALE FOR 1st and PIKE
  this.randcust();
  for(var i=0; i < hourArr.length; i++){
    // declaring elements
    var tdEl = document.createElement('td');
    // appends
    // content
    thEl.textContent = randcookieArr [i];
    // appends
    trEl.appendChild(tdEl); 
  };
  //TOTAL for 1st and pike
    var tdEl = document.createElement('td');
    tdEl.textContent = //pike cookie total(Need to make prototype?Location.prototype.cookieTotal);
    trEl.appendChild(tdEl);

};
// RENDER OR CALL?
makeStoreRow();

//FOOTER*************************************
//LOCATION************
function makeFooter (){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);
  tableBody.appendChild(trEl);
  
  //Hourly Cookie totals for all locations************
  for(var i=0; i < hourArr.length; i++){
      // declaring elements
      var tdEl = document.createElement('td');
      // appends
      // content
      tdEl.textContent = //average cookie sales each hour;
      // appends
      trEl.appendChild(tdEl); 
    };
  
  //TOTAL************
    var tdElement = document.createElement('td');
  tdElement.textContent = 'Grand Total';
  trEl.appendChild(tdElement);
  tableBody.appendChild(trEl);
  };
  makeFooter();
  
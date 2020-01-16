'use strict';

// GLOBAL VARIABLE-----EVERYTHING WILL USE THESE (NOT SPECIFIC)---------------------
//*********  Hour Array  *********
var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//*********  Locations Array  ********
//      will contain ENTIRE OBJECT INSTANCES (The made car/store from the factory)
var allLocations = [];

//*********  Table Element  *********
var tableBody = document.getElementById('table');

//*********  Form Element  *********
var formEl = document.getElementById('myForm');

// GLOBAL CONSTRUCTOR FUNCTION-------------------
function Location(name, mincust, maxcust, avecookie) {//factory
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avecookie = avecookie;
  this.cookieTotal = 0;
  this.randcustArr = [];
  this.randcookieArr = [];
  allLocations.push(this); //pushes all made cars/stores (instance) into the array
}

//RANDOM CUSTOMER METHOD PROTOTYPE----------------protoypes apply for every instance (every car/every store)
//*********  PROTOTYPES  *********
Location.prototype.generaterandcustArr = function(){
  for(var i  = 0; i < hourArr.length; i++){
    var random = Math.floor(Math.random() * (this.maxcust-this.mincust) + this.mincust);
    this.randcustArr.push(random);
  }
  // console.log('I am inside generaterandcustArr prototype.');
};

//*********  RANDOM COOKIES METHOD PROTOTYPE  *********
Location.prototype.generaterandcookiesArr =
function(){
  this.cookieTotal = 0;
  this.randcookieArr = [];//clear out old data

  for(var i = 0; i < hourArr.length; i++){
    this.randcookieArr.push(Math.ceil(this.randcustArr[i]*this.avecookie));
    this.cookieTotal += (this.randcookieArr[i]);
  }
  // console.log('I am inside generaterandcookiesArr prototype.');
};

// ********* RENDER ALL *********
Location.prototype.render = function(){
  this.generaterandcustArr();//order matters
  this.generaterandcookiesArr();

  var trEl = document.createElement('tr');
  tableBody.appendChild(trEl);

  //Make Location
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  //Make my data - cookes/hr
  for(var i=0; i < hourArr.length; i++){

    tdEl = document.createElement('td');
    tdEl.textContent = this.randcookieArr[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.cookieTotal;
  trEl.appendChild(tdEl);

};
//Instances-----------------------------------
new Location('1st and Pike', 23, 65, 6.3);
new Location('SeaTac', 3, 24, 1.2);
new Location('Seattle Center', 11, 38, 3.7);
new Location('Capitol Hill', 20, 38, 2.3);
new Location('Alki', 2, 16, 4.6);

//TABLE TIME !!!!!!!!!!!!!---------------------------

//********   HEADER   ************
//LOCATION************
function makeHeader (){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Location';
  trEl.appendChild(tdEl);
  tableBody.appendChild(trEl);

  //Hours************
  for(var i=0; i < hourArr.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hourArr[i];
    trEl.appendChild(thEl);
  }

  //TOTAL************
  tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
  tableBody.appendChild(trEl);
}

//********   FOOTER   ************
function makeFooter() {
  //First cell************
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  tdEl.textContent = 'Hourly Totals';
  trEl.appendChild(tdEl);
  tableBody.appendChild(trEl);

  var grandTotal = 0;
  //Body of Footer***********
  for(i = 0; i < hourArr.length; i++) {
    var hourlyTotal = 0;
    for(var j = 0; j < allLocations.length; j++){
      hourlyTotal += allLocations[j].randcookieArr[i];
      grandTotal += allLocations[j].randcookieArr[i];
    }


    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal;
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);
  tableBody.appendChild(trEl);
}

console.log(allLocations);


//EVENT LISTENER---------------------------------------------
// put a listener on the form -event(submit, callback function)
formEl.addEventListener('submit', function(e){//anonymous function which is the HANDLER!!
  e.preventDefault();

  var storename = e.target.storename.value;
  // console.log(storename);
  var minimumcustomers = e.target.minimumcustomers.value;
  // console.log(minimumcustomers);
  var maximumcustomers = e.target.maximumcustomers.value;
  // console.log(maximumcustomers);
  var averagecookies = e.target.averagecookies.value;
  // console.log(averagecookies);

  console.log(`max = ${maximumcustomers}, min =  ${minimumcustomers}, name = ${storename}, average cookies = ${averagecookies} `);
  //New instance
  new Location(storename, minimumcustomers, maximumcustomers, averagecookies);

  //Clear
  tableBody.innerHTML = '';

  //Executable code inside EVENT LISTENER
  //*********CALL HEADER*********
  makeHeader();

  //*********CALL YOUR RENDER*********
  for(var i = 0; i < allLocations.length; i++){
    allLocations[i].render();
  }
  //*********Call FOOTER FUNCTION*********
  makeFooter();
});

//Executable Code-----------------------------------
//*********CALL HEADER*********
makeHeader();

//*********CALL YOUR RENDER*********
for(var i = 0; i < allLocations.length; i++){
  allLocations[i].render();
}
//*********Call FOOTER FUNCTION*********
makeFooter();


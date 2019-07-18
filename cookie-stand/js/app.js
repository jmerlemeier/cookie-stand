'use strict';

// GLOBAL VARIABLE-----EVERYTHING WILL USE THESE (NOT SPECIFIC)---------------------
//*********  Hour Array  *********
var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//*********  Locations Array  ********
//      will contain ENTIRE OBJECT INSTANCES (The made car/store from the factory)
var allLocations = [];

//*********  Total Cookie Sales Array  ********
var totalcookiesalesperHour = [];

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
Location.prototype.generaterandcustArr = //first time we see generaterandcustArr
function(){
  for(var i  = 0; i < hourArr.length; i++){
    var random = Math.floor(Math.random() * (this.maxcust-this.mincust) + this.mincust);
    this.randcustArr.push(random);
  }
  console.log('I am inside generaterandcustArr prototype.');
};

//*********  RANDOM COOKIES METHOD PROTOTYPE  *********
Location.prototype.generaterandcookiesArr =
function(){
  for(var i = 0; i < hourArr.length; i++){
    this.randcookieArr.push(Math.ceil(this.randcustArr[i]*this.avecookie));
    this.cookieTotal += (this.randcookieArr[i]);
  }
  console.log('I am inside generaterandcookiesArr prototype.');
};

// ********* RENDER *********
Location.prototype.render = function(){
  this.generaterandcustArr();//order matters
  this.generaterandcookiesArr();

  //create tr
  var trEl = document.createElement('tr');
  //tableBody append tr
  tableBody.appendChild(trEl);

  //Make Location
  //create td
  var tdEl = document.createElement('td');
  //give it content - this.name
  tdEl.textContent = this.name;
  //tr appendChild td
  trEl.appendChild(tdEl);

  //MAKE DATA
  //Make my data - cookes/hr
  for(var i=0; i < hourArr.length; i++){
    //1. Create Element - td
    tdEl = document.createElement('td');

    //2. Give content.
    tdEl.textContent = this.randcookieArr[i];

    //3.Append it to the DOM.
    trEl.appendChild(tdEl);
  }
  //make total
  //create td element
  tdEl = document.createElement('td');
  //this.total
  tdEl.textContent = this.cookieTotal;
  //append
  trEl.appendChild(tdEl);

};
// Instances-----------------------------------
new Location('1st and Pike', 23, 65, 6.3);
new Location('SeaTac', 3, 24, 1.2);
new Location('Seattle Center', 11, 38, 3.7);
new Location('Capitol Hill', 20, 38, 2.3);
new Location('Alki', 2, 16, 4.6);


// TABLE TIME-!!!!!!!!!!!!!---------------------------

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
    // declaring elements
    var thEl = document.createElement('th');
    // appends
    // content
    thEl.textContent = hourArr[i];
    // appends
    trEl.appendChild(thEl);
  }
  
  //TOTAL************
  tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
  tableBody.appendChild(trEl);
}

//JULIE DONT TOUCH ABOVE STUFF!!!!!-----------------

//********   FOOTER   ************
function makeFooter() {
  //First cell************
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  
  tdEl.textContent = 'Hourly Totals for all Locations';
  
  trEl.appendChild(tdEl);
  tableBody.appendChild(trEl);
  
  //Body of Footer***********
  for(i = 0; i < hourArr.length; i++) {
    var hourlyTotal = 0;
    
    for(var j = 0; j < allLocations.length; j++){
      hourlyTotal += allLocations[j].randcookieArr[i];
    }
    
    tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal;
    // Append
    trEl.appendChild(tdEl);
  }
  //Last cell************
  var grandTotal = 0;
  for(var i=0; i < allLocations.length; i++) {
    grandTotal += allLocations[i].cookieTotal;
  }
  
  tdEl = document.createElement('td');
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);
}


//EVENT LISTENER---------------------------------------------
// put a listener on the form -event(submit, callback function)
formEl.addEventListener('submit', function(e){
  e.preventDefault();
  
  var storename = e.target.storename.value;
  console.log(storename);
  var minimumcustomers = e.target.minimumcustomers.value;
  console.log(minimumcustomers);
  var maximumcustomers = e.target.maximumcustomers.value;
  console.log(maximumcustomers);
  var averagecookies = e.target.averagecookies.value;
  console.log(averagecookies);
  
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


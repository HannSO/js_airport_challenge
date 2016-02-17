function Airport(weather, capacity) {
  this.weather = typeof weather !== 'undefined' ? weather : new Weather();
  this.loadingBay = [];
  var default_capacity = 150;
  this._CAPACITY = typeof capacity !== 'undefined' ? capacity : default_capacity;
}

Airport.prototype.addToLoadingBay = function(plane){
  if (this.weather.isStormy()){
    throw "Cannot accept plane in stormy weather";
  } else if (this.loadingBay.length === this._CAPACITY) {
    throw "Airport at capacity";
  }else {
  this.loadingBay.push(plane);
  }
};

Airport.prototype.removeFromLoadingBay = function(plane){
  if (this.loadingBay.length === 0 ) {
    throw "No planes available";
  } else if (this.weather.isStormy()){
    throw "Cannot let plane fly in stormy weather";
  } else  {
    this.loadingBay.pop(plane);
  }
};

function Airport(weather) {
  this.loadingBay = [];
}

Airport.prototype.addToLoadingBay = function(plane){
  this.loadingBay.push(plane);
};

Airport.prototype.removeFromLoadingBay = function(plane){
  if (this.loadingBay.length === 0 ) {
    throw "No planes available";
  } else {
    this.loadingBay.pop(plane);
  }
};

function Weather(){
};

Weather.prototype.isStormy = function(){
  var i = Math.floor(Math.random()*10);
  return i === 0 ? true : false;

};

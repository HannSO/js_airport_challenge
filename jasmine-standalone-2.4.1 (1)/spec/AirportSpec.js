describe("Airport", function() {

  var heathrow;
  var plane;
  var weather;

  console.log('read page?');

  beforeEach(function() {
    plane = 'bowing 747';
    weather = { isStormy: function(){}};
    spyOn(weather,'isStormy').and.returnValue(false);
    heathrow = new Airport(weather);

  });

  it("should have an empty loading bay when created" , function(){
    expect(heathrow.loadingBay).toEqual([]);
  });

  describe("#addToLoadingBay", function(){
    it("adds a plane to the loading bay", function(){
      heathrow.addToLoadingBay(plane);
      expect(heathrow.loadingBay).toContain('bowing 747');
    });
    it("throws an error if stormy", function(){
      weather.isStormy.and.returnValue(true);
      expect(function(){
        heathrow.addToLoadingBay(plane);
      }).toThrow("Cannot accept plane in stormy weather");
    });
    it("throws an error if airport is already at capacity", function(){
      for(var i=1; i<=heathrow._CAPACITY; i++) {heathrow.addToLoadingBay(plane)};
      expect(function(){
        heathrow.addToLoadingBay(plane);
      }).toThrow("Airport at capacity");
    });
  });

  describe("#removeFromLoadingBay", function(){
    it("removes the plane from the loading bay", function(){
      heathrow.addToLoadingBay(plane);
      heathrow.removeFromLoadingBay(plane);
      expect(heathrow.loadingBay).toEqual([]);
    });

    it("will raise an error if no planes are in loading bay to remove from it", function(){
      expect(function(){heathrow.removeFromLoadingBay(plane);}).toThrow("No planes available");
    });

    it("will not return a plane if there are no planes in the loading bay", function(){
      expect(function(){heathrow.removeFromLoadingBay(plane);}).not.toEqual(plane);
    });

    it("will throw an error if the weather is stormy", function(){
      heathrow.addToLoadingBay(plane);
      weather.isStormy.and.returnValue(true);
      expect(function(){heathrow.removeFromLoadingBay(plane);}).toThrow("Cannot let plane fly in stormy weather");
    });
  });

  describe("#capacity", function(){
    it("has a default capacity of 150", function(){
      expect(heathrow._CAPACITY).toEqual(150);
    });
  });
});

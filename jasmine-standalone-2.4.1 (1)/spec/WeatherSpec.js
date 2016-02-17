describe ("Weather", function(){
 var weather

 beforeEach(function(){
   weather = new Weather();

 });

 describe("isStormy", function(){
   it ("will return true 10% of the time", function(){
     spyOn(Math, 'random').and.returnValue(0);
     expect(weather.isStormy()).toBeTruthy();
   });

    it ('returns false 90%ish of the time', function(){
      spyOn(Math,'random').and.returnValue(0.8);
      expect(weather.isStormy()).toBe(false);
    });
  });
});

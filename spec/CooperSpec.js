describe("Person", function() {
  var gender;
  var age;

  beforeEach(function() {
      person = new Person({
          gender: 'Female',
          age: 38
      });
  });
  it("should have gender", function() {
        expect(person.gender).toBeDefined();
        expect(person.gender).toBe('Female');
    });

  it("should have age", function() {
      expect(person.age).toBeDefined();
      expect(person.age).toBe(38);
  });

  it("calculates Vmax for a person", function(){
    person.calculateVmax(person, 2500);
    expect(person.vmax).toEqual(44.6031746031746);
  });
  it("give Vmax message for a person", function(){
    person.calculateVmax(person, 2500);
    expect(person.message).toEqual("Excellent");
  });

  it("give age group", function(){
    var age = getAgeGroup(18);
    expect(age).toEqual(2);
  });

  it("gives distance group", function(){
    var distanceGroup = getDistanceGroup(1200, [2400,2000,1600,1300]);
    expect(distanceGroup).toEqual(4);
  });

});

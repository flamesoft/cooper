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

});

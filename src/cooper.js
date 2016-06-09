var maleTable = [[2700,2400,2200,2100],
                [2800,2500,2300,2200],
                [3000,2700,2500,2300],
                [2800,2400,2200,1600],
                [2700,2300,1900,1500],
                [2500,2100,1700,1400],
                [2400,2000,1600,1300]];
var femaleTable = [[2000,1900,1600,1500],
                  [2100,2000,1700,1600],
                  [2300,2100,1800,1700],
                  [2700,2200,1800,1500],
                  [2500,2000,1700,1400],
                  [2300,1900,1500,1200],
                  [2200,1700,1400,1100]];
var messages = ["Excellent", "Very good", "Good", "Average", "Bad", "Very bad"];
var ages = [13,15,17,20,30,40,50];

function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
};

Person.prototype.calculateVmax = function(obj, distance) {
  obj.vmax = (distance - 504.9)/44.73;
  setVmaxMessage(obj);
};

function setVmaxMessage(obj){
  var gender = obj.gender;
  var age = obj.age;
  var vmax = obj.vmax;
  obj.message = "Excellent";
}

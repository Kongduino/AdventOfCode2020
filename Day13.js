// var earliest=939;
// var buses=[7, 13, 59, 31, 19];
var earliest=1014511;
var buses=[17, 41, 643, 23, 13, 29, 433, 37, 19];

var i, j=buses.length;
buses.sort(function(a, b) {return a - b;});
console.log(buses);
var start=earliest;
var go=true;
while(go==true) {
  for (i=0;i<j;i++) {
    //console.log(" >", start, buses[i], (start%buses[i]));
    if(start%buses[i]==0) {
      console.log("  --> stop");
      console.log("Bus ID:", buses[i]);
      var wait = (start-earliest);
      console.log("Earliest ", earliest, "-", start, "start:", wait);
      console.log("Answer:", wait*buses[i]);
      go=false;
      break;
    }
  }
  start+=1;
}

console.log("\n\nPart2:");
// var intervals=[0, 1, 4, 6, 7];
buses=    [17, 41, 643, 23, 13, 29, 433, 37, 19];
intervals=[ 0, 34, 626, 21,  9, 12, 385, 20,  9];

var iterator=0;
var increment=1;
for(i=0; i<buses.length; i++) {
  var bus=buses[i];
  console.log("Looking for", iterator, "vs mods[", bus, "]", intervals[i]);
  while ((iterator % bus) != intervals[i]) {
    //while(1);
    iterator += increment;
  }
  increment *= bus;
}
console.log("Answer:", iterator);

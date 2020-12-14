var diffs=[0,0,0,0];
//var chargers=[16,10,15,5,1,11,7,19,6,12,4];
// var chargers=[28,33,18,42,31,14,46,20,48,47,24,23,49,45,19,38,39,11,1,32,25,35,8,17,7,9,4,2,34,10,3];
var chargers=[126,38,162,123,137,97,92,67,136,37,146,2,139,74,101,163,128,127,13,111,30,117,3,93,29,152,80,21,7,54,69,40,48,104,110,142,57,116,31,70,28,151,108,20,157,121,47,75,94,39,73,77,129,41,24,44,132,87,114,58,64,4,10,19,138,45,76,147,59,155,156,83,118,109,107,160,61,91,102,115,68,150,34,16,27,135,161,46,122,90,1,164,100,103,84,145,51,60];
// add charging outlet
chargers.push(0);

// sort numerically
chargers.sort(function(a, b) {return a - b;});

var i, j=chargers.length-1;
// Append the phone's joult value
chargers.push(chargers[j]+3);

j+=2;
for(i=0; i<j; i++) {
  var x=chargers[i];
  var y=chargers[i+1];
  // console.log(x,y,y-x);
  diffs[y-x]+=1;
}
console.log(diffs[1],"x",diffs[3],"=", diffs[1]*diffs[3]);

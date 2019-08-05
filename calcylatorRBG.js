
function getDelta(from, to) {
  if (from > to) {
   return from - to;
  } else {
   return to - from;
  }
}
function getMin(a,b){
  return Math.min(a, b);
}
function mean(from, to, n, i) {
  var delta = getDelta(from, to);
  var d = delta / n;
  var min = getMin(from, to);
  var point = min + d * i;
  point = Math.ceil(point);
  return point;
}
function hekToDec(number){
 return parseInt(number, 16) 
}
function decToHex(res){
  return res.toString(16);
}

var strin1 = 'aaffdd';
var strin2 = '445566';
var number = 7;

for (var i = 0; i < number; i++) {
  let num1 = strin1.match(/../g);
    var r1Dec = hekToDec(num1[0]);
    var g1Dec = hekToDec(num1[1]);
    var b1Dec = hekToDec(num1[2]);
  
  let num2 = strin2.match(/../g);
    var r2Dec = hekToDec(num2[0]);
    var g2Dec = hekToDec(num2[1]);
    var b2Dec = hekToDec(num2[2]);


  var rRasultDec = mean(r1Dec, r2Dec, number, i);
  var gResultDec = mean(g1Dec, g2Dec, number, i);
  var bResultDec = mean(b1Dec, b2Dec, number, i);
  
  var R = decToHex(rRasultDec);
  var G = decToHex(gResultDec);
  var B = decToHex(bResultDec);
  
  var rgb = `#${R}${G}${B}`;
  console.log(rgb);
}


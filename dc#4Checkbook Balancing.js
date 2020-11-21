//url: https://dev.to/thepracticaldev/daily-challenge-4-checkbook-balancing-hei
/*
Example Checkbook
1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10

Example Solution
Original_Balance: 1000.00
125 Market 125.45 Balance 874.55
126 Hardware 34.95 Balance 839.60
127 Video 7.45 Balance 832.15
128 Book 14.32 Balance 817.83
129 Gasoline 16.10 Balance 801.73
Total expense 198.27
Average expense 39.65
*/


function createCheckbox(str) {
  var strArray = str.split("\n");
  console.log(strArray);
  var formattedArray = [];
  var countAmount = 0;
  var originalBalance;
  for(let i = 0; i < strArray.length; i++){
    // formattedArray.push(strArray[i].replace(/[^a-zA-Z0-9. ]/g, ""));
    var reg = strArray[i].replace(/[^a-zA-Z0-9. ]/g, "");
    if(i < 1){
      originalBalance = parseFloat(reg);
      reg = 'Original_Balance: ' + reg;
    }else {
      var amount = parseFloat(reg.split(" ")[2]);
      countAmount += amount;
      reg = reg + ' Balance '+ (originalBalance - countAmount).toFixed(2);
    }
    formattedArray.push(reg);
  }
  console.log(formattedArray);
}


createCheckbox(`1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tires;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`);

function numberToEnglish (number) {
  var splitNum =number.split(' ');
  console.log(splitNum);
  var num=0;

  for(var key in numbersToWords){
    for(var i = 0; i < splitNum.length; i++){
      if(numbersToWords[key] === splitNum[i]){
        num+= parseInt(key);
        console.log(key);
      }
    }
  }
  return num;
}

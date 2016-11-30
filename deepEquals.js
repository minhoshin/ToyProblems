function deepEquals(a,b){
  var aArray = [];
  var bArray = [];

  function aGrabber(obj){
    for(var key in obj){
      if(obj[key] instanceof Object){
        aArray.push(key);
        aGrabber(obj[key]);
      } else {
        aArray.push(key, obj[key]);
      }
    }
  }

  function bGrabber(obj){
    for(var key in obj){
      if(obj[key] instanceof Object){
        bArray.push(key);
        bGrabber(obj[key]);
      } else {
        bArray.push(key, obj[key]);
      }
    }
  }

  function compare(arr1, arr2){
    if(arr1.length !== arr2.length){
      return false;
    } else {
      for(var i=0; i<arr1.length; i++){
        if(arr2.indexOf(arr1[i])<0){
          return false;
        }
      }
      return true;

    }
  }

  aGrabber(a);
  bGrabber(b);
  return compare(aArray, bArray);
}

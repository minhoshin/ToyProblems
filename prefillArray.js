function prefill(n, v) {
  var count = 0;
  var results = [];

  if(n===0){
    return results;
  }

  if(typeof n !== 'number'){
    throw new TypeError('n is invalid');
  }

  if(!v){
    while(count <= n){
      results.push(undefined);
      count++;
    }
  }
  else {
    while(count <= n){
      results.push(v);
      count++;
    }
  }

  return results;
}

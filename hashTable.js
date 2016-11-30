/*
Hash Table
Finish this implementation of a Hash Table. It should have the methods insert(), retrieve(), and remove(). Your hash table need not resize itself, but shall handle collisions.
*/

var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  table.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var hash = storage[index];

    if(hash === undefined){
      hash = [[key, value]];
    } else {
      for(var i = 0; i < hash.length; i++){
        if(hash[i][0] === key){
          hash[i][1] = value;
        }
      }
        hash.push([key, value]);
      }
  };

 table.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var hash = storage[index];

    if(hash){
      for(var j = 0; j < hash.length; j++){
        if(hash[j][0] === key){
          return hash[j][1];
        }
      }
    }
    return undefined;
  };

  table.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var hash = storage[index];

    if(hash === undefined){
      return null;
    } else {
      for(var k = 0; k < hash.length; k++){
        if(hash[k][0] === key){
          hash[k].splice(1, 1);
        }
      }
    }
  };

  return table;
};
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

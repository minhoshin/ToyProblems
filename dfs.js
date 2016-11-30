Tree.prototype.DFSelect = function(filter) {
  var results=[];
  // var depth=0;

  function recurse(node, depth){
    if(filter(node.value)){
      results.push(node.value);
    }

      for(var i=0; i<node.children.length; i++){
        // depth++;
        recurse(node.children[i], depth+1);
        // depth--;
    }
  }

  recurse(this, 0);
  return results;
};

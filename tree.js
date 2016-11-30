/*
Tree
Someone wrote a tree implementation, but they forgot to finish writing the definitions for addChild and contains.

Help this person finish their tree by adding in the missing code for these methods.
*/


var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children.push(node);
};


treeMaker.methods.contains = function(target){
  var found = false;

  function recurse(tree){
    if (tree.value === target) {
      found = true;
    }  else {
      if(tree.children.length !== 0){
        for(var i = 0; i < tree.children.length; i++){
          recurse(tree.children[i]);
        }
      }
    }
  }

  recurse(this);
  return found;
};

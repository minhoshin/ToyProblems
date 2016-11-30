/*
Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class

// Valid Child
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);

grandma.getAncestorPath(me); // => [grandma, mom, me]
mom.getAncestorPath(me)  // => [mom, me]
me.getAncestorPath(me) // => [me]
grandma.getClosestCommonAncestor(me, uncle); // => grandma

// Invalid Child
grandma.getAncestorPath(H R Giger) // => null
*/


var Tree = function(){
  this.children = [];
};

/**
* add an immediate child
*/
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(person1, person2){
  var common = null;

  if(this === person1 && this === person2){
    return this;
  }

  var recurse = function(node) {
    if(node.isDescendant(person1) && node.isDescendant(person2)) {
      common = node;
      if(node.children.length !== 0){
        for(var i = 0; i < node.children.length; i++){
          recurse(node.children[i]);
        }
      }
    }
  };

  recurse(this);
  return common;
};

Tree.prototype.getAncestorPath = function(person){
  var ancestors = [];

  if(!this.isDescendant(person)){
    return null;
  }

  var recurse = function(node){
    if(node.isDescendant(person) || node === person){
      ancestors.push(node);
      if(node.children.length !== 0){
        for(var i = 0; i < node.children.length; i++){
          recurse(node.children[i]);
        }
      }
    }
  };
  recurse(this);
  return ancestors;
};

/**
* check to see if the provided tree is already a child of this
* tree __or any of its sub trees__
*/
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
* remove an immediate child
*/
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

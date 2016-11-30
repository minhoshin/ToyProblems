var linkedList = function(){
  this.head = null;
  this.tail = null;
};

var newNode = function(val){
    var node = {};
    node.val = null;
    node.next = null;
    return node;
};

function nNode (node, nth){
  var count = 0;

  if(count === nth){
    return node;
  }
  count++;
  nNode(node.next);
}

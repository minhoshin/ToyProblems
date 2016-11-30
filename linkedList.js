/*
Linked List
Implement a linked-list
*/


var LinkedList = function (initialValue) {
     // Write your code here
   if(initialValue){
     this.head = {
       value: initialValue,
       next: null
     };
   } else {
     this.head = null;
   }
   this.tail = this.head;
 };

 LinkedList.prototype.makeNode = function(value){
   var node = {};
   node.value = value;
   node.next = null;
   return node;
 };

LinkedList.prototype.addToTail= function(val){
// create new node
  var newTail = this.makeNode(value);
  if(!this.head){
    this.head = newTail;
  } else {
    this.head.next = newTail;
  }
 this.tail = newTail;
};


LinkedList.prototype.removeHead = function(){
 if(this.head === this.tail){
   this.head = null;
   this.tail = null;
 } else {
   this.head = this.head.next;
 }
};

LinkedList.prototype.contains = function(target){
  var node = this.head;
  while(node){
    if(node.value === target){
      return true;
    } else {
      node = node.next;
    }
  }
  return false;
};

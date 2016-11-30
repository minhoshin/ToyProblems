/*Write a stack. Once you’re done, implement a queue using two stacks. Do not create a storage array for your queue.*/


var Stack = function() {
  var storage = [];

  this.push = function(item){
    storage.push(item);
  };

  this.pop = function(){
    return storage.pop();
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();
  var val;

  this.enqueue = function(item){
    inbox.push(item);
  };

  this.dequeue = function(){
    while(inbox.size() !== 0){
        outbox.push(inbox.pop());
    }

    val = outbox.pop();

    while(outbox.size() !== 0){
      inbox.push(outbox.pop());
    }

    return val;
  };

  this.size = function(){
    return inbox.size() + outbox.size();
  };
};

var Node = function(value) {
  var node = {
    value: value,
    next: null
  };
  return node;
};

var linkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addNode = function(val) {
    var newNode = Node(val);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    }

    else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeNode = function() {
    if(list.head === null){
      return null;
    } else {
      var val = list.head.value;
      var temp = list.head;
      list.head = list.head.next;
      delete temp;
      return val;
    }
  };

  list.contains = function(target) {

    function recurse(node){
      if(node.value === target) {
        return true;
      } else {
        recurse(node.next);
      }
      return false;
    }

    recurse(list.head);
  };

  return list;
};

-insert
-retrieve
-remove

var HashTable = function() {
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  var getIndexBelowMaxForKey = function(str, max){
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % max;
  };

  table.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if(!bucket){
      bucket = [[key, value]];
    }

    for(var i = 0; i < bucket.length; i++){
      var bucketKey = bucket[i][0];
      var bucketVal = bucket[i][1];
      if(bucketKey === key){
        bucketVal = value;
        return;
      }
      bucket.push([key, value]);
    }
  };

  table.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if(!bucket) {
      return null;
    }

    for(var j = 0; j < bucket.length; j++) {
      var bucketKey = bucket[j][0];
      var bucketVal = bucket[j][1];

      if(bucketKey === key){
        return undefined;
      }
    }
    return null;
  };

  table.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if(!bucket){
      return null;
    }

    for(var k = 0; k < bucket.length; k++) {
      var bucketKey = bucket[k][0];
      var bucketVal = bucket[k][1];

      if(bucketKey === key) {
        bucketVal = null;
      }
    }
    return null;
  };
  return table;
};


var Node = function(value){
  var node = {
    value: value,
    next: null
  };
};

var linkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addTail = function(value){
    var newNode = new Node(value);
    if(!list.head){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    if(!list.head){
      return null;
    } else {
      var val = list.head.value;
      var temp = list.head;
      list.head = list.head.next;
      delete temp;
      return val;
    }

  };

  list.contains = function(target){
    var found = false;
    var recurse = function(node){
      if(node.value === target){
        found = true;
      } else {
        recurse(node.next);
      }
    };

    recurse(list.head);
    return found;
  };

  return list;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

var linkedList = function(){
  this.head = null;
  this.tail = null;
};

linkedList.prototype.addTail = function(value){
  var newNode = new Node(value);
  if(!this.head){
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

linkedList.prototype.removeHead = function(){
  if(!this.head){
    return null;
  } else {
    var val = this.head.value;
    var temp = this.head;
    this.head = this.head.next;
    delete temp;
    return val;
  }
};

linkedList.prototype.contains = function(target){
  var found = false;

  var recurse = function(node){
    if(node.value === target){
      found = true;
      return;
    } else {
      if(node.next){
        recurse(node.next);
      }
    }
  };

  recurse(this.head);
  return found;
};


var Node = function(value){
  this.value = value;
  this.next = null;
};

var linkedList = function(){
  this.head = null;
  this.tail = null;
};

linkedList.prototype.addTail = function(value){
  var newNode = new Node(value);
  if(!this.head){
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

linkedList.prototype.removeHead = function(){
  if(!this.head){
    return null;
  } else {
    var val = this.head.value;
    var temp = this.head;
    this.head = this.head.next;
    delete temp;
    return val;
  }
};

linkedList.prototype.contains = function(target){
  var found = false;

  var recurse = function(node){
    if(node.value === target){
      found = true;
      return;
    } else {
      while(node.next){
        recurse(node.next);
      }
    }
  };
  recurse(this.head);
  return found;
};

var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

var linkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addNode = function(value) {
    var newNode = new Node(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if(list.head === null){
      return null;
    } else {
      var val = list.head.value;
      var temp = list.head;
      list.head = list.head.next;
      delete temp;
      return val;
    }
  };

  list.contains = function(target) {
    if(list.head.value === target){
      return true;
    } else {

    }
  };

  return list;
};

var Node = function(val){
  this.value = val;
  this.next = null;
};

var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addNode = function(val){
  var node = new Node(val);

  if(this.head === null){
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function(){
  if(this.head === null){
    return null;
  } else {
    var val = this.head.value;
    var temp = this.head;
    this.head = this.head.next;
    delete temp;
    return val;
  }
};

LinkedList.prototype.contains = function(val){
  var found = false;
  var recurse = function(node){
    if(node.value === val){
      found = true;
      return;
    } else {
      if(node.next !== null){
        recurse(node.next);
      }
    }
  };
  recurse(this.head);
  return found;
};

var Stack = function(){
  this.stackSize = 0;
  this.storage = [];
};

Stack.prototype.size = function(){
  return this.stackSize;
};

Stack.prototype.push = function(val){
  this.stackSize++;
  this.storage.push(val);
};

Stack.prototype.pop = function(){
  if(this.stackSize > 0){
    this.stackSize--;
    return this.storage.pop();
  } else {
    return null;
  }
};

var Queue = function(){
  this.storage = [];
};

Queue.prototype.size = function(){
  return this.storage.length;
};

Queue.prototype.enqueue = function(val){
  this.storage.push(val);
};

Queue.prototype.dequeue = function(){
  if(this.storage.length > 0){
    return this.storage.shift();
  } else {
    return null;
  }
};

var BinarySearchTree = function(val){
  this.value = val;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val){
  if(val < this.value){
    if(this.left === null){
      this.left = new BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value){
    if(this.right === null){
      this.right = new BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};

BinarySearchTree.prototype.contains = function(target){
  if(this.value === target){
    return true;
  }
  else if(target < this.value){
    if(this.left === null){
      return false;
    } else {
      return this.left.contains(target);
    }
  }
  else {
    if(this.right === null){
      return false;
    } else {
      return this.right.contains(target);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);

  if(this.left !== null){
    this.left.depthFirstLog(callback);
  }

  if(this.right !== null) {
    this.right.depthFirstlog(callback);
  }
};

var Stack = function(){
  this.storage = [];
  this.stackSize = 0;
};

Stack.prototype.push = function(val){
  this.stackSize++;
  this.storage.push(val);
};

Stack.prototype.pop = function(){
  if(this.storage.length > 0){
    this.stackSize--;
    this.storage.pop();
  } else {
    return null;
  }
};

Stack.prototype.size = function(){
  return this.stackSize;
};

var Queue= function(){
  this.storage = [];
};

Queue.prototype.size = function(){
  return this.storage.length;
};

Queue.prototype.enqueue = function(val){
  this.storage.push(val);
};

Queue.prototype.dequeue = function(){
  if(this.storage.length > 0){
    return this.storage.shift();
  } else {
    return null;
  }
};

var BinarySearchTree = function(val){
  this.value = val;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val){
  if(val < this.value){
    if(this.left === null){
      this.left = new BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }
  else if(val > this.value){
    if(this.right === null){
      this.right = new BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};

BinarySearchTree.prototype.contains = function(target){
  if(this.value === target){
    return true;
  }
  else if(target < this.value){
    if(this.left === null) {
      return false;
    } else {
      return this.left.contains(target);
    }
  }

  else if(target > this.value){
    if(this.right === null){
      return false;
    } else {
      return this.right.contains(target);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);
  if(this.left !== null){
    this.left.depthFirstLog(callback);
  }

  if(this.right !== null){
    this.right.depthFirstLog(callback);
  }
};

var BinarySearchTree = function(val){
  this.value = val;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val){
  if(val < this.value){
    if(this.left === null){
      this.left = new BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }
  else if(val > this.value){
    if(this.right === null){
      this.right = new BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }

};

BinarySearchTree.prototype.contains = function(target){
  if(this.value === target){
    return true;
  }

  else if(target < this.value){
    if(this.left === null){
      return false;
    } else {
      return this.left.contains(target);
    }
  }

  else if(target > this.value){
    if(this.right === null){
      return false;
    } else {
      return this.right.contains(target);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);

  if(this.left !== null){
    this.left.depthFirstLog(callback);
  }

  if(this.right !== null){
    this.right.depthFirstLog(callback);
  }
};

var BinarySearchTree = function(val){
  this.value = val;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val){
  if(val < this.value){
    if(this.left === null){
      this.left = new BinarySearchTree(val);
    }
    else {
      this.left.insert(val);
    }
  }

  if(val > this.value){
    if(this.right === null){
      this.right = val;
    }
    else {
      this.right.insert(val);
    }
  }
};

BinarySearchTree.prototype.contains = function(target){

  if(this.value === target){
    return true;
  }

  else if(target < this.value){
    if(this.left === null){
      return null;
    } else {
      this.left.contains(target);
    }
  }

  else if(target > this.value){
    if(this.right === null){
      return null;
    } else {
      this.right.contains(target);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);

  if(this.left !== null){
    this.left.depthFirstLog(callback);
  }

  if(this.right !== null){
    this.right.depthFirstLog(callback);
  }
};

var Node = function(val){
  this.val = val;
  this.next = null;
};

var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addNode = function(val){

};

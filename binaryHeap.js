/*Binary Heap
A heap is a special kind of tree in which a parent node is ordered only in respect to its immediate children. Unlike the binary search tree you may have implemented, where the entire tree is ordered, in a heap the only order guaranteed is between a node and its parent.

In a binary heap each node should have only zero, one, or two children. Each node must have 2 children before the next oldest node can have any children. Therefore the 0th node will be the parent of the 1st and 2nd nodes, the 1st node will be the parent of the 3rd and 4th nodes, and the 2nd node will be the parent of the 5th and 6th nodes. In a specific kind of binary heap, the binary min heap, every node is less than its immediate children:
……..0…….
…1………2..
.3…4…..5…6
7……………

There is only one place at any given time in a binary heap where a node can be added or removed. In the example above, the next node will be inserted as the second child of 3. If we were to remove a node instead, we would remove the 7. This mimics the behavior of a stack and allows us to manage the heap in a very memory efficient way, using a list or array. For example, the heap pictured above can be described as:

[0, 1, 2, 3, 4, 5, 6, 7]

where we always add to or remove from the end of the array.

A well known fact, utilized with binary heaps stored in arrays, is that we can calculate the index of a node’s parent or children using math:
parentIndex = Math.floor( (index - 1) / 2 )
childrenIndices = [index * 2 + 1, index * 2 + 2]

When adding a new node to a binary min heap, it could be that we violate the property of the heap whereby every node is of lower value than its children. Thus whenever we insert into a binary min heap, we must compare the inserted node to its parent, and swap their positions if it is less than its parent. After a swap it must compare itself to its new parent, continuing until it is no longer less than its parent.

Something similar happens when we want to remove the root node. Because we can only remove from the end of the array we swap the position of the last node and the root node and then remove the now-last node from the heap. The new root node now must be compared to its children and if it is not less than both of them, be swapped with whichever of the two of them is the smallest. It is then compared with its new children and this swapping continues until it is less than both its children.

You can see a great visualization of a binary min heap in action here, play around with it until you can easily guess how the heap will behave with both insertion and removal: https://www.cs.usfca.edu/~galles/visualization/Heap.html

Your Code Should Pass:
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
var should = chai.should()

describe('BinaryHeap', function () {

  it('should exist', function () {
    should.exist(BinaryHeap);
  });

  it('should be a Function', function () {
    BinaryHeap.should.be.a.Function;
  });

});

describe('BinaryHeap.prototype.insert', function () {

  it('should exist', function () {
    should.exist(BinaryHeap.prototype.insert);
    BinaryHeap.prototype.insert.should.be.a.Function;
  });

  it('should add a value to an empty BinaryHeap instance', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);

    binaryHeap._heap.length.should.equal(1);
    binaryHeap._heap[0].should.equal(4);
  });

  it('should add multiple values to a Binary Heap when called multiple times', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(8);
    binaryHeap.insert(12);

    binaryHeap._heap.length.should.equal(3);
    binaryHeap._heap[0].should.equal(4);
    binaryHeap._heap[1].should.equal(8);
    binaryHeap._heap[2].should.equal(12);
  });

  it('should maintain sorting based on BinaryHeap._compare between a parent node and its children', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(9);
    binaryHeap.insert(8);
    binaryHeap.insert(1);

    var compare = binaryHeap._compare;
    var heap = binaryHeap._heap;

    // heap[0] is the parent of heap[1] and heap[2]
    // heap[1] is the parent of heap[3] and heap[4]
    compare(heap[0], heap[1]).should.be.true;
    compare(heap[0], heap[2]).should.be.true;
    compare(heap[1], heap[3]).should.be.true;
    compare(heap[1], heap[4]).should.be.true;
  });

});

describe('BinaryHeap.prototype.removeRoot', function () {

  it('should exist', function () {
    should.exist(BinaryHeap.prototype.insert);
    BinaryHeap.prototype.removeRoot.should.be.a.Function;
  });

  it('should return `undefined` on an empty heap', function () {
    var binaryHeap = new BinaryHeap();
    var root = binaryHeap.removeRoot();

    should.equal(root, undefined);
  });

  it('should remove a single element from BinaryHeap._heap', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(6);
    binaryHeap.insert(4);
    binaryHeap.insert(9);
    binaryHeap.removeRoot();

    binaryHeap._heap.length.should.equal(2);

  });

  it('should return the root node in BinaryHeap._heap', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(8);
    var actualRoot = binaryHeap._heap[0];
    var removedRoot = binaryHeap.removeRoot();

    should.equal(actualRoot, removedRoot);

    binaryHeap.insert(6);
    binaryHeap.insert(4);
    binaryHeap.insert(9);

    actualRoot = binaryHeap._heap[0];
    removedRoot = binaryHeap.removeRoot();

    should.equal(actualRoot, removedRoot);
  });

  it('should maintain sorting between parents and children after removing nodes', function () {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(9);
    binaryHeap.insert(8);
    binaryHeap.insert(1);
    binaryHeap.insert(0);
    binaryHeap.removeRoot();

    var compare = binaryHeap._compare;
    var heap = binaryHeap._heap;

    // heap[0] is the parent of heap[1] and heap[2]
    // heap[1] is the parent of heap[3] and heap[4]
    compare(heap[0], heap[1]).should.be.true;
    compare(heap[0], heap[2]).should.be.true;
    compare(heap[1], heap[3]).should.be.true;
    compare(heap[1], heap[4]).should.be.true;
  });

});
*/

function BinaryHeap () {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) { return i < j };
}
// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}
BinaryHeap.prototype.insert = function (value) {
  // TODO: Your code here
}
BinaryHeap.prototype.removeRoot = function () {
  // TODO: Your code here
}
